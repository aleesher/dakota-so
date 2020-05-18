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
var components_1 = require("dakota-portal/dist/components");
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.Select = styled_components_1.default(components_1.Select)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 16px;\n  width: 76px;\n\n  > div {\n    padding-left: 6px;\n    border-width: 2px !important;\n    border-radius: 4px !important;\n  }\n"], ["\n  margin-right: 16px;\n  width: 76px;\n\n  > div {\n    padding-left: 6px;\n    border-width: 2px !important;\n    border-radius: 4px !important;\n  }\n"])));
exports.Label = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 14px;\n"], ["\n  margin-right: 14px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map