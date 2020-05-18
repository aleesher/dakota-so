"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hocs_1 = __importDefault(require("../../../hocs"));
var styles_1 = require("../../../styles");
var EmployeeListItem_1 = __importDefault(require("./EmployeeListItem"));
var EmployeeList = function (_a) {
    var employees = _a.employees;
    return (react_1.default.createElement(styles_1.ListBody, null, employees.map(function (e) { return (react_1.default.createElement(EmployeeListItem_1.default, { key: e.code, employee: e })); })));
};
exports.default = hocs_1.default(EmployeeList);
//# sourceMappingURL=index.js.map