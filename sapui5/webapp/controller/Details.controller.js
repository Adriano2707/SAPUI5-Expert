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

        return Controller.extend("logaligroup.sapui5.controller.Details", {

            _onObjectMatch: function(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model: "northwind"
                });
            },

            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Details").attachPatternMatched(this._onObjectMatch, this);

            }
            
        });

    });