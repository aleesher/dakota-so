"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("../../../../styles");
var SimpleOrder_1 = __importDefault(require("./SimpleOrder"));
var WorkOrderCalendar = function (_a) {
    var orders = _a.orders;
    return (react_1.default.createElement(react_1.default.Fragment, null, orders.map(function (wo) { return (react_1.default.createElement(styles_1.TimeLineWrapper, { key: wo.code },
        react_1.default.createElement(SimpleOrder_1.default, { key: wo.code, workOrder: wo }))); })));
};
exports.default = WorkOrderCalendar;
//# sourceMappingURL=index.js.map