"use strict";
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
var provider_1 = require("../../../provider");
var styles_1 = require("./styles");
exports.EmployeeCurrentTime = function () {
    var _a = provider_1.useSettingsState(), showNonWorkingHours = _a.showNonWorkingHours, employeeViewDate = _a.employeeViewDate, employeeTimeScale = _a.employeeTimeScale;
    var _b = provider_1.usePageState(), calendarWidth = _b.calendarWidth, currentTime = _b.currentTime;
    var _c = react_1.useState(0), position = _c[0], setPosition = _c[1];
    react_1.useEffect(function () {
        var hours = currentTime.hours, minutes = currentTime.minutes;
        setPosition(employeeTimeScale.getX(moment_1.default(employeeViewDate)
            .hours(hours)
            .minutes(minutes)));
    }, [
        employeeTimeScale,
        showNonWorkingHours,
        calendarWidth,
        employeeViewDate,
        currentTime
    ]);
    return react_1.default.createElement(styles_1.StyledCurrentTimeline, { x: position });
};
exports.OrderCurrentTime = function () {
    var _a = provider_1.useSettingsState(), showNonWorkingHours = _a.showNonWorkingHours, orderViewDate = _a.orderViewDate, orderTimeScale = _a.orderTimeScale;
    var _b = provider_1.usePageState(), calendarWidth = _b.calendarWidth, currentTime = _b.currentTime;
    var _c = react_1.useState(0), position = _c[0], setPosition = _c[1];
    react_1.useEffect(function () {
        var hours = currentTime.hours, minutes = currentTime.minutes;
        setPosition(orderTimeScale.getX(moment_1.default(orderViewDate)
            .hours(hours)
            .minutes(minutes)));
    }, [
        orderTimeScale,
        showNonWorkingHours,
        calendarWidth,
        orderViewDate,
        currentTime
    ]);
    return react_1.default.createElement(styles_1.StyledCurrentTimeline, { x: position });
};
//# sourceMappingURL=index.js.map