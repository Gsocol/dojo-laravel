define([
	"dojo/_base/declare",
	"dojo/data/ItemFileReadStore", 
	"dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/layout/TabContainer",
    "dijit/tree/ForestStoreModel", "dijit/Tree",
    "app/startup/MenuController", "app/startup/MenuAppList"

    ], 
	function(
		declare,
		ItemFileReadStore, 
		BorderContainer, ContentPane, TabContainer, 
		ForestStoreModel, Tree,
		MenuController, MenuAppList){
  	return declare("Startup.start", null, {
	    mainPanel: null,
	    tabPanel: null,
		treeOnSelected: MenuController.selected,
	    constructor: function(args){
	    	this.initDashboard();
	    },
	    createContentPane: function(args) {
	    	var content = new ContentPane(args);
        	this.mainPanel.addChild(content);
	    },
	    createTabPane: function(args) {
			this.tabPanel = new BorderContainer({title: 'Dashboard', gutters: true});
	    	var content = new TabContainer(args);
			content.addChild(this.tabPanel);
			this.mainPanel.addChild(content);
	    },
	    createTabContentPane: function(args) {
	    	var content = new ContentPane(args);
        	this.tabPanel.addChild(content);
	    },
	    initDashboard: function() {
	    	console.log("initDashboard");

	    	// create the BorderContainer and attach it to our mainPanel div
			this.mainPanel = new BorderContainer({gutters: true}, "rootPanel");

			//Create Tab Container (Main Panel)
			this.createTabPane({
				id: "mainPanel",
			    region: "center", 
			    style: "height: 100%; width: 100%;"
			});

			//create Content Pane Bottom
			this.createContentPane({
			    region: "bottom",
        		content: "Informasi Toolbar"
			});

			
			//create Content Pane kiri
			this.createTabContentPane({
				title: 'Dashboard',
			    region: "left",
			    style: "width: 20%;",
        		content: this.initMenu()
			});

			//create TabContainer
			this.createTabContentPane({
			    region: "center",
			    style: "width: 80%;",
			    content: '<span style="font-size: 22px;">App use: DOJO 1.12.1 + LARAVEL 5.4 + MYSQL + Grunt.js </span>'
			});

        	// start up and do layout
			this.mainPanel.startup();
	    },
	    initMenu: function() {
	    	//buat layout Tree menu
	    	var storeMenu = new ItemFileReadStore({
        		data: MenuAppList
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
		        autoExpand: true,
		        model: myModel,
		        onClick: this.treeOnSelected
		    });

		    return tree;
	    }
  	});
});