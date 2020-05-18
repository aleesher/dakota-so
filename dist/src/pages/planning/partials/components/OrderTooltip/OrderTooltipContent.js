"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var page_1 = require("../../../provider/page");
var settings_1 = require("../../../provider/settings");
var OrderFieldValue_1 = __importDefault(require("../OrderFieldValue"));
var styles_1 = require("./styles");
var OrderTooltipContent = function (_a) {
    var workOrder = _a.workOrder;
    var _b = page_1.usePageState(), fieldLabels = _b.fieldLabels, fieldTypes = _b.fieldTypes;
    var uiPreferences = settings_1.useSettingsState().uiPreferences;
    return (react_1.default.createElement(react_1.default.Fragment, null, uiPreferences.popupFields.map(function (field) { return (react_1.default.createElement(styles_1.OrderTooltipRow, { key: field },
        react_1.default.createElement(styles_1.OrderTooltipField, null,
            fieldLabels[field],
            ":"),
        react_1.default.createElement(styles_1.OrderTooltipValue, null,
            react_1.default.createElement(OrderFieldValue_1.default, { type: fieldTypes[field], value: workOrder[field] })))); })));
};
exports.default = OrderTooltipContent;
//# sourceMappingURL=OrderTooltipContent.js.map