define([
	"dojo/_base/declare", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dojo/data/ItemFileReadStore",
    "dijit/tree/ForestStoreModel", "dijit/Tree"], 
	function(declare, BorderContainer, ContentPane, ItemFileReadStore, ForestStoreModel, Tree){
  	return declare("Startup.start", null, {
	    mainPanel: null,
	    constructor: function(args){
	    	this.initDashboard();
	    },
	    createContentPane: function(args) {
	    	var content = new ContentPane(args);
        	this.mainPanel.addChild(content);
	    },
	    initDashboard: function() {
	    	console.log("initDashboard");

	    	// create the BorderContainer and attach it to our mainPanel div
			this.mainPanel = new BorderContainer({
			    design: "headline"
			}, "mainPanel");

			//create Content Pane kiri
			this.createContentPane({
			    region: "left",
			    style: "width: 14em;",
        		content: this.initMenu()
			});

			//create Content Pane kanan
			this.createContentPane({
			    region: "center",
        		content: "ini KANAN"
			});

        	//create Content Pane Bottom
			this.createContentPane({
			    region: "bottom",
        		content: "ini Bawah"
			});

        	//create Content Pane Top
			this.createContentPane({
			    region: "top",
        		content: "App use: DOJO 1.12.1 + LARAVEL 5.4 + MYSQL"
			});

        	// start up and do layout
			this.mainPanel.startup();
	    },
	    initMenu: function() {
	    	//buat layout Tree menu
	    	var storeMenu = new ItemFileReadStore({
        		data: {
        			identifier: 'id',
        			label: "name",
				    items: [{
					    "id": "mHRD",
					    "type": "root",
					    "name": "Menu HRD",
					    "children": [{
				            "id": "menu_karyawan",
					    	"type": "children",
				            "name": "Menu Karyawan"
				        }]
					}]
        		}
        	});


	    	 // Create the model
		    var myModel = new ForestStoreModel({
		        store: storeMenu,
		        query: {"id": "*"},
		        rootId: "id",
		        rootLabel: "name",
		        childrenAttrs: ["children"]
		    });

		    // Create the Tree.
		    var tree = new Tree({
		        showRoot: false,
		        model: myModel,
		        onClick: this.treeOnSelected
		    });

		    return tree;
	    },
	    treeOnSelected: function(e) {
	    	if (e.type == "children") {
	    		switch(e.id) {
	    			case "menu_karyawan":
	    	// 			require(["dijit/registry", "app/controller/KaryawanController"], function(reg, KaryawanController){
	    	// 				var main = reg.byId("panelKaryawan");
	    	// 				if (main == undefined) {
						// 		main = new KaryawanController();
	    	// 				}
						// });
	    			break;
	    		}
	    	}
	    }
  	});
});