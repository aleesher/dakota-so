"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var settings_1 = require("../../../provider/settings");
var SelectVisibleAmount_1 = __importDefault(require("../../components/SelectVisibleAmount"));
var VALUES = [10, 25, 50, 75, 100];
var SelectAmountOfWorkOrders = function () {
    var fixedAmountOfOrders = settings_1.useSettingsState().fixedAmountOfOrders;
    var setFixedAmountOfOrders = settings_1.useSettingsDispatch().setFixedAmountOfOrders;
    return (react_1.default.createElement(SelectVisibleAmount_1.default, { values: VALUES, value: fixedAmountOfOrders, onChange: setFixedAmountOfOrders }));
};
exports.default = SelectAmountOfWorkOrders;
//# sourceMappingURL=SelectAmountOfWorkOrders.js.map