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
exports.Container = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  z-index: 10;\n  margin-bottom: 20px;\n  padding: 8px 10px;\n  height: 44px;\n  width: 100%;\n  border-radius: 4px;\n  box-sizing: border-box;\n  user-select: none;\n  cursor: pointer;\n\n  ", "\n"], ["\n  position: relative;\n  z-index: 10;\n  margin-bottom: 20px;\n  padding: 8px 10px;\n  height: 44px;\n  width: 100%;\n  border-radius: 4px;\n  box-sizing: border-box;\n  user-select: none;\n  cursor: pointer;\n\n  ",
    "\n"])), function (_a) {
    var status = _a.status;
    switch (status) {
        case "No_Appointment":
        case "Not_Planned":
            return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          background-color: #ccd4d8;\n        "], ["\n          background-color: #ccd4d8;\n        "])));
        case "Scheduled":
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          background-color: ", ";\n          color: white;\n        "], ["\n          background-color: ", ";\n          color: white;\n        "])), Colors_1.default.primary);
        case "Done":
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          background-color: #88ac1e;\n          color: white;\n        "], ["\n          background-color: #88ac1e;\n          color: white;\n        "])));
    }
});
exports.Interval = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 11px;\n"], ["\n  font-size: 11px;\n"])));
exports.Type = styled_components_1.default.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 14px;\n"], ["\n  font-weight: bold;\n  font-size: 14px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styles.js.map