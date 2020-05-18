"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var formik_1 = require("formik");
var react_hooks_1 = require("@apollo/react-hooks");
var react_components_1 = require("@apollo/react-components");
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("../../../styles");
var validation_1 = require("./validation");
var constants_1 = require("./constants");
var queries_1 = require("./queries");
var Billing = function (_a) {
    var isLocked = _a.isLocked, code = _a.code, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick;
    var updateBillingData = react_hooks_1.useMutation(queries_1.UPDATE_BILLING_DATA)[0];
    return (react_1.default.createElement(components_1.AccordionLink, { ref: refs.billing, label: "Facturering", link: "billing", isActive: activeLinks.includes("billing"), onClick: function () { return onClick("billing"); } },
        react_1.default.createElement(styles_1.AccordionContainer, null,
            react_1.default.createElement(formik_1.Formik, { validationSchema: validation_1.billingValidationSchema, initialValues: {
                    invoiceType: "",
                    installmentType: "",
                    serviceIndexMethod: "",
                    installmentsBasedOnProgress: false,
                    maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate: 0,
                    initialSalesAmount: 0,
                    totalCost: 0,
                    currencyCode: "",
                    billToCustomerNoContr: "",
                    billToNameContract: "",
                    billToAddressContract: "",
                    billToPostCodeContract: "",
                    billToCityContract: ""
                }, onSubmit: function () { return null; } }, function (formikBag) {
                var handleUpdate = function (field, value) {
                    var _a;
                    if (isLocked) {
                        return;
                    }
                    updateBillingData({
                        variables: {
                            where: { code: code },
                            data: (_a = {}, _a[field] = value, _a)
                        },
                        refetchQueries: [
                            {
                                query: queries_1.GET_BILLING_DATA,
                                variables: { where: { code: code } }
                            }
                        ]
                    });
                };
                var handleQueryCompete = function (data) {
                    var _a = get_1.default(data, "serviceContract") || {}, invoiceType = _a.invoiceType, installmentType = _a.installmentType, serviceIndexMethod = _a.serviceIndexMethod, installmentsBasedOnProgress = _a.installmentsBasedOnProgress, maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate = _a.maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate, initialSalesAmount = _a.initialSalesAmount, totalCost = _a.totalCost, currencyCode = _a.currencyCode, billToCustomerNoContr = _a.billToCustomerNoContr, billToNameContract = _a.billToNameContract, billToAddressContract = _a.billToAddressContract, billToPostCodeContract = _a.billToPostCodeContract, billToCityContract = _a.billToCityContract;
                    formikBag.setValues({
                        invoiceType: invoiceType || "",
                        installmentType: installmentType || "",
                        serviceIndexMethod: serviceIndexMethod || "",
                        installmentsBasedOnProgress: installmentsBasedOnProgress || false,
                        maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate: maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate || 0,
                        initialSalesAmount: initialSalesAmount || 0,
                        totalCost: totalCost || 0,
                        currencyCode: currencyCode || "",
                        billToCustomerNoContr: billToCustomerNoContr || "",
                        billToNameContract: billToNameContract || "",
                        billToAddressContract: billToAddressContract || "",
                        billToPostCodeContract: billToPostCodeContract || "",
                        billToCityContract: billToCityContract || ""
                    });
                };
                var handleBlur = function (name, value) {
                    if (isLocked) {
                        return;
                    }
                    formikBag.handleBlur({ target: { name: name } });
                    handleUpdate(name, value);
                };
                return (react_1.default.createElement(react_components_1.Query, { query: queries_1.GET_BILLING_DATA, variables: {
                        where: { code: code }
                    }, onCompleted: handleQueryCompete, fetchPolicy: "cache-and-network" }, function () { return (react_1.default.createElement(Grid_1.default, { container: true },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(styles_1.AddressContent, null,
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Type termijn"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormSelect, { options: constants_1.TERMIN_TYPE_OPTIONS, value: constants_1.TERMIN_TYPE_OPTIONS.find(function (_a) {
                                            var value = _a.value;
                                            return value === formikBag.values.invoiceType;
                                        }), onChange: function (_a) {
                                            var value = _a.value;
                                            return formikBag.handleChange({
                                                target: {
                                                    name: "invoiceType",
                                                    value: value
                                                }
                                            });
                                        }, helperText: !isLocked &&
                                            formikBag.touched.invoiceType &&
                                            formikBag.errors.invoiceType, error: !isLocked &&
                                            formikBag.touched.invoiceType &&
                                            !!formikBag.errors.invoiceType, isDisabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Factureren"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormSelect, { options: constants_1.INVOICING_OPTIONS, value: constants_1.INVOICING_OPTIONS.find(function (_a) {
                                            var value = _a.value;
                                            return value === formikBag.values.installmentType;
                                        }), onChange: function (_a) {
                                            var value = _a.value;
                                            return formikBag.handleChange({
                                                target: {
                                                    name: "installmentType",
                                                    value: value
                                                }
                                            });
                                        }, helperText: !isLocked &&
                                            formikBag.touched.installmentType &&
                                            formikBag.errors.installmentType, error: !isLocked &&
                                            formikBag.touched.installmentType &&
                                            !!formikBag.errors.installmentType, isDisabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Termijn - voortgang"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement("span", { style: { marginRight: 5 } }, "NEE"),
                                    react_1.default.createElement(components_1.SwitchComponent, { onChange: function () {
                                            handleBlur("installmentsBasedOnProgress", !formikBag.values.installmentsBasedOnProgress);
                                            formikBag.handleChange({
                                                target: {
                                                    name: "installmentsBasedOnProgress",
                                                    value: !formikBag.values
                                                        .installmentsBasedOnProgress
                                                }
                                            });
                                        }, checked: formikBag.values.installmentsBasedOnProgress, disabled: isLocked }),
                                    react_1.default.createElement("span", { style: { marginLeft: 5 } }, "JA"))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Gefactureerd t/m"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate", onBlur: function (e) {
                                            return handleBlur("maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "0", value: formikBag.values
                                            .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate, helperText: !isLocked &&
                                            formikBag.touched
                                                .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate &&
                                            formikBag.errors
                                                .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate, error: !isLocked &&
                                            formikBag.touched
                                                .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate &&
                                            !!formikBag.errors
                                                .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Initieel verkoopbedrag"),
                                react_1.default.createElement(styles_1.FormCurrencyWrapper, null,
                                    react_1.default.createElement(styles_1.FormCurrency, null, "\u20AC"),
                                    react_1.default.createElement(styles_1.FormCurrencyInput, { placeholder: "0", name: "initialSalesAmount", onBlur: function (e) {
                                            return handleBlur("initialSalesAmount", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.initialSalesAmount, helperText: !isLocked &&
                                            formikBag.touched.initialSalesAmount &&
                                            formikBag.errors.initialSalesAmount, error: !isLocked &&
                                            formikBag.touched.initialSalesAmount &&
                                            !!formikBag.errors.initialSalesAmount, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Actueel contractbedrag"),
                                react_1.default.createElement(styles_1.FormCurrencyWrapper, null,
                                    react_1.default.createElement(styles_1.FormCurrency, null, "\u20AC"),
                                    react_1.default.createElement(styles_1.FormCurrencyInput, { placeholder: "0", name: "totalCost", onBlur: function (e) {
                                            return handleBlur("totalCost", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.totalCost, helperText: !isLocked &&
                                            formikBag.touched.totalCost &&
                                            formikBag.errors.totalCost, error: !isLocked &&
                                            formikBag.touched.totalCost &&
                                            !!formikBag.errors.totalCost, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Kostenplaats code"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "Amsterdam", name: "currencyCode", onBlur: function (e) {
                                            return handleBlur("currencyCode", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.currencyCode, helperText: !isLocked &&
                                            formikBag.touched.currencyCode &&
                                            formikBag.errors.currencyCode, error: !isLocked &&
                                            formikBag.touched.currencyCode &&
                                            !!formikBag.errors.currencyCode, disabled: isLocked }))))),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(styles_1.AddressContent, null,
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Factureren aan"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "Bedrijf ABC B.V.", name: "billToCustomerNoContr", onBlur: function (e) {
                                            return handleBlur("billToCustomerNoContr", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.billToCustomerNoContr, helperText: !isLocked &&
                                            formikBag.touched.billToCustomerNoContr &&
                                            formikBag.errors.billToCustomerNoContr, error: !isLocked &&
                                            formikBag.touched.billToCustomerNoContr &&
                                            !!formikBag.errors.billToCustomerNoContr, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Factureren naam"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "Kant B.V.", name: "billToNameContract", onBlur: function (e) {
                                            return handleBlur("billToNameContract", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.billToNameContract, helperText: !isLocked &&
                                            formikBag.touched.billToNameContract &&
                                            formikBag.errors.billToNameContract, error: !isLocked &&
                                            formikBag.touched.billToNameContract &&
                                            !!formikBag.errors.billToNameContract, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Factuur adres"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "Stephensonweg 2", name: "billToAddressContract", onBlur: function (e) {
                                            return handleBlur("billToAddressContract", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.billToAddressContract, helperText: !isLocked &&
                                            formikBag.touched.billToAddressContract &&
                                            formikBag.errors.billToAddressContract, error: !isLocked &&
                                            formikBag.touched.billToAddressContract &&
                                            !!formikBag.errors.billToAddressContract, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Factuur postcode"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "4208 HB", name: "billToPostCodeContract", onBlur: function (e) {
                                            return handleBlur("billToPostCodeContract", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.billToPostCodeContract, helperText: !isLocked &&
                                            formikBag.touched.billToPostCodeContract &&
                                            formikBag.errors.billToPostCodeContract, error: !isLocked &&
                                            formikBag.touched.billToPostCodeContract &&
                                            !!formikBag.errors.billToPostCodeContract, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Factuur plaats"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "Gorinchem", name: "billToCityContract", onBlur: function (e) {
                                            return handleBlur("billToCityContract", e.target.value);
                                        }, onChange: formikBag.handleChange, value: formikBag.values.billToCityContract, helperText: !isLocked &&
                                            formikBag.touched.billToCityContract &&
                                            formikBag.errors.billToCityContract, error: !isLocked &&
                                            formikBag.touched.billToCityContract &&
                                            !!formikBag.errors.billToCityContract, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Indexeringsmethode"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormSelect, { options: constants_1.INDEXATION_METHOD_OPTIONS, value: constants_1.INDEXATION_METHOD_OPTIONS.find(function (_a) {
                                            var value = _a.value;
                                            return value === formikBag.values.serviceIndexMethod;
                                        }), onChange: function (_a) {
                                            var value = _a.value;
                                            return formikBag.handleChange({
                                                target: {
                                                    name: "serviceIndexMethod",
                                                    value: value
                                                }
                                            });
                                        }, helperText: !isLocked &&
                                            formikBag.touched.serviceIndexMethod &&
                                            formikBag.errors.serviceIndexMethod, error: !isLocked &&
                                            formikBag.touched.serviceIndexMethod &&
                                            !!formikBag.errors.serviceIndexMethod, isDisabled: isLocked }))))))); }));
            }))));
};
exports.default = Billing;
//# sourceMappingURL=Billing.js.map