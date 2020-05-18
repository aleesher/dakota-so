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
var moment_1 = __importDefault(require("moment"));
var moment_2 = __importDefault(require("@date-io/moment"));
var core_1 = require("@material-ui/core");
var MuiThemeProvider_1 = __importDefault(require("@material-ui/core/styles/MuiThemeProvider"));
var material_ui_pickers_1 = require("material-ui-pickers");
var muiColors_1 = require("dakota-portal/dist/components/muiColors");
var CalendarIcon_1 = __importDefault(require("./CalendarIcon"));
var styles_1 = require("./styles");
var DATE_FORMAT = "D MMMM YYYY";
var theme = core_1.createMuiTheme({
    palette: {
        primary: muiColors_1.defaultColor
    },
    typography: {
        useNextVariants: true,
    },
});
var DatePeriodPicker = function (_a) {
    var startDate = _a.startDate, endDate = _a.endDate, onChangeStartDate = _a.onChangeStartDate, onChangeEndDate = _a.onChangeEndDate;
    var startRef = react_1.useRef(null);
    var endRef = react_1.useRef(null);
    var handleChangeStart = function (date) {
        onChangeStartDate(moment_1.default(date).startOf("day"));
    };
    var handleChangeEnd = function (date) {
        onChangeEndDate(moment_1.default(date).startOf("day"));
    };
    return (react_1.default.createElement(MuiThemeProvider_1.default, { theme: theme },
        react_1.default.createElement(styles_1.DatePeriodPickerWrapper, null,
            react_1.default.createElement(material_ui_pickers_1.MuiPickersUtilsProvider, { utils: moment_2.default },
                react_1.default.createElement("div", { onClick: function () { return startRef.current.open(); } }, startDate.format(DATE_FORMAT)),
                react_1.default.createElement(material_ui_pickers_1.DatePicker, { ref: startRef, style: { display: "none" }, value: startDate, onChange: handleChangeStart, maxDate: endDate }),
                react_1.default.createElement(styles_1.Dash, null, "-"),
                react_1.default.createElement("div", { onClick: function () { return endRef.current.open(); } }, endDate.format(DATE_FORMAT)),
                react_1.default.createElement(material_ui_pickers_1.DatePicker, { ref: endRef, style: { display: "none" }, value: endDate, onChange: handleChangeEnd, minDate: startDate })),
            react_1.default.createElement(CalendarIcon_1.default, { color: "#6F7680" }))));
};
exports.default = DatePeriodPicker;
//# sourceMappingURL=index.js.map