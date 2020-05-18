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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var moment_1 = __importDefault(require("moment"));
var react_hooks_1 = require("@apollo/react-hooks");
var get_1 = __importDefault(require("lodash/get"));
var omit_1 = __importDefault(require("lodash/omit"));
var constants_1 = require("../constants");
var queries_1 = require("../../queries");
var TimeScale_1 = require("./TimeScale");
function clearSettings(settings) {
    // remove timescales
    return omit_1.default(settings, ["employeeTimeScale", "orderTimeScale"]);
}
function parseSettings(response) {
    var pageSettings = get_1.default(response, "data.currentUser.planningPageSettings", {});
    var settings = __assign(__assign({}, constants_1.DEFAULT_SETTINGS), pageSettings);
    var timeUnit = settings.timeUnit;
    // dates
    settings.startDate = moment_1.default(get_1.default(settings, "startDate")).startOf(timeUnit);
    settings.endDate = moment_1.default(get_1.default(settings, "endDate")).endOf(timeUnit);
    settings.employeeViewDate = moment_1.default(get_1.default(settings, "employeeViewDate"));
    settings.orderViewDate = moment_1.default(get_1.default(settings, "orderViewDate"));
    // timescales
    settings.employeeTimeScale = TimeScale_1.buildTimeScale(settings.employeeViewDate, timeUnit);
    settings.orderTimeScale = TimeScale_1.buildTimeScale(settings.orderViewDate, timeUnit);
    return settings;
}
var useSettingsManager = function () {
    var client = react_hooks_1.useApolloClient();
    return react_1.useMemo(function () {
        var load = function () {
            return client
                .query({ query: queries_1.FETCH_PLANNING_PAGE_SETTINGS })
                .then(parseSettings);
        };
        var save = function (settings) {
            return client.mutate({
                mutation: queries_1.SAVE_PLANNING_PAGE_SETTINGS,
                variables: {
                    settings: clearSettings(settings)
                }
            });
        };
        return {
            load: load,
            save: save
        };
    }, []);
};
exports.default = useSettingsManager;
//# sourceMappingURL=settingsMaganer.js.map