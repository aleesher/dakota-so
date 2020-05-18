"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGE_WIDTH = document.documentElement.clientWidth;
exports.TOP_MENU_HEIGHT = 90;
exports.DIVIDER_HEIGHT = 2;
exports.LIST_WIDTH = 400;
exports.ORDER_HEIGHT = 84;
exports.CALENDAR_HEADER_HEIGHT = 100;
exports.CALENDAR_LINE_HEIGHT = 100;
exports.MESSAGES_MENU_WIDTH = 340;
exports.SCROLL_WIDTH = 960;
exports.CALENDAR_DATE_WIDTH = 220;
exports.SCROLL_BUTTONS_WIDTH = 87;
var SECTION;
(function (SECTION) {
    SECTION[SECTION["NONE"] = 0] = "NONE";
    SECTION[SECTION["EMPLOYEE_LIST"] = 1] = "EMPLOYEE_LIST";
    SECTION[SECTION["EMPLOYEE_CALENDAR"] = 2] = "EMPLOYEE_CALENDAR";
    SECTION[SECTION["WORK_ORDER_LIST"] = 3] = "WORK_ORDER_LIST";
    SECTION[SECTION["WORK_ORDER_CALENDAR"] = 4] = "WORK_ORDER_CALENDAR";
})(SECTION = exports.SECTION || (exports.SECTION = {}));
var SORT;
(function (SORT) {
    SORT[SORT["ASC"] = 0] = "ASC";
    SORT[SORT["DESC"] = 1] = "DESC";
})(SORT = exports.SORT || (exports.SORT = {}));
var CALENDAR_ORDER_TYPE;
(function (CALENDAR_ORDER_TYPE) {
    CALENDAR_ORDER_TYPE["EMPLOYEE_ORDER"] = "employee-order";
    CALENDAR_ORDER_TYPE["UNASSIGNED_ORDER"] = "unassigned-order";
    CALENDAR_ORDER_TYPE["STACK_ORDER"] = "stack-order";
})(CALENDAR_ORDER_TYPE = exports.CALENDAR_ORDER_TYPE || (exports.CALENDAR_ORDER_TYPE = {}));
var DRAG_ITEM_TYPE;
(function (DRAG_ITEM_TYPE) {
    DRAG_ITEM_TYPE["ORDER"] = "order";
    DRAG_ITEM_TYPE["STACK"] = "stack";
})(DRAG_ITEM_TYPE = exports.DRAG_ITEM_TYPE || (exports.DRAG_ITEM_TYPE = {}));
exports.ORDER_GROUP = {
    week: {
        startOf: "day",
        format: "YYYYMMDD"
    },
    month: {
        startOf: "week",
        format: "YYYYWW"
    },
    year: {
        startOf: "month",
        format: "YYYYMM"
    }
};
exports.EMPLOYEE_TABLE_COLUMNS = [
    { key: "code", label: "Nummer" },
    { key: "firstName", label: "Voornaam" },
    { key: "lastName", label: "Achternaam" },
    { key: "costCenterCode", label: "Kostenplaats" },
    { key: "-", label: "Selecteren" }
];
exports.TIME_UNITS = [
    { label: "Dag", value: "day" },
    { label: "Week", value: "week" },
    { label: "Maand", value: "month" },
    { label: "Jaar", value: "year" }
];
exports.ORDER_STYLES = {
    position: "absolute",
    height: exports.ORDER_HEIGHT,
    boxSizing: "border-box",
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "white"
};
exports.ORDER_PREVIEW_OFFSET = 12;
exports.DEFAULT_WORK_ORDER_DURATION = 2;
//# sourceMappingURL=constants.js.map