"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = require("react");
var constants_1 = require("../constants");
var page_1 = require("../provider/page");
var settings_1 = require("../provider/settings");
// this hook generates start and end times for orders without time
function useStartAndEndTimes() {
    var orderViewDate = settings_1.useSettingsState().orderViewDate;
    var currentTime = page_1.usePageState().currentTime;
    return react_1.useMemo(function () {
        var startTime = moment_1.default(orderViewDate)
            .hours(currentTime.hours)
            .minutes(currentTime.minutes);
        var endTime = moment_1.default(startTime).add(constants_1.DEFAULT_WORK_ORDER_DURATION, "hours");
        return [startTime, endTime];
    }, [currentTime, orderViewDate]);
}
exports.useStartAndEndTimes = useStartAndEndTimes;
//# sourceMappingURL=withoutTime.js.map