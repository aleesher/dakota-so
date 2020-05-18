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
exports.Navbar = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  && {\n    width: 100%;\n    position: sticky;\n    top: 0;\n    z-index: 9999999999;\n  }\n"], ["\n  && {\n    width: 100%;\n    position: sticky;\n    top: 0;\n    z-index: 9999999999;\n  }\n"])));
exports.ListWrapper = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #f8fbfc;\n  text-align: center;\n\n  && .bold {\n    font-weight: 700;\n  }\n"], ["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #f8fbfc;\n  text-align: center;\n\n  && .bold {\n    font-weight: 700;\n  }\n"])));
exports.List = styled_components_1.default.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  text-align: center;\n  padding: 0px 10px 0px 10px;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 50px;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  text-align: center;\n  padding: 0px 10px 0px 10px;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 50px;\n  cursor: pointer;\n"])));
exports.Tabs = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  text-align: center;\n  padding: 0px 10px 0px 10px;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 50px;\n"], ["\n  display: inline-block;\n  text-align: center;\n  padding: 0px 10px 0px 10px;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 50px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map