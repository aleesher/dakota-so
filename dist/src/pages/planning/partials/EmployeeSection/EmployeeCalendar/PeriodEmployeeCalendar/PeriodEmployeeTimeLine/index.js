"use strict";
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
var moment_1 = __importDefault(require("moment"));
var react_1 = __importStar(require("react"));
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var constants_1 = require("../../../../../constants");
var provider_1 = require("../../../../../provider");
var styles_1 = require("../../../../../styles");
var EmployeeOrderGroup_1 = __importDefault(require("./EmployeeOrderGroup"));
var PeriodEmployeeTimeLine = function (_a) {
    var orders = _a.orders;
    var _b = provider_1.useSettingsState(), startDate = _b.startDate, endDate = _b.endDate, timeUnit = _b.timeUnit;
    var viewOrders = react_1.useMemo(function () {
        var from = moment_1.default(startDate).startOf(timeUnit);
        var to = moment_1.default(endDate).endOf(timeUnit);
        return orders.filter(function (o) { return o.endDate.isAfter(from) && o.startDate.isBefore(to); });
    }, [orders, startDate, endDate, timeUnit]);
    var groups = react_1.useMemo(function () {
        var workOrders = viewOrders.map(function (wo) { return (__assign(__assign({}, wo), { groupKey: wo.startDate.format(constants_1.ORDER_GROUP[timeUnit].format) })); });
        var grouped = groupBy_1.default(workOrders, "groupKey");
        return Object.keys(grouped)
            .sort()
            .map(function (key) {
            var date = moment_1.default(key, constants_1.ORDER_GROUP[timeUnit].format);
            return {
                key: key,
                total: grouped[key].length,
                orders: grouped[key],
                startDate: moment_1.default(date).startOf(constants_1.ORDER_GROUP[timeUnit].startOf),
                endDate: moment_1.default(date).endOf(constants_1.ORDER_GROUP[timeUnit].startOf)
            };
        });
    }, [viewOrders]);
    return (react_1.default.createElement(styles_1.TimeLineWrapper, null, groups.map(function (g) { return (react_1.default.createElement(EmployeeOrderGroup_1.default, { key: g.key, orderGroup: g })); })));
};
exports.default = PeriodEmployeeTimeLine;
//# sourceMappingURL=index.js.map