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
var react_1 = __importDefault(require("react"));
var use_immer_1 = require("use-immer");
var context_1 = require("./context");
var PlanningContextProvider = function (_a) {
    var children = _a.children;
    var _b = use_immer_1.useImmer(__assign({}, context_1.DEFAULT_PLANNING_STATE)), state = _b[0], dispatch = _b[1];
    return (react_1.default.createElement(context_1.PlanningStateContext.Provider, { value: state },
        react_1.default.createElement(context_1.PlanningDispatchContext.Provider, { value: dispatch }, children)));
};
exports.PlanningContextProvider = PlanningContextProvider;
var settings_1 = require("./settings");
exports.useSettingsState = settings_1.useSettingsState;
exports.useSettingsDispatch = settings_1.useSettingsDispatch;
var page_1 = require("./page");
exports.usePageState = page_1.usePageState;
exports.usePageDispatch = page_1.usePageDispatch;
var data_1 = require("./data");
exports.useDataState = data_1.useDataState;
exports.useDataDispatch = data_1.useDataDispatch;
//# sourceMappingURL=index.js.map