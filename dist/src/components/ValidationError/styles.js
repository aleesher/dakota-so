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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.ErrorWrapper = styled_components_1.default(Grid_1.default).attrs(function () { return ({ xs: 12 }); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 10px;\n  margin-bottom: 15px;\n"], ["\n  padding-top: 10px;\n  margin-bottom: 15px;\n"])));
exports.ErrorMessage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n"], ["\n  color: ", ";\n  font-size: 16px;\n"])), Colors_1.default.cinnabar);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map