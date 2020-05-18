"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CustomTooltip_1 = __importDefault(require("../CustomTooltip"));
var OrderGroupTooltipContent_1 = __importDefault(require("./OrderGroupTooltipContent"));
exports.OrderGroupTooltip = function (_a) {
    var data = _a.data, children = _a.children;
    return (react_1.default.createElement(CustomTooltip_1.default, { title: react_1.default.createElement(OrderGroupTooltipContent_1.default, { data: data }) }, children));
};
//# sourceMappingURL=OrderGroupTooltip.js.map