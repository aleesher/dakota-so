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
var ColorPopupWindow_1 = __importDefault(require("../ColorPopupWindow"));
var styles_1 = require("./styles");
var CustomColorPicker = function (_a) {
    var color = _a.color, onSelect = _a.onSelect, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var _c = react_1.useState(false), showPopup = _c[0], setShowPopup = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.CurrentColor, { color: color, disabled: disabled, onClick: function (value) { return !disabled && setShowPopup(true); } }),
        showPopup && (react_1.default.createElement(ColorPopupWindow_1.default, { open: true, initialColor: color, onClose: function (color) {
                onSelect(color);
                setShowPopup(false);
            } }))));
};
exports.default = CustomColorPicker;
//# sourceMappingURL=index.js.map