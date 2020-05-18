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
exports.PaginationWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 32px;\n\n  .dakota-pagination {\n    justify-content: center;\n\n    .pagination-cell {\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n\n      span:not(.pagination-dots) {\n        display: inline-block;\n        width: 28px;\n        height: 28px;\n        line-height: 28px;\n        border: 1px solid lightgray;\n        box-sizing: border-box;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n        color: black;\n      }\n\n      &--active {\n        span {\n          border: none !important;\n          background-color: ", ";\n          color: white !important;\n        }\n      }\n\n      &--disabled {\n        pointer-events: none;\n        opacity: 0.4;\n      }\n    }\n  }\n"], ["\n  margin-top: 32px;\n\n  .dakota-pagination {\n    justify-content: center;\n\n    .pagination-cell {\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n\n      span:not(.pagination-dots) {\n        display: inline-block;\n        width: 28px;\n        height: 28px;\n        line-height: 28px;\n        border: 1px solid lightgray;\n        box-sizing: border-box;\n        font-size: 13px;\n        font-weight: bold;\n        text-align: center;\n        color: black;\n      }\n\n      &--active {\n        span {\n          border: none !important;\n          background-color: ", ";\n          color: white !important;\n        }\n      }\n\n      &--disabled {\n        pointer-events: none;\n        opacity: 0.4;\n      }\n    }\n  }\n"])), Colors_1.default.primary);
var templateObject_1;
//# sourceMappingURL=styles.js.map