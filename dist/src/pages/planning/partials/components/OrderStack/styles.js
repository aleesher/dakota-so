"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var styled_components_1 = __importDefault(require("styled-components"));
var styles_1 = require("../DayOrder/styles");
exports.DroppableOrderStackWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  height: 100%;\n  left: ", "px;\n  width: ", "px;\n  height: 100%;\n"], ["\n  position: absolute;\n  height: 100%;\n  left: ", "px;\n  width: ", "px;\n  height: 100%;\n"])), function (_a) {
    var left = _a.left;
    return left;
}, function (_a) {
    var width = _a.width;
    return width;
});
exports.DraggableOrderStackWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px;\n  width: ", "px;\n  height: 100%;\n  opacity: ", ";\n"], ["\n  position: absolute;\n  left: ", "px;\n  width: ", "px;\n  height: 100%;\n  opacity: ", ";\n"])), function (_a) {
    var left = _a.left;
    return left;
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var isDragging = _a.isDragging;
    return (isDragging ? 0 : 1);
});
exports.StackPreviewWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n\n  > div {\n    border-color: ", ";\n  }\n"], ["\n  position: relative;\n\n  > div {\n    border-color: ", ";\n  }\n"])), Colors_1.default.dodgerBlue);
exports.SelectedStackOrderWrapper = styled_components_1.default(styles_1.SelectedOrderWrapper)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  top: ", "px;\n"], ["\n  top: ", "px;\n"])), function (_a) {
    var top = _a.top;
    return top || 8;
});
exports.SimpleStackOrderWrapper = styled_components_1.default(styles_1.SimpleOrderWrapper)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  top: ", "px;\n"], ["\n  top: ", "px;\n"])), function (_a) {
    var top = _a.top;
    return top || 8;
});
exports.BottomStackOrderWrapper = styled_components_1.default(styles_1.SimpleOrderWrapper)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  top: ", "px;\n  box-shadow: 0 0 38px 0 rgba(175, 175, 175, 0.35);\n  transition-duration: 1s;\n\n  :hover {\n    transition-duration: 1s;\n    transform: translate(0, -50px);\n  }\n"], ["\n  top: ", "px;\n  box-shadow: 0 0 38px 0 rgba(175, 175, 175, 0.35);\n  transition-duration: 1s;\n\n  :hover {\n    transition-duration: 1s;\n    transform: translate(0, -50px);\n  }\n"])), function (_a) {
    var top = _a.top;
    return top;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styles.js.map