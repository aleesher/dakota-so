"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var components_1 = require("dakota-portal/dist/components");
var components_2 = require("./../../components");
var ExpandableTable_1 = __importDefault(require("./../../components/ExpandableTable"));
var styles_1 = require("./styles");
var constants_1 = require("./constants");
var mock_1 = require("./mock");
var SelectSubcomplex = /** @class */ (function (_super) {
    __extends(SelectSubcomplex, _super);
    function SelectSubcomplex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dataSource: mock_1.DATA_SOURCE,
            expanded: {}
        };
        _this.handleChange = function (rowIndex, key, value) {
            var dataSource = _this.state.dataSource;
            if (key === "selecthead") {
                var updatedData_1 = dataSource.map(function (d) { return (__assign(__assign({}, d), { select: value ? "checked" : "unchecked", roofs: d.roofs.map(function (r) { return (__assign(__assign({}, r), { select: value })); }) })); });
                _this.setState({
                    dataSource: updatedData_1,
                    expanded: {}
                });
                return;
            }
            if (key === "select") {
                _this.setState(function (_a) {
                    var _b;
                    var expanded = _a.expanded;
                    return ({
                        expanded: __assign(__assign({}, expanded), (_b = {}, _b[rowIndex] = value === "notfullychecked" ? true : false, _b))
                    });
                });
            }
            var updatedData = dataSource.map(function (d, i) {
                var _a;
                return i === rowIndex ? __assign(__assign({}, d), (_a = {}, _a[key] = value, _a)) : d;
            });
            _this.setState({ dataSource: updatedData });
        };
        _this.handleRoofsChange = function (subComplexCode) { return function (rowIndex, key, value) {
            var updatedData = _this.state.dataSource.map(function (d) {
                return d.code === subComplexCode
                    ? __assign(__assign({}, d), { roofs: d.roofs.map(function (roof, i) {
                            var _a;
                            return i === rowIndex ? __assign(__assign({}, roof), (_a = {}, _a[key] = value, _a)) : roof;
                        }) }) : d;
            });
            _this.setState({ dataSource: updatedData });
        }; };
        return _this;
    }
    SelectSubcomplex.prototype.render = function () {
        var _this = this;
        var _a = this.state, expanded = _a.expanded, dataSource = _a.dataSource;
        return (react_1.default.createElement(styles_1.Container, null,
            react_1.default.createElement(styles_1.FormsWrapper, null,
                react_1.default.createElement(components_2.SearchInput, { value: "", onChange: function () { return null; }, bgColor: "transparent" }),
                react_1.default.createElement(styles_1.PerPageSelectWrapper, null,
                    react_1.default.createElement(components_2.NumberPerPage, { label: "Toon aantal rijen", value: { label: "20", value: 10 }, options: [
                            { label: "10", value: 10 },
                            { label: "15", value: 15 },
                            { label: "20", value: 20 }
                        ], onChange: function () { return null; } })),
                react_1.default.createElement(components_1.ActionMenu, { verticalAlignMenu: "bottom", items: [
                        {
                            title: "Some action",
                            onClick: function () { return null; }
                        }
                    ] })),
            react_1.default.createElement(ExpandableTable_1.default, { expanded: expanded, columns: constants_1.SUBCOMPLEX_COLUMNS(this.handleChange), data: dataSource, renderExpandedData: function (_a) {
                    var original = _a.original;
                    return (react_1.default.createElement(styles_1.ExpandedDataWrapper, null,
                        react_1.default.createElement(styles_1.ExpandedContentWrapper, null,
                            react_1.default.createElement(styles_1.SearchWrapper, null,
                                react_1.default.createElement(components_2.SearchInput, { value: "", onChange: function () { return null; }, bgColor: "transparent" }),
                                react_1.default.createElement(components_2.SubcomplexMenu, { title: "Open menu", actions: [{ label: "action", onClick: function () { return null; } }], position: {
                                        top: "20px",
                                        right: "26px"
                                    } })),
                            react_1.default.createElement(components_1.SortableTable, { isNotConfigurable: true, columns: constants_1.ROOF_COLUMNS(_this.handleRoofsChange(original.code)), dataSource: original.roofs }))));
                } })));
    };
    return SelectSubcomplex;
}(react_1.default.PureComponent));
exports.default = SelectSubcomplex;
//# sourceMappingURL=SelectSubcomplex.js.map