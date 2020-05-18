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
var get_1 = __importDefault(require("lodash/get"));
var helpers_1 = require("../../../../helpers");
var constants_1 = require("../../constants");
var Styled = __importStar(require("../../styles"));
var contractsChart_1 = __importDefault(require("./contractsChart"));
var appointmentsChart_1 = __importDefault(require("./appointmentsChart"));
var BottomArea = function (_a) {
    var history = _a.history, url = _a.url;
    var formatDate = function (date, day) {
        return "" + date.substring(0, 8) + day;
    };
    var handleClickBarItem = function (elems, dates) {
        var barItem = elems[0];
        var idx = get_1.default(barItem, "_index");
        var status = constants_1.CONTRACTS_STATUSES_BY_TITLES[get_1.default(barItem, "_model.datasetLabel")];
        var date = dates[idx].format("YYYY-MM-DD");
        history.push({
            pathname: helpers_1.urls.SC_LIST,
            state: {
                filters: {
                    status: status,
                    AND: [
                        { orderDate_gte: formatDate(date, "01") },
                        { orderDate_lte: formatDate(date, "31") }
                    ]
                }
            }
        });
    };
    return (react_1.default.createElement(Styled.ContractenStats, null,
        react_1.default.createElement(contractsChart_1.default, { onClickBarItem: handleClickBarItem }),
        react_1.default.createElement(appointmentsChart_1.default, null)));
};
exports.default = BottomArea;
//# sourceMappingURL=index.js.map