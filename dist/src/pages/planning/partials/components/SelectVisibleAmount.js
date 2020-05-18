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
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var BootstrapInput = core_1.withStyles(function () {
    return core_1.createStyles({
        root: {
            margin: "0",
            marginLeft: 30,
            backgroundColor: "white"
        },
        input: {
            width: 40,
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
var SelectVisibleAmount = function (_a) {
    var values = _a.values, value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement(Select_1.default, { value: value, onChange: function (e) { return onChange(+e.target.value); }, input: react_1.default.createElement(BootstrapInput, null) }, values.map(function (value) { return (react_1.default.createElement(MenuItem_1.default, { key: value, value: value }, value)); })));
};
exports.default = SelectVisibleAmount;
//# sourceMappingURL=SelectVisibleAmount.js.map