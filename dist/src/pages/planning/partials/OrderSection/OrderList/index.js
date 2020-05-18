"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hocs_1 = __importDefault(require("../../../hocs"));
var styles_1 = require("../../../styles");
var OrderListItem_1 = __importDefault(require("./OrderListItem"));
var OrderList = function (_a) {
    var orders = _a.orders;
    return (react_1.default.createElement(styles_1.ListBody, null, orders.map(function (wo) { return (react_1.default.createElement(OrderListItem_1.default, { key: wo.code, workOrder: wo })); })));
};
exports.default = hocs_1.default(OrderList);
//# sourceMappingURL=index.js.map