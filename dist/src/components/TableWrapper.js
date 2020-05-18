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
var react_router_dom_1 = require("react-router-dom");
var ModalWrapper_1 = require("dakota-portal/dist/components/ModalWrapper");
var components_1 = require("dakota-portal/dist/components");
exports.TableHeaderWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 24px;\n  display: flex;\n  position: relative;\n\n  .page-header h1 {\n    font-size: 22px;\n  }\n\n  && .control {\n    margin-right: 20px;\n    min-width: 150px;\n    height: 40px;\n  }\n\n  && .buttonLink {\n    text-decoration: none;\n  }\n"], ["\n  margin: 24px;\n  display: flex;\n  position: relative;\n\n  .page-header h1 {\n    font-size: 22px;\n  }\n\n  && .control {\n    margin-right: 20px;\n    min-width: 150px;\n    height: 40px;\n  }\n\n  && .buttonLink {\n    text-decoration: none;\n  }\n"])));
exports.TableWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: -45px;\n  margin-left: -45px;\n  margin-bottom: 20px;\n"], ["\n  margin-right: -45px;\n  margin-left: -45px;\n  margin-bottom: 20px;\n"])));
exports.TableControl = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.ModalBoxs = styled_components_1.default(ModalWrapper_1.ModalBox)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  /* width: 80% !important; */\n  border-radius: 5px;\n"], ["\n  /* width: 80% !important; */\n  border-radius: 5px;\n"])));
exports.TableHeaderButton = styled_components_1.default(components_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  && {\n    margin: 15px 20px 14px 0px;\n    text-transform: unset;\n    font-weight: 600;\n    white-space: nowrap;\n  }\n"], ["\n  && {\n    margin: 15px 20px 14px 0px;\n    text-transform: unset;\n    font-weight: 600;\n    white-space: nowrap;\n  }\n"])));
exports.TableHeaderLink = styled_components_1.default(react_router_dom_1.Link)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  text-decoration: none;\n"], ["\n  text-decoration: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=TableWrapper.js.map