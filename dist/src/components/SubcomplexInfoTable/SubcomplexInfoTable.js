"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uniqueId_1 = __importDefault(require("lodash/uniqueId"));
var get_1 = __importDefault(require("lodash/get"));
var components_1 = require("dakota-portal/dist/components");
var helpers_1 = require("dakota-portal/dist/components/SortableTable/helpers");
var components_2 = require("./../../components");
var styles_1 = require("./styles");
var renderContent = function (key) { return function (rowIndex, widths, rowData) { return (react_1.default.createElement("td", { key: uniqueId_1.default(rowIndex), style: helpers_1.getFixedRowStyle(rowIndex, widths) },
    react_1.default.createElement(styles_1.Content, null, get_1.default(rowData, key, "")))); }; };
var SubcomplexInfoTable = function (_a) {
    var meta = _a.meta, subcomplexes = _a.subcomplexes, onQueryChange = _a.onQueryChange;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.Container, null,
            react_1.default.createElement(styles_1.Table, null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement(styles_1.Th, null,
                        "Sub-complexen",
                        react_1.default.createElement(components_2.SubcomplexMenu, { title: "Open menu", actions: [{ label: "action", onClick: function () { return null; } }] }))),
                react_1.default.createElement("tbody", null, subcomplexes.map(function (_a) {
                    var id = _a.id, code = _a.code;
                    return (react_1.default.createElement("tr", { key: id },
                        react_1.default.createElement(styles_1.Td, null,
                            code,
                            react_1.default.createElement(components_2.SubcomplexMenu, { title: "Open menu", actions: [{ label: "action", onClick: function () { return null; } }] }))));
                }))),
            react_1.default.createElement(styles_1.SortableTableWrapper, null,
                react_1.default.createElement(components_1.SortableTable, { hidePagination: true, meta: meta, onQueryChange: onQueryChange, isNotConfigurable: true, columns: [
                        {
                            title: "Code",
                            key: "code",
                            fixedWidth: 84,
                            visible: true,
                            render: renderContent("code")
                        },
                        {
                            title: "Nummer",
                            key: "number",
                            visible: true,
                            render: renderContent("number")
                        },
                        {
                            title: "Adres",
                            key: "address",
                            visible: true,
                            render: renderContent("address")
                        },
                        {
                            title: "Postcode",
                            key: "postcode",
                            visible: true,
                            render: renderContent("postcode")
                        },
                        {
                            title: "Plaats",
                            key: "place",
                            visible: true,
                            render: renderContent("place")
                        },
                        {
                            title: "Naam",
                            key: "name",
                            visible: true,
                            render: renderContent("name")
                        },
                        {
                            title: "Tel. nr.",
                            key: "phone",
                            visible: true,
                            render: renderContent("phone")
                        },
                        {
                            title: "Toegang",
                            key: "access",
                            visible: true,
                            render: renderContent("access")
                        }
                    ], dataSource: subcomplexes }))),
        react_1.default.createElement(styles_1.StatusesDescription, null, "IO = Inspectie & Onderhoud, O = Onderhoud, N = Nulmeting, I = Inspectie, IV = Inspectie Valbeveiligin")));
};
exports.default = SubcomplexInfoTable;
//# sourceMappingURL=SubcomplexInfoTable.js.map