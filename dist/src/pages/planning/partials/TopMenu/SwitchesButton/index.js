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
var MenuIcon_1 = __importDefault(require("../../icons/MenuIcon"));
var styles_1 = require("../styles");
var SwitchesMenu_1 = __importDefault(require("./SwitchesMenu"));
var SwitchesButton = function () {
    var _a = react_1.useState(false), showMenu = _a[0], setShowMenu = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.SwitchesButtonWrapper, { onClick: function () { return setShowMenu(true); } },
            react_1.default.createElement(MenuIcon_1.default, null)),
        showMenu && react_1.default.createElement(SwitchesMenu_1.default, { onClickOutside: function () { return setShowMenu(false); } })));
};
exports.default = SwitchesButton;
//# sourceMappingURL=index.js.map