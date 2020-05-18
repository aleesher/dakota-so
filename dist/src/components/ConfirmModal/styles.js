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
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var components_1 = require("dakota-portal/dist/components");
exports.ModalText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 20px;\n  text-align: center;\n  line-height: 1.2;\n  margin-bottom: 20px;\n"], ["\n  font-size: 20px;\n  text-align: center;\n  line-height: 1.2;\n  margin-bottom: 20px;\n"])));
exports.ModalClose = styled_components_1.default(Close_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 13px;\n  right: 27px;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 13px;\n  right: 27px;\n  color: ", ";\n  cursor: pointer;\n"])), components_1.Colors.black);
exports.ModalWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 60px;\n  border-radius: 10px;\n"], ["\n  padding: 60px;\n  border-radius: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map