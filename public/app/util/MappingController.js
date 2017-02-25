define([
	"dojo/_base/declare", "dojo/_base/lang", "dijit/registry",
	"dijit/layout/ContentPane"], 
	function(
		declare, lang, reg,
		ContentPane) {

		//create FORM
		var CreateForm = declare(null, {
			constructor: function(args) {
				lang.mixin(window, args.call());
				this.inherited(arguments);
			},
			createPanel: function(obj) {
				var obj = lang.mixin(obj, {
					onDownloadEnd: function() {
						if (typeof obj.success == "function") {obj.success()}
					},
					onDownloadError: function(error) {
						console.log("error >>", error);
						if (typeof obj.error == "function") {obj.error()}
					}
				});
				return new ContentPane(obj);
				
			}
		});

		//method show form
		return {
			show: function(obj, args) {
				var mainPanel = reg.byId("mainPanel");
				var FORM = reg.byId(obj.id);
				if (FORM == undefined || FORM == null) {
					FORM = new CreateForm(args).createPanel(obj);
				}
				if (mainPanel.getIndexOfChild(FORM) == -1) {
					mainPanel.addChild(FORM);
				}

				mainPanel.selectChild(FORM);
			}
		}
	});