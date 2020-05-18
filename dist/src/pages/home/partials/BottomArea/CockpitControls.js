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
var Link_1 = __importDefault(require("react-router-dom/Link"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var components_1 = require("dakota-portal/dist/components");
var partials_1 = require("dakota-portal/dist/components/SideFilter/partials");
var constants_1 = require("../../constants");
var global_1 = require("../../../../styles/global");
var Styled = __importStar(require("../../styles"));
var CockpitControls = function (_a) {
    var children = _a.children, title = _a.title, type = _a.type;
    var _b = react_1.useState(constants_1.COCKPIT_LIMITS[0]), limit = _b[0], setLimit = _b[1];
    var _c = react_1.useState(moment_1.default()
        .subtract(6, "months")
        .startOf("month")
        .toDate()), startDate = _c[0], setStartDate = _c[1];
    var _d = react_1.useState(new Date()), endDate = _d[0], setEndDate = _d[1];
    var handleChangeLimit = function (e) { return setLimit(e.target.value); };
    var handleChangeDate = function (data) {
        if (data.start) {
            setStartDate(data.start.toDate());
        }
        if (data.end) {
            setEndDate(data.end.toDate());
        }
    };
    return (react_1.default.createElement(Styled.SoItem, null,
        react_1.default.createElement(global_1.PageHeader, null,
            react_1.default.createElement(Styled.Title, null, title),
            react_1.default.createElement(global_1.Aligned, null,
                react_1.default.createElement(FormControl_1.default, { style: { marginRight: 10 } },
                    react_1.default.createElement(Select_1.default, { onChange: handleChangeLimit, value: limit }, constants_1.COCKPIT_LIMITS.map(function (l) { return (react_1.default.createElement(MenuItem_1.default, { key: l, value: l }, l)); }))),
                react_1.default.createElement(partials_1.FilterIcon, null),
                react_1.default.createElement(Styled.InputWrapper, null,
                    react_1.default.createElement(components_1.SideFilterForm.Row, null,
                        react_1.default.createElement(components_1.SideFilterForm.DatePeriod, { start: startDate, end: endDate, onChange: handleChangeDate }))),
                react_1.default.createElement(Link_1.default, { to: "/so/table/settings?type=" + type },
                    react_1.default.createElement(Styled.SettingsIcon, null)))),
        react_1.default.createElement(Styled.ClientServiceorder, { display: "block" }, children({ limit: limit, startDate: startDate, endDate: endDate }))));
};
exports.default = CockpitControls;
//# sourceMappingURL=CockpitControls.js.map