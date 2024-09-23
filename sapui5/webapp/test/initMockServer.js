//@ts-nocheck
sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
],
/**
 * * @param{ typeof sap.m.MessageBox }MessageBox
 */

function (mockServer, MessageBox) {
        'use strict';

        var aMokservers = [];

        //initialize the mock server 
        aMokservers.push(mockServer.init());


        Promise.all(aMokservers).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            sap.ui.require(["sap/ui/core/ComponentSupport"]);

        });
    });