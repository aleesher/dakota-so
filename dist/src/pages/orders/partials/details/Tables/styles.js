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
var ArrowUpward_1 = __importDefault(require("@material-ui/icons/ArrowUpward"));
var components_1 = require("dakota-portal/dist/components");
exports.TableButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  && .drop {\n    display: flex;\n  }\n"], ["\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  && .drop {\n    display: flex;\n  }\n"])));
exports.Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n  width: 200px;\n  color: #556068;\n  background-color: #f2f5f7;\n  padding: 10px;\n  font-size: 16px;\n\n  &:not(:first-child) {\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n  width: 200px;\n  color: #556068;\n  background-color: #f2f5f7;\n  padding: 10px;\n  font-size: 16px;\n\n  &:not(:first-child) {\n    margin-left: 10px;\n  }\n"])));
exports.ArrowUp = styled_components_1.default(ArrowUpward_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 15px !important;\n"], ["\n  font-size: 15px !important;\n"])));
exports.TableDropdown = styled_components_1.default(components_1.Select)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 15px !important;\n  width: 200px;\n  background: #f2f5f7;\n\n  && .default__control {\n    border: none;\n  }\n\n  && .default__menu {\n    background-color: #fff !important;\n  }\n"], ["\n  font-size: 15px !important;\n  width: 200px;\n  background: #f2f5f7;\n\n  && .default__control {\n    border: none;\n  }\n\n  && .default__menu {\n    background-color: #fff !important;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map