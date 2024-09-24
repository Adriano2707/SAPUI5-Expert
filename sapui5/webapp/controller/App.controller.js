//@ts-notcheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller}  Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.sapui5.controller.App", {

            onInit: function () {

            },

            onpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        });

    });


