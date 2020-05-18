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
var Card_1 = __importDefault(require("dakota-portal/dist/components/Card"));
exports.MainContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 1200px;\n"], ["\n  max-width: 1200px;\n"])));
exports.Title = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 24px;\n  line-height: 40px;\n  margin-bottom: 10px;\n"], ["\n  color: ", ";\n  font-size: 24px;\n  line-height: 40px;\n  margin-bottom: 10px;\n"])), Colors_1.default.eclipse);
exports.Wrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0px 30px;\n  margin-top: 40px;\n  padding: 1px 10px 0px 36px;\n"], ["\n  padding: 0px 30px;\n  margin-top: 40px;\n  padding: 1px 10px 0px 36px;\n"])));
exports.ContractenStats = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"])));
exports.LegendsWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-top: solid 1px ", ";\n  background-color: ", ";\n  width: 100%;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: flex-end;\n"], ["\n  border-top: solid 1px ", ";\n  background-color: ", ";\n  width: 100%;\n  min-height: 50px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: flex-end;\n"])), Colors_1.default.lightGray, Colors_1.default.aliceBlueGrayish);
exports.ChartWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 20px;\n"], ["\n  padding: 20px;\n"])));
exports.Legend = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 16px;\n  height: 8px;\n  border-radius: 3px;\n  margin: 5px;\n"], ["\n  background-color: ", ";\n  width: 16px;\n  height: 8px;\n  border-radius: 3px;\n  margin: 5px;\n"])), function (_a) {
    var _b = _a.color, color = _b === void 0 ? Colors_1.default.mediumSeaGreen : _b;
    return color;
});
exports.LegendWrapper = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  margin-right: 10px;\n  padding-right: 4px;\n  cursor: pointer;\n\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  margin-right: 10px;\n  padding-right: 4px;\n  cursor: pointer;\n\n  ",
    "\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive && styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border: 1px solid gray;\n      border-radius: 4px;\n    "], ["\n      border: 1px solid gray;\n      border-radius: 4px;\n    "])));
});
exports.Appointments = styled_components_1.default(Card_1.default)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  padding: 0;\n  padding-bottom: 0px;\n  margin-bottom: 25px;\n  justify-content: center;\n  align-items: flex-start;\n  display: ", ";\n  flex-direction: column;\n  && table thead tr {\n    background-color: ", ";\n    th {\n      span {\n        text-transform: unset;\n      }\n      font-weight: 400;\n    }\n  }\n  table.fixed_table tr td:first-child {\n    font-size: 14px;\n  }\n"], ["\n  padding: 0;\n  padding-bottom: 0px;\n  margin-bottom: 25px;\n  justify-content: center;\n  align-items: flex-start;\n  display: ", ";\n  flex-direction: column;\n  && table thead tr {\n    background-color: ", ";\n    th {\n      span {\n        text-transform: unset;\n      }\n      font-weight: 400;\n    }\n  }\n  table.fixed_table tr td:first-child {\n    font-size: 14px;\n  }\n"])), function (_a) {
    var _b = _a.display, display = _b === void 0 ? "flex" : _b;
    return display;
}, Colors_1.default.white);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=styles.js.map