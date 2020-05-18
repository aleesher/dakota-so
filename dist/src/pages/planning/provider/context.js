"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = require("react");
var constants_1 = require("../constants");
var OrderCollection_1 = __importDefault(require("./data/collections/OrderCollection"));
var TimeScale_1 = require("./settings/TimeScale");
var defaultSettingsState = {
    showNonWorkingHours: false,
    collapseOrders: false,
    startDate: moment_1.default().startOf("day"),
    endDate: moment_1.default().endOf("day"),
    timeUnit: "day",
    fixedAmountOfEmployees: 4,
    employeeCodes: [],
    employeeResourceCodes: [],
    employeeViewDate: moment_1.default(),
    employeeTimeScale: TimeScale_1.buildTimeScale(moment_1.default(), "day"),
    fixedAmountOfOrders: 10,
    orderViewDate: moment_1.default(),
    orderTimeScale: TimeScale_1.buildTimeScale(moment_1.default(), "day"),
    uiPreferences: {
        orderFields: [],
        messageCenter: {
            deadlineWarning: false,
            notificationLimit: 1,
            showNotifications: false,
            notificationUpdateInterval: 1,
            warningColor: "orange",
            deadlineExpiredColor: "red"
        },
        popupFields: [],
        colors: []
    },
    messageCenter: {
        isOpen: false,
        isPinned: false
    }
};
var defaultPageState = {
    activeSection: constants_1.SECTION.NONE,
    searchText: "",
    pageWidth: document.documentElement.clientWidth,
    calendarWidth: document.documentElement.clientWidth - constants_1.LIST_WIDTH,
    employeeSort: constants_1.SORT.ASC,
    orderSort: constants_1.SORT.ASC,
    selectedOrders: {},
    totalSelected: 0,
    selectedStackId: "",
    isOrderDragging: false,
    fieldOptions: [],
    fieldLabels: {},
    fieldTypes: {},
    statusColors: {}
};
var defaultDataState = {
    employees: [],
    orders: new OrderCollection_1.default([])
};
exports.DEFAULT_PLANNING_STATE = {
    settings: defaultSettingsState,
    pageState: defaultPageState,
    data: defaultDataState
};
exports.PlanningStateContext = react_1.createContext(undefined);
exports.PlanningDispatchContext = react_1.createContext(undefined);
//# sourceMappingURL=context.js.map