"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertColumns(columns) {
    return columns.map(function (c) { return ({
        Header: c.title ? c.title : c.render,
        accessor: c.key,
        Cell: c.render ? c.render : undefined
    }); });
}
exports.convertColumns = convertColumns;
//# sourceMappingURL=utils.js.map