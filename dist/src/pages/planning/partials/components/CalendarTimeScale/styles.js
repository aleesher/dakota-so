"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.TimeScaleWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: 50px;\n  border-bottom: 1px solid ", ";\n  box-sizing: border-box;\n"], ["\n  position: relative;\n  height: 50px;\n  border-bottom: 1px solid ", ";\n  box-sizing: border-box;\n"])), Colors_1.default.pattensBlue);
exports.TimeScalePoint = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px;\n  bottom: 10px;\n  color: ", ";\n  font-size: 14px;\n\n  &:not(:first-child) {\n    div {\n      margin-left: -15px;\n    }\n  }\n\n  &:after {\n    border-right: solid 1px ", ";\n    position: absolute;\n    content: \"\";\n    bottom: -10px;\n    left: 0;\n    width: 2px;\n    height: 7px;\n  }\n"], ["\n  position: absolute;\n  left: ", "px;\n  bottom: 10px;\n  color: ", ";\n  font-size: 14px;\n\n  &:not(:first-child) {\n    div {\n      margin-left: -15px;\n    }\n  }\n\n  &:after {\n    border-right: solid 1px ", ";\n    position: absolute;\n    content: \"\";\n    bottom: -10px;\n    left: 0;\n    width: 2px;\n    height: 7px;\n  }\n"])), function (_a) {
    var position = _a.position;
    return position;
}, Colors_1.default.arsenic2, Colors_1.default.linkWater);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map