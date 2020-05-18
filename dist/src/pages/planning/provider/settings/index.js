"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var moment_1 = __importDefault(require("moment"));
var immer_1 = require("immer");
var compact_1 = __importDefault(require("lodash/compact"));
var context_1 = require("../context");
var helpers_1 = require("./helpers");
var settingsMaganer_1 = __importDefault(require("./settingsMaganer"));
function useSettingsState() {
    var state = react_1.useContext(context_1.PlanningStateContext);
    return state.settings;
}
exports.useSettingsState = useSettingsState;
function useSettingsDispatch() {
    var dispatch = react_1.useContext(context_1.PlanningDispatchContext);
    var settingsManager = settingsMaganer_1.default();
    function saveSettings() {
        dispatch(function (draft) {
            settingsManager.save(immer_1.original(draft.settings)).then();
        });
    }
    function setShowNonWorkingHours(showNonWorkingHours) {
        dispatch(function (draft) {
            draft.settings.showNonWorkingHours = showNonWorkingHours;
            if (draft.settings.timeUnit === "day") {
                draft.settings.employeeTimeScale = helpers_1.setTimeScale(draft, "employee");
                draft.settings.orderTimeScale = helpers_1.setTimeScale(draft, "order");
            }
            helpers_1.recalculateStartPositionAndWidthOfOrders(draft);
        });
        saveSettings();
    }
    function setCollapseOrders(collapseOrders) {
        dispatch(function (draft) {
            draft.settings.collapseOrders = collapseOrders;
            draft.data.employees.forEach(function (e) {
                e.recalculateLineHeight(collapseOrders);
            });
        });
        saveSettings();
    }
    function setFixedAmountOfEmployees(amount) {
        dispatch(function (draft) {
            draft.settings.fixedAmountOfEmployees = amount;
        });
        saveSettings();
    }
    function setEmployeeCodes(codes, resourceCodes) {
        dispatch(function (draft) {
            draft.settings.employeeCodes = codes;
            draft.settings.employeeResourceCodes = compact_1.default(resourceCodes); // remove null, 0, ""
        });
        saveSettings();
    }
    function setEmployeeViewDate(date) {
        dispatch(function (draft) {
            draft.settings.employeeViewDate = moment_1.default(date).startOf(draft.settings.timeUnit);
            draft.settings.employeeTimeScale = helpers_1.setTimeScale(draft, "employee");
        });
        saveSettings();
    }
    function setFixedAmountOfOrders(amount) {
        dispatch(function (draft) {
            draft.settings.fixedAmountOfOrders = amount;
        });
        saveSettings();
    }
    function setOrderViewDate(date) {
        dispatch(function (draft) {
            draft.settings.orderViewDate = moment_1.default(date).startOf(draft.settings.timeUnit);
            draft.settings.orderTimeScale = helpers_1.setTimeScale(draft, "order");
        });
        saveSettings();
    }
    function fetchSettings() {
        settingsManager.load().then(function (settings) {
            dispatch(function (draft) {
                draft.settings = settings;
                helpers_1.calculateCalendarWidth(draft); // width should be calculated before timescales
                draft.settings.employeeTimeScale = helpers_1.setTimeScale(draft, "employee");
                draft.settings.orderTimeScale = helpers_1.setTimeScale(draft, "order");
                draft.pageState.statusColors = helpers_1.calculateStatusColors(draft);
            });
        });
    }
    function savePreferences(key, data) {
        dispatch(function (draft) {
            var prevMessageCenterStatus = draft.settings.uiPreferences.messageCenter.deadlineWarning;
            draft.settings.uiPreferences[key] = data;
            if (key === "colors") {
                draft.pageState.statusColors = helpers_1.calculateStatusColors(draft);
            }
            // if user disabled message center
            if (key === "messageCenter") {
                if (data.deadlineWarning === false &&
                    prevMessageCenterStatus === true) {
                    helpers_1.recalculateMessageCenterState(draft, false);
                }
                else {
                    helpers_1.recalculateMessageCenterState(draft, true);
                }
            }
        });
        saveSettings();
    }
    function showMessages() {
        dispatch(function (draft) {
            var isOpen = !draft.settings.messageCenter.isOpen;
            helpers_1.recalculateMessageCenterState(draft, isOpen);
        });
        saveSettings();
    }
    function pinMessages() {
        dispatch(function (draft) {
            draft.settings.messageCenter.isPinned = !draft.settings.messageCenter
                .isPinned;
            helpers_1.calculateCalendarWidth(draft);
            draft.settings.employeeTimeScale = helpers_1.setTimeScale(draft, "employee");
            draft.settings.orderTimeScale = helpers_1.setTimeScale(draft, "order");
            helpers_1.recalculateStartPositionAndWidthOfOrders(draft);
        });
        saveSettings();
    }
    function setTimeUnit(unit) {
        // If the user chose the view (weergave) via the dropdown in the top right of the screen.
        // Then the view of the calender will show the current week, current month or current day.
        dispatch(function (draft) {
            draft.settings.timeUnit = unit;
            draft.settings.startDate = moment_1.default().startOf(unit);
            draft.settings.endDate = moment_1.default().endOf(unit);
            draft.settings.employeeViewDate = moment_1.default().startOf(unit);
            draft.settings.orderViewDate = moment_1.default().startOf(unit);
            draft.settings.employeeTimeScale = helpers_1.setTimeScale(draft, "employee");
            draft.settings.orderTimeScale = helpers_1.setTimeScale(draft, "order");
        });
        saveSettings();
    }
    function setStartDate(date) {
        dispatch(function (draft) {
            draft.settings.startDate = moment_1.default(date).startOf("day");
            if (date.isAfter(draft.settings.employeeViewDate)) {
                draft.settings.employeeViewDate = moment_1.default(date);
            }
            if (date.isAfter(draft.settings.orderViewDate)) {
                draft.settings.orderViewDate = moment_1.default(date);
            }
            helpers_1.onChangeDate(draft, date, draft.settings.endDate);
        });
        saveSettings();
    }
    function setEndDate(date) {
        dispatch(function (draft) {
            draft.settings.endDate = moment_1.default(date).endOf("day");
            if (date.isBefore(draft.settings.employeeViewDate)) {
                draft.settings.employeeViewDate = moment_1.default(date);
            }
            if (date.isBefore(draft.settings.orderViewDate)) {
                draft.settings.orderViewDate = moment_1.default(date);
            }
            helpers_1.onChangeDate(draft, draft.settings.startDate, date);
        });
        saveSettings();
    }
    return {
        fetchSettings: fetchSettings,
        setFixedAmountOfEmployees: setFixedAmountOfEmployees,
        setFixedAmountOfOrders: setFixedAmountOfOrders,
        setCollapseOrders: setCollapseOrders,
        setEmployeeCodes: setEmployeeCodes,
        setEmployeeViewDate: setEmployeeViewDate,
        setOrderViewDate: setOrderViewDate,
        savePreferences: savePreferences,
        showMessages: showMessages,
        pinMessages: pinMessages,
        setShowNonWorkingHours: setShowNonWorkingHours,
        setTimeUnit: setTimeUnit,
        setStartDate: setStartDate,
        setEndDate: setEndDate
    };
}
exports.useSettingsDispatch = useSettingsDispatch;
//# sourceMappingURL=index.js.map