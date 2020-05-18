"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var provider_1 = require("../../../../provider");
var CustomPopup_1 = __importDefault(require("../../../components/CustomPopup"));
var EmployeeTableFilter_1 = __importDefault(require("./EmployeeTableFilter"));
var EmployeeTable_1 = __importDefault(require("./EmployeeTable"));
var styles_1 = require("./styles");
var AddEmployeePopup = function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, onClose = _a.onClose, onSave = _a.onSave;
    var _c = provider_1.useSettingsState(), employeeCodes = _c.employeeCodes, employeeResourceCodes = _c.employeeResourceCodes;
    var _d = react_1.useState(employeeCodes), codes = _d[0], setCodes = _d[1];
    var _e = react_1.useState(employeeResourceCodes), resourceCodes = _e[0], setResourceCodes = _e[1];
    var _f = react_1.useState(false), showSaveButton = _f[0], setShowSaveButton = _f[1];
    react_1.useEffect(function () { return setCodes(employeeCodes); }, [employeeCodes]);
    var handleClickSave = function () { return onSave(codes, resourceCodes); };
    var handleSelect = function (employee) {
        var newCodes;
        var newResourceCodes;
        if (codes.includes(employee.code)) {
            newCodes = codes.filter(function (c) { return c !== employee.code; });
            newResourceCodes = resourceCodes.filter(function (c) { return c !== employee.resource; });
        }
        else {
            newCodes = __spreadArrays(codes, [employee.code]);
            newResourceCodes = __spreadArrays(resourceCodes, [employee.resource]);
        }
        setCodes(newCodes);
        setResourceCodes(newResourceCodes);
        setShowSaveButton(employeeCodes
            .slice()
            .sort()
            .join("") !== newCodes.sort().join(""));
    };
    return (react_1.default.createElement(CustomPopup_1.default, { title: "Werknemer Toevoegen", open: open, onClose: onClose, withHeaderBorder: true },
        react_1.default.createElement(styles_1.AddEmployeePopupContent, null,
            react_1.default.createElement(EmployeeTableFilter_1.default, { showSaveButton: showSaveButton, onClickSave: handleClickSave }, function (_a) {
                var costCenters = _a.costCenters, searchText = _a.searchText;
                return (react_1.default.createElement(EmployeeTable_1.default, { codes: codes, costCenters: costCenters, searchText: searchText, onSelect: handleSelect }));
            }))));
};
exports.default = AddEmployeePopup;
//# sourceMappingURL=index.js.map