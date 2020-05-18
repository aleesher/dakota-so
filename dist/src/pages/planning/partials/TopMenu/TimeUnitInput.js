"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var core_1 = require("@material-ui/core");
var InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var constants_1 = require("../../constants");
var settings_1 = require("../../provider/settings");
var styles_1 = require("./styles");
var BootstrapInput = core_1.withStyles(function () {
    return core_1.createStyles({
        input: {
            width: 136,
            borderRadius: 4,
            position: "relative",
            border: "2px solid " + Colors_1.default.pattensBlue,
            fontSize: 16,
            padding: "14px 15px",
            color: Colors_1.default.fiord,
            "&:focus": {
                borderRadius: 4,
                borderColor: Colors_1.default.mayaBlue
            }
        }
    });
})(InputBase_1.default);
var TimeUnitInput = function () {
    var timeUnit = settings_1.useSettingsState().timeUnit;
    var setTimeUnit = settings_1.useSettingsDispatch().setTimeUnit;
    return (react_1.default.createElement(styles_1.TimeUnitWrapper, null,
        react_1.default.createElement("span", null, "Weergave"),
        react_1.default.createElement(FormControl_1.default, null,
            react_1.default.createElement(Select_1.default, { id: "demo-simple-select-outlined", value: timeUnit, onChange: function (e) { return setTimeUnit(e.target.value); }, input: react_1.default.createElement(BootstrapInput, null) }, constants_1.TIME_UNITS.map(function (u) { return (react_1.default.createElement(MenuItem_1.default, { key: u.value, value: u.value }, u.label)); })))));
};
exports.default = TimeUnitInput;
//# sourceMappingURL=TimeUnitInput.js.map