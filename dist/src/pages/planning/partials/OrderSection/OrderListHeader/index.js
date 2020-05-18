"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var provider_1 = require("../../../provider");
var styles_1 = require("../../components/ListHeader/styles");
var SortIcon_1 = __importDefault(require("../../icons/SortIcon"));
var SelectAmountOfWorkOrders_1 = __importDefault(require("./SelectAmountOfWorkOrders"));
var OrderListHeader = function () {
    var setOrderSort = provider_1.usePageDispatch().setOrderSort;
    var orderSort = provider_1.usePageState().orderSort;
    return (react_1.default.createElement(styles_1.ListHeaderWrapper, null,
        react_1.default.createElement(styles_1.ListTitle, null, "Werk orders"),
        react_1.default.createElement(styles_1.SortListButton, { onClick: setOrderSort },
            react_1.default.createElement(SortIcon_1.default, { direction: orderSort })),
        react_1.default.createElement(SelectAmountOfWorkOrders_1.default, null)));
};
exports.default = OrderListHeader;
//# sourceMappingURL=index.js.map