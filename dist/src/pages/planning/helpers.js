"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var constants_1 = require("./constants");
function calculateNewStart(start, mon) {
    var delta = mon.getDifferenceFromInitialOffset();
    return start + delta.x;
}
exports.calculateNewStart = calculateNewStart;
function roundUpToQuarterHour(date) {
    var minutes = (Math.ceil(date.minutes() / 15) * 15) % 60;
    date.minutes(minutes);
    if (minutes === 0) {
        date.add(1, "hour");
    }
    return date;
}
exports.roundUpToQuarterHour = roundUpToQuarterHour;
function canDropToEmployee(timeScale, viewDate, delta, object) {
    if (!object || !delta) {
        return false;
    }
    if (viewDate.isBefore(moment_1.default().startOf("day"))) {
        return false;
    }
    var curTimeX = timeScale.getX(moment_1.default());
    var start = object.start + delta.x;
    var endX = start + object.width;
    return curTimeX < endX;
}
exports.canDropToEmployee = canDropToEmployee;
function canDropToUnassignedOrder(item, orderCode) {
    if (item.type !== constants_1.DRAG_ITEM_TYPE.ORDER) {
        return false;
    }
    return (item.order.type === constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER &&
        item.order.code === orderCode &&
        item.totalSelected === 1);
}
exports.canDropToUnassignedOrder = canDropToUnassignedOrder;
function canDropToStack(timeScale, viewDate, end) {
    if (viewDate.isBefore(moment_1.default().startOf("day"))) {
        return false;
    }
    var curTimeX = timeScale.getX(moment_1.default());
    return curTimeX < end;
}
exports.canDropToStack = canDropToStack;
//# sourceMappingURL=helpers.js.map