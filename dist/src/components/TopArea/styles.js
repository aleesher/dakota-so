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
var Button_1 = __importDefault(require("dakota-portal/dist/components/Button"));
exports.TopWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0px 30px;\n"], ["\n  padding: 0px 30px;\n"])));
exports.CreateButtonsWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"])));
exports.CreateButton = styled_components_1.default(Button_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && {\n    margin-left: 20px;\n    text-transform: none;\n    font-size: 14px;\n    padding: 6px 24px;\n  }\n"], ["\n  && {\n    margin-left: 20px;\n    text-transform: none;\n    font-size: 14px;\n    padding: 6px 24px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map