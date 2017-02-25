define([], function() {
	return {
        identifier: 'id',
        label: "name",
        items: [{
            "id": "mHRD",
            "type": "root",
            "name": "Menu HRD",
            "children": [
                {"id": "menu_karyawan", "type": "children", "name": "Menu Karyawan"},
                {"id": "menu_direksi", "type": "children", "name": "Menu Direksi"}
            ]
        }]
    }
});	