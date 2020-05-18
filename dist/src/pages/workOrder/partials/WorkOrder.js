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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var omit_1 = __importDefault(require("lodash/omit"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var isArray_1 = __importDefault(require("lodash/isArray"));
var map_1 = __importDefault(require("lodash/map"));
var union_1 = __importDefault(require("lodash/union"));
var Loader_1 = __importDefault(require("dakota-portal/dist/components/Loader"));
var WorkOrderTable_1 = __importDefault(require("./WorkOrderTable"));
var components_1 = require("../../../components");
var constants_1 = require("../constants");
var apollo_1 = __importDefault(require("../../../../dev/apollo"));
var queries_1 = require("../queries");
var helpers_1 = require("../helpers");
var helpers_2 = require("../../../helpers");
var styles_1 = require("../../serviceOrder/styles");
var WorkOrder = /** @class */ (function (_super) {
    __extends(WorkOrder, _super);
    function WorkOrder(props) {
        var _this = _super.call(this, props) || this;
        _this.setIsLoading = function (isLoading) {
            _this.setState({ isLoading: isLoading });
        };
        _this.handleFetchWO = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, soCode, updateWoTotal, res, workOrders, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _a = this.props, soCode = _a.soCode, updateWoTotal = _a.updateWoTotal;
                        if (!soCode) return [3 /*break*/, 3];
                        return [4 /*yield*/, apollo_1.default.query({
                                query: queries_1.FETCH_WORK_ORDERS,
                                variables: { soCode: soCode },
                                fetchPolicy: "no-cache"
                            })];
                    case 1:
                        res = _b.sent();
                        workOrders = get_1.default(res, "data.workOrders", []);
                        if (!!workOrders.length) {
                            updateWoTotal(workOrders.length);
                            this.setState({ workOrders: workOrders, isLoading: false });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.handleCreateWO()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setIsLoading(false);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        this.setIsLoading(false);
                        console.warn(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
            var selectedWO;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!values) {
                            this.setState({ selectedWO: {} });
                            return [2 /*return*/];
                        }
                        selectedWO = this.state.selectedWO;
                        if (!!!get_1.default(selectedWO, "id")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleEditWO(values)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.handleCreateWO(values)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleFetchMoment = function (code) { return __awaiter(_this, void 0, void 0, function () {
            var result, moments, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, apollo_1.default.query({
                                query: queries_1.FETCH_MOMENTS,
                                variables: { where: { code: code } }
                            })];
                    case 1:
                        result = _a.sent();
                        moments = get_1.default(result, "data.moments", []);
                        if (!isEmpty_1.default(moments)) {
                            return [2 /*return*/, get_1.default(moments, "[0].id")];
                        }
                        return [2 /*return*/, null];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.handleCreateWO = function (values) { return __awaiter(_this, void 0, void 0, function () {
            var _a, soCode, currentUser, formValues, momentId, data, res, newWorkOrder, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _a = this.props, soCode = _a.soCode, currentUser = _a.currentUser;
                        formValues = {};
                        if (isEmpty_1.default(values)) {
                            formValues = __assign(__assign({}, helpers_1.convertFieldsToNumber(omit_1.default(constants_1.FORM_VALUES, ["employee"]))), { code: helpers_1.generateWorkorderNumber() });
                        }
                        else {
                            formValues = __assign({}, helpers_1.convertFieldsToNumber(omit_1.default(values, constants_1.FORM_FIELDS_TO_IGNORE)));
                        }
                        return [4 /*yield*/, this.handleFetchMoment(constants_1.DEFAULT_LOG_MOMENT_CODE)];
                    case 1:
                        momentId = _b.sent();
                        data = __assign(__assign({}, formValues), { soCode: soCode, serviceOrder: { connect: { code: soCode } }, moment: { connect: { id: momentId } }, status: constants_1.STATUSES.created.status, updatedByUserId: get_1.default(currentUser, "id", "") });
                        return [4 /*yield*/, apollo_1.default.mutate({
                                mutation: queries_1.CREATE_WORK_ORDER,
                                variables: { data: data }
                            })];
                    case 2:
                        res = _b.sent();
                        newWorkOrder = get_1.default(res, "data.createWorkOrder", {});
                        if (!!isEmpty_1.default(newWorkOrder)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.handleFetchWO()];
                    case 3:
                        _b.sent();
                        helpers_2.notification.addNotification({
                            title: "Nieuwe werkorderaanmaak",
                            message: "Wijzigingen succesvol opgeslagen",
                            type: "info"
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        this.setIsLoading(false);
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_3 = _b.sent();
                        this.setIsLoading(false);
                        console.warn(err_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSendOrRetrieveWO = function (wo) { return __awaiter(_this, void 0, void 0, function () {
            var _a, currentUser_1, exportBlockedWOIds_1, workOrders, hasBlockedWO, orderIsSent_1, _b, status_1, code, momentId_1, err_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 4, , 5]);
                        _a = this.props, currentUser_1 = _a.currentUser, exportBlockedWOIds_1 = _a.exportBlockedWOIds;
                        workOrders = (isArray_1.default(wo) ? wo : [wo]).filter(function (wo) { return parseInt(get_1.default(wo, "moment.code", 1), 10) < 45; });
                        hasBlockedWO = workOrders.some(function (workOrder) {
                            return exportBlockedWOIds_1.includes(workOrder.id) || workOrder.isExportBlcoked;
                        });
                        if (hasBlockedWO) {
                            return [2 /*return*/];
                        }
                        this.setIsLoading(true);
                        orderIsSent_1 = false;
                        if (isArray_1.default(wo)) {
                            orderIsSent_1 = workOrders.some(function (wo) { return !wo.orderIsSent; });
                        }
                        else {
                            orderIsSent_1 = !get_1.default(wo, "orderIsSent");
                        }
                        _b = orderIsSent_1
                            ? constants_1.STATUSES.availableOnDakApp
                            : constants_1.STATUSES.created, status_1 = _b.status, code = _b.code;
                        return [4 /*yield*/, this.handleFetchMoment(code)];
                    case 1:
                        momentId_1 = _c.sent();
                        return [4 /*yield*/, Promise.all(__spreadArrays(workOrders.map(function (wo) {
                                return apollo_1.default.mutate(helpers_1.generateUpdateMutation(wo, {
                                    orderIsSent: orderIsSent_1,
                                    status: status_1,
                                    moment: { connect: { id: momentId_1 } },
                                    updatedByUserId: get_1.default(currentUser_1, "id", "")
                                }));
                            })))];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, this.handleFetchWO()];
                    case 3:
                        _c.sent();
                        helpers_2.notification.addNotification({
                            title: "Werkorders succesvol " + (orderIsSent_1 ? "verzonden" : "opgehaald"),
                            message: "Wijzigingen succesvol opgeslagen",
                            type: "info"
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _c.sent();
                        this.setIsLoading(false);
                        console.warn(err_4);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSelectWO = function (wo) { return _this.setState({ selectedWO: wo }); };
        _this.handleEditWO = function (wo) { return __awaiter(_this, void 0, void 0, function () {
            var currentUser, disabledWOs, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.setIsLoading(true);
                        currentUser = this.props.currentUser;
                        disabledWOs = this.handleGetRows(this.state.workOrders);
                        if (disabledWOs.includes(wo.id)) {
                            this.setIsLoading(false);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, apollo_1.default.mutate(helpers_1.generateUpdateMutation(wo, __assign(__assign({}, omit_1.default(wo, __spreadArrays(constants_1.FORM_FIELDS_TO_IGNORE, ["code"]))), { updatedByUserId: get_1.default(currentUser, "id", "") })))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.handleFetchWO()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        this.setIsLoading(false);
                        console.error(err_5.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleDeleteWO = function (wo) { return __awaiter(_this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.setIsLoading(true);
                        return [4 /*yield*/, apollo_1.default.mutate({
                                mutation: queries_1.DELETE_WORK_ORDER,
                                variables: { where: { id: wo.id } }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.handleFetchWO()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        this.setIsLoading(false);
                        console.error(err_6.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.isRowChecked = function (rowData) {
            return parseInt(get_1.default(rowData, "moment.code", 1), 10) > 5;
        };
        _this.handleGetRows = function (workOrders) {
            var getDisabledRows = _this.props.getDisabledRows;
            var logMomentCodes = map_1.default(constants_1.STATUSES, function (_a) {
                var code = _a.code;
                return code;
            });
            var filteredRows = workOrders.filter(function (w) {
                return !logMomentCodes.includes(parseInt(get_1.default(w, "moment.code", 1), 10)) ||
                    parseInt(get_1.default(w, "moment.code", 1), 10) >= 45 ||
                    w.isLocked;
            });
            return union_1.default(getDisabledRows(filteredRows));
        };
        _this.isWOLocked = function (disabledRows) { return function (wo, action) {
            var isLocked = disabledRows.includes(get_1.default(wo, "id")) || get_1.default(wo, "isLocked");
            if (action === "delete") {
                var exportBlockedWOIds = _this.props.exportBlockedWOIds;
                isLocked =
                    isLocked ||
                        exportBlockedWOIds.includes(get_1.default(wo, "id")) ||
                        get_1.default(wo, "isExportBlocked");
            }
            return isLocked;
        }; };
        _this.state = {
            formikValues: constants_1.FORM_VALUES,
            workOrders: [],
            isLoading: true,
            selectedWO: {}
        };
        return _this;
    }
    WorkOrder.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var executeSubscriptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        executeSubscriptions = this.props.executeSubscriptions;
                        executeSubscriptions();
                        return [4 /*yield*/, this.handleFetchWO()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkOrder.prototype.render = function () {
        var _a = this.props, routeProps = _a.routeProps, onOpenMomentHistory = _a.onOpenMomentHistory;
        var _b = this.state, _c = _b.workOrders, workOrders = _c === void 0 ? [] : _c, isLoading = _b.isLoading, selectedWO = _b.selectedWO;
        var disabledRows = this.handleGetRows(workOrders);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            isLoading && (react_1.default.createElement(styles_1.LoaderWrapper, null,
                react_1.default.createElement(Loader_1.default, null))),
            react_1.default.createElement(WorkOrderTable_1.default, { onSelectRow: this.handleSendOrRetrieveWO, workOrders: workOrders, onSubmit: this.handleSubmit, disabledRows: disabledRows, selectedWO: selectedWO, onSelectWO: this.handleSelectWO, onDeleteWO: this.handleDeleteWO, isRowChecked: this.isRowChecked, routeProps: routeProps, onOpenMomentHistory: onOpenMomentHistory, isWOLocked: this.isWOLocked(disabledRows) })));
    };
    return WorkOrder;
}(react_1.default.Component));
exports.default = components_1.withLockEntities({ entity: "workOrder" })(WorkOrder);
//# sourceMappingURL=WorkOrder.js.map