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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var page_1 = require("../../provider/page");
var settings_1 = require("../../provider/settings");
var styles_1 = require("./styles");
var WorkOrderSettings = function (_a) {
    var onSave = _a.onSave;
    var fieldOptions = page_1.usePageState().fieldOptions;
    var uiPreferences = settings_1.useSettingsState().uiPreferences;
    var savePreferences = settings_1.useSettingsDispatch().savePreferences;
    var _b = react_1.useState(__spreadArrays(uiPreferences.orderFields)), orderFields = _b[0], setOrderFields = _b[1];
    function handleChange(index, value) {
        orderFields[index] = value;
        setOrderFields(__spreadArrays(orderFields));
    }
    function handleSave() {
        savePreferences("orderFields", orderFields);
        onSave();
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.SettingsContentWrapper, null, orderFields.map(function (field, i) { return (react_1.default.createElement(styles_1.FormRow, { key: field + i },
            react_1.default.createElement(styles_1.Label, null,
                "Tekst Regel ",
                i + 1),
            react_1.default.createElement("div", null,
                react_1.default.createElement(styles_1.StyledSelect, { value: fieldOptions.find(function (f) { return f.value === field; }), options: fieldOptions, onChange: function (option) { return handleChange(i, option.value); } })))); })),
        react_1.default.createElement(styles_1.SaveSettingsButton, { onClick: handleSave }, "Opslaan")));
};
exports.default = WorkOrderSettings;
//# sourceMappingURL=WorkOrderSettings.js.map