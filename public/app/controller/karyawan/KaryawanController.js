define([
	"dojo/_base/declare", "dojo/_base/lang", "dijit/registry",
	// "app/util/MappingController",
	"dijit/layout/ContentPane"
	], 
	function(
		declare, lang, reg,
		// MappingController,
		ContentPane
	) {
		var FORM_ID = "formKaryawan";
		var FORM_TITLE = "Form Karyawan";
		var FORM_HREF = "app/templates/karyawan/FormKaryawan.html";

		var Inialisasi = declare(null, {
			lala: function() {
				console.log("haloooo lala");
			}
		});

		var Event = declare(null, {
		});

		var Grid = declare(null, {
		});

		var Formatter = declare(null, {
		});

		var Startup = declare(null, {

		});

		var CreateForm = declare([Inialisasi, Event, Grid, Formatter], {
			constructor: function() {
				lang.mixin(window, this);
				this.inherited(arguments);
			},
			createPanel: function() {
				return new ContentPane({
					id: FORM_ID,
					title: FORM_TITLE,
					href: FORM_HREF,
					onDownloadEnd: function() {
						console.log(FORM_TITLE, "Loaded...");
					}
				});
			}
		});

		//method show form
		return {
			show: function() {
				var mainPanel = reg.byId("mainPanel");
				var FORM = reg.byId(FORM_ID);
				if (FORM == undefined || FORM == null) {
					FORM = new CreateForm().createPanel();
				}
				if (mainPanel.getIndexOfChild(FORM) == -1) {
					mainPanel.addChild(FORM);
				}

				mainPanel.selectChild(FORM);
			}
		}
});