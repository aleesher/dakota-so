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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var React = __importStar(require("react"));
var react_table_1 = __importDefault(require("react-table"));
require("react-table/react-table.css");
var styles_1 = require("./styles");
exports.REACT_TABLE_OPTIONS = {
    TableComponent: styles_1.TableComponent,
    TheadComponent: styles_1.TheadComponent,
    TbodyComponent: styles_1.TbodyComponent,
    TrComponent: styles_1.TrComponent,
    ThComponent: styles_1.ThComponent,
    TdComponent: styles_1.TdComponent,
    TrGroupComponent: styles_1.TrGroupComponent,
    getTheadTrProps: function () { return ({
        headerRow: true,
        clickable: true
    }); },
    minRows: 1,
    showPagination: false,
    sortable: false,
    multiSort: false,
    resizable: false,
    filterable: false
};
var ExpandableTable = function (_a) {
    var renderExpandedData = _a.renderExpandedData, expanded = _a.expanded, props = __rest(_a, ["renderExpandedData", "expanded"]);
    return (React.createElement(react_table_1.default, __assign({}, props, exports.REACT_TABLE_OPTIONS, { style: { overflowX: "auto" }, expanded: expanded, getTrProps: function (_, rowInfo) {
            return {
                onClick: function () { return console.log(rowInfo.index); },
                clickable: true
            };
        }, SubComponent: function (row) { return (React.createElement("tr", null,
            React.createElement("td", { colSpan: props.columns.length },
                React.createElement(styles_1.ExpandedDataWrapper, null, renderExpandedData(row))))); } })));
};
exports.default = ExpandableTable;
//# sourceMappingURL=ExpandableTable.js.map