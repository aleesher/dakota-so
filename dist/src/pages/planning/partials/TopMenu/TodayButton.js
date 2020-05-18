"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = __importDefault(require("react"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var settings_1 = require("../../provider/settings");
var CalendarIcon_1 = __importDefault(require("../icons/CalendarIcon"));
var styles_1 = require("./styles");
var TodayButton = function () {
    var _a = settings_1.useSettingsDispatch(), setEmployeeViewDate = _a.setEmployeeViewDate, setOrderViewDate = _a.setOrderViewDate;
    var handleClick = function () {
        setEmployeeViewDate(moment_1.default());
        setOrderViewDate(moment_1.default());
    };
    return (react_1.default.createElement(styles_1.TodayButtonWrapper, { onClick: handleClick },
        react_1.default.createElement(CalendarIcon_1.default, { color: Colors_1.default.dodgerBlue }),
        react_1.default.createElement("span", null, "Vandaag")));
};
exports.default = TodayButton;
//# sourceMappingURL=TodayButton.js.map