"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_components_1 = require("@apollo/react-components");
var react_hooks_1 = require("@apollo/react-hooks");
var get_1 = __importDefault(require("lodash/get"));
var formik_1 = require("formik");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("../../../styles");
var helpers_1 = require("./../../helpers");
var queries_1 = require("./queries");
var constants_1 = require("./constants");
var validation_1 = require("./validation");
var Termins = function (_a) {
    var isLocked = _a.isLocked, scCode = _a.code, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick;
    var client = react_hooks_1.useApolloClient();
    var _b = react_1.default.useState(scCode), code = _b[0], setCode = _b[1];
    var _c = react_1.default.useState(""), contactPersonCode = _c[0], setContactPersonCode = _c[1];
    var _d = react_1.default.useState([]), contactPersons = _d[0], setContactPersons = _d[1];
    var selectContactPerson = function (newContactPersonCode) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setContactPersonCode(newContactPersonCode);
                    return [4 /*yield*/, updateTerminsData({
                            variables: {
                                where: { code: code },
                                data: { contactPersonCode: newContactPersonCode }
                            }
                        })];
                case 1:
                    _a.sent();
                    window.dispatchEvent(helpers_1.updateContactPersonEvent);
                    return [2 /*return*/];
            }
        });
    }); };
    var selectedContactPerson = contactPersons.length > 1
        ? contactPersons.find(function (contactPerson) { return contactPerson.code === contactPersonCode; })
        : get_1.default(contactPersons, "[0]", {});
    var loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, contactPersonCode_1, contactPersons_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, helpers_1.getCustomerData({
                            client: client,
                            code: code
                        })];
                case 1:
                    _a = _b.sent(), contactPersonCode_1 = _a.contactPersonCode, contactPersons_1 = _a.contactPersons;
                    setContactPersonCode(contactPersonCode_1);
                    setContactPersons(contactPersons_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    setContactPersonCode("");
                    setContactPersons([]);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var updateTerminsData = react_hooks_1.useMutation(queries_1.UPDATE_TERMINS_DATA, {
        onCompleted: loadData
    })[0];
    react_1.default.useEffect(function () {
        var handleContactPersonUpdate = function () { return loadData(); };
        window.addEventListener(helpers_1.UPDATE_CONTACT_PERSON_EVENT_NAME, handleContactPersonUpdate);
        return function () {
            window.removeEventListener(helpers_1.UPDATE_CONTACT_PERSON_EVENT_NAME, handleContactPersonUpdate);
        };
    });
    react_1.default.useEffect(function () {
        loadData();
    }, []);
    return (react_1.default.createElement(components_1.AccordionLink, { ref: refs.termins, label: "Algemeen informatie", link: "termins", isActive: activeLinks.includes("termins"), onClick: function () { return onClick("termins"); } },
        react_1.default.createElement(styles_1.AccordionContainer, null,
            react_1.default.createElement(formik_1.Formik, { validationSchema: validation_1.terminsValidationSchema, initialValues: {
                    code: scCode,
                    status: "",
                    description: "",
                    roofCity: "",
                    roofAddress: "",
                    workingHours: "",
                    contactName: "",
                    phoneNo: "",
                    email: "",
                    yourReference: "",
                    outsourced: false,
                    lastExecutedBy: "",
                    contactPersonCode: ""
                }, initialTouched: {
                    code: true,
                    description: true,
                    roofCity: true,
                    yourReference: true
                }, initialErrors: {
                    code: "code is a required field",
                    description: "description is a required field",
                    roofCity: "roofCity is a required field",
                    yourReference: "yourReference is a required field"
                }, onSubmit: function () { return null; } }, function (formikBag) {
                var handleUpdate = function (field, value) {
                    var _a;
                    if (isLocked) {
                        return;
                    }
                    updateTerminsData({
                        variables: {
                            where: { code: formikBag.values.code },
                            data: (_a = {}, _a[field] = value, _a)
                        },
                        refetchQueries: [
                            {
                                query: queries_1.GET_TERMINS_DATA,
                                variables: { where: { code: formikBag.values.code } }
                            }
                        ]
                    });
                };
                var handleQueryCompete = function (data) {
                    var _a = get_1.default(data, "serviceContract") || {}, _b = _a.code, code = _b === void 0 ? "" : _b, status = _a.status, description = _a.description, roofCity = _a.roofCity, roofAddress = _a.roofAddress, workingHours = _a.workingHours, contactName = _a.contactName, phoneNo = _a.phoneNo, email = _a.email, yourReference = _a.yourReference, _c = _a.outsourced, outsourced = _c === void 0 ? false : _c, lastExecutedBy = _a.lastExecutedBy, contactPersonCode = _a.contactPersonCode;
                    formikBag.setValues({
                        code: code,
                        status: status,
                        description: description || "",
                        roofCity: roofCity || "",
                        roofAddress: roofAddress || "",
                        workingHours: workingHours || 0,
                        contactName: contactName || "",
                        phoneNo: phoneNo || "",
                        email: email || "",
                        yourReference: yourReference || "",
                        outsourced: outsourced,
                        lastExecutedBy: lastExecutedBy || "",
                        contactPersonCode: contactPersonCode || ""
                    });
                };
                var handleBlur = function (name, value) {
                    if (isLocked) {
                        return;
                    }
                    formikBag.handleBlur({ target: { name: name } });
                    handleUpdate(name, value);
                };
                return (react_1.default.createElement(react_components_1.Query, { query: queries_1.GET_TERMINS_DATA, variables: { where: { code: formikBag.values.code } }, onCompleted: handleQueryCompete, fetchPolicy: "cache-and-network" }, function () { return (react_1.default.createElement(Grid_1.default, { container: true },
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(styles_1.AddressContent, null,
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Nummer"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "code", onBlur: function (e) { return handleBlur("code", e.target.value); }, onChange: function (e) {
                                            setCode(e.target.value);
                                            formikBag.handleChange(e);
                                        }, placeholder: "099576290", value: formikBag.values.code, helperText: !isLocked &&
                                            formikBag.touched.code &&
                                            formikBag.errors.code, error: !isLocked &&
                                            formikBag.touched.code &&
                                            !!formikBag.errors.code, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Omschrijving"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "description", onBlur: function (e) {
                                            return handleBlur("description", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "Dit is een omschrijving", value: formikBag.values.description, helperText: !isLocked &&
                                            formikBag.touched.description &&
                                            formikBag.errors.description, error: !isLocked &&
                                            formikBag.touched.description &&
                                            !!formikBag.errors.description, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Eerste sub-complex adres"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "roofCity", onBlur: function (e) {
                                            return handleBlur("roofCity", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "Stephensonstraat", value: formikBag.values.roofCity, helperText: !isLocked &&
                                            formikBag.touched.roofCity &&
                                            formikBag.errors.roofCity, error: !isLocked &&
                                            formikBag.touched.roofCity &&
                                            !!formikBag.errors.roofCity, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Eerste sub-complex plaats"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "roofAddress", onBlur: function (e) {
                                            return handleBlur("roofAddress", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "Gorinchem", value: formikBag.values.roofAddress, helperText: !isLocked &&
                                            formikBag.touched.roofAddress &&
                                            formikBag.errors.roofAddress, error: !isLocked &&
                                            formikBag.touched.roofAddress &&
                                            !!formikBag.errors.roofAddress, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Contract uren"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "workingHours", onBlur: function (e) {
                                            return handleBlur("workingHours", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "40", value: formikBag.values.workingHours, helperText: !isLocked &&
                                            formikBag.touched.workingHours &&
                                            formikBag.errors.workingHours, error: !isLocked &&
                                            formikBag.touched.workingHours &&
                                            !!formikBag.errors.workingHours, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.SubTitle, null, "Contractpersoon contract"),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Naam"),
                                contactPersons.length < 2 ? (react_1.default.createElement(styles_1.FormInput, { name: "contactPersonCode", value: get_1.default(selectedContactPerson, "firstName", "") + " " + get_1.default(selectedContactPerson, "lastName", ""), onChange: function (e) {
                                        return setContactPersonCode(e.target.value);
                                    }, onBlur: function () {
                                        return selectContactPerson(contactPersonCode);
                                    }, disabled: isLocked })) : (react_1.default.createElement(styles_1.FormSelect, { options: contactPersons.map(function (_a) {
                                        var firstName = _a.firstName, lastName = _a.lastName, code = _a.code;
                                        return ({
                                            label: (firstName || "") + " " + (lastName || ""),
                                            value: code
                                        });
                                    }), value: !!selectedContactPerson
                                        ? {
                                            label: (selectedContactPerson.firstName ||
                                                "") + " " + (selectedContactPerson.lastName ||
                                                "")
                                        }
                                        : undefined, onChange: function (_a) {
                                        var value = _a.value;
                                        return selectContactPerson(value);
                                    }, isDisabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Telefoonnummer"),
                                react_1.default.createElement(styles_1.FormInput, { value: get_1.default(selectedContactPerson, "phone", ""), disabled: true })),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "E-mailadres"),
                                react_1.default.createElement(styles_1.FormInput, { value: get_1.default(selectedContactPerson, "email", ""), disabled: true })))),
                    react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                        react_1.default.createElement(styles_1.AddressContent, null,
                            react_1.default.createElement(styles_1.SubTitle, null, "Overig"),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Vertegenwoordiger"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { placeholder: "Jan-Karel Hoorndijk", disabled: true }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Status"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormSelect, { options: constants_1.STATUS_OPTIONS, value: constants_1.STATUS_OPTIONS.find(function (_a) {
                                            var value = _a.value;
                                            return value === formikBag.values.status;
                                        }), onChange: function (_a) {
                                            var value = _a.value;
                                            return formikBag.handleChange({
                                                target: {
                                                    name: "status",
                                                    value: value
                                                }
                                            });
                                        }, helperText: !isLocked &&
                                            formikBag.touched.status &&
                                            formikBag.errors.status, error: !isLocked &&
                                            formikBag.touched.status &&
                                            !!formikBag.errors.status, isDisabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Uw referentie"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "yourReference", onBlur: function (e) {
                                            return handleBlur("yourReference", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "0634897198", value: formikBag.values.yourReference, helperText: !isLocked &&
                                            formikBag.touched.yourReference &&
                                            formikBag.errors.yourReference, error: !isLocked &&
                                            formikBag.touched.yourReference &&
                                            !!formikBag.errors.yourReference, disabled: isLocked }))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Uitbesteed"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement("span", { style: { marginRight: 5 } }, "NEE"),
                                    react_1.default.createElement(components_1.SwitchComponent, { onChange: function () {
                                            handleBlur("outsourced", !formikBag.values.outsourced);
                                            formikBag.handleChange({
                                                target: {
                                                    name: "outsourced",
                                                    value: !formikBag.values.outsourced
                                                }
                                            });
                                        }, checked: formikBag.values.outsourced, disabled: isLocked }),
                                    react_1.default.createElement("span", { style: { marginLeft: 5 } }, "JA"))),
                            react_1.default.createElement(styles_1.FormWrapper, null,
                                react_1.default.createElement(styles_1.FormLabel, null, "Laatst doorgevoerd"),
                                react_1.default.createElement(styles_1.FormValue, null,
                                    react_1.default.createElement(styles_1.FormInput, { name: "lastExecutedBy", onBlur: function (e) {
                                            return handleBlur("lastExecutedBy", e.target.value);
                                        }, onChange: formikBag.handleChange, placeholder: "Marcel de Huis", value: formikBag.values.lastExecutedBy, helperText: !isLocked &&
                                            formikBag.touched.lastExecutedBy &&
                                            formikBag.errors.lastExecutedBy, error: !isLocked &&
                                            formikBag.touched.lastExecutedBy &&
                                            !!formikBag.errors.lastExecutedBy, disabled: isLocked }))))))); }));
            }))));
};
exports.default = Termins;
//# sourceMappingURL=Termins.js.map