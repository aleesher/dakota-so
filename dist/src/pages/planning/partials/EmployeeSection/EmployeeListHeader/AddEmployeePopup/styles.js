"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("dakota-portal/dist/components");
var styled_components_1 = __importDefault(require("styled-components"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.AddEmployeePopupContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 40px;\n"], ["\n  padding: 0 40px;\n"])));
exports.EmployeeTableFilterWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 56px;\n"], ["\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 56px;\n"])));
exports.Label = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 12px;\n  font-size: 19px;\n  font-weight: 500;\n  color: ", ";\n"], ["\n  margin-right: 12px;\n  font-size: 19px;\n  font-weight: 500;\n  color: ", ";\n"])), Colors_1.default.arsenic2);
exports.SearchEmployeeInput = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  height: 57px;\n  width: 284px;\n  padding: 0 45px 0 20px;\n  font-size: 19px;\n  color: ", ";\n  border: 2px solid ", ";\n  border-radius: 3px;\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n  height: 57px;\n  width: 284px;\n  padding: 0 45px 0 20px;\n  font-size: 19px;\n  color: ", ";\n  border: 2px solid ", ";\n  border-radius: 3px;\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"])), Colors_1.default.arsenic2, Colors_1.default.lightGray, Colors_1.default.fiord2, Colors_1.default.veryLightGrey);
exports.AddEmployeesButton = styled_components_1.default(components_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  && {\n    margin-right: 40px;\n    margin-left: auto;\n    height: 56px;\n    width: 171px;\n    font-size: 18px;\n    text-transform: capitalize;\n    background-color: ", ";\n    border-radius: 7px;\n  }\n"], ["\n  && {\n    margin-right: 40px;\n    margin-left: auto;\n    height: 56px;\n    width: 171px;\n    font-size: 18px;\n    text-transform: capitalize;\n    background-color: ", ";\n    border-radius: 7px;\n  }\n"])), Colors_1.default.royalBlue);
var ROW_HEIGHT = 84;
var BORDER_WIDTH = 1;
exports.EmployeeTableWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  table {\n    margin-bottom: 40px;\n    width: 100%;\n\n    /* \n      trick to make table scrollable\n    */\n    thead,\n    tbody,\n    tr {\n      display: table;\n      width: 100%;\n      table-layout: fixed;\n    }\n\n    thead {\n      height: 65px;\n      background-color: ", ";\n\n      th {\n        font-size: 20px;\n        font-weight: bold;\n        color: ", ";\n        line-height: 65px;\n        vertical-align: middle;\n        text-align: left;\n\n        :first-child {\n          padding-left: 40px;\n        }\n      }\n    }\n\n    tbody {\n      display: block;\n      table-layout: fixed;\n      height: ", "px;\n      overflow-y: auto;\n\n      tr {\n        height: ", "px;\n\n        :not(:last-child) {\n          border-bottom: ", "px solid ", ";\n        }\n      }\n\n      td {\n        font-size: 18px;\n        color: ", ";\n        line-height: ", "px;\n        vertical-align: middle;\n\n        :first-child {\n          padding-left: 40px;\n        }\n      }\n\n      .checkbox {\n        margin-left: 14px;\n        cursor: pointer;\n      }\n    }\n  }\n"], ["\n  table {\n    margin-bottom: 40px;\n    width: 100%;\n\n    /* \n      trick to make table scrollable\n    */\n    thead,\n    tbody,\n    tr {\n      display: table;\n      width: 100%;\n      table-layout: fixed;\n    }\n\n    thead {\n      height: 65px;\n      background-color: ", ";\n\n      th {\n        font-size: 20px;\n        font-weight: bold;\n        color: ", ";\n        line-height: 65px;\n        vertical-align: middle;\n        text-align: left;\n\n        :first-child {\n          padding-left: 40px;\n        }\n      }\n    }\n\n    tbody {\n      display: block;\n      table-layout: fixed;\n      height: ", "px;\n      overflow-y: auto;\n\n      tr {\n        height: ", "px;\n\n        :not(:last-child) {\n          border-bottom: ", "px solid ", ";\n        }\n      }\n\n      td {\n        font-size: 18px;\n        color: ", ";\n        line-height: ", "px;\n        vertical-align: middle;\n\n        :first-child {\n          padding-left: 40px;\n        }\n      }\n\n      .checkbox {\n        margin-left: 14px;\n        cursor: pointer;\n      }\n    }\n  }\n"])), Colors_1.default.aliceBlue4, Colors_1.default.arsenic2, ROW_HEIGHT * 5 + BORDER_WIDTH * 5, ROW_HEIGHT, BORDER_WIDTH, Colors_1.default.lightGray, Colors_1.default.arsenic2, ROW_HEIGHT);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styles.js.map