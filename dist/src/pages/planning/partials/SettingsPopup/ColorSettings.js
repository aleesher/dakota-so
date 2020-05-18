"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var difference_1 = __importDefault(require("lodash/difference"));
var cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
var constants_1 = require("../../../../constants");
var settings_1 = require("../../provider/settings");
var CustomColorPicker_1 = __importDefault(require("./components/CustomColorPicker"));
var styles_1 = require("./styles");
var TEMP_STATUS = "temp";
var ColorSettings = function (_a) {
    var onSave = _a.onSave;
    var uiPreferences = settings_1.useSettingsState().uiPreferences;
    var savePreferences = settings_1.useSettingsDispatch().savePreferences;
    var _b = react_1.useState(cloneDeep_1.default(uiPreferences.colors)), colors = _b[0], setColors = _b[1];
    function handleChangeStatus(status, newStatus) {
        var item = colors.find(function (c) { return c.status === status; });
        item.status = newStatus;
        setColors(__spreadArrays(colors));
    }
    function handleChangeColor(status, color) {
        var item = colors.find(function (c) { return c.status === status; });
        item.color = color;
        setColors(__spreadArrays(colors));
    }
    function handleSave() {
        savePreferences("colors", colors.filter(function (c) { return !c.status.startsWith(TEMP_STATUS); }));
        onSave();
    }
    function handleClickAddColor() {
        setColors(__spreadArrays(colors, [
            {
                status: TEMP_STATUS + colors.length,
                color: "black"
            }
        ]));
    }
    function filterOptions(status) {
        // show only not used statuses
        var options = difference_1.default(constants_1.ORDER_STATUSES.map(function (status) { return status.key; }), colors.map(function (s) { return s.status; }));
        options.sort();
        if (!status.startsWith(TEMP_STATUS)) {
            options.unshift(status);
        }
        return options.map(function (o) { return ({ label: o, value: o }); });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.SettingsContentWrapper, null,
            react_1.default.createElement(styles_1.AddColorButton, { onClick: handleClickAddColor }, "Toevoegen"),
            colors.map(function (setting) { return (react_1.default.createElement(styles_1.FormRow, { key: setting.status },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.StyledSelect, { value: setting.status.startsWith(TEMP_STATUS)
                            ? null
                            : {
                                label: setting.status,
                                value: setting.status
                            }, options: filterOptions(setting.status), onChange: function (option) {
                            return handleChangeStatus(setting.status, option.value);
                        } })),
                react_1.default.createElement(styles_1.CurrentColorWrapper, null,
                    react_1.default.createElement(CustomColorPicker_1.default, { color: setting.color, onSelect: function (color) { return handleChangeColor(setting.status, color); } })))); })),
        react_1.default.createElement(styles_1.SaveSettingsButton, { onClick: handleSave }, "Opslaan")));
};
exports.default = ColorSettings;
//# sourceMappingURL=ColorSettings.js.map