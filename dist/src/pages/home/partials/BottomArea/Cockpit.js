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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("dakota-portal/dist/components");
var constants_1 = require("../../constants");
var Cockpit = function (_a) {
    var columns = _a.columns, _b = _a.dataSource, dataSource = _b === void 0 ? [] : _b, totalRow = _a.totalRow;
    var _c = react_1.useState(__assign(__assign({}, constants_1.META), { perPage: constants_1.COCKPIT_PAGE_SIZE, totalItems: dataSource.length })), meta = _c[0], setMeta = _c[1];
    var from = meta.perPage * meta.activePage;
    var pageData = dataSource.slice(from, from + meta.perPage);
    return (react_1.default.createElement(components_1.SortableTable, { key: columns.length, columns: columns, dataSource: pageData, meta: meta, isNotConfigurable: true, onQueryChange: setMeta, totalRowData: [totalRow], isSnOTable: true }));
};
exports.default = Cockpit;
//# sourceMappingURL=Cockpit.js.map