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
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 14px;\n"], ["\n  padding: 14px;\n"])));
exports.Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n  border: 2px solid ", ";\n  border-radius: 2px;\n  background-color: white;\n  outline: none;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  box-sizing: border-box;\n  border: 2px solid ", ";\n  border-radius: 2px;\n  background-color: white;\n  outline: none;\n  cursor: pointer;\n"])), Colors_1.default.primary);
exports.Dots = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: -2px;\n  left: -1px;\n  line-height: 0;\n  font-family: initial;\n  font-size: 34px;\n  letter-spacing: -3px;\n  color: ", ";\n"], ["\n  position: absolute;\n  top: -2px;\n  left: -1px;\n  line-height: 0;\n  font-family: initial;\n  font-size: 34px;\n  letter-spacing: -3px;\n  color: ", ";\n"])), Colors_1.default.primary);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map