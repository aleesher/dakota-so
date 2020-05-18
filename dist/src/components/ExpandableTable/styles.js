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
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var components_1 = require("dakota-portal/dist/components");
exports.TableComponent = styled_components_1.default(SortableTableStyles_1.Table)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-x: auto;\n\n  > thead > tr > th,\n  > tbody > tr > td {\n    &:not(:only-child):first-child {\n      display: none;\n    }\n  }\n"], ["\n  overflow-x: auto;\n\n  > thead > tr > th,\n  > tbody > tr > td {\n    &:not(:only-child):first-child {\n      display: none;\n    }\n  }\n"])));
exports.TrComponent = styled_components_1.default(SortableTableStyles_1.Tr)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  border-bottom: 0;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  border-top: 1px solid ", ";\n  border-bottom: 0;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), components_1.Colors.pattensBlue, components_1.Colors.aliceBlueGrayish);
exports.ExpandedDataWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), components_1.Colors.white);
exports.TheadComponent = function (props) { return React.createElement("thead", null, props.children); };
exports.TbodyComponent = function (props) { return (React.createElement("tbody", { style: { borderTop: "1px solid " + components_1.Colors.pattensBlue } }, props.children)); };
exports.TrGroupComponent = function (props) { return React.createElement(React.Fragment, null, props.children); };
exports.UpdatedTd = styled_components_1.default(SortableTableStyles_1.Td)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &:nth-child(2) {\n    padding-left: 0;\n  }\n\n  &:last-child {\n    padding-right: 0;\n  }\n"], ["\n  &:nth-child(2) {\n    padding-left: 0;\n  }\n\n  &:last-child {\n    padding-right: 0;\n  }\n"])));
exports.UpdatedTh = styled_components_1.default(SortableTableStyles_1.Th)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &:nth-child(2) {\n    padding-left: 0;\n  }\n\n  &:last-child {\n    padding-right: 0;\n  }\n"], ["\n  &:nth-child(2) {\n    padding-left: 0;\n  }\n\n  &:last-child {\n    padding-right: 0;\n  }\n"])));
exports.ThComponent = function (props) { return (React.createElement(exports.UpdatedTh, null,
    React.createElement(SortableTableStyles_1.HeaderText, { style: { display: "block" } }, props.children))); };
exports.TdComponent = function (props) { return (React.createElement(exports.UpdatedTd, null,
    React.createElement(SortableTableStyles_1.ColumnText, null, props.children))); };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map