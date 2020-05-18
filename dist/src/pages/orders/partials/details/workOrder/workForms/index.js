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
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Reply_1 = __importDefault(require("@material-ui/icons/Reply"));
var components_1 = require("dakota-portal/dist/components");
var components_2 = require("../../../../../../components");
var styles_1 = require("../../../../../../components/SearchModal/styles");
var styles_2 = require("./../../Tables/styles");
var constants_1 = require("./../../Tables/constants");
var mock_1 = require("./../../Tables/mock");
var Styles = __importStar(require("../../styles"));
var urls_1 = __importDefault(require("../../../../../../helpers/urls"));
exports.WorkForms = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(Styles.FormCard, null,
            React.createElement(Grid_1.default, { container: true },
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Styles.FormWrapper, null,
                        React.createElement(Styles.FormLabel, null, "Werkorder nummer"),
                        React.createElement(Styles.FormInput, { placeholder: "WO184038" })),
                    React.createElement(Styles.FormWrapperSelect, null,
                        React.createElement(Styles.FormLabel, null, "Werknemer"),
                        React.createElement(Styles.FormSelect, { classNamePrefix: "type-select", options: [{ value: "Janssen", label: "Janssen" }], value: { value: "Janssen", label: "Janssen" } })),
                    React.createElement(Styles.FormWrapperSelect, null,
                        React.createElement(Styles.FormLabel, null, "Datum"),
                        React.createElement(Styles.FormDate, { onChange: function () { return console.log("click"); }, InputProps: {
                                className: "so-datepicker",
                                disableUnderline: true
                            }, keyboardIcon: React.createElement(Styles.CalendarIcon, { fontSize: "small" }), format: "DD-MM-YYYY" })),
                    React.createElement(Styles.FormWrapperSelect, null,
                        React.createElement(Styles.FormLabel, null, "Tijd"),
                        React.createElement(Styles.FormTime, null,
                            React.createElement(react_input_mask_1.default, { mask: "99:99", maskChar: "", value: "14:00" }, function () { return (React.createElement(Styles.StyledInput, { className: "styled-input", customType: "root", name: name })); }),
                            React.createElement(Styles.TimeIcon, null))),
                    React.createElement(Styles.FormWrapperSelect, null,
                        React.createElement(Styles.FormLabel, null, "Doorlooptijd"),
                        React.createElement(Styles.FormSelect, { classNamePrefix: "type-select", options: [{ value: "2 uur", label: "2 uur" }], value: { value: "2 uur", label: "2 uur" } })),
                    React.createElement(Styles.FormWrapperSelect, null,
                        React.createElement(Styles.FormLabel, null, "Verwacht aantal uur"),
                        React.createElement(Styles.FormSelect, { classNamePrefix: "type-select", options: [{ value: "2 uur", label: "2 uur" }], value: { value: "2 uur", label: "2 uur" } }))),
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Styles.ServiceWrapper, null,
                        React.createElement(Styles.ServiceUnorderedList, null,
                            React.createElement(Styles.ServiceAnchor, null,
                                React.createElement(Styles.ServiceList, null, "Daken met garantie"),
                                React.createElement(Styles.ServiceSpan, { to: urls_1.default.EXTERNAL_DAKDAKA }, "Ja")),
                            React.createElement(Styles.ServiceAnchor, null,
                                React.createElement(Styles.ServiceList, null, "Complex"),
                                React.createElement(Styles.ServiceSpan, { to: urls_1.default.EXTERNAL_DAKDAKA }, "C501")),
                            React.createElement(Styles.ServiceAnchor, null,
                                React.createElement(Styles.ServiceList, null, "Dak toegang"),
                                React.createElement(Styles.ServiceSpan, { to: urls_1.default.EXTERNAL_ACTIVITIETEN }, "Details\u2026"))))))),
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Styles.ButtonWrapper, null,
                React.createElement(components_2.GeneralButton, { url: "", title: "Werkorder toevoegen" })),
            React.createElement(Styles.ButtonWrapper, null,
                React.createElement(components_2.GeneralButton, { url: "", title: "Publiceren" }))),
        React.createElement("div", null,
            React.createElement(Styles.ActionCard, null,
                React.createElement(styles_1.TableText, { className: "workorder" }, "Werkorders"),
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
            React.createElement(styles_2.TableButtonWrapper, null,
                React.createElement("div", { className: "drop" },
                    React.createElement(styles_2.Button, null,
                        "Met geselecteerd",
                        React.createElement(styles_2.ArrowUp, null)),
                    React.createElement(styles_2.TableDropdown, { options: [
                            { value: "Maak een keuze", label: "Maak een keuze" },
                            { value: "Maak een keuze", label: "Maak een keuze" }
                        ], value: { value: "Maak een keuze", label: "Maak een keuze" } }))))));
};
//# sourceMappingURL=index.js.map