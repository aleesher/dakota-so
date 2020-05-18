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
exports.Documentmodals = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* padding-top: 30px;\n  padding-bottom: 30px; */\n  margin: auto;\n  height: auto;\n"], ["\n  /* padding-top: 30px;\n  padding-bottom: 30px; */\n  margin: auto;\n  height: auto;\n"])));
exports.ActionWrappers = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  margin-left: 20px;\n\n  && .replyIcon {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  margin-left: 20px;\n\n  && .replyIcon {\n    color: ", ";\n  }\n"])), Colors_1.default.dodgerBlue);
exports.ActionMenu = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 5px;\n  color: ", ";\n  text-decoration: underline;\n  margin-top: 4px;\n"], ["\n  font-size: 16px;\n  margin-left: 5px;\n  margin-right: 5px;\n  color: ", ";\n  text-decoration: underline;\n  margin-top: 4px;\n"])), Colors_1.default.dodgerBlue);
exports.ActionWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  padding-top: 25px;\n  margin-right: 29px;\n"], ["\n  display: flex;\n  padding-top: 25px;\n  margin-right: 29px;\n"])));
exports.ActionLabel = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map