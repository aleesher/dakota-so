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
var react_hooks_1 = require("@apollo/react-hooks");
var react_components_1 = require("@apollo/react-components");
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var formik_1 = require("formik");
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var components_1 = require("dakota-portal/dist/components");
var helpers_1 = require("./../../../../../helpers");
var SearchModal_1 = __importDefault(require("./../../../../../components/SearchModal"));
var styles_1 = require("./../../../../../components/SearchModal/styles");
var styles_2 = require("../../../styles");
var helpers_2 = require("../../helpers");
var queries_1 = require("./queries");
var styles_3 = require("./styles");
var validation_1 = require("./validation");
var Client = function (_a) {
    var history = _a.history, match = _a.match, isLocked = _a.isLocked, code = _a.code, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick;
    var client = react_hooks_1.useApolloClient();
    var _b = react_1.default.useState(""), customerCode = _b[0], setCustomerCode = _b[1];
    var _c = react_1.default.useState(""), contactPersonCode = _c[0], setContactPersonCode = _c[1];
    var _d = react_1.default.useState([]), contactPersons = _d[0], setContactPersons = _d[1];
    var _e = react_1.default.useState({}), customerData = _e[0], setCustomerData = _e[1];
    var url = match.url;
    var loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, customerData_1, contactPersonCode_1, contactPersons_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, helpers_2.getCustomerData({ client: client, code: code })];
                case 1:
                    _a = _b.sent(), customerData_1 = _a.customerData, contactPersonCode_1 = _a.contactPersonCode, contactPersons_1 = _a.contactPersons;
                    setCustomerData(customerData_1 || {});
                    setCustomerCode(get_1.default(customerData_1, "code", customerCode));
                    setContactPersonCode(contactPersonCode_1);
                    setContactPersons(contactPersons_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    setCustomerData({});
                    setCustomerCode("");
                    setContactPersonCode("");
                    setContactPersons([]);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var updateClientData = react_hooks_1.useMutation(queries_1.UPDATE_CLIENT_DATA, {
        onCompleted: loadData
    })[0];
    react_1.default.useEffect(function () {
        var handleContactPersonUpdate = function () { return loadData(); };
        window.addEventListener(helpers_2.UPDATE_CONTACT_PERSON_EVENT_NAME, handleContactPersonUpdate);
        return function () {
            window.removeEventListener(helpers_2.UPDATE_CONTACT_PERSON_EVENT_NAME, handleContactPersonUpdate);
        };
    });
    react_1.default.useEffect(function () {
        loadData();
    }, []);
    var selectCustomer = function (_a) {
        var customerCode = _a.code;
        updateClientData({
            variables: {
                where: { code: code },
                data: { customerCode: customerCode }
            }
        });
    };
    var selectContactPerson = function (newContactPersonCode) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setContactPersonCode(newContactPersonCode);
                    return [4 /*yield*/, updateClientData({
                            variables: {
                                where: { code: code },
                                data: { contactPersonCode: newContactPersonCode }
                            }
                        })];
                case 1:
                    _a.sent();
                    window.dispatchEvent(helpers_2.updateContactPersonEvent);
                    return [2 /*return*/];
            }
        });
    }); };
    var selectedContactPerson = contactPersons.length > 1
        ? contactPersons.find(function (contactPerson) { return contactPerson.code === contactPersonCode; })
        : get_1.default(contactPersons, "[0]", {});
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.AccordionLink, { ref: refs.client, label: "Klant informatie", link: "client", isActive: activeLinks.includes("client"), onClick: function () { return onClick("client"); } },
            react_1.default.createElement(styles_2.AccordionContainer, null,
                react_1.default.createElement(formik_1.Formik, { validationSchema: validation_1.clientValidationSchema, initialValues: {
                        customerCode: "",
                        name: "",
                        name2: "",
                        address: "",
                        postcode: "",
                        city: ""
                    }, onSubmit: function () { return null; } }, function (formikBag) {
                    var handleUpdate = function (field, value) {
                        var _a;
                        if (isLocked) {
                            return;
                        }
                        updateClientData({
                            variables: {
                                where: { code: code },
                                data: (_a = {}, _a[field] = value, _a)
                            },
                            refetchQueries: [
                                {
                                    query: queries_1.GET_CLIENT_DATA,
                                    variables: { where: { code: code } }
                                }
                            ]
                        });
                    };
                    var handleBlur = function (name, value) {
                        if (isLocked) {
                            return;
                        }
                        formikBag.handleBlur({ target: { name: name } });
                        handleUpdate(name, value);
                    };
                    var handleQueryCompete = function (data) {
                        var _a = get_1.default(data, "serviceContract", {}), customerCode = _a.customerCode, name = _a.name, name2 = _a.name2, address = _a.address, postcode = _a.postcode, city = _a.city;
                        formikBag.setValues({
                            customerCode: customerCode || "",
                            name: name || "",
                            name2: name2 || "",
                            address: address || "",
                            postcode: postcode || "",
                            city: city || ""
                        });
                    };
                    return (react_1.default.createElement(react_components_1.Query, { query: queries_1.GET_CLIENT_DATA, variables: {
                            where: { code: code }
                        }, onCompleted: handleQueryCompete, fetchPolicy: "cache-and-network" }, function () { return (react_1.default.createElement(Grid_1.default, { container: true },
                        react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                            react_1.default.createElement(styles_2.AddressContent, null,
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Klantnummer"),
                                    react_1.default.createElement(styles_3.CodeInputValue, null,
                                        react_1.default.createElement(styles_2.FormInput, { placeholder: "HE018", name: "customerCode", onBlur: function (e) {
                                                return handleBlur("customerCode", e.target.value);
                                            }, onChange: formikBag.handleChange, value: formikBag.values.customerCode, helperText: !isLocked &&
                                                formikBag.touched.customerCode &&
                                                formikBag.errors.customerCode, error: !isLocked &&
                                                formikBag.touched.customerCode &&
                                                !!formikBag.errors.customerCode, disabled: isLocked }),
                                        react_1.default.createElement(styles_3.SearchButton, { to: isLocked
                                                ? ""
                                                : helpers_1.urls.check(url + helpers_1.urls.SEARCH_CLIENT) },
                                            react_1.default.createElement(Search_1.default, { fontSize: "inherit" })))),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Naam"),
                                    react_1.default.createElement(styles_2.FormValue, null,
                                        react_1.default.createElement(styles_2.FormInput, { placeholder: "Woning Dak B.V.", name: "name", onBlur: function (e) { return handleBlur("name", e.target.value); }, onChange: formikBag.handleChange, value: formikBag.values.name, helperText: !isLocked &&
                                                formikBag.touched.name &&
                                                formikBag.errors.name, error: !isLocked &&
                                                formikBag.touched.name &&
                                                !!formikBag.errors.name, disabled: isLocked }))),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Naam 2"),
                                    react_1.default.createElement(styles_2.FormValue, null,
                                        react_1.default.createElement(styles_2.FormInput, { placeholder: "...", name: "name2", onBlur: function (e) {
                                                return handleBlur("name2", e.target.value);
                                            }, onChange: formikBag.handleChange, value: formikBag.values.name2, helperText: !isLocked &&
                                                formikBag.touched.name2 &&
                                                formikBag.errors.name2, error: !isLocked &&
                                                formikBag.touched.name2 &&
                                                !!formikBag.errors.name2, disabled: isLocked }))),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Adres"),
                                    react_1.default.createElement(styles_2.FormValue, null,
                                        react_1.default.createElement(styles_2.FormInput, { placeholder: "Gorinchem", name: "address", onBlur: function (e) {
                                                return handleBlur("address", e.target.value);
                                            }, onChange: formikBag.handleChange, value: formikBag.values.address, helperText: !isLocked &&
                                                formikBag.touched.address &&
                                                formikBag.errors.address, error: !isLocked &&
                                                formikBag.touched.address &&
                                                !!formikBag.errors.address, disabled: isLocked }))),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Postcode"),
                                    react_1.default.createElement(styles_2.FormValue, null,
                                        react_1.default.createElement(styles_2.FormInput, { placeholder: "2650JJ", name: "postcode", onBlur: function (e) {
                                                return handleBlur("postcode", e.target.value);
                                            }, onChange: formikBag.handleChange, value: formikBag.values.postcode, helperText: !isLocked &&
                                                formikBag.touched.postcode &&
                                                formikBag.errors.postcode, error: !isLocked &&
                                                formikBag.touched.postcode &&
                                                !!formikBag.errors.postcode, disabled: isLocked }))),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Plaats"),
                                    react_1.default.createElement(styles_2.FormValue, null,
                                        react_1.default.createElement(styles_2.FormInput, { placeholder: "Gorinchem", name: "city", onBlur: function (e) { return handleBlur("city", e.target.value); }, onChange: formikBag.handleChange, value: formikBag.values.city, helperText: !isLocked &&
                                                formikBag.touched.city &&
                                                formikBag.errors.city, error: !isLocked &&
                                                formikBag.touched.city &&
                                                !!formikBag.errors.city, disabled: isLocked }))))),
                        react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                            react_1.default.createElement(styles_2.AddressContent, null,
                                react_1.default.createElement(styles_2.SubTitle, null, "Contractpersoon klant"),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Naam"),
                                    contactPersons.length < 2 ? (react_1.default.createElement(styles_2.FormInput, { value: get_1.default(selectedContactPerson, "firstName", "") + " " + get_1.default(selectedContactPerson, "lastName", ""), onChange: function (e) {
                                            return setContactPersonCode(e.target.value);
                                        }, onBlur: function () {
                                            return selectContactPerson(contactPersonCode);
                                        }, disabled: isLocked })) : (react_1.default.createElement(styles_2.FormSelect, { options: contactPersons.map(function (_a) {
                                            var firstName = _a.firstName, lastName = _a.lastName, code = _a.code;
                                            return ({
                                                label: (firstName || "") + " " + (lastName ||
                                                    ""),
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
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "Telefoonnummer"),
                                    react_1.default.createElement(styles_2.FormInput, { value: get_1.default(selectedContactPerson, "phone", ""), disabled: true })),
                                react_1.default.createElement(styles_2.FormWrapper, null,
                                    react_1.default.createElement(styles_2.FormLabel, null, "E-mailadres"),
                                    react_1.default.createElement(styles_2.FormInput, { value: get_1.default(selectedContactPerson, "email", ""), disabled: true })))))); }));
                }))),
        react_1.default.createElement(styles_1.ModalBox, { component: SearchModal_1.default, path: helpers_1.urls.check(url + helpers_1.urls.SEARCH_CLIENT), parentPath: url, outDelay: 300, onBackdropClick: function () { return history.goBack(); }, props: {
                onSelect: function (data) {
                    selectCustomer(data);
                    history.goBack();
                },
                onClose: history.goBack,
                query: queries_1.FETCH_CUSTOMERS,
                where: !isEmpty_1.default(get_1.default(customerData, "address.city"))
                    ? {
                        city: get_1.default(customerData, "address.city")
                    }
                    : {}
            } })));
};
exports.default = Client;
//# sourceMappingURL=Client.js.map