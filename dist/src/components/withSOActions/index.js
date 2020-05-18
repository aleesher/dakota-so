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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var get_1 = __importDefault(require("lodash/get"));
var set_1 = __importDefault(require("lodash/set"));
var omit_1 = __importDefault(require("lodash/omit"));
var helpers_1 = require("../../helpers");
var apollo_1 = __importDefault(require("../../../dev/apollo"));
var queries_1 = require("./queries");
var helpers_2 = require("./helpers");
var constants_1 = require("./constants");
function withSOActions() {
    return function (WrappedComponent) {
        var WrappedClass = /** @class */ (function (_super) {
            __extends(WrappedClass, _super);
            function WrappedClass() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    isLoading: false
                };
                _this.setIsLoading = function (isLoading) {
                    _this.setState({ isLoading: isLoading });
                };
                _this.handleExecuteMutation = function (_a) {
                    var formikValues = _a.formikValues, callback = _a.callback, serviceOrderId = _a.serviceOrderId, prevFormikValues = _a.prevFormikValues, currentUser = _a.currentUser, onAddComments = _a.onAddComments, _b = _a.showLoader, showLoader = _b === void 0 ? true : _b;
                    return __awaiter(_this, void 0, void 0, function () {
                        var timestamp, error, reporter, reporterCode, serviceOrderCode, _c, globalId, conceptId, isPublished, values, _d, soId, soCode, creationDate, err_1;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    _e.trys.push([0, 5, , 6]);
                                    if (showLoader) {
                                        this.setIsLoading(true);
                                    }
                                    timestamp = moment_1.default().unix();
                                    error = false;
                                    return [4 /*yield*/, this.handleCreateOrUpdateReporter(formikValues, timestamp)];
                                case 1:
                                    reporter = _e.sent();
                                    if (reporter.error) {
                                        error = reporter.error;
                                    }
                                    reporterCode = reporter.code;
                                    serviceOrderCode = get_1.default(prevFormikValues, "code", "SO" + timestamp);
                                    _c = this.handleGenerateId(formikValues, error, timestamp, prevFormikValues), globalId = _c.globalId, conceptId = _c.conceptId, isPublished = _c.isPublished;
                                    values = __assign(__assign({}, omit_1.default(formikValues, constants_1.FORMIK_FIELDS_TO_IGNORE)), { 
                                        // serviceLocationCode: addressCode,
                                        reporter: reporterCode, customerCode: get_1.default(formikValues, "customer.code", ""), countryCode: get_1.default(formikValues, "country", get_1.default(formikValues, "countryCode", "")), code: serviceOrderCode, globalId: globalId,
                                        conceptId: conceptId,
                                        isPublished: isPublished, status: "Openstaand" });
                                    return [4 /*yield*/, this.handleCreateOrUpdateSO(values, isPublished, serviceOrderId)];
                                case 2:
                                    _d = _e.sent(), soId = _d.id, soCode = _d.code, creationDate = _d.creationDate;
                                    if (!onAddComments) return [3 /*break*/, 4];
                                    return [4 /*yield*/, onAddComments(soCode, get_1.default(currentUser, "companyEmployee.code", ""))];
                                case 3:
                                    _e.sent();
                                    _e.label = 4;
                                case 4:
                                    if (callback) {
                                        callback({
                                            soId: soId,
                                            creationDate: creationDate,
                                            isLoading: false,
                                            formikValues: __assign(__assign({}, formikValues), { globalId: globalId,
                                                conceptId: conceptId, code: soCode, reporter: __assign(__assign({}, get_1.default(formikValues, "reporter")), { code: reporterCode }) })
                                        });
                                    }
                                    if (showLoader) {
                                        this.setIsLoading(false);
                                    }
                                    return [3 /*break*/, 6];
                                case 5:
                                    err_1 = _e.sent();
                                    console.warn(err_1, JSON.stringify(err_1));
                                    if (showLoader) {
                                        this.setIsLoading(false);
                                    }
                                    helpers_1.notification.addNotification({
                                        type: "danger",
                                        message: "Er is een fout opgetreden"
                                    });
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                };
                _this.handleCreateOrUpdateSO = function (values, isPublished, id) { return __awaiter(_this, void 0, void 0, function () {
                    var mutation, soMutation, res, soId, code, creationDate, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                mutation = !id
                                    ? {
                                        type: queries_1.CREATE_SERVICE_ORDER,
                                        field: "createServiceOrder"
                                    }
                                    : {
                                        type: queries_1.UPDATE_SERVICE_ORDER,
                                        field: "updateServiceOrder"
                                    };
                                values = omit_1.default(values, ["id", "serviceLocation"]);
                                soMutation = __rest(helpers_2.generateCreationMutation(mutation.type, values, "", constants_1.SO_CONNECTED_FIELDS), []);
                                set_1.default(soMutation, "variables.data.isPublished", isPublished);
                                if (!!id) {
                                    set_1.default(soMutation, "variables.where", { id: id });
                                }
                                return [4 /*yield*/, apollo_1.default.mutate(soMutation)];
                            case 1:
                                res = _a.sent();
                                soId = get_1.default(res, "data." + mutation.field + ".id");
                                code = get_1.default(res, "data." + mutation.field + ".code");
                                creationDate = get_1.default(res, "data." + mutation.field + ".createdAt");
                                return [2 /*return*/, { id: soId, code: code, creationDate: creationDate }];
                            case 2:
                                err_2 = _a.sent();
                                console.warn(err_2, JSON.stringify(err_2, null, 2));
                                return [2 /*return*/, {}];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                _this.handleGenerateId = function (formikValues, error, timestamp, prevFormikValues) {
                    var globalId = get_1.default(prevFormikValues, "globalId");
                    var conceptId = get_1.default(prevFormikValues, "conceptId");
                    var isPublished = false;
                    if (get_1.default(formikValues, "customer.id") && !error && !globalId) {
                        globalId = helpers_2.generateGlobalId(timestamp, formikValues);
                    }
                    else if (!conceptId) {
                        conceptId = "C" + timestamp;
                    }
                    if (globalId) {
                        isPublished = true;
                    }
                    return { conceptId: conceptId, globalId: globalId, isPublished: isPublished };
                };
                _this.handleCreateAddress = function (formikValues, timestamp) { return __awaiter(_this, void 0, void 0, function () {
                    var addressCode, bagNumberId, _a, error, addressMutation, code, res;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                addressCode = get_1.default(formikValues, "address.code");
                                if (addressCode) {
                                    return [2 /*return*/, { error: false, code: addressCode, formikValues: formikValues }];
                                }
                                bagNumberId = get_1.default(formikValues, "address.id");
                                set_1.default(formikValues, "address.bagNumberId", bagNumberId);
                                set_1.default(formikValues, "address.id", null);
                                set_1.default(formikValues, "address.code", "AD" + timestamp);
                                _a = helpers_2.generateCreationMutation(queries_1.CREATE_ADDRESS, formikValues, "address"), error = _a.error, addressMutation = __rest(_a, ["error"]);
                                if (!!error) return [3 /*break*/, 2];
                                return [4 /*yield*/, apollo_1.default.mutate(addressMutation)];
                            case 1:
                                res = _b.sent();
                                code = get_1.default(res, "data.createAddress.code");
                                _b.label = 2;
                            case 2: return [2 /*return*/, { code: code, error: error, formikValues: formikValues }];
                        }
                    });
                }); };
                _this.handleCreateOrUpdateReporter = function (formikValues, timestamp) { return __awaiter(_this, void 0, void 0, function () {
                    var code, isTrackAndTraceActive, mutation, _a, error, reporterMutation, res;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                code = get_1.default(formikValues, "reporter.code");
                                isTrackAndTraceActive = get_1.default(formikValues, "reporter.isTrackAndTraceActive");
                                mutation = !code
                                    ? {
                                        type: queries_1.CREATE_REPORTER,
                                        field: "createReporter"
                                    }
                                    : {
                                        type: queries_1.UPDATE_REPORTER,
                                        field: "updateReporter"
                                    };
                                _a = helpers_2.generateCreationMutation(mutation.type, get_1.default(formikValues, "reporter", {}), "", [""]), error = _a.error, reporterMutation = __rest(_a, ["error"]);
                                if (!!code) {
                                    set_1.default(reporterMutation.variables, "where", { code: code });
                                }
                                else {
                                    set_1.default(reporterMutation.variables, "data.code", "RE" + timestamp);
                                }
                                set_1.default(reporterMutation.variables, "data.isTrackAndTraceActive", !!isTrackAndTraceActive);
                                if (!!error) return [3 /*break*/, 2];
                                return [4 /*yield*/, apollo_1.default.mutate(reporterMutation)];
                            case 1:
                                res = _b.sent();
                                if (!code) {
                                    code = get_1.default(res, "data." + mutation.field + ".code");
                                }
                                _b.label = 2;
                            case 2: return [2 /*return*/, { code: code, error: error }];
                        }
                    });
                }); };
                _this.getInformationBoxValues = function (address) { return __awaiter(_this, void 0, void 0, function () {
                    var informationBoxValues, customer, subComplex, complexCode, result, err_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                informationBoxValues = void 0;
                                customer = void 0;
                                subComplex = get_1.default(address, "subComplex");
                                complexCode = get_1.default(subComplex, "complex.code");
                                if (!complexCode) return [3 /*break*/, 2];
                                return [4 /*yield*/, apollo_1.default.query({
                                        query: queries_1.LEAKAGES_PER_THREE_MONTHS,
                                        variables: {
                                            where: { complexCode: complexCode }
                                        }
                                    })];
                            case 1:
                                result = _a.sent();
                                informationBoxValues = get_1.default(result, "data.leakagesPerThreeMonths", {});
                                _a.label = 2;
                            case 2:
                                if (get_1.default(subComplex, "infoContactPerson")) {
                                    customer = get_1.default(subComplex, "infoContactPerson");
                                }
                                return [2 /*return*/, { informationBoxValues: informationBoxValues, customer: customer }];
                            case 3:
                                err_3 = _a.sent();
                                console.warn(err_3, JSON.stringify(err_3));
                                return [2 /*return*/, null];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                _this.getSOCustomer = function (serviceOrder) { return __awaiter(_this, void 0, void 0, function () {
                    var customerCode, res, err_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                customerCode = get_1.default(serviceOrder, "customerCode");
                                if (!!!customerCode) return [3 /*break*/, 2];
                                return [4 /*yield*/, apollo_1.default.query({
                                        query: queries_1.FETCH_SO_CUSTOMER,
                                        variables: { where: { code: customerCode } }
                                    })];
                            case 1:
                                res = _a.sent();
                                return [2 /*return*/, get_1.default(res, "data.company", {})];
                            case 2: return [2 /*return*/, {}];
                            case 3:
                                err_4 = _a.sent();
                                console.error(err_4.message);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                _this.getSOAddress = function (code) { return __awaiter(_this, void 0, void 0, function () {
                    var res, err_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, apollo_1.default.query({
                                        query: queries_1.FETCH_ADDRESS,
                                        variables: { where: { code: code } }
                                    })];
                            case 1:
                                res = _a.sent();
                                return [2 /*return*/, get_1.default(res, "data.address")];
                            case 2:
                                err_5 = _a.sent();
                                console.error(err_5.message);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return _this;
            }
            WrappedClass.prototype.render = function () {
                var isLoading = this.state.isLoading;
                var props = __assign(__assign({}, this.props), { isSOLoading: isLoading, onExecuteMutation: this.handleExecuteMutation, onGetInfoBoxValues: this.getInformationBoxValues, onCreateOrUpdateReporter: this.handleCreateOrUpdateReporter, onCreateOrUpdateSO: this.handleCreateOrUpdateSO, onCreateAddress: this.handleCreateAddress, onGenerateId: this.handleGenerateId, onGetSOCustomer: this.getSOCustomer, onGetSOAddress: this.getSOAddress });
                return react_1.default.createElement(WrappedComponent, __assign({}, props));
            };
            return WrappedClass;
        }(react_1.default.PureComponent));
        return WrappedClass;
    };
}
exports.default = withSOActions;
//# sourceMappingURL=index.js.map