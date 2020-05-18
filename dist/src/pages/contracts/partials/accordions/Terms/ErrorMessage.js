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
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var ErrorMessage = function (_a) {
    var text = _a.text, className = _a.className;
    return (react_1.default.createElement(exports.Container, null,
        react_1.default.createElement(exports.Text, { className: className }, text)));
};
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 14px 22px;\n  border: 1px solid ", ";\n  border-radius: 6px;\n  font-size: 14px;\n  background-color: ", ";\n"], ["\n  padding: 14px 22px;\n  border: 1px solid ", ";\n  border-radius: 6px;\n  font-size: 14px;\n  background-color: ", ";\n"])), Colors_1.default.cinnabar, Colors_1.default.lightCinnabar);
exports.Text = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), Colors_1.default.cinnabar);
exports.default = ErrorMessage;
var templateObject_1, templateObject_2;
//# sourceMappingURL=ErrorMessage.js.map