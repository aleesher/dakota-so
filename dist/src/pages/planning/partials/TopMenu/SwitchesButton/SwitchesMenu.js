"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useClickOutside_1 = __importDefault(require("../../../../../hooks/useClickOutside"));
var settings_1 = require("../../../provider/settings");
var styles_1 = require("../styles");
var CustomSwitch_1 = __importDefault(require("./CustomSwitch"));
var SwitchesMenu = function (_a) {
    var onClickOutside = _a.onClickOutside;
    var ref = useClickOutside_1.default(onClickOutside);
    var _b = settings_1.useSettingsState(), showNonWorkingHours = _b.showNonWorkingHours, collapseOrders = _b.collapseOrders;
    var _c = settings_1.useSettingsDispatch(), setShowNonWorkingHours = _c.setShowNonWorkingHours, setCollapseOrders = _c.setCollapseOrders;
    return (react_1.default.createElement(styles_1.SwitchesMenuWrapper, { ref: ref },
        react_1.default.createElement(CustomSwitch_1.default, { label: "Niet werktijden", checked: showNonWorkingHours, onToggle: setShowNonWorkingHours }),
        react_1.default.createElement(CustomSwitch_1.default, { label: "Rijen Inklappen", checked: collapseOrders, onToggle: setCollapseOrders })));
};
exports.default = SwitchesMenu;
//# sourceMappingURL=SwitchesMenu.js.map