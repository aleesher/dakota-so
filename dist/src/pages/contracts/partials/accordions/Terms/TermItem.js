"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var yup = __importStar(require("yup"));
var formik_1 = require("formik");
var styles_1 = require("@material-ui/core/styles");
var Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var components_1 = require("dakota-portal/dist/components");
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.termValidationSchema = yup.object({
    invoiceFrom: yup.date().required(),
    nextInvoicingDate: yup.date().required(),
    progressPercent: yup.number().required(),
    description: yup.string().required(),
    invoicePeriod: yup.string().required(),
    invoiceDirectly: yup.boolean().required()
});
var Tooltip = styles_1.withStyles(function (theme) { return ({
    tooltip: {
        padding: "10px 14px",
        backgroundColor: theme.palette.common.white,
        color: Colors_1.default.cinnabar,
        boxShadow: theme.shadows[1],
        fontSize: 13,
        fontWeight: "bold"
    }
}); })(Tooltip_1.default);
var invoicePeriodOptions = [
    { label: "Forehand", value: "Forehand" },
    { label: "Afterwards", value: "Afterwards" }
];
var Warning = function (_a) {
    var title = _a.title;
    return (react_1.default.createElement(WarningIconWrapper, null,
        react_1.default.createElement(Tooltip, { title: title, placement: "right" },
            react_1.default.createElement(Warning_1.default, null))));
};
var TermItem = function (_a) {
    var term = _a.term, onChange = _a.onChange;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(formik_1.Formik, { validationSchema: exports.termValidationSchema, initialValues: term, onSubmit: function () { return null; } }, function (formikBag) {
            var handleChange = function (field, value) {
                onChange(field, value);
                formikBag.handleChange({ target: { name: field, value: value } });
            };
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(FieldWrapper, { isError: formikBag.touched.invoiceFrom &&
                        !!formikBag.errors.invoiceFrom },
                    react_1.default.createElement(Date, { onChange: function (value) { return handleChange("invoiceFrom", value); }, value: formikBag.values.invoiceFrom }),
                    formikBag.touched.invoiceFrom &&
                        !!formikBag.errors.invoiceFrom && (react_1.default.createElement(Warning, { title: formikBag.errors.invoiceFrom }))),
                react_1.default.createElement(FieldWrapper, { isError: formikBag.touched.nextInvoicingDate &&
                        !!formikBag.errors.nextInvoicingDate },
                    react_1.default.createElement(Date, { onChange: function (value) { return handleChange("nextInvoicingDate", value); }, value: formikBag.values.nextInvoicingDate }),
                    formikBag.touched.nextInvoicingDate &&
                        !!formikBag.errors.nextInvoicingDate && (react_1.default.createElement(Warning, { title: formikBag.errors.nextInvoicingDate }))),
                react_1.default.createElement(FieldWrapper, { isError: formikBag.touched.progressPercent &&
                        !!formikBag.errors.progressPercent },
                    react_1.default.createElement(Input, { name: "progressPercent", value: formikBag.values.progressPercent, onChange: formikBag.handleChange, onBlur: function (e) {
                            formikBag.handleBlur(e);
                            handleChange("progressPercent", parseInt(e.target.value, 10));
                        } }),
                    formikBag.touched.progressPercent &&
                        !!formikBag.errors.progressPercent && (react_1.default.createElement(Warning, { title: formikBag.errors.progressPercent }))),
                react_1.default.createElement(FieldWrapper, { isError: formikBag.touched.description &&
                        !!formikBag.errors.description },
                    react_1.default.createElement(Input, { name: "description", value: formikBag.values.description, onChange: formikBag.handleChange, onBlur: function (e) {
                            formikBag.handleBlur(e);
                            handleChange("description", e.target.value);
                        } }),
                    formikBag.touched.description &&
                        !!formikBag.errors.description && (react_1.default.createElement(Warning, { title: formikBag.errors.description }))),
                react_1.default.createElement(FieldWrapper, { isError: formikBag.touched.invoicePeriod &&
                        !!formikBag.errors.invoicePeriod },
                    react_1.default.createElement(Select, { onChange: function (_a) {
                            var value = _a.value;
                            return handleChange("invoicePeriod", value);
                        }, options: invoicePeriodOptions, value: invoicePeriodOptions.find(function (o) { return o.value === formikBag.values.invoicePeriod; }) }),
                    formikBag.touched.invoicePeriod &&
                        !!formikBag.errors.invoicePeriod && (react_1.default.createElement(Warning, { title: formikBag.errors.invoicePeriod }))),
                react_1.default.createElement(FieldWrapper, { isError: formikBag.touched.invoiceDirectly &&
                        !!formikBag.errors.invoiceDirectly },
                    react_1.default.createElement(SwitchWrapper, null,
                        react_1.default.createElement("span", null, "NEE"),
                        react_1.default.createElement(components_1.SwitchComponent, { checked: formikBag.values.invoiceDirectly, onChange: function () {
                                return handleChange("invoiceDirectly", !formikBag.values.invoiceDirectly);
                            } }),
                        react_1.default.createElement("span", null, "JA")),
                    formikBag.touched.invoiceDirectly &&
                        !!formikBag.errors.invoiceDirectly && (react_1.default.createElement(Warning, { title: formikBag.errors.invoiceDirectly })))));
        })));
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  border-radius: 6px;\n  box-shadow: 0 0 12px -2px ", ";\n  background-color: white;\n"], ["\n  height: 100%;\n  border-radius: 6px;\n  box-shadow: 0 0 12px -2px ", ";\n  background-color: white;\n"])), Colors_1.default.lavender);
var WarningIconWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 2px;\n  top: 5px;\n  width: 45px;\n  height: 45px;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 2px;\n  top: 5px;\n  width: 45px;\n  height: 45px;\n  background-color: ", ";\n  color: ", ";\n"])), Colors_1.default.lightCinnabar, Colors_1.default.cinnabar);
var FieldWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  > div {\n    width: 100%;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n\n  ", "\n"], ["\n  > div {\n    width: 100%;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n\n  ",
    "\n"])), Colors_1.default.lavender, function (_a) {
    var isError = _a.isError;
    return isError && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: relative;\n      border: 1px solid ", " !important;\n\n      div {\n        background-color: ", ";\n      }\n    "], ["\n      position: relative;\n      border: 1px solid ", " !important;\n\n      div {\n        background-color: ", ";\n      }\n    "])), Colors_1.default.cinnabar, Colors_1.default.lightCinnabar);
});
var SwitchWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding-left: 14px;\n  box-sizing: border-box;\n  font-size: 15px;\n\n  span {\n    font-weight: bold;\n    color: ", ";\n  }\n\n  span:last-child {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding-left: 14px;\n  box-sizing: border-box;\n  font-size: 15px;\n\n  span {\n    font-weight: bold;\n    color: ", ";\n  }\n\n  span:last-child {\n    color: ", ";\n  }\n"])), Colors_1.default.veryLightGrey, Colors_1.default.primary);
var Input = styled_components_1.default(components_1.Input)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n\n  > div {\n    border: 0 !important;\n  }\n"], ["\n  width: 100%;\n\n  > div {\n    border: 0 !important;\n  }\n"])));
var Select = styled_components_1.default(components_1.Select)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n\n  > div {\n    border: 0;\n  }\n"], ["\n  width: 100%;\n\n  > div {\n    border: 0;\n  }\n"])));
var Currency = styled_components_1.default(components_1.Currency)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n\n  > div {\n    border: 0 !important;\n  }\n"], ["\n  width: 100%;\n\n  > div {\n    border: 0 !important;\n  }\n"])));
var Date = styled_components_1.default(components_1.Date)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n\n  > div {\n    border: 0 !important;\n  }\n"], ["\n  width: 100%;\n\n  > div {\n    border: 0 !important;\n  }\n"])));
exports.default = TermItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=TermItem.js.map