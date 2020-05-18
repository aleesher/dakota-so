"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var constants_1 = require("../constants");
var globalStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    color: ", ";\n    background-color: ", ";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-size-adjust: 100%;\n  }\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n\n    &::-moz-focus-inner {\n      border: 0;\n      padding: 0;\n    }\n  }\n  .rbc-row-content {\n    z-index: auto !important;\n  }\n  .rbc-overlay {\n    max-height: 100% !important;\n    overflow: auto !important;\n  }\n"], ["\n  body {\n    color: ", ";\n    background-color: ", ";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-size-adjust: 100%;\n  }\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    -webkit-appearance: none;\n\n    &::-moz-focus-inner {\n      border: 0;\n      padding: 0;\n    }\n  }\n  .rbc-row-content {\n    z-index: auto !important;\n  }\n  .rbc-overlay {\n    max-height: 100% !important;\n    overflow: auto !important;\n  }\n"])), Colors_1.default.fiord, Colors_1.default.white);
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0 auto;\n  max-width: ", "px;\n  width: 100%;\n  box-sizing: border-box;\n\n  @media (max-width: ", "px) {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n"], ["\n  margin: 0 auto;\n  max-width: ", "px;\n  width: 100%;\n  box-sizing: border-box;\n\n  @media (max-width: ", "px) {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n"])), constants_1.SIZE.laptop, constants_1.SIZE.laptop);
exports.Title = styled_components_1.default.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 40px;\n  font-size: 28px;\n  font-weight: 500;\n  color: ", ";\n\n  @media (max-width: ", "px) {\n    font-size: 24px;\n    margin: 20px;\n  }\n"], ["\n  margin: 40px;\n  font-size: 28px;\n  font-weight: 500;\n  color: ", ";\n\n  @media (max-width: ", "px) {\n    font-size: 24px;\n    margin: 20px;\n  }\n"])), Colors_1.default.fiord, constants_1.SIZE.mobileLg);
exports.Aligned = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.MediumSpan = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-weight: 500;\n"], ["\n  font-weight: 500;\n"])));
exports.PageHeader = styled_components_1.default(exports.Aligned)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", ";\n  justify-content: space-between;\n  margin-bottom: 26px;\n"], ["\n  width: ", ";\n  justify-content: space-between;\n  margin-bottom: 26px;\n"])), function (_a) {
    var width = _a.width;
    return width || "auto";
});
exports.MenuLink = styled_components_1.default.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n"], ["\n  text-decoration: none;\n  color: ", ";\n"])), Colors_1.default.fiord);
exports.default = styled_components_1.createGlobalStyle(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), globalStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=global.js.map