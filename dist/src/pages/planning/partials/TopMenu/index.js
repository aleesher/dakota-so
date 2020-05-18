"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var react_1 = __importDefault(require("react"));
var settings_1 = require("../../provider/settings");
var components_1 = require("./../../../../components");
var SearchIcon_1 = __importDefault(require("../icons/SearchIcon"));
var SettingsIcon_1 = __importDefault(require("../icons/SettingsIcon"));
var SearchInput_1 = __importDefault(require("./SearchInput"));
var ShowMessagesButton_1 = __importDefault(require("./ShowMessagesButton"));
var styles_1 = require("./styles");
var SwitchesButton_1 = __importDefault(require("./SwitchesButton"));
var TimeUnitInput_1 = __importDefault(require("./TimeUnitInput"));
var TodayButton_1 = __importDefault(require("./TodayButton"));
var PlanningTopMenu = function (_a) {
    var onClickSettingsButton = _a.onClickSettingsButton;
    var _b = settings_1.useSettingsState(), startDate = _b.startDate, endDate = _b.endDate, uiPreferences = _b.uiPreferences;
    var _c = settings_1.useSettingsDispatch(), setStartDate = _c.setStartDate, setEndDate = _c.setEndDate;
    return (react_1.default.createElement(styles_1.PlanningHeader, null,
        react_1.default.createElement(SwitchesButton_1.default, null),
        react_1.default.createElement(styles_1.SearchButton, null,
            react_1.default.createElement(SearchIcon_1.default, { color: Colors_1.default.fiord })),
        react_1.default.createElement(SearchInput_1.default, null),
        react_1.default.createElement(TodayButton_1.default, null),
        react_1.default.createElement(styles_1.DatePeriodLabel, null, "Periode"),
        react_1.default.createElement(components_1.DatePeriodPicker, { startDate: startDate, endDate: endDate, onChangeStartDate: setStartDate, onChangeEndDate: setEndDate }),
        react_1.default.createElement(TimeUnitInput_1.default, null),
        react_1.default.createElement(styles_1.SettingsButton, { onClick: onClickSettingsButton },
            react_1.default.createElement(SettingsIcon_1.default, null)),
        uiPreferences.messageCenter.deadlineWarning && react_1.default.createElement(ShowMessagesButton_1.default, null)));
};
exports.default = PlanningTopMenu;
//# sourceMappingURL=index.js.map