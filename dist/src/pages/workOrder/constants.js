"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var components_1 = require("dakota-portal/dist/components");
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
exports.woTableColumns = function (onChange, isChecked, onOpenMomentHistory) {
    if (onOpenMomentHistory === void 0) { onOpenMomentHistory = function () { return null; }; }
    return [
        {
            key: "select",
            title: "",
            visible: true,
            fixedWidth: 100,
            render: function (rowIndex, __, rowData) {
                return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-select" },
                    react_1.default.createElement(components_1.Checkbox, { checked: isChecked(rowData), onChange: function () { return onChange(rowData); } })));
            }
        },
        {
            key: "code",
            title: "Werkorder nr.",
            visible: true,
            inputType: "text",
            isDisabledInput: true,
            isResizable: true,
            columnWidth: 134
        },
        {
            key: "serviceOrder.description",
            title: "Omschrijving",
            visible: true,
            inputType: "text",
            isDisabledInput: true,
            isResizable: true,
            columnWidth: 129
        },
        {
            key: "resourceType",
            title: "Resource Soort",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 143
        },
        {
            key: "resourceCode",
            title: "Resource Nummer",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 158
        },
        {
            key: "resourceCompanyName",
            title: "Resource Naam",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 139
        },
        {
            key: "isMainResource",
            title: "Leidende Resource",
            visible: true,
            render: function (rowIndex, __, rowData) { return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isMainResource" },
                react_1.default.createElement(components_1.Checkbox, { checked: rowData.isMainResource, onChange: function (_, checked) { return null; } }))); },
            inputType: "checkbox",
            isResizable: true,
            columnWidth: 160
        },
        {
            key: "moment.code",
            title: "Actueel Logmoment nr",
            visible: true,
            inputType: "text",
            isDisabledInput: true,
            isResizable: true,
            columnWidth: 193,
            render: function (rowIndex, _, rowData) { return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-moment-code", onClick: onOpenMomentHistory }, get_1.default(rowData, "moment.code"))); }
        },
        {
            key: "moment.status",
            title: "Huidig Logmoment",
            visible: true,
            inputType: "text",
            isDisabledInput: true,
            isResizable: true,
            columnWidth: 265,
            render: function (rowIndex, _, rowData) { return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-moment-status", onClick: onOpenMomentHistory }, get_1.default(rowData, "moment.status"))); }
        },
        {
            key: "starDate",
            title: "Start Datum",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 120
        },
        {
            key: "startTime",
            title: "Start Tijd",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 103
        },
        {
            key: "endDate",
            title: "End Datum",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 105
        },
        {
            key: "endTime",
            title: "End Tijd",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 88
        },
        {
            key: "expectedHours",
            title: "Vervachte aantal uren",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 195
        },
        {
            key: "durationTime",
            title: "Doorlooptijd",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 128
        },
        {
            key: "planAhead",
            title: "Doorplannen",
            visible: true,
            inputType: "text",
            isResizable: true,
            columnWidth: 126
        },
        {
            key: "isFirmPlanned",
            title: "Vastgepland",
            visible: true,
            render: function (rowIndex, __, rowData) { return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isFirmPlanned" },
                react_1.default.createElement(components_1.Checkbox, { checked: rowData.isFirmPlanned, onChange: function (_, checked) { return null; } }))); },
            inputType: "checkbox",
            isResizable: true,
            columnWidth: 124
        },
        {
            key: "hasSignature",
            title: "Handtekening",
            visible: true,
            render: function (rowIndex, __, rowData) { return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-hasSignature" },
                react_1.default.createElement(components_1.Checkbox, { checked: rowData.hasSignature, onChange: function (_, checked) { return null; } }))); },
            inputType: "checkbox",
            isResizable: true,
            columnWidth: 130
        },
        {
            key: "orderIsSent",
            title: "Buitendienst",
            visible: true,
            type: "boolean",
            inputType: "checkbox",
            isResizable: true,
            columnWidth: 123
        }
    ];
};
exports.BOOLEAN_FIELDS = [
    "isMainResource",
    "orderIsSent",
    "hasSignature",
    "isFirmPlanned"
];
exports.FORM_FIELDS_TO_IGNORE = [
    "id",
    "moment",
    "serviceOrder",
    "serviceOrder.description",
    "moment.code",
    "moment.status",
    "createdAt"
];
exports.STATUSES = {
    created: { status: "Openstaand / Order aangemaakt", code: 5 },
    planned: { status: "Order gepland", code: 10 },
    sentToDakApp: { status: "Order verzonden naar de dakapp", code: 15 },
    availableOnDakApp: { status: "Order aanwezig op de Dak-app", code: 25 },
    refused: { status: "Order geweigerd door de monteur", code: 30 },
    accepted: { status: "Geaccepteerd", code: 35 },
    journeyStarted: { status: "Start heenreis", code: 45 },
    started: { status: "Start of hervat uitvoer", code: 50 },
    interrupted: { status: "Onderbroken", code: 55 },
    replanning1: { status: "Herplannen, bewoners niet thuis", code: 60 },
    replanning2: { status: "Herplannen, kan niet op dak komen", code: 65 },
    reschedule1: { status: "Herplannen, kan gebruik niet vinden", code: 70 },
    reschedule2: { status: "Herplannen, materiaal bestellen", code: 75 },
    emergencyEquipmentOrder: {
        status: "Noodreparatie uitgevoerd, materieel bestellen",
        code: 80
    },
    executed: { status: "Uitgevoerd", code: 85 },
    emergencyRepairPerformed: {
        status: "Noodreparatie uitgevoerd, aanvullende order nodig",
        code: 90
    },
    notCompleted1: {
        status: "Niet afgerond, aanvullende order nodig",
        code: 95
    },
    notCompleted2: { status: "Niet afgerond, ander bedrijf nodig", code: 100 },
    emergencyRepairDone: {
        status: "Noodreparatie uitgevoerd, ander bedrijf nodig",
        code: 105
    },
    reviewed: { status: "Beoordeeld", code: 110 },
    administrativeReady: { status: "Administratief gereed", code: 115 },
    statedToBeFinished: { status: "Gereed gemeld", code: 120 },
    cancelled: { status: "Vervallen", code: 125 }
};
exports.NUMBER_FIELDS = ["durationTime", "expectedHours"];
exports.DEFAULT_LOG_MOMENT_STATUS = exports.STATUSES.created.status;
exports.DEFAULT_LOG_MOMENT_CODE = exports.STATUSES.created.code;
exports.FORM_VALUES = {
    code: "",
    starDate: "",
    startTime: "",
    durationTime: 2,
    expectedHours: 2,
    description: "",
    resourceType: "",
    resourceCode: "",
    resourceCompanyName: "",
    isMainResource: false,
    endDate: "",
    endTime: "",
    planAhead: "",
    isFirmPlanned: false,
    hasSignature: false,
    orderIsSent: false,
    moment: {
        code: exports.DEFAULT_LOG_MOMENT_CODE,
        description: ""
    },
    serviceOrder: {
        description: ""
    }
};
//# sourceMappingURL=constants.js.map