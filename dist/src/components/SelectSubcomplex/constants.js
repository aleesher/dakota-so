"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Remove_1 = __importDefault(require("@material-ui/icons/Remove"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var components_1 = require("dakota-portal/dist/components");
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var utils_1 = require("./../../components/ExpandableTable/utils");
var styles_1 = require("./styles");
var transformed_checkbox_1 = __importDefault(require("./transformed-checkbox"));
exports.SUBCOMPLEX_COLUMNS = function (onChange) {
    return utils_1.convertColumns([
        {
            key: "select",
            visible: true,
            render: function (_a) {
                var data = _a.data, width = _a.width, value = _a.value, index = _a.index;
                if (data) {
                    var isChecked_1 = data.every(function (item) {
                        if (item.select !== "checked") {
                            return false;
                        }
                        if (!item._original.roofs.every(function (_a) {
                            var select = _a.select;
                            return !!select;
                        })) {
                            return false;
                        }
                        return _this;
                    });
                    return (react_1.default.createElement(styles_1.HeaderCheckboxWrapper, null,
                        react_1.default.createElement(components_1.Checkbox, { checked: isChecked_1, onChange: function () { return onChange(null, "selecthead", !isChecked_1); } })));
                }
                return (react_1.default.createElement("td", { style: { width: width + "px" } },
                    react_1.default.createElement("div", { style: { display: "inline-block" }, onClick: function (e) { return e.stopPropagation(); } },
                        react_1.default.createElement(transformed_checkbox_1.default, { checked: value, onChange: function (newValue) { return onChange(index, "select", newValue); } }))));
            }
        },
        {
            key: "code",
            title: "Code",
            visible: true
        },
        {
            key: "name",
            title: "Name",
            visible: true
        },
        {
            key: "mark",
            title: "",
            visible: true,
            render: function (_a) {
                var data = _a.data, original = _a.original;
                if (data) {
                    return react_1.default.createElement(styles_1.Mark, null);
                }
                return (react_1.default.createElement(styles_1.Mark, null, original.select === "notfullychecked" ? (react_1.default.createElement(Remove_1.default, { fontSize: "inherit" })) : (react_1.default.createElement(Add_1.default, { fontSize: "inherit" }))));
            }
        }
    ]);
};
exports.ROOF_COLUMNS = function (onChange) { return [
    {
        key: "select",
        title: "",
        visible: true,
        render: function (rowIndex, __, rowData) {
            if (!rowData) {
                return react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-select" });
            }
            return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-select" },
                react_1.default.createElement(components_1.Checkbox, { checked: rowData.select, onChange: function () { return onChange(rowIndex, "select", !rowData.select); } })));
        }
    },
    {
        key: "code",
        title: "Code",
        visible: true
    },
    {
        key: "subcomplexCode",
        title: "Subcomplex Code",
        visible: true
    },
    {
        key: "name",
        title: "Name",
        visible: true
    },
    {
        key: "address",
        title: "Address",
        visible: true
    }
]; };
//# sourceMappingURL=constants.js.map