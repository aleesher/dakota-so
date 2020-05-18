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
var constants_1 = require("../../../constants");
exports.ListHeaderWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 0 27px;\n  width: ", "px;\n  height: ", "px;\n  border-right: 1px solid ", ";\n  box-shadow: 15px 0px 30px 0px rgba(0, 0, 0, 0.1);\n"], ["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 0 27px;\n  width: ", "px;\n  height: ", "px;\n  border-right: 1px solid ", ";\n  box-shadow: 15px 0px 30px 0px rgba(0, 0, 0, 0.1);\n"])), constants_1.LIST_WIDTH, constants_1.CALENDAR_HEADER_HEIGHT, Colors_1.default.gullGrey2);
exports.ListTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 120px;\n  color: ", ";\n  font-size: 20px;\n  font-weight: bold;\n"], ["\n  width: 120px;\n  color: ", ";\n  font-size: 20px;\n  font-weight: bold;\n"])), Colors_1.default.fiord);
exports.SortListButton = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 23px;\n  height: 24px;\n  margin-left: 27px;\n  cursor: pointer;\n"], ["\n  width: 23px;\n  height: 24px;\n  margin-left: 27px;\n  cursor: pointer;\n"])));
exports.AddListItemButton = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 19px;\n  height: 19px;\n  margin-left: auto;\n  cursor: pointer;\n"], ["\n  width: 19px;\n  height: 19px;\n  margin-left: auto;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map