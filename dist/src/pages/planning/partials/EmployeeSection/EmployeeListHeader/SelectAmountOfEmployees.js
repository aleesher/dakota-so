"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var settings_1 = require("../../../provider/settings");
var SelectVisibleAmount_1 = __importDefault(require("../../components/SelectVisibleAmount"));
var VALUES = [2, 4, 6, 8, 10, 12];
var SelectAmountOfEmployees = function () {
    var fixedAmountOfEmployees = settings_1.useSettingsState().fixedAmountOfEmployees;
    var setFixedAmountOfEmployees = settings_1.useSettingsDispatch().setFixedAmountOfEmployees;
    return (react_1.default.createElement(SelectVisibleAmount_1.default, { values: VALUES, value: fixedAmountOfEmployees, onChange: setFixedAmountOfEmployees }));
};
exports.default = SelectAmountOfEmployees;
//# sourceMappingURL=SelectAmountOfEmployees.js.map