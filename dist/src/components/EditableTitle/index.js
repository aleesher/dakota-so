"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var AutoClosableInput_1 = __importDefault(require("./AutoClosableInput"));
var LaneTitle = styled_components_1.default.h4(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  cursor: pointer;\n"], ["\n  padding: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var _b = _a.padding, padding = _b === void 0 ? 0 : _b;
    return padding + "px";
});
var EditableTitle = function (_a) {
    var title = _a.title, onChange = _a.onChange, _b = _a.padding, padding = _b === void 0 ? 0 : _b;
    var _c = react_1.default.useState(false), isEdited = _c[0], setIsEdited = _c[1];
    return !isEdited ? (react_1.default.createElement(LaneTitle, { padding: padding, onDoubleClick: function () { return setIsEdited(true); } }, title)) : (react_1.default.createElement(AutoClosableInput_1.default, { padding: padding, initialValue: title, onChange: function (value) {
            onChange(value);
            setIsEdited(false);
        } }));
};
exports.default = EditableTitle;
var templateObject_1;
//# sourceMappingURL=index.js.map