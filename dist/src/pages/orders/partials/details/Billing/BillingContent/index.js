"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Reply_1 = __importDefault(require("@material-ui/icons/Reply"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("./../../Tables/styles");
var constants_1 = require("./../../Tables/constants");
var mock_1 = require("./../../Tables/mock");
var styles_2 = require("../../../../../../components/SearchModal/styles");
var Styles = __importStar(require("../../styles"));
exports.BillingContent = function () {
    return (React.createElement(Styles.BillingContentWrapper, null,
        React.createElement(Styles.AddressCard, null,
            React.createElement(Styles.AddressHeader, null,
                React.createElement(Styles.AddressTitle, null, "Factuuradres"),
                React.createElement(Styles.AddresAction, null, "Verberg")),
            React.createElement(Grid_1.default, { container: true },
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Styles.AddressContent, null,
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factureren aan"),
                            React.createElement(Styles.FormTexts, { color: "blue" }, "Bedrijf XYZ B.V.")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factuurnaam"),
                            React.createElement(Styles.FormTexts, null, "Default 001")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factuurnaam 2"),
                            React.createElement(Styles.FormTexts, null, "Default 002")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factuur contactpersoon"),
                            React.createElement(Styles.FormTexts, { color: "blue" }, "349052840")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Contactpersoon naam"),
                            React.createElement(Styles.FormTexts, { color: "blue" }, "Mevr. Janssen")))),
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Styles.AddressContent, null,
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factuuradres"),
                            React.createElement(Styles.FormTexts, null, "Stephensonweg 2")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factuur postcode"),
                            React.createElement(Styles.FormTexts, null, "4207 HB")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Factuur plaats"),
                            React.createElement(Styles.FormTexts, null, "Gorinchem")),
                        React.createElement(Styles.ListWrapper, null,
                            React.createElement(Styles.FormLabel, null, "Taalcode"),
                            React.createElement(Styles.FormTexts, null, "NL")))))),
        React.createElement(Styles.BillingTable, null,
            React.createElement("div", null,
                React.createElement(Styles.ActionCard, null,
                    React.createElement(styles_2.TableText, null, "Kostenregels"),
                    React.createElement(Styles.PushRight, null,
                        React.createElement(components_1.ActionMenu, { alwaysVisible: true, alignMenu: "left", items: [
                                {
                                    title: "Document delen",
                                    icon: React.createElement(Reply_1.default, null),
                                    onClick: function () { return console.log("clicked View"); }
                                },
                                {
                                    title: "Document verwijderen",
                                    icon: React.createElement(Reply_1.default, null),
                                    onClick: function () { return console.log("clicked Edit"); }
                                },
                                {
                                    title: "downloaden",
                                    icon: React.createElement(Reply_1.default, null),
                                    onClick: function () { return console.log("clicked Delete"); }
                                }
                            ] }))),
                React.createElement(components_1.SortableTable, { isNotConfigurable: true, isSelectable: true, columns: constants_1.TABLE_COLUMNS, dataSource: mock_1.TABLE_DATA }),
                React.createElement(styles_1.TableButtonWrapper, null,
                    React.createElement("div", { className: "drop" },
                        React.createElement(styles_1.Button, null,
                            "Met geselecteerd",
                            React.createElement(styles_1.ArrowUp, null)),
                        React.createElement(styles_1.TableDropdown, { options: [
                                { value: "Maak een keuze", label: "Maak een keuze" },
                                { value: "Maak een keuze", label: "Maak een keuze" }
                            ], value: { value: "Maak een keuze", label: "Maak een keuze" } })))),
            React.createElement("div", null,
                React.createElement(Styles.ActionCard, null,
                    React.createElement(styles_2.TableText, null, "Factuurregels"),
                    React.createElement(Styles.PushRight, null,
                        React.createElement(components_1.ActionMenu, { alwaysVisible: true, alignMenu: "left", items: [
                                {
                                    title: "Document delen",
                                    icon: React.createElement(Reply_1.default, null),
                                    onClick: function () { return console.log("clicked View"); }
                                },
                                {
                                    title: "Document verwijderen",
                                    icon: React.createElement(Reply_1.default, null),
                                    onClick: function () { return console.log("clicked Edit"); }
                                },
                                {
                                    title: "downloaden",
                                    icon: React.createElement(Reply_1.default, null),
                                    onClick: function () { return console.log("clicked Delete"); }
                                }
                            ] }))),
                React.createElement(components_1.SortableTable, { isNotConfigurable: true, isSelectable: true, columns: constants_1.TABLE_COLUMNS, dataSource: mock_1.TABLE_DATA }),
                React.createElement(styles_1.TableButtonWrapper, null,
                    React.createElement("div", { className: "drop" },
                        React.createElement(styles_1.Button, null,
                            "Met geselecteerd",
                            React.createElement(styles_1.ArrowUp, null)),
                        React.createElement(styles_1.TableDropdown, { options: [
                                { value: "Maak een keuze", label: "Maak een keuze" },
                                { value: "Maak een keuze 1", label: "Maak een keuze 1" }
                            ], value: { value: "Maak een keuze", label: "Maak een keuze" } })))))));
};
//# sourceMappingURL=index.js.map