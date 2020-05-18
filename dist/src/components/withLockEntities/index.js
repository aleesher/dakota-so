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
var difference_1 = __importDefault(require("lodash/difference"));
var union_1 = __importDefault(require("lodash/union"));
var apollo_1 = __importDefault(require("../../../dev/apollo"));
var queries_1 = require("./queries");
var constants_1 = require("./constants");
function withLockEntities(_a) {
    var entity = _a.entity;
    return function (WrappedComponent) {
        var WrappedClass = /** @class */ (function (_super) {
            __extends(WrappedClass, _super);
            function WrappedClass() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    serviceOrdersIds: [],
                    serviceContractsIds: [],
                    workOrdersIds: [],
                    exportBlockedWOIds: []
                };
                _this.executeSubscriptions = function () {
                    _this.lockSubscription = _this.runSubscription(queries_1.ON_LOCK_SUB(entity), "LOCK");
                    _this.unlockSubscription = _this.runSubscription(queries_1.ON_UNLOCK_SUB(entity), "UNLOCK");
                    // if (entity === "workOrder") {
                    //   this.lockExportSubscription = this.runSubscription(
                    //     ON_LOCK_EXPORT_SUB,
                    //     "LOCK_EXPORT"
                    //   );
                    //
                    //   this.unlockExportSubscription = this.runSubscription(
                    //     ON_UNLOCK_EXPORT_SUB,
                    //     "UNLOCK_EXPORT"
                    //   );
                    // }
                };
                _this.unsubscribe = function () {
                    if (_this.lockSubscription) {
                        _this.lockSubscription.unsubscribe();
                    }
                    if (_this.unlockSubscription) {
                        _this.unlockSubscription.unsubscribe();
                    }
                    if (entity === "workOrder") {
                        if (_this.lockExportSubscription) {
                            _this.lockExportSubscription.unsubscribe();
                        }
                        if (_this.unlockExportSubscription) {
                            _this.unlockExportSubscription.unsubscribe();
                        }
                    }
                };
                _this.runSubscription = function (query, type) {
                    return apollo_1.default.subscribe({ query: query }).subscribe({
                        next: function (data) {
                            var _a;
                            var result = _this.getSubscriptionResult(data, type);
                            if (type === "LOCK_EXPORT" || type === "UNLOCK_EXPORT") {
                                _this.setState({ exportBlockedWOIds: result });
                            }
                            else {
                                _this.setState((_a = {}, _a[entity + "sIds"] = result, _a));
                            }
                        },
                        error: function (err) {
                            console.log("subscription err", err);
                        }
                    });
                };
                _this.getQuery = function (type) {
                    return type === "LOCK" ? queries_1.ON_LOCK_MUTATION : queries_1.ON_UNLOCK_MUTATION;
                };
                _this.getSubscriptionResult = function (data, type) {
                    var key = type.includes("EXPORT")
                        ? "exportBlockedWOIds"
                        : entity + "sIds";
                    var result = get_1.default(data, "data." + entity + "_" + type + ".data." + key, []);
                    var ids = _this.state[key];
                    if (type.includes("UNLOCK")) {
                        return difference_1.default(ids, result);
                    }
                    return union_1.default(__spreadArrays(ids, result));
                };
                _this.handleLockEntity = function (type, variables) {
                    if (variables === void 0) { variables = {}; }
                    return __awaiter(_this, void 0, void 0, function () {
                        var mutation, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    mutation = this.getQuery(type);
                                    return [4 /*yield*/, apollo_1.default.mutate({ mutation: mutation, variables: variables })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    console.log("err", err_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                _this.getDisabledRows = function (data) {
                    var ids = _this.state[entity + "sIds"] || [];
                    var disaledRows = data
                        .filter(function (item) { return item.isLocked; })
                        .map(function (item) { return item.id; });
                    return union_1.default(disaledRows, ids);
                };
                return _this;
            }
            WrappedClass.prototype.componentWillUnmount = function () {
                this.unsubscribe();
            };
            WrappedClass.prototype.render = function () {
                var exportBlockedWOIds = this.state.exportBlockedWOIds;
                var props = __assign(__assign({}, this.props), { onLockEntity: this.handleLockEntity, getDisabledRows: this.getDisabledRows, executeSubscriptions: this.executeSubscriptions, userId: constants_1.USER_ID, exportBlockedWOIds: exportBlockedWOIds });
                return react_1.default.createElement(WrappedComponent, __assign({}, props));
            };
            return WrappedClass;
        }(react_1.default.PureComponent));
        return WrappedClass;
    };
}
exports.default = withLockEntities;
//# sourceMappingURL=index.js.map