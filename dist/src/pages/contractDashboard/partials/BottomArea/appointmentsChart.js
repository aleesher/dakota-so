"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var react_chartjs_2_1 = require("react-chartjs-2");
var get_1 = __importDefault(require("lodash/get"));
var components_1 = require("dakota-portal/dist/components");
var legends_1 = __importDefault(require("./legends"));
var Styled = __importStar(require("../../styles"));
var queries_1 = require("./../../queries");
var constants_1 = require("./../../constants");
var helpers_1 = require("./../../helpers");
var apollo_1 = __importDefault(require("../../../../../dev/apollo"));
var AppointmentsChart = function () {
    var _a = react_1.default.useState([]), appointmentsFilters = _a[0], setAppointmentsFilters = _a[1];
    var _b = react_1.default.useState([]), appointmentsStatuses = _b[0], setAppointmentsStatuses = _b[1];
    var _c = react_1.default.useState(false), statusesAreSet = _c[0], setStatuses = _c[1];
    var _d = react_1.default.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.default.useState({}), dataForCharts = _e[0], setDataForCharts = _e[1];
    var handleFillStatuses = function (datasets) {
        if (datasets === void 0) { datasets = []; }
        if (datasets.length && !appointmentsStatuses.length && !statusesAreSet) {
            helpers_1.fillStatuses(datasets, setAppointmentsStatuses);
            setStatuses(true);
        }
    };
    var getVariables = function () { return ({
        where: {
            AND: [
                { orderDate_lt: moment_1.default().format("YYYY-MM-DD") },
                {
                    orderDate_gt: moment_1.default()
                        .subtract(19, "months")
                        .format("YYYY-MM-DD")
                },
                appointmentsFilters.length
                    ? {
                        OR: appointmentsFilters.map(function (label) { return ({
                            status: constants_1.APPOINTMENTS_STATUSES_BY_TITLES[label]
                        }); })
                    }
                    : {}
            ]
        }
    }); };
    var collectDataForCharts = function (data) {
        var serviceAppointments = get_1.default(data, "serviceAppointments", []);
        var datasets = helpers_1.collectDatasets(serviceAppointments, constants_1.APPOINTMENTS_TYPES, constants_1.APPOINTMENTS_STATUSES, constants_1.APPOINTMENTS_COLORS, constants_1.APPOINTMENTS_TITLES).datasets;
        setDataForCharts({
            labels: helpers_1.getDatesByMonths(19).map(function (d) { return d.format("MMM").slice(0, -1); }),
            datasets: datasets
        });
        handleFillStatuses(datasets);
    };
    react_1.default.useEffect(function () {
        apollo_1.default
            .query({
            query: queries_1.FETCH_APPOINTMENTS_STATUSES,
            variables: getVariables()
        })
            .then(function (_a) {
            var data = _a.data;
            setIsLoading(false);
            collectDataForCharts(data);
        })
            .catch(function (error) {
            setIsLoading(false);
            return react_1.default.createElement("span", null, JSON.stringify(error, null, 2));
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isLoading && react_1.default.createElement(components_1.Loader, null),
        react_1.default.createElement(Styled.Title, null, "Voortgang per afspraak"),
        react_1.default.createElement(Styled.Appointments, null,
            react_1.default.createElement(Styled.ChartWrapper, null,
                react_1.default.createElement(react_chartjs_2_1.Bar, { data: dataForCharts, height: 600, width: 1100, options: {
                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                        mode: "index",
                        intersect: false,
                        scales: {
                            xAxes: [
                                {
                                    stacked: true
                                }
                            ],
                            yAxes: [
                                {
                                    stacked: true
                                }
                            ]
                        }
                    } })),
            react_1.default.createElement(legends_1.default, { setFilters: setAppointmentsFilters, filters: appointmentsFilters, statuses: appointmentsStatuses }))));
};
exports.default = AppointmentsChart;
//# sourceMappingURL=appointmentsChart.js.map