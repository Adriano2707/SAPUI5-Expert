//@ts-nocheck
sap.ui.define([
    "../localService/mockServer",
    "sap/m/MessageBox"
],
/**
 * * @param{ typeof sap.m.MessageBox }MessageBox
 */

function (mockServer, MessageBox) {
        'use strict';

        var aMokservers = [];

        //initialize the mock server 
        aMockservers.push(mockServer.init());


        Promise.all(aMokservers).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            sap.ui.require(["sap/ui/core/ComponentSupport"]);

        });
    });