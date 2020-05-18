"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var components_1 = require("dakota-portal/dist/components");
exports.COLUMNS = function (onChange) { return [
    {
        key: "code",
        title: "Nr",
        visible: true,
        inputType: "text"
    },
    {
        key: "status",
        title: "Omschrijving",
        visible: true,
        inputType: "text"
    },
    {
        key: "hasSoStatusChange",
        title: "Serviceorder Status",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-hasSoStatusChange" },
            React.createElement(components_1.Checkbox, { checked: rowData.hasSoStatusChange, onChange: function () {
                    return onChange({
                        hasSoStatusChange: !rowData.hasSoStatusChange,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    },
    {
        key: "hasWoPlanningStatusChange",
        title: "Werkorder Planning Status",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-hasWoPlanningStatusChange" },
            React.createElement(components_1.Checkbox, { checked: rowData.hasWoPlanningStatusChange, onChange: function () {
                    return onChange({
                        hasWoPlanningStatusChange: !rowData.hasWoPlanningStatusChange,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    },
    {
        key: "hasScStatusChange",
        title: "Service Contract Status",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-hasScStatusChange" },
            React.createElement(components_1.Checkbox, { checked: rowData.hasScStatusChange, onChange: function () {
                    return onChange({
                        hasScStatusChange: !rowData.hasScStatusChange,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    },
    {
        key: "isWOPlanningBlocked",
        title: "Blokkeer in Werkorder planning",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isWOPlanningBlocked" },
            React.createElement(components_1.Checkbox, { checked: rowData.isWOPlanningBlocked, onChange: function () {
                    return onChange({
                        isWOPlanningBlocked: !rowData.isWOPlanningBlocked,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    },
    {
        key: "isSCBlocked",
        title: "Blokkeer in Service Contract",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isSCBlocked" },
            React.createElement(components_1.Checkbox, { checked: rowData.isSCBlocked, onChange: function () {
                    return onChange({
                        isSCBlocked: !rowData.isSCBlocked,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    },
    {
        key: "isSOBlocked",
        title: "Blokkeer in Serviceorder",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isSOBlocked" },
            React.createElement(components_1.Checkbox, { checked: rowData.isSOBlocked, onChange: function () {
                    return onChange({
                        isSOBlocked: !rowData.isSOBlocked,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    },
    {
        key: "isExportBlocked",
        title: "Blokkeer Export naar buitendienst",
        visible: true,
        render: function (rowIndex, __, rowData) { return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isExportBlocked" },
            React.createElement(components_1.Checkbox, { checked: rowData.isExportBlocked, onChange: function () {
                    return onChange({
                        isExportBlocked: !rowData.isExportBlocked,
                        id: rowData.id
                    });
                } }))); },
        inputType: "checkbox"
    }
]; };
exports.FORM_VALUES = {
    type: "WO",
    code: "",
    navisionCode: "",
    status: "",
    hasSoStatusChange: true,
    hasWoPlanningStatusChange: true,
    hasScStatusChange: true,
    isWOPlanningBlocked: true,
    isSCBlocked: true,
    isSOBlocked: true,
    isExportBlocked: true
};
exports.NUMBER_FIELDS = ["navisionCode", "code"];
//# sourceMappingURL=constants.js.map