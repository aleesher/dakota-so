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
var react_router_dom_1 = require("react-router-dom");
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.Footer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 80px;\n  width: 100%;\n  text-align: right;\n  color: ", ";\n  font-size: 14px;\n  padding: 30px;\n  box-sizing: border-box;\n"], ["\n  background-color: ", ";\n  height: 80px;\n  width: 100%;\n  text-align: right;\n  color: ", ";\n  font-size: 14px;\n  padding: 30px;\n  box-sizing: border-box;\n"])), Colors_1.default.fiord, Colors_1.default.white);
exports.FooterLink = styled_components_1.default(react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  color: ", ";\n  margin: 0 5px;\n"], ["\n  display: inline-block;\n  color: ", ";\n  margin: 0 5px;\n"])), Colors_1.default.white);
exports.P = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  line-height: 20px;\n  margin-bottom: 15px;\n  font-size: 14px;\n"], ["\n  line-height: 20px;\n  margin-bottom: 15px;\n  font-size: 14px;\n"])));
exports.B = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  line-height: 20px;\n  font-size: 15px;\n  font-weight: 500;\n"], ["\n  line-height: 20px;\n  font-size: 15px;\n  font-weight: 500;\n"])));
exports.UL = styled_components_1.default.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  list-style: disc;\n  padding-left: 40px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  line-height: 20px;\n"], ["\n  list-style: disc;\n  padding-left: 40px;\n  margin-bottom: 15px;\n  font-size: 14px;\n  line-height: 20px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map