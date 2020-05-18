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
var cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
var settings_1 = require("../../provider/settings");
var CustomColorPicker_1 = __importDefault(require("./components/CustomColorPicker"));
var CustomCheckbox_1 = __importDefault(require("./components/CustomCheckbox"));
var NumberInput_1 = __importDefault(require("./components/NumberInput"));
var styles_1 = require("./styles");
var LABEL_WIDTH = 269;
var DeadlineSettings = function (_a) {
    var onSave = _a.onSave;
    var uiPreferences = settings_1.useSettingsState().uiPreferences;
    var savePreferences = settings_1.useSettingsDispatch().savePreferences;
    var _b = react_1.useState(cloneDeep_1.default(uiPreferences.messageCenter)), settings = _b[0], setSettings = _b[1];
    function handleChange(prop, value) {
        settings[prop] = value;
        setSettings(__assign({}, settings));
    }
    function handleSave() {
        savePreferences("messageCenter", settings);
        onSave();
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.SettingsContentWrapper, null,
            react_1.default.createElement(styles_1.FormRow, null,
                react_1.default.createElement(CustomCheckbox_1.default, { label: "Deadline Signalering actief", onClick: function () {
                        return handleChange("deadlineWarning", !settings.deadlineWarning);
                    }, checked: settings.deadlineWarning })),
            react_1.default.createElement(styles_1.FormRow, null,
                react_1.default.createElement(styles_1.Label, { width: LABEL_WIDTH }, "Melding weergeven"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(NumberInput_1.default, { value: settings.notificationLimit, onChange: function (newValue) { return handleChange("notificationLimit", newValue); }, min: 1, max: 24, unit: "uur", disabled: !settings.deadlineWarning }))),
            react_1.default.createElement(styles_1.FormRow, null,
                react_1.default.createElement(CustomCheckbox_1.default, { label: "Toon melding", onClick: function () {
                        return handleChange("showNotifications", !settings.showNotifications);
                    }, checked: settings.showNotifications, disabled: !settings.deadlineWarning })),
            react_1.default.createElement(styles_1.FormRow, null,
                react_1.default.createElement(styles_1.Label, { width: LABEL_WIDTH }, "Melding Opnieuw weergeven na"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(NumberInput_1.default, { value: settings.notificationUpdateInterval, onChange: function (newValue) {
                            return handleChange("notificationUpdateInterval", newValue);
                        }, min: 1, max: 60, unit: "min", disabled: !settings.deadlineWarning }))),
            react_1.default.createElement(styles_1.FormRow, null,
                react_1.default.createElement(styles_1.Label, { width: LABEL_WIDTH }, "Waarschuwings kleur"),
                react_1.default.createElement(CustomColorPicker_1.default, { color: settings.warningColor, onSelect: function (color) { return handleChange("warningColor", color); }, disabled: !settings.deadlineWarning })),
            react_1.default.createElement(styles_1.FormRow, null,
                react_1.default.createElement(styles_1.Label, { width: LABEL_WIDTH }, "Verstreken deadline kleur"),
                react_1.default.createElement(CustomColorPicker_1.default, { color: settings.deadlineExpiredColor, onSelect: function (color) { return handleChange("deadlineExpiredColor", color); }, disabled: !settings.deadlineWarning }))),
        react_1.default.createElement(styles_1.SaveSettingsButton, { onClick: handleSave }, "Opslaan")));
};
exports.default = DeadlineSettings;
//# sourceMappingURL=DeadlineSettings.js.map