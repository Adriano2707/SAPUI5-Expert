//@ts-nocheck
/* global QUnit*/
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "user strict";

    sap.ui.require([
        "logaligroup/sapui5/test/unit/AllTests"
    ], function () {
        QUnit.start();
    })
});