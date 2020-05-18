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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Styled = __importStar(require("../../styles"));
var Legends = function (_a) {
    var _b = _a.filters, filters = _b === void 0 ? [] : _b, statuses = _a.statuses, setFilters = _a.setFilters;
    var handleChange = function (filter) {
        var updatedFilters = filters.includes(filter)
            ? filters.filter(function (f) { return f !== filter; })
            : __spreadArrays(filters, [filter]);
        setFilters(updatedFilters.length === statuses.length ? [] : updatedFilters);
    };
    return (react_1.default.createElement(Styled.LegendsWrapper, null, statuses.map(function (_a) {
        var label = _a.label, color = _a.color;
        return (react_1.default.createElement(Styled.LegendWrapper, { key: label, isActive: filters.includes(label), onClick: function () { return handleChange(label); } },
            react_1.default.createElement(Styled.Legend, { color: color }),
            " ",
            label));
    })));
};
exports.default = Legends;
//# sourceMappingURL=legends.js.map