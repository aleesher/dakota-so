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
var styles_1 = require("../../styles");
exports.BillingForm = function () {
    return (React.createElement(styles_1.AddressCard, null,
        React.createElement(styles_1.AddressHeader, null,
            React.createElement(styles_1.AddressTitle, null, "Factuurinformatie"),
            React.createElement(styles_1.AddresAction, null, "Verberg")),
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.AddressContent, null,
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Opdrachtnummer"),
                        React.createElement(styles_1.FormInput, { placeholder: "108472940" })),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Opdracht datum"),
                        React.createElement(styles_1.FormDate, { onChange: function () { return console.log("click"); }, InputProps: {
                                className: "so-datepicker",
                                disableUnderline: true
                            }, keyboardIcon: React.createElement(styles_1.CalendarIcon, { fontSize: "small" }), format: "DD-MM-YYYY" })),
                    React.createElement(styles_1.FormWrapper, { className: "withIcon" },
                        React.createElement(styles_1.FormLabel, null, "Aanneemsom"),
                        React.createElement(styles_1.FormInputIcon, { className: "iconText", placeholder: "2.500,00", InputProps: {
                                startAdornment: React.createElement("div", { className: "IconEuro" }, "\u20AC")
                            } })),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Service Type"),
                        React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: [{ value: "Regie", label: "Regie" }], value: { value: "Regie", label: "Regie" } })))),
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.AddressContent, null,
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Garantie gegevens"),
                        React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: [{ value: "ja", label: "ja" }], value: { value: "ja", label: "ja" } })),
                    React.createElement(styles_1.FormWrapper, null,
                        React.createElement(styles_1.FormLabel, null, "Klant afspraak"),
                        React.createElement(styles_1.FormSelect, { classNamePrefix: "type-select", options: [{ value: "ja", label: "ja" }], value: { value: "ja", label: "ja" } })),
                    React.createElement(styles_1.FormWrapper, { className: "withIcon" },
                        React.createElement(styles_1.FormLabel, null, "Factuurbedrag"),
                        React.createElement(styles_1.FormInputIcon, { className: "iconText", placeholder: "2.500,00", InputProps: {
                                startAdornment: React.createElement("div", { className: "IconEuro" }, "\u20AC")
                            } })),
                    React.createElement(styles_1.FormWrapper, { className: "withIcon" },
                        React.createElement(styles_1.FormLabel, null, "Mandaat totaal"),
                        React.createElement(styles_1.FormInputIcon, { className: "iconText", placeholder: "-", InputProps: {
                                startAdornment: React.createElement("div", { className: "IconEuro" }, "\u20AC")
                            } })))))));
};
//# sourceMappingURL=index.js.map