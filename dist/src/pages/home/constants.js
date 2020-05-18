"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var FieldsFilter_1 = require("dakota-portal/dist/components/CustomFilter/FieldsFilter");
var constants_1 = require("../../constants");
var styles_1 = require("./styles");
exports.PERIOD_OPTIONS = [
    {
        label: "Huidige contractperiode",
        value: "current"
    },
    {
        label: "Periode 2019",
        value: "2019"
    },
    {
        label: "Periode 2018",
        value: "2018"
    }
];
exports.parseURL = function (data) {
    var q = {
        type: ""
    };
    data.replace(/([^=&]+)=([^&]*)/g, function (_m, key, value) {
        q[key] = (q[key] ? q[key] + "," : "") + value;
    });
    return q;
};
function makeUrlProp(customerCode, status) {
    return {
        comparisonType: "AND",
        filters: [
            FieldsFilter_1.createFilter({
                field: "customerCode",
                value: customerCode
            }),
            FieldsFilter_1.createFilter({
                field: "status",
                value: status
            })
        ]
    };
}
exports.makeUrlProp = makeUrlProp;
var getColor = function (status) {
    return status.includes("Finished")
        ? Colors_1.default.limerick
        : status === "Cancelled"
            ? Colors_1.default.cinnabar
            : status === "In_Process"
                ? Colors_1.default.orangePeel
                : Colors_1.default.fiord;
};
exports.CUSTOMER_COCKPIT_COLUMNS = __spreadArrays([
    {
        key: "name",
        title: "",
        visible: true,
        fixedWidth: 100
    }
], constants_1.ORDER_STATUSES.map(function (status) { return ({
    key: status.key,
    title: status.title,
    visible: true,
    render: function (_, __, data) {
        if (data === void 0) { data = {}; }
        var color = getColor(status.key);
        return data.name === "TOTAAL" ? (react_1.default.createElement(styles_1.TData, { key: status.key, color: color }, data[status.key] || "")) : (react_1.default.createElement(styles_1.TData, { key: status.key, color: color },
            react_1.default.createElement(styles_1.UnstyledLink, { to: "/so/list?filter=" +
                    JSON.stringify(makeUrlProp(data.customerCode, status.key)) }, data[status.key] || "")));
    }
}); }));
exports.EMPLOYEE_COCKPIT_COLUMNS = __spreadArrays([
    {
        key: "name",
        title: "",
        visible: true,
        fixedWidth: 100
    }
], constants_1.ORDER_STATUSES.map(function (status, idx) { return ({
    key: status.key,
    title: status.title,
    visible: true,
    render: function (_, __, data) {
        return (react_1.default.createElement(styles_1.TData, { key: status.key, color: getColor(status.key) }, lodash_1.default(data, status.key, "")));
    }
}); }));
exports.COCKPIT_PAGE_SIZE = 6;
exports.COCKPIT_LIMITS = [100, 200, 300, 400, 500];
var WRAP_OFFSET_HEIGHT = 800;
var ROW_HEIGHT = 60;
var height = document.body.offsetHeight;
exports.PER_PAGE = 10 + Math.round((height - WRAP_OFFSET_HEIGHT) / ROW_HEIGHT);
exports.META = {
    activePage: 0,
    totalItems: 0,
    perPage: exports.PER_PAGE
};
//# sourceMappingURL=constants.js.map