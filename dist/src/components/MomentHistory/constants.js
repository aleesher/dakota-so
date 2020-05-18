"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
exports.tableColumns = [
    {
        key: "startTime",
        title: "Datum / tijd start of the logmoment",
        visible: true,
        render: function (rowIndex, __, rowData) {
            var date = get_1.default(rowData, "starDate", "") + ", ";
            date = "" + date + get_1.default(rowData, "startTime", "");
            if (date.trim().length === 1) {
                date = "-";
            }
            return react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-logmoment-date" }, date);
        },
        isSortable: false,
        fixedWidth: 240
    },
    {
        key: "serviceOrder.status",
        title: "Service order status",
        visible: true,
        isSortable: false
    },
    {
        key: "moment.code",
        title: "Logmoment nummer",
        visible: true,
        isSortable: false
    },
    {
        key: "moment.status",
        title: "Logmoment omschrijving",
        visible: true,
        isSortable: false
    },
    {
        key: "user",
        title: "Gewijzigd door gebruiker",
        visible: true,
        isSortable: false,
        render: function (rowIndex, _, rowData) {
            var user = get_1.default(rowData, "updateByUser.roofingCompanyEmployee");
            var name = get_1.default(user, "firstName", "");
            name = name + " " + get_1.default(user, "lastName", "");
            if (name.trim() === 1) {
                name = "-";
            }
            return react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-logmoment-updated-user" }, name);
        }
    }
];
//# sourceMappingURL=constants.js.map