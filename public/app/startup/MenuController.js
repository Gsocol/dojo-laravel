define([], function() {
    return {
        selected: function(e) {
            if (e.type == "children") {
                switch(e.id[0]) {
                    case "menu_karyawan":
                        require(["app/controller/karyawan/KaryawanController"], function(KaryawanController){
                            KaryawanController.show();
                        });
                    break;
                }
            }
        }
    }
});	