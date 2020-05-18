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
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var TimeScale_1 = require("./TimeScale");
function calculateCalendarWidth(draft) {
    var calendarWidth = draft.pageState.pageWidth - constants_1.LIST_WIDTH;
    if (draft.settings.messageCenter.isPinned &&
        draft.settings.messageCenter.isOpen) {
        calendarWidth -= constants_1.MESSAGES_MENU_WIDTH;
    }
    draft.pageState.calendarWidth = calendarWidth;
}
exports.calculateCalendarWidth = calculateCalendarWidth;
function calculateStatusColors(draft) {
    return draft.settings.uiPreferences.colors.reduce(function (acc, c) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[c.status] = c.color, _a)));
    }, {});
}
exports.calculateStatusColors = calculateStatusColors;
function calculateTimeUnit(diffD, diffW, diffM) {
    if (diffM > 6) {
        return "year";
    }
    else if (diffW > 6) {
        return "month";
    }
    else if (diffD > 14) {
        return "week";
    }
    else {
        return "day";
    }
}
function setTimeScale(draft, type) {
    return TimeScale_1.buildTimeScale(type === "employee"
        ? draft.settings.employeeViewDate
        : draft.settings.orderViewDate, draft.settings.timeUnit, draft.pageState.calendarWidth, draft.settings.showNonWorkingHours);
}
exports.setTimeScale = setTimeScale;
// on change start or end date
function onChangeDate(draft, startDate, endDate) {
    var diffM = endDate.diff(startDate, "month");
    var diffW = endDate.diff(startDate, "week");
    var diffD = endDate.diff(startDate, "day");
    draft.settings.timeUnit = calculateTimeUnit(diffD, diffW, diffM);
    draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
    draft.settings.orderTimeScale = setTimeScale(draft, "order");
}
exports.onChangeDate = onChangeDate;
function recalculateStartPositionAndWidthOfOrders(draft) {
    draft.data.employees.forEach(function (e) {
        e.getOrders().forEach(function (o) {
            o.recalculateStartAndWidth(draft.settings.employeeTimeScale);
        });
        e.getStacks().forEach(function (s) {
            s.recalculateStartAndWidth(draft.settings.employeeTimeScale);
        });
    });
    draft.data.orders.all().forEach(function (o) {
        o.recalculateStartAndWidth(draft.settings.orderTimeScale);
    });
}
exports.recalculateStartPositionAndWidthOfOrders = recalculateStartPositionAndWidthOfOrders;
function recalculateMessageCenterState(draft, isOpen) {
    draft.settings.messageCenter.isOpen = isOpen;
    calculateCalendarWidth(draft);
    // if messageCenter is pinned
    if (draft.settings.messageCenter.isPinned) {
        draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
        draft.settings.orderTimeScale = setTimeScale(draft, "order");
        recalculateStartPositionAndWidthOfOrders(draft);
    }
}
exports.recalculateMessageCenterState = recalculateMessageCenterState;
//# sourceMappingURL=helpers.js.map