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
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var styles_1 = require("./../../../styles");
exports.CodeInputValue = styled_components_1.default(styles_1.FormValue)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  input {\n    padding-right: 36px;\n  }\n"], ["\n  position: relative;\n\n  input {\n    padding-right: 36px;\n  }\n"])));
exports.SearchButton = styled_components_1.default(Link_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  width: 55px;\n  height: 52px;\n  line-height: 60px;\n  outline: none;\n  border: none;\n  font-size: 25px;\n  background-color: white;\n  cursor: pointer;\n  text-align: center;\n  color: ", ";\n"], ["\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  width: 55px;\n  height: 52px;\n  line-height: 60px;\n  outline: none;\n  border: none;\n  font-size: 25px;\n  background-color: white;\n  cursor: pointer;\n  text-align: center;\n  color: ", ";\n"])), Colors_1.default.fiord);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map