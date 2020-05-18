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
var moment_1 = __importDefault(require("moment"));
exports.getDatesByMonths = function (count) {
    return Array(count)
        .fill("")
        .map(function (_, i) { return moment_1.default().subtract(count - i, "months"); });
};
exports.fillStatuses = function (datasets, callback) {
    var st = datasets.reduce(function (acc, _a) {
        var _b = _a.data, data = _b === void 0 ? [] : _b, label = _a.label, color = _a.backgroundColor;
        return data.some(function (d) { return !!d; }) ? __spreadArrays(acc, [{ label: label, color: color }]) : acc;
    }, []);
    callback(st);
};
exports.collectDatasets = function (values, types, statuses, colors, titles) {
    var defaultValues = Object.keys(types).reduce(function (acc, type) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[type] = 0, _a)));
    }, {});
    var data = values.reduce(function (acc, contract) {
        var _a, _b, _c, _d, _e, _f;
        var d = moment_1.default(contract.orderDate).format("MM-YYYY");
        var type = statuses[contract.status];
        if (!(d in acc)) {
            return __assign((_a = {}, _a[d] = __assign(__assign({}, defaultValues), (_b = {}, _b[type] = 1, _b)), _a), acc);
        }
        if (!(type in acc[d])) {
            return __assign(__assign({}, acc), (_c = {}, _c[d] = __assign(__assign(__assign({}, defaultValues), acc[d]), (_d = {}, _d[type] = 1, _d)), _c));
        }
        return __assign(__assign({}, acc), (_e = {}, _e[d] = __assign(__assign(__assign({}, defaultValues), acc[d]), (_f = {}, _f[type] = acc[d][type] + 1, _f)), _e));
    }, {});
    var dates = exports.getDatesByMonths(19);
    var result = dates.reduce(function (acc, d) {
        var formattedMonth = moment_1.default(d).format("MM-YYYY");
        var types = data[formattedMonth] || defaultValues;
        var _loop_1 = function (type) {
            var status_1 = acc.find(function (t) { return t.label === titles[type]; });
            if (!status_1) {
                acc.push({
                    label: titles[type],
                    backgroundColor: colors[type],
                    data: [types[type]]
                });
                return "continue";
            }
            status_1.data.push(types[type]);
        };
        for (var _i = 0, _a = Object.keys(types); _i < _a.length; _i++) {
            var type = _a[_i];
            _loop_1(type);
        }
        return __spreadArrays(acc);
    }, []);
    return { datasets: result, dates: dates };
};
//# sourceMappingURL=helpers.js.map