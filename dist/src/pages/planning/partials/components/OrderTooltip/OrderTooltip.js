"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CustomTooltip_1 = __importDefault(require("../CustomTooltip"));
var OrderTooltipContent_1 = __importDefault(require("./OrderTooltipContent"));
exports.OrderTooltip = function (_a) {
    var workOrder = _a.workOrder, children = _a.children;
    return (react_1.default.createElement(CustomTooltip_1.default, { title: react_1.default.createElement(OrderTooltipContent_1.default, { workOrder: workOrder }) }, children));
};
//# sourceMappingURL=OrderTooltip.js.map