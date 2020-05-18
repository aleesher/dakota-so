"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var settings_1 = require("../../../../provider/settings");
var Collapsed_1 = __importDefault(require("../../../components/OrderStack/Collapsed"));
var FullSize_1 = __importDefault(require("../../../components/OrderStack/FullSize"));
var OrderStacks = function (_a) {
    var orderStacks = _a.orderStacks;
    var _b = settings_1.useSettingsState(), collapseOrders = _b.collapseOrders, employeeViewDate = _b.employeeViewDate;
    var viewStacks = react_1.useMemo(function () {
        return orderStacks.filter(function (o) {
            return o.startTime.format("YYYYMMDD") === employeeViewDate.format("YYYYMMDD");
        });
    }, [orderStacks, employeeViewDate]);
    return (react_1.default.createElement(react_1.default.Fragment, null, viewStacks.map(function (s) {
        return collapseOrders ? (react_1.default.createElement(Collapsed_1.default, { key: s.id, stack: s })) : (react_1.default.createElement(FullSize_1.default, { key: s.id, stack: s }));
    })));
};
exports.default = OrderStacks;
//# sourceMappingURL=OrderStacks.js.map