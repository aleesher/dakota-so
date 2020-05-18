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
var Link_1 = __importDefault(require("react-router-dom/Link"));
var components_1 = require("dakota-portal/dist/components");
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var ModalWrapper_1 = require("dakota-portal/dist/components/ModalWrapper");
exports.modalWrapper = styled_components_1.default(Link_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  margin-right: auto;\n"], ["\n  text-decoration: none;\n  color: ", ";\n  margin-right: auto;\n"])), Colors_1.default.fiord);
exports.DocumentContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  && {\n    display: flex;\n    padding: 20px;\n    border-bottom: 1px solid ", ";\n\n    &&:hover {\n      background-color: ", ";\n    }\n  }\n"], ["\n  && {\n    display: flex;\n    padding: 20px;\n    border-bottom: 1px solid ", ";\n\n    &&:hover {\n      background-color: ", ";\n    }\n  }\n"])), Colors_1.default.pattensBlue, Colors_1.default.zircon);
exports.DocumentClose = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
exports.DocumentLeft = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  padding: 10px;\n"], ["\n  display: flex;\n  padding: 10px;\n"])));
exports.DocumentRight = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  padding: 10px;\n  margin-left: auto;\n  && .titleName {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n  && .titleLabel {\n    margin-top: 20px;\n    margin-right: 20px;\n    min-width: 150px;\n  }\n"], ["\n  display: flex;\n  padding: 10px;\n  margin-left: auto;\n  && .titleName {\n    margin-top: 20px;\n    margin-right: 20px;\n  }\n  && .titleLabel {\n    margin-top: 20px;\n    margin-right: 20px;\n    min-width: 150px;\n  }\n"])));
exports.DocumentImg = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding-top: 6px;\n"], ["\n  padding-top: 6px;\n"])));
exports.DocumentContainer = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: 20px;\n"], ["\n  background-color: ", ";\n  padding: 20px;\n"])), Colors_1.default.aliceBlueGrayish);
exports.DocumentPreview = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding-top: 6px;\n  height: 600px;\n  overflow-y: scroll;\n  justify-content: center;\n  display: flex;\n"], ["\n  padding-top: 6px;\n  height: 600px;\n  overflow-y: scroll;\n  justify-content: center;\n  display: flex;\n"])));
exports.DocumentFormWrapper = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  min-width: 300px;\n  && .ActionTitle {\n    margin-top: 29px;\n    margin-right: 20px;\n  }\n"], ["\n  min-width: 300px;\n  && .ActionTitle {\n    margin-top: 29px;\n    margin-right: 20px;\n  }\n"])));
exports.DocumentDetails = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  && {\n    margin-left: 20px;\n  }\n  && .filename {\n    font-weight: bold;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  && .filecreated {\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  && .filupdated {\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  && .filetime {\n    margin-top: 5px;\n  }\n\n  && .reply {\n    color: ", ";\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n"], ["\n  && {\n    margin-left: 20px;\n  }\n  && .filename {\n    font-weight: bold;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  && .filecreated {\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  && .filupdated {\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n  && .filetime {\n    margin-top: 5px;\n  }\n\n  && .reply {\n    color: ", ";\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n"])), Colors_1.default.dodgerBlue);
exports.FormSelect = styled_components_1.default(components_1.Select)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  && {\n    width: calc(100% - ", "px);\n    max-width: 330px;\n    font-weight: normal;\n    color: ", ";\n    font-size: 16px;\n    margin-top: 5px;\n  }\n\n  .type-select__control {\n    height: ", "px;\n    border: 2px solid ", ";\n    border-radius: 5px;\n    box-shadow: none;\n    padding-left: 8px;\n    padding-right: 8px;\n    font-size: 16px;\n  }\n\n  .type-select__control--is-focused,\n  .type-select__control--menu-is-open {\n    border: 2px solid ", ";\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  .type-select__indicator-separator {\n    display: none;\n  }\n"], ["\n  && {\n    width: calc(100% - ", "px);\n    max-width: 330px;\n    font-weight: normal;\n    color: ", ";\n    font-size: 16px;\n    margin-top: 5px;\n  }\n\n  .type-select__control {\n    height: ", "px;\n    border: 2px solid ", ";\n    border-radius: 5px;\n    box-shadow: none;\n    padding-left: 8px;\n    padding-right: 8px;\n    font-size: 16px;\n  }\n\n  .type-select__control--is-focused,\n  .type-select__control--menu-is-open {\n    border: 2px solid ", ";\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  .type-select__indicator-separator {\n    display: none;\n  }\n"])), function (_a) {
    var _b = _a.width, width = _b === void 0 ? 50 : _b;
    return width;
}, Colors_1.default.fiord, function (_a) {
    var _b = _a.height, height = _b === void 0 ? 56 : _b;
    return height;
}, Colors_1.default.pattensBlue, Colors_1.default.fiord, Colors_1.default.fiord);
exports.MenuCard = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  margin-left: 20px;\n\n  && .replyIcon {\n    color: ", ";\n  }\n"], ["\n  margin-left: 20px;\n\n  && .replyIcon {\n    color: ", ";\n  }\n"])), Colors_1.default.dodgerBlue);
exports.ModalBox = styled_components_1.default(ModalWrapper_1.ModalBox)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 80% !important;\n"], ["\n  width: 80% !important;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=styles.js.map