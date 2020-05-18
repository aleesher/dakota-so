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
var hooks_1 = require("../../../../hooks");
var settings_1 = require("../../../../provider/settings");
var CommonOrder_1 = __importDefault(require("../../../components/DayOrder/CommonOrder"));
var WorkOrderWithoutTime = function (_a) {
    var workOrder = _a.workOrder;
    var orderTimeScale = settings_1.useSettingsState().orderTimeScale;
    var _b = hooks_1.useStartAndEndTimes(), startTime = _b[0], endTime = _b[1];
    var order = react_1.useMemo(function () {
        var start = orderTimeScale.getX(startTime);
        return __assign(__assign({}, workOrder), { startTime: startTime,
            endTime: endTime,
            start: start });
    }, [workOrder, startTime, endTime]);
    return react_1.default.createElement(CommonOrder_1.default, { workOrder: order });
};
exports.default = WorkOrderWithoutTime;
//# sourceMappingURL=WorkOrderWithoutTime.js.map