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
exports.TermsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-bottom: 20px;\n"], ["\n  padding-bottom: 20px;\n"])));
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: stretch;\n  padding-top: 55px;\n"], ["\n  display: flex;\n  align-items: stretch;\n  padding-top: 55px;\n"])));
exports.Labels = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 220px;\n"], ["\n  width: 220px;\n"])));
exports.Label = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  height: 55px;\n  line-height: 52px;\n  font-size: 15px;\n  color: ", ";\n"], ["\n  display: block;\n  height: 55px;\n  line-height: 52px;\n  font-size: 15px;\n  color: ", ";\n"])), Colors_1.default.lynch);
exports.ContentItem = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: calc((100% - 220px) / 3);\n  max-width: 260px;\n  margin-right: 10px;\n"], ["\n  width: calc((100% - 220px) / 3);\n  max-width: 260px;\n  margin-right: 10px;\n"])));
exports.TitleWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-top: -34px;\n  margin-bottom: 8px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-top: -34px;\n  margin-bottom: 8px;\n"])));
exports.Title = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 15px;\n  font-weight: bold;\n  color: ", ";\n"])), Colors_1.default.fiord2);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styles.js.map