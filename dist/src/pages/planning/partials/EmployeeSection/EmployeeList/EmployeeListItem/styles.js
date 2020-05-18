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
exports.EmployeeAvatarWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  margin-left: 17px;\n  margin-right: 16px;\n"], ["\n  width: 50px;\n  height: 50px;\n  margin-left: 17px;\n  margin-right: 16px;\n"])));
exports.EmployeeAvatar = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n"], ["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n"])));
exports.EmployeeInfo = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: auto;\n  font-size: 16px;\n  font-weight: bold;\n  color: ", ";\n\n  & > div {\n    height: 21px;\n  }\n\n  & > div:nth-child(2) {\n    color: ", ";\n  }\n"], ["\n  margin-right: auto;\n  font-size: 16px;\n  font-weight: bold;\n  color: ", ";\n\n  & > div {\n    height: 21px;\n  }\n\n  & > div:nth-child(2) {\n    color: ", ";\n  }\n"])), Colors_1.default.gullGrey2, Colors_1.default.arsenic2);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map