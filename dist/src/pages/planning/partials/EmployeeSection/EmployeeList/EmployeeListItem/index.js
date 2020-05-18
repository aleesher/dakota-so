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
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var styles_1 = require("../../../../styles");
var AvatarIcon_1 = __importDefault(require("../../../icons/AvatarIcon"));
var ThreeDotsIcon_1 = __importDefault(require("../../../icons/ThreeDotsIcon"));
var styles_2 = require("./styles");
var MENU_ITEMS = ["Verbergen", "Toevoegen"];
var EmployeeListItem = function (_a) {
    var employee = _a.employee;
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleClick = function (event) { return setAnchorEl(event.currentTarget); };
    var handleClose = function () { return setAnchorEl(null); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.ListItemWrapper, { height: employee.lineHeight },
            react_1.default.createElement(styles_2.EmployeeAvatarWrapper, null, employee.photo ? (react_1.default.createElement(styles_2.EmployeeAvatar, { src: employee.photo })) : (react_1.default.createElement(AvatarIcon_1.default, null))),
            react_1.default.createElement(styles_2.EmployeeInfo, null,
                react_1.default.createElement("div", null, employee.code),
                react_1.default.createElement("div", null, employee.firstName),
                react_1.default.createElement("div", null, employee.costCenterCode || "Unknown")),
            react_1.default.createElement(styles_1.ListItemActionsMenuButton, { onClick: handleClick },
                react_1.default.createElement(ThreeDotsIcon_1.default, null))),
        react_1.default.createElement(Menu_1.default, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose }, MENU_ITEMS.map(function (item) { return (react_1.default.createElement(MenuItem_1.default, { key: item, onClick: handleClose }, item)); }))));
};
exports.default = EmployeeListItem;
//# sourceMappingURL=index.js.map