"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var page_1 = require("../../../provider/page");
var styles_1 = require("./styles");
var OrderGroupTooltipContent = function (_a) {
    var data = _a.data;
    var statusColors = page_1.usePageState().statusColors;
    return (react_1.default.createElement(react_1.default.Fragment, null, data.map(function (_a) {
        var status = _a.status, amount = _a.amount;
        return (react_1.default.createElement(styles_1.OrderTooltipRow, { key: status },
            react_1.default.createElement(styles_1.OrderTooltipField, { color: statusColors[status] },
                status,
                ":"),
            react_1.default.createElement(styles_1.OrderTooltipValue, null, amount)));
    })));
};
exports.default = OrderGroupTooltipContent;
//# sourceMappingURL=OrderGroupTooltipContent.js.map