"use strict";
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
var formik_1 = require("formik");
var Style = __importStar(require("../../styles"));
var IndexerenForm = function (_a) {
    var handleSave = _a.handleSave;
    var METHOD_OPTIONS = [
        {
            value: "regie",
            label: "regie"
        }
    ];
    return (react_1.default.createElement(formik_1.Formik, { initialValues: {
            indexMethod: "",
            indexTime: "",
            contractNumber: "",
            contractAmount: "",
            indexedAmount: "",
            indexFigure: ""
        }, validate: function (values) {
            var errors = {};
            if (!values.indexTime) {
                errors.indexTime = "Required";
            }
            else if (!values.contractNumber) {
                errors.contractNumber = "Required";
            }
            else if (!values.contractAmount) {
                errors.contractAmount = "Required";
            }
            else if (!values.indexedAmount) {
                errors.indexedAmount = "Required";
            }
            return errors;
        }, onSubmit: handleSave }, function (formikBag) { return (react_1.default.createElement(Style.IndexFormWrapper, null,
        react_1.default.createElement(Style.ErrorMessage, null, formikBag.errors.errorMessage),
        react_1.default.createElement(Style.StyledSelect, { name: "indexMethod", classNamePrefix: "index", placeholder: "Indexeren Method", options: METHOD_OPTIONS, value: METHOD_OPTIONS.find(function (e) { return e.value === formikBag.values.indexMethod; }), onChange: function (b) { return formikBag.setFieldValue("indexMethod", b.value); } }),
        react_1.default.createElement(Style.DateInput, { name: "indexTime", value: formikBag.values.indexTime, onChange: function (n) { return formikBag.setFieldValue("indexTime", n.format()); } }),
        react_1.default.createElement(Style.InputWrapperIndex, { placeholder: "Cijfer", name: "indexFigure", required: true, helperText: formikBag.touched.indexFigure && formikBag.errors.indexFigure, error: formikBag.touched.indexFigure && !!formikBag.errors.indexFigure, value: formikBag.values.indexFigure, onChange: formikBag.handleChange, onBlur: formikBag.handleBlur }),
        react_1.default.createElement(Style.InputWrapperIndex, { placeholder: "Contract nummer", name: "contractNumber", required: true, helperText: formikBag.touched.contractNumber &&
                formikBag.errors.contractNumber, error: formikBag.touched.contractNumber &&
                !!formikBag.errors.contractNumber, value: formikBag.values.contractNumber, onChange: formikBag.handleChange, onBlur: formikBag.handleBlur }),
        react_1.default.createElement(Style.InputWrapperIndex, { placeholder: "Contract bedrag", name: "contractAmount", required: true, helperText: formikBag.touched.contractAmount &&
                formikBag.errors.contractAmount, error: formikBag.touched.contractAmount &&
                !!formikBag.errors.contractAmount, value: formikBag.values.contractAmount, onChange: formikBag.handleChange, onBlur: formikBag.handleBlur }),
        react_1.default.createElement(Style.InputWrapperIndex, { placeholder: "Geindexeerde bedrag", name: "indexedAmount", required: true, helperText: formikBag.touched.indexedAmount && formikBag.errors.indexedAmount, error: formikBag.touched.indexedAmount &&
                !!formikBag.errors.indexedAmount, value: formikBag.values.indexedAmount, onChange: formikBag.handleChange, onBlur: formikBag.handleBlur }),
        react_1.default.createElement(Style.SubmitButton, { disabled: !formikBag.isValid || !formikBag.dirty, onClick: formikBag.handleSubmit, isSecond: true }, "Update"))); }));
};
exports.default = IndexerenForm;
//# sourceMappingURL=IndexerenForm.js.map