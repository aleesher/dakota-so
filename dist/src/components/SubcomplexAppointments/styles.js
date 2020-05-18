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
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 6px;\n  border: 1px solid ", ";\n  background-color: white;\n"], ["\n  border-radius: 6px;\n  border: 1px solid ", ";\n  background-color: white;\n"])), Colors_1.default.pattensBlue);
exports.Table = styled_components_1.default.table(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.Th = styled_components_1.default.th(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  padding: 18px 14px;\n  font-size: 14px;\n  font-weight: bold;\n  border-right: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  text-transform: capitalize;\n  text-align: left;\n  background-color: #eff3f4;\n\n  &:first-child {\n    background-color: transparent;\n  }\n\n  &:last-child {\n    border-top-right-radius: 6px;\n    border-right: 0;\n  }\n"], ["\n  position: relative;\n  padding: 18px 14px;\n  font-size: 14px;\n  font-weight: bold;\n  border-right: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n  text-transform: capitalize;\n  text-align: left;\n  background-color: #eff3f4;\n\n  &:first-child {\n    background-color: transparent;\n  }\n\n  &:last-child {\n    border-top-right-radius: 6px;\n    border-right: 0;\n  }\n"])), Colors_1.default.pattensBlue, Colors_1.default.pattensBlue);
exports.Td = styled_components_1.default.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  padding: 0 6px;\n  width: 80px;\n  max-width: 80px;\n  height: 80px;\n  max-height: 80px;\n  box-sizing: border-box;\n  border-right: 1px solid ", ";\n  vertical-align: middle;\n\n  &:first-child {\n    padding: 14px 10px;\n  }\n\n  &:last-child {\n    border-right: 0;\n  }\n"], ["\n  position: relative;\n  padding: 0 6px;\n  width: 80px;\n  max-width: 80px;\n  height: 80px;\n  max-height: 80px;\n  box-sizing: border-box;\n  border-right: 1px solid ", ";\n  vertical-align: middle;\n\n  &:first-child {\n    padding: 14px 10px;\n  }\n\n  &:last-child {\n    border-right: 0;\n  }\n"])), Colors_1.default.pattensBlue);
exports.StatusesDescription = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 15px;\n  font-size: 13px;\n  text-align: right;\n  color: darkgray;\n"], ["\n  margin-top: 15px;\n  font-size: 13px;\n  text-align: right;\n  color: darkgray;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map