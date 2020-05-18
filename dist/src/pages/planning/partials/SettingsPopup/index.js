"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var CustomPopup_1 = __importDefault(require("../components/CustomPopup"));
var ColorSettings_1 = __importDefault(require("./ColorSettings"));
var DeadlineSettings_1 = __importDefault(require("./DeadlineSettings"));
var InfoboxSettings_1 = __importDefault(require("./InfoboxSettings"));
var WorkOrderSettings_1 = __importDefault(require("./WorkOrderSettings"));
var styles_1 = require("./styles");
var TABS = [
    {
        title: "Werkorder tekst",
        component: WorkOrderSettings_1.default
    },
    {
        title: "Deadline",
        component: DeadlineSettings_1.default
    },
    {
        title: "Infobox tekst",
        component: InfoboxSettings_1.default
    },
    {
        title: "Kleur Instellingen",
        component: ColorSettings_1.default
    }
];
var SettingsPopup = function (_a) {
    var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, onClose = _a.onClose, onSave = _a.onSave;
    var _c = react_1.useState(TABS[0]), activeTab = _c[0], setActiveTab = _c[1];
    var Content = activeTab.component;
    return (react_1.default.createElement(CustomPopup_1.default, { title: "Algemene Instellingen", open: isOpen, onClose: onClose },
        react_1.default.createElement("div", null,
            react_1.default.createElement(styles_1.SettingsTabsWrapper, null, TABS.map(function (tab) { return (react_1.default.createElement(styles_1.SettingsTab, { key: tab.title, isActive: tab === activeTab, onClick: function () { return setActiveTab(tab); } }, tab.title)); })),
            react_1.default.createElement(Content, { onSave: onSave }))));
};
exports.default = SettingsPopup;
//# sourceMappingURL=index.js.map