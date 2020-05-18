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
var omit_1 = __importDefault(require("lodash/omit"));
var components_1 = require("dakota-portal/dist/components");
var legends_1 = __importDefault(require("./legends"));
var Styled = __importStar(require("../../styles"));
var queries_1 = require("./../../queries");
var constants_1 = require("./../../constants");
var helpers_1 = require("./../../helpers");
var apollo_1 = __importDefault(require("../../../../../dev/apollo"));
var ContractsChart = function (_a) {
    var onClickBarItem = _a.onClickBarItem;
    var _b = react_1.default.useState([]), contractsFilters = _b[0], setContractsFilters = _b[1];
    var _c = react_1.default.useState([]), contractsStatuses = _c[0], setContractsStatuses = _c[1];
    var _d = react_1.default.useState(false), statusesAreSet = _d[0], setStatuses = _d[1];
    var _e = react_1.default.useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = react_1.default.useState({}), dataForCharts = _f[0], setDataForCharts = _f[1];
    var handleFillStatuses = function (datasets) {
        if (datasets === void 0) { datasets = []; }
        if (datasets.length && !contractsStatuses.length && !statusesAreSet) {
            helpers_1.fillStatuses(datasets, setContractsStatuses);
            setStatuses(true);
        }
    };
    var getVariables = function () { return ({
        where: {
            NOT: { status: "Applied" },
            AND: [
                { orderDate_lt: moment_1.default().format("YYYY-MM-DD") },
                {
                    orderDate_gt: moment_1.default()
                        .subtract(19, "months")
                        .format("YYYY-MM-DD")
                },
                contractsFilters.length
                    ? {
                        OR: contractsFilters.map(function (label) { return ({
                            status: constants_1.CONTRACTS_STATUSES_BY_TITLES[label]
                        }); })
                    }
                    : {}
            ]
        }
    }); };
    var collectDataForCharts = function (data) {
        var serviceContracts = get_1.default(data, "serviceContracts", []);
        var _a = helpers_1.collectDatasets(serviceContracts, constants_1.CONTRACTS_TYPES, constants_1.CONTRACTS_STATUSES, constants_1.CONTRACTS_COLORS, constants_1.CONTRACTS_TITLES), datasets = _a.datasets, dates = _a.dates;
        setDataForCharts({
            labels: helpers_1.getDatesByMonths(19).map(function (d) { return d.format("MMM").slice(0, -1); }),
            datasets: datasets,
            dates: dates
        });
        handleFillStatuses(datasets);
    };
    react_1.default.useEffect(function () {
        apollo_1.default
            .query({
            query: queries_1.FETCH_CONTRACTS_STATUSES,
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
        react_1.default.createElement(Styled.Title, null, "Voortgang per ServiceContracten"),
        react_1.default.createElement(Styled.Appointments, null,
            react_1.default.createElement(Styled.ChartWrapper, null,
                react_1.default.createElement(react_chartjs_2_1.Bar, { data: omit_1.default(dataForCharts, ["dates"]), height: 600, width: 1100, getElementAtEvent: function (elems) {
                        return onClickBarItem(elems, get_1.default(dataForCharts, "dates"));
                    }, options: {
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
            react_1.default.createElement(legends_1.default, { setFilters: setContractsFilters, filters: contractsFilters, statuses: contractsStatuses }))));
};
exports.default = ContractsChart;
//# sourceMappingURL=contractsChart.js.map