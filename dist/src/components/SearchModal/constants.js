"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var styles_1 = require("./styles");
exports.DEFAULT_CLIENT = {
    name: "John Doe",
    code: "0000000000",
    phone: "0000000000",
    address: "Amsterdam"
};
exports.tableColumns = function (onSelect) { return [
    {
        key: "code",
        title: "Klantnummer",
        visible: true,
        isSearchable: true,
        fixedWidth: 150
    },
    {
        key: "name",
        title: "Naam",
        visible: true,
        isSearchable: true
    },
    {
        key: "address",
        title: "Adres",
        visible: true,
        isSearchable: true
    },
    {
        key: "phone",
        title: "Telefoonnr",
        visible: true,
        isSearchable: true
    },
    {
        key: "selectButton",
        title: "",
        visible: true,
        nonConfigurable: true,
        render: function (rowIndex, __, rowData) { return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-selectButton" },
            react_1.default.createElement(styles_1.TableButton, { onClick: function () { return onSelect(rowData); } }, "Selecteer"))); }
    }
]; };
var PER_PAGE = 7;
exports.META = {
    activePage: 0,
    totalItems: 0,
    perPage: PER_PAGE
};
//# sourceMappingURL=constants.js.map