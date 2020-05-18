"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var get_1 = __importDefault(require("lodash/get"));
var debounce_1 = __importDefault(require("lodash/debounce"));
var components_1 = require("dakota-portal/dist/components");
var components_2 = require("../../../../../components");
var Switcher_1 = __importDefault(require("./../../../../../components/Switcher"));
var styles_1 = require("../../../styles");
var constants_1 = require("../../../constants");
var SubComplexInfo_1 = __importDefault(require("./SubComplexInfo"));
var PER_PAGE_OPTIONS = [
    { label: "10", value: 10 },
    { label: "15", value: 15 },
    { label: "20", value: 20 }
];
var Appointments = function (_a) {
    var isLocked = _a.isLocked, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick, match = _a.match, history = _a.history;
    var _b = react_1.default.useState({
        value: "planning",
        label: "Planning"
    }), active = _b[0], setActive = _b[1];
    var _c = react_1.default.useState({
        perPage: PER_PAGE_OPTIONS[0].value
    }), meta = _c[0], setMeta = _c[1];
    var handleSearchChange = debounce_1.default(function (search) {
        setMeta(__assign(__assign({}, meta), { filter: meta.filter
                ? __assign(__assign({}, meta.filter), { value: search }) : {
                id: "search",
                field: "code",
                value: search,
                comparisonOperator: "contains",
                ComparisonTypes: "AND"
            } }));
    }, 200);
    var Table = active.value === "planning" ? components_2.SubcomplexAppointments : components_2.SubcomplexInfoTable;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.AccordionLink, { ref: refs.appointments, label: "Afspraken", link: "appointments", isActive: activeLinks.includes("appointments"), onClick: function () { return onClick("appointments"); } },
            react_1.default.createElement(styles_1.AccordionContainer, null,
                react_1.default.createElement(styles_1.AccordionHeader, null,
                    react_1.default.createElement(styles_1.AppointmensButton, { onClick: function () { return history.push(match.url + "/modify-subcomplex"); } },
                        react_1.default.createElement("span", null, "Wijzig sub-complexen")),
                    react_1.default.createElement(styles_1.AppointmensButton, null,
                        react_1.default.createElement("span", null, "Toevoegen sub-complexen")),
                    react_1.default.createElement(components_2.NumberPerPage, { label: "Toon aantal rijen", options: PER_PAGE_OPTIONS, value: PER_PAGE_OPTIONS.find(function (_a) {
                            var value = _a.value;
                            return value === meta.perPage;
                        }), onChange: function (_a) {
                            var value = _a.value;
                            return setMeta(__assign(__assign({}, meta), { perPage: value }));
                        } }),
                    react_1.default.createElement(styles_1.AppointmensFilter, null,
                        react_1.default.createElement(styles_1.AppointmensFilterLabel, null, "Toon aantal rijen"),
                        react_1.default.createElement(styles_1.AppointmensSelect, { options: PER_PAGE_OPTIONS, value: PER_PAGE_OPTIONS.find(function (_a) {
                                var value = _a.value;
                                return value === meta.perPage;
                            }), onChange: function (_a) {
                                var value = _a.value;
                                return setMeta(__assign(__assign({}, meta), { perPage: value }));
                            } })),
                    react_1.default.createElement(styles_1.AppointmensFilter, null,
                        react_1.default.createElement(styles_1.AppointmensFilterLabel, null, "Periode"),
                        react_1.default.createElement(components_2.DatePeriodPicker, { startDate: moment_1.default(), endDate: moment_1.default(), onChangeStartDate: function () { return null; }, onChangeEndDate: function () { return null; } }))),
                react_1.default.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 18
                    } },
                    react_1.default.createElement(components_2.SearchInput, { value: get_1.default(meta, "filter.value", ""), onChange: function (e) { return handleSearchChange(e.target.value); }, bgColor: "transparent" }),
                    react_1.default.createElement(Switcher_1.default, { options: [
                            { value: "planning", label: "Planning" },
                            { value: "information", label: "Sub-complex informatie" }
                        ], active: active, onChange: setActive })),
                react_1.default.createElement(Table, { meta: meta, onQueryChange: setMeta, subcomplexes: constants_1.SUBCOMPLEXES }),
                !!meta.totalItems && (react_1.default.createElement(components_2.Pagination, { totalItems: meta.totalItems || 0, activePage: meta.activePage || 1, perPage: meta.perPage, onChange: function (activePage) { return setMeta(__assign(__assign({}, meta), { activePage: activePage })); } })))),
        react_1.default.createElement(components_1.ModalRoute, { path: match.url + "/modify-subcomplex", parentPath: match.url, component: SubComplexInfo_1.default, onBackdropClick: history.goBack })));
};
exports.default = Appointments;
//# sourceMappingURL=Appointments.js.map