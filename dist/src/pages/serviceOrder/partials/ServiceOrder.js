"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var formik_1 = require("formik");
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var debounce_1 = __importDefault(require("lodash/debounce"));
var moment_1 = __importDefault(require("moment"));
var recompose_1 = require("recompose");
var Loader_1 = __importDefault(require("dakota-portal/dist/components/Loader"));
var _1 = require("./");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var validation_1 = __importDefault(require("../validation"));
var constants_1 = require("../constants");
var queries_1 = require("../../../components/withSOActions/queries");
var apollo_1 = __importDefault(require("../../../../dev/apollo"));
var AccessControl_1 = require("../../../components/AccessControl");
var helpers_2 = require("../helpers");
var models_1 = require("../../../components/withSOComments/models");
var helpers_3 = require("../../../components/withSOActions/helpers");
var styles_1 = require("../styles");
var styles_2 = require("../../../components/SearchModal/styles");
var ServiceOrder = /** @class */ (function (_super) {
    __extends(ServiceOrder, _super);
    function ServiceOrder(props) {
        var _this = _super.call(this, props) || this;
        _this.setIsLoading = function (isLoading) {
            _this.setState({ isLoading: isLoading });
        };
        _this.onNext = function () {
            var _a = _this.props, history = _a.history, url = _a.url;
            var formikValues = _this.state.formikValues;
            var soCode = get_1.default(formikValues, "code");
            var description = get_1.default(formikValues, "description");
            history.push(helpers_1.urls.check(url + helpers_1.urls.CREATE_WORK_ORDER), {
                soCode: soCode,
                description: description
            });
        };
        _this.handleSave = function (formikValues) { return __awaiter(_this, void 0, void 0, function () {
            var _a, onExecuteMutation, onAddComments, _b, formIsValid, soId, currentUser;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, onExecuteMutation = _a.onExecuteMutation, onAddComments = _a.onAddComments;
                        _b = this.state, formIsValid = _b.formIsValid, soId = _b.soId, currentUser = _b.currentUser;
                        if (get_1.default(formIsValid, "error")) {
                            alert(get_1.default(formIsValid, "message"));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, onExecuteMutation({
                                formikValues: formikValues,
                                prevFormikValues: formikValues,
                                callback: this.handleOnMutationEnd,
                                serviceOrderId: soId,
                                currentUser: currentUser,
                                onAddComments: onAddComments
                            })];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleOnMutationEnd = function (values) {
            _this.setState(function () { return values; }, function () {
                var _a = _this.state, needsRedirect = _a.needsRedirect, formikValues = _a.formikValues;
                var globalId = get_1.default(formikValues, "globalId");
                var conceptId = get_1.default(formikValues, "conceptId");
                var text = globalId
                    ? "Global ID: " + globalId
                    : "Concept ID: " + conceptId;
                if (needsRedirect) {
                    _this.onNext();
                }
                helpers_1.notification.addNotification({
                    title: "Nieuwe serviceorder creëren",
                    message: "Wijzigingen succesvol opgeslagen. " + text,
                    type: "info"
                });
            });
        };
        _this.handleCheckCreationDate = function () {
            var creationDate = _this.state.creationDate;
            var diff = moment_1.default().diff(moment_1.default(creationDate), "months", true);
            return diff > 2;
        };
        _this.handleGetCurrentUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var user, countryRegionCode_1, country, stateValues, formikValues, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, AccessControl_1.getCurrentUser()];
                    case 1:
                        user = _a.sent();
                        if (!isEmpty_1.default(user)) {
                            countryRegionCode_1 = get_1.default(user, "companyEmployee.countryRegionCode");
                            country = constants_1.COUNTRIES.find(function (_a) {
                                var value = _a.value;
                                return value === countryRegionCode_1;
                            });
                            stateValues = void 0;
                            if (country) {
                                formikValues = this.state.formikValues;
                                stateValues = {
                                    formikValues: __assign(__assign({}, formikValues), { country: get_1.default(country, "value") })
                                };
                            }
                            this.setState(__assign(__assign({}, stateValues), { currentUser: user }));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.warn(err_1, JSON.stringify(err_1, null, 2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSelectCustomer = function (customer) {
            var history = _this.props.history;
            var formikValues = _this.state.formikValues;
            _this.setState({ formikValues: __assign(__assign({}, formikValues), { customer: customer }) });
            history.goBack();
        };
        _this.handleSearchAddress = function () { return __awaiter(_this, void 0, void 0, function () {
            var searchAddress, parsedSearchValue, bagResult, bagNumbers, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        searchAddress = this.state.searchAddress;
                        parsedSearchValue = helpers_2.parseSearchValue(searchAddress, constants_1.BAG_FIELDS);
                        return [4 /*yield*/, apollo_1.default.query({
                                query: queries_1.SEARCH_BAG_NUMBER,
                                variables: {
                                    where: {
                                        AND: parsedSearchValue
                                    }
                                }
                            })];
                    case 1:
                        bagResult = _a.sent();
                        bagNumbers = get_1.default(bagResult, "data.bagNumbers") || [];
                        this.setState({ searchResults: bagNumbers, isLoading: false });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        this.setIsLoading(false);
                        console.warn("err", err_2, JSON.stringify(err_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSelectAddress = function (_a) {
            var bagNumber = _a.address, values = _a.values;
            return __awaiter(_this, void 0, void 0, function () {
                var onGetInfoBoxValues, code, informationBoxValues, customer, id, addressResult, addresses, address, infoBoxValues, err_3;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            this.setState({ isLoading: true });
                            onGetInfoBoxValues = this.props.onGetInfoBoxValues;
                            code = "";
                            informationBoxValues = {};
                            customer = get_1.default(values, "customer", {});
                            id = get_1.default(bagNumber, "id");
                            return [4 /*yield*/, apollo_1.default.query({
                                    query: queries_1.SEARCH_ADDRESS,
                                    variables: {
                                        where: { bagNumberId: id }
                                    }
                                })];
                        case 1:
                            addressResult = _b.sent();
                            addresses = get_1.default(addressResult, "data.addresses");
                            if (!!isEmpty_1.default(addresses)) return [3 /*break*/, 3];
                            address = addresses[0];
                            code = get_1.default(address, "code");
                            if (!get_1.default(address, "subComplex")) return [3 /*break*/, 3];
                            return [4 /*yield*/, onGetInfoBoxValues(address)];
                        case 2:
                            infoBoxValues = _b.sent();
                            informationBoxValues =
                                get_1.default(infoBoxValues, "informationBoxValues") || {};
                            customer = get_1.default(infoBoxValues, "customer") || customer;
                            _b.label = 3;
                        case 3:
                            this.setState({
                                formikValues: __assign(__assign({}, values), { address: __assign(__assign({}, bagNumber), { code: code }), searchAddress: "", customer: customer }),
                                searchAddress: "",
                                searchResults: [],
                                informationBoxValues: informationBoxValues,
                                isLoading: false
                            }, function () {
                                var formikValues = _this.state.formikValues;
                                var onSetCity = _this.props.onSetCity;
                                if (get_1.default(formikValues, "address.city")) {
                                    onSetCity(get_1.default(formikValues, "address.city"));
                                }
                            });
                            return [3 /*break*/, 5];
                        case 4:
                            err_3 = _b.sent();
                            this.setState({ isLoading: true });
                            console.warn("err", err_3, JSON.stringify(err_3));
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        _this.handleSearchSO = function (formikValues) { return __awaiter(_this, void 0, void 0, function () {
            var formIsValid_1, addressResult, addresses, soResult, serviceOrders, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        this.setIsLoading(true);
                        formIsValid_1 = { error: false, message: "" };
                        return [4 /*yield*/, apollo_1.default.query({
                                query: queries_1.SEARCH_ADDRESS,
                                variables: helpers_3.generateAddressQuery(formikValues)
                            })];
                    case 1:
                        addressResult = _a.sent();
                        addresses = get_1.default(addressResult, "data.addresses");
                        if (!!isEmpty_1.default(addresses)) return [3 /*break*/, 3];
                        return [4 /*yield*/, apollo_1.default.query({
                                query: queries_1.SEARCH_SERVICE_ORDER,
                                variables: helpers_3.generateSOQuery(addresses, get_1.default(formikValues, "orderType"))
                            })];
                    case 2:
                        soResult = _a.sent();
                        serviceOrders = get_1.default(soResult, "data.serviceOrders");
                        if (!isEmpty_1.default(serviceOrders)) {
                            formIsValid_1 = { error: false, message: "Serviceorder bestaat al" };
                            alert("Serviceorder bestaat al");
                        }
                        _a.label = 3;
                    case 3:
                        this.setState(function (_a) {
                            var formikValues = _a.formikValues;
                            return ({
                                formikValues: __assign(__assign({}, formikValues), { orderType: get_1.default(formikValues, "orderType"), postalCode: get_1.default(formikValues, "postalCode") }),
                                isLoading: false,
                                formIsValid: formIsValid_1
                            });
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _a.sent();
                        this.setIsLoading(false);
                        console.warn("err", err_4, JSON.stringify(err_4));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.onValueChange = function (formikValues) { return __awaiter(_this, void 0, void 0, function () {
            var _a, searchAddress, stateOrderType, statePostalCode, postalCode, orderType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, searchAddress = _a.searchAddress, stateOrderType = _a.orderType, statePostalCode = _a.postalCode;
                        postalCode = get_1.default(formikValues, "address.postalCode");
                        orderType = get_1.default(formikValues, "address.orderType");
                        if (get_1.default(formikValues, "searchAddress") !== searchAddress) {
                            if (!get_1.default(formikValues, "searchAddress")) {
                                this.setState({ searchResults: [], searchAddress: "" });
                                return [2 /*return*/];
                            }
                            this.setState({
                                searchAddress: get_1.default(formikValues, "searchAddress"),
                                isLoading: true
                            }, this.handleSearchAddress);
                            return [2 /*return*/];
                        }
                        if (!(postalCode &&
                            orderType &&
                            (orderType !== stateOrderType || postalCode !== statePostalCode))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleSearchSO(formikValues)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.handleOpenConfimModal = function (values, handleSubmit) {
            var _a = _this.props, history = _a.history, url = _a.url;
            var currentUser = _this.state.currentUser;
            var userCompany = get_1.default(currentUser, "companyEmployee.company.code");
            var customerCompany = get_1.default(values, "customer.company.code");
            if (userCompany && customerCompany && userCompany !== customerCompany) {
                history.push(helpers_1.urls.check(url + helpers_1.urls.CONFIRM_MODAL));
            }
            else {
                _this.handleSubmit(true, handleSubmit);
            }
        };
        _this.handleChangeCustomer = function (values, handleSubmit) {
            var currentUser = _this.state.currentUser;
            var customer = get_1.default(currentUser, "companyEmployee");
            _this.setState(function () { return ({
                formikValues: __assign(__assign({}, values), { customer: customer }),
                needsRedirect: true
            }); }, handleSubmit);
        };
        _this.handleSubmit = function (needsRedirect, handleSubmit) {
            _this.setState({ needsRedirect: needsRedirect }, handleSubmit);
        };
        _this.handleValidation = function (isValid, errors, isSubmitting) {
            var submitting = _this.state.isSubmitting;
            if (!isValid && !isEmpty_1.default(errors) && isSubmitting && !submitting) {
                _this.setState({ isSubmitting: isSubmitting }, function () {
                    helpers_1.notification.addNotification({
                        type: "danger",
                        title: "Fout",
                        message: "Niet alle velden zijn ingevuld"
                    });
                });
            }
        };
        _this.state = constants_1.INITIAL_STATE;
        _this.onValueChange = debounce_1.default(_this.onValueChange, 1000);
        return _this;
    }
    ServiceOrder.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var creationDate, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        creationDate = this.state.creationDate;
                        if (creationDate && this.handleCheckCreationDate()) {
                            this.setState(function (_a) {
                                var formikValues = _a.formikValues;
                                return ({
                                    formikValues: __assign(__assign({}, formikValues), { customer: { name: "Geanonimiseerd" } })
                                });
                            });
                        }
                        return [4 /*yield*/, this.handleGetCurrentUser()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        console.warn(err_5, JSON.stringify(err_5, null, 2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ServiceOrder.prototype.render = function () {
        var _this = this;
        var _a = this.state, formikValues = _a.formikValues, searchResults = _a.searchResults, currentUser = _a.currentUser, isLoading = _a.isLoading, informationBoxValues = _a.informationBoxValues;
        var _b = this.props, problemComments = _b.problemComments, internalComments = _b.internalComments, onAddComment = _b.onAddComment, onDeleteComment = _b.onDeleteComment, commentsLoading = _b.isLoading;
        var _c = this.props, history = _c.history, url = _c.url;
        return (react_1.default.createElement(formik_1.Formik, { onSubmit: function (data, err) { return _this.handleSave(data); }, validationSchema: validation_1.default, initialValues: formikValues, enableReinitialize: true }, function (_a) {
            var values = _a.values, handleChange = _a.handleChange, errors = _a.errors, touched = _a.touched, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, isValid = _a.isValid, isSubmitting = _a.isSubmitting;
            var validation = { errors: errors, touched: touched };
            _this.onValueChange(values);
            _this.handleValidation(isValid, errors, isSubmitting);
            return (react_1.default.createElement("div", null,
                (isLoading || commentsLoading) && (react_1.default.createElement(styles_1.LoaderWrapper, null,
                    react_1.default.createElement(Loader_1.default, null))),
                react_1.default.createElement(_1.Details, { title: "Serviceorder details", onChange: handleChange, values: values, errors: validation, onBlur: handleBlur, informationBoxValues: informationBoxValues }),
                react_1.default.createElement(_1.Address, { title: "Adres informatie", onChange: handleChange, values: values, errors: validation, onBlur: handleBlur, searchResults: searchResults, onSelectAddress: _this.handleSelectAddress }),
                react_1.default.createElement(_1.ClientInformation, { title: "Klant informatie", onChange: handleChange, values: values, errors: validation, onBlur: handleBlur, url: url }),
                react_1.default.createElement(_1.ReportingInformation, { title: "Melder informatie", onChange: handleChange, values: values, errors: validation, onBlur: handleBlur }),
                react_1.default.createElement(_1.CommentCard, { title: "Probleem Omschrijving", type: models_1.CommentCardTypes.Problem_Text, user: currentUser, onDeleteComment: onDeleteComment, onAddComment: onAddComment, values: values, comments: problemComments }),
                react_1.default.createElement(_1.CommentCard, { title: "Inteme tekst", type: models_1.CommentCardTypes.Internal_Text, user: currentUser, onDeleteComment: onDeleteComment, onAddComment: onAddComment, values: values, comments: internalComments }),
                react_1.default.createElement(styles_1.ButtonWrapper, null,
                    react_1.default.createElement(styles_1.TransparentButton, { onClick: function () { return _this.handleSubmit(false, handleSubmit); } }, "Opslaan"),
                    react_1.default.createElement(styles_1.FilledButton, { onClick: function () {
                            return _this.handleOpenConfimModal(values, handleSubmit);
                        } },
                        "Volgende",
                        react_1.default.createElement(styles_1.ArrowIcon, null))),
                react_1.default.createElement(styles_2.ModalBox, { component: components_1.ConfirmModal, path: helpers_1.urls.check(url + helpers_1.urls.CONFIRM_MODAL), parentPath: url, outDelay: 300, onBackdropClick: function () { return history.goBack(); }, props: {
                        onConfirm: function () { return _this.handleSubmit(true, handleSubmit); },
                        onCancel: function () {
                            return _this.handleChangeCustomer(values, handleSubmit);
                        },
                        onClose: history.goBack,
                        text: "De klant heeft een andere dakpartner, wilt u doorgaan?"
                    }, width: "auto" })));
        }));
    };
    return ServiceOrder;
}(react_1.default.Component));
exports.default = recompose_1.compose(components_1.withSOActions(), components_1.withSOComments())(ServiceOrder);
//# sourceMappingURL=ServiceOrder.js.map