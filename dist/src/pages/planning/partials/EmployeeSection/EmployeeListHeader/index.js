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
var provider_1 = require("../../../provider");
var styles_1 = require("../../components/ListHeader/styles");
var PlusIcon_1 = __importDefault(require("../../icons/PlusIcon"));
var SortIcon_1 = __importDefault(require("../../icons/SortIcon"));
var AddEmployeePopup_1 = __importDefault(require("./AddEmployeePopup"));
var SelectAmountOfEmployees_1 = __importDefault(require("./SelectAmountOfEmployees"));
var EmployeeListHeader = function () {
    var setEmployeeCodes = provider_1.useSettingsDispatch().setEmployeeCodes;
    var setEmployeeSort = provider_1.usePageDispatch().setEmployeeSort;
    var employeeSort = provider_1.usePageState().employeeSort;
    var _a = react_1.useState(false), showPopup = _a[0], setShowPopup = _a[1];
    var handleClickAdd = function () { return setShowPopup(true); };
    var handleClosePopup = function () { return setShowPopup(false); };
    var handleSave = function (codes, resourceCodes) {
        setEmployeeCodes(codes, resourceCodes);
        setShowPopup(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.ListHeaderWrapper, null,
            react_1.default.createElement(styles_1.ListTitle, null, "Medewerkers"),
            react_1.default.createElement(styles_1.SortListButton, { onClick: setEmployeeSort },
                react_1.default.createElement(SortIcon_1.default, { direction: employeeSort })),
            react_1.default.createElement(SelectAmountOfEmployees_1.default, null),
            react_1.default.createElement(styles_1.AddListItemButton, { onClick: handleClickAdd },
                react_1.default.createElement(PlusIcon_1.default, null))),
        react_1.default.createElement(AddEmployeePopup_1.default, { open: showPopup, onClose: handleClosePopup, onSave: handleSave })));
};
exports.default = EmployeeListHeader;
//# sourceMappingURL=index.js.map