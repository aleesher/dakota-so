"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var react_components_1 = require("@apollo/react-components");
var react_hooks_1 = require("@apollo/react-hooks");
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("../../../styles");
var queries_1 = require("./queries");
var validation_1 = require("./validation");
var Data = function (_a) {
    var isLocked = _a.isLocked, code = _a.code, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick;
    var updateData = react_hooks_1.useMutation(queries_1.UPDATE_DATA)[0];
    return (react_1.default.createElement(components_1.AccordionLink, { ref: refs.data, label: "Data", link: "data", isActive: activeLinks.includes("data"), onClick: function () { return onClick("data"); } },
        react_1.default.createElement(styles_1.AccordionContainer, null,
            react_1.default.createElement(formik_1.Formik, { validationSchema: validation_1.dataValidationSchema, initialValues: {
                    startingDate: "",
                    endingDate: "",
                    terminationDate: "",
                    lastIndexDate: ""
                }, onSubmit: function () { return null; } }, function (formikBag) {
                var handleUpdate = function (field, value) {
                    var _a;
                    if (isLocked) {
                        return;
                    }
                    updateData({
                        variables: {
                            where: { code: code },
                            data: (_a = {}, _a[field] = value, _a)
                        },
                        refetchQueries: [
                            {
                                query: queries_1.GET_DATA,
                                variables: { where: { code: code } }
                            }
                        ]
                    });
                };
                var handleQueryCompete = function (data) {
                    var _a = get_1.default(data, "serviceContract") || {}, startingDate = _a.startingDate, endingDate = _a.endingDate, terminationDate = _a.terminationDate, lastIndexDate = _a.lastIndexDate;
                    formikBag.setValues({
                        startingDate: startingDate || "",
                        endingDate: endingDate || "",
                        terminationDate: terminationDate || "",
                        lastIndexDate: lastIndexDate || ""
                    });
                };
                var handleDateChange = function (name, d) {
                    if (isLocked) {
                        return;
                    }
                    var newValue = d.format("DD-MM-YYYY");
                    handleUpdate(name, newValue);
                    formikBag.handleChange({ target: { name: name, value: newValue } });
                };
                return (react_1.default.createElement(react_components_1.Query, { query: queries_1.GET_DATA, variables: {
                        where: { code: code }
                    }, onCompleted: handleQueryCompete, fetchPolicy: "cache-and-network" }, function () { return (react_1.default.createElement(Grid_1.default, { container: true },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(styles_1.AddressContent, null,
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Ingangsdatum"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormDate, { onChange: function (e) {
                                            return handleDateChange("startingDate", e);
                                        }, value: formikBag.values.startingDate, helperText: !isLocked &&
                                            formikBag.touched.startingDate &&
                                            formikBag.errors.startingDate, error: !isLocked &&
                                            formikBag.touched.startingDate &&
                                            !!formikBag.errors.startingDate, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Einddatum"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormDate, { onChange: function (e) { return handleDateChange("endingDate", e); }, value: formikBag.values.endingDate, helperText: !isLocked &&
                                            formikBag.touched.endingDate &&
                                            formikBag.errors.endingDate, error: !isLocked &&
                                            formikBag.touched.endingDate &&
                                            !!formikBag.errors.endingDate, disabled: isLocked }))))),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(styles_1.AddressContent, null,
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Opzegdatum"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormDate, { onChange: function (e) {
                                            return handleDateChange("terminationDate", e);
                                        }, value: formikBag.values.terminationDate, helperText: !isLocked &&
                                            formikBag.touched.terminationDate &&
                                            formikBag.errors.terminationDate, error: !isLocked &&
                                            formikBag.touched.terminationDate &&
                                            !!formikBag.errors.terminationDate, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Laatste indexeringsdatum"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormDate, { onChange: function (e) {
                                            return handleDateChange("lastIndexDate", e);
                                        }, value: formikBag.values.lastIndexDate, helperText: !isLocked &&
                                            formikBag.touched.lastIndexDate &&
                                            formikBag.errors.lastIndexDate, error: !isLocked &&
                                            formikBag.touched.lastIndexDate &&
                                            !!formikBag.errors.lastIndexDate, disabled: isLocked }))))))); }));
            }))));
};
exports.default = Data;
//# sourceMappingURL=Data.js.map