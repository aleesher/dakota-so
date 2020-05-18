"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var SelectCostCenter_1 = __importDefault(require("./SelectCostCenter"));
var styles_1 = require("./styles");
var EmployeeTableFilter = function (_a) {
    var showSaveButton = _a.showSaveButton, onClickSave = _a.onClickSave, children = _a.children;
    var _b = react_1.useState([]), costCenters = _b[0], setCostCenters = _b[1];
    var _c = react_1.useState(""), searchText = _c[0], setSearchText = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.EmployeeTableFilterWrapper, null,
            react_1.default.createElement(styles_1.Label, null, "Kostenplats"),
            react_1.default.createElement(SelectCostCenter_1.default, { onChange: setCostCenters }),
            react_1.default.createElement(styles_1.SearchEmployeeInput, { value: searchText, onChange: function (e) { return setSearchText(e.target.value); }, placeholder: "Naam or nummer" }),
            showSaveButton && (react_1.default.createElement(styles_1.AddEmployeesButton, { onClick: onClickSave }, "Toevoegen"))),
        children({
            costCenters: costCenters,
            searchText: searchText.toLowerCase()
        })));
};
exports.default = EmployeeTableFilter;
//# sourceMappingURL=EmployeeTableFilter.js.map