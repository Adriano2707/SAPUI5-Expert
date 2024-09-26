//@ts-nocheck
sap.ui.define([
    'sap/ui/core/Control',
    'sap/m/RatingIndicator',
    'sap/m/Label',
    'sap/m/Button'

],
    /**
     * 
     * @param {typeof sap.ui.Control} Control 
     * @param {typeof sap.m.RatingIndicator} RatingIndicator
     * @param {typeof sap.m.Label} Label
     * @param {typeof sap.m.Button} Button
     */

    function (Control, RatingIndicator, Label, Button) {
        'use strict';

        return Control.extend("logaligroup.sapui5.control.ProductRating", {

            metadata: {

                properties: {
                    value: {
                        type: "float",
                        defaultValue: 0
                    }
                },
                aggregation: {
                    _rating: {
                        type: "sap.m.RatingIndicator",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _label: {
                        type: "sap.m.Label",
                        multiple: false,
                        visibility: "hidden"
                    },
                    _button: {
                        type: "sap.m.Button",
                        multiple: false,
                        visibility: "hidden"
                    }
                },
                events: {
                    change: {
                        parameters: {
                            value: { type: "int" }
                        }
                    }
                }
            },

            init: function () {

                this.setAggregation("_rating", new RatingIndicator({
                    value: this.getValue(),
                    iconsize: "2rem",
                    visualMode: "Half",
                    liveChange: this._onRate.bind(this)

                }));

                this.setAggregation("_label", new Label({
                    text: "{i18n>productRatingLabelInitial}"
                }).addStyleClass("sapUiSmallMargin"));

                this.setAggregation("_button", new Button({
                    text: "{i18>productRatingButton}",
                    press: this._onSumbit.bind(this)

                }).addStyleClass("sapUiTinyMarginTopBottom"));
            },

            _onRate: function (oEvent) {
                const oResourceBundle = this.getModel("i18n").getResourceModel();
                const fValue = oEvent.getParameter("value");

                this.serProperty("value", fValue, true);
                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingIndicator", [fValue, oEvent.getSource().getMaxValue()]));
                this.getAggregation("_label").setDesign("Bold");
            },

            _onSumbit: function (oEvent) {
                const oResoourcebundle = this.getModel("i18n").getResourceBundle();

                this.getAggregation("_rating").setEnable("false");
                this.getAggregation("_label").setText(oResourceBundle.getText.getText("productRatingLabelFinal"));
                this.getAggregation("_button").setEnable("false");
                this.fireEvent("change", {
                    value: this.getValue()
                });
            },

            reset: function () {
                const oResoourcebundle = this.getModel("i18n").getResourceBundle();
                this.setValue(0);
                this.getAggregation("_rating").setEnable("true");
                this.getAggregation("_label").setText(oResourceBundle.getText.getText("productRatingLabelInitial"));
                this.getAggregation("_label").setDesign("Standard");
                this.getAggregation("_button").setEnable("true");
            },

            setValue: function (fValue) {
                this.setProperty("value", fValue, true);
                this.getAggregation("_rating").setValue(fValue);
            },

            renderer: function (oRm, oControl) {
                oRm.openStart("div", oControl);
                oRm.class("productRating");
                oRm.openEnd();
                oRm.renderControl(oControl.getAggregation("_rating"));
                oRm.renderControl(oControl.getAggregation("_label"));
                oRm.renderControl(oControl.getAggregation("_button"));
                oRm.close("div");
            }
        });
    }); 