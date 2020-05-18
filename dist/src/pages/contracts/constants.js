"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var Reply_1 = __importDefault(require("@material-ui/icons/Reply"));
var DeleteRounded_1 = __importDefault(require("@material-ui/icons/DeleteRounded"));
var GetAppRounded_1 = __importDefault(require("@material-ui/icons/GetAppRounded"));
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var i18_1 = __importDefault(require("../../helpers/i18"));
exports.PER_PAGE = 20;
exports.DOCUMENT_ACTIONS = [
    {
        title: "Document delen",
        icon: react_1.default.createElement(Reply_1.default, { className: "replyIcon" }),
        onClick: function () { return console.log("clicked View"); }
    },
    {
        title: "Document verwijderen",
        icon: react_1.default.createElement(DeleteRounded_1.default, { className: "replyIcon" }),
        onClick: function () { return console.log("clicked Edit"); }
    },
    {
        title: "Document downloaden",
        icon: react_1.default.createElement(GetAppRounded_1.default, { className: "replyIcon" }),
        onClick: function () { return console.log("clicked Delete"); }
    }
];
exports.NAV_ITEMS = [
    {
        title: "Algemeen",
        label: "Algemeen informatie",
        link: "termins"
    },
    {
        title: "Klant",
        label: "Klant informatie",
        link: "client"
    },
    {
        label: "Data",
        link: "data"
    },
    {
        label: "Afspraken",
        link: "appointments"
    },
    {
        label: "Facturering",
        link: "billing"
    },
    {
        label: "Termijnen",
        link: "terms"
    },
    {
        label: "Documenten",
        link: "document"
    }
];
exports.YES_NO_UNKNOWN = {
    UNKNOWN: i18_1.default.t("Common.unknown"),
    YES: i18_1.default.t("Common.yes"),
    NO: i18_1.default.t("Common.no")
};
exports.EXPORT_BUTTONS = {
    excel: {
        text: i18_1.default.t("Common.exportExcel")
    },
    pdf: {
        text: i18_1.default.t("Common.downloadPdf")
    }
};
exports.COLUMNS = [
    {
        title: i18_1.default.t("ServiceContracts.field.code"),
        fixedWidth: 96,
        key: "code",
        visible: true,
        nonConfigurable: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.description"),
        key: "description",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.customerCode"),
        key: "customerCode",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.name"),
        key: "name",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.costCenterCode"),
        key: "costCenterCode",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.endingDate"),
        key: "endingDate",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.initialSalesAmount"),
        key: "initialSalesAmount",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.firstYearMaintenance"),
        key: "firstYearMaintenance",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.maintenanceMonth"),
        key: "maintenanceMonth",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.acknowledgedSO"),
        key: "acknowledgedSO",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.createdSO"),
        key: "createdSO",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.readySO"),
        key: "readySO",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.percentageReady"),
        key: "percentageReady",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.workingHours"),
        key: "workingHours",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.spendHours"),
        key: "spendHours",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.hoursSpentLastYear"),
        key: "hoursSpentLastYear",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.totalCost"),
        key: "totalCost",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.billedAmount"),
        key: "billedAmount",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.m2Dak"),
        key: "m2Dak",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.m2DakReady"),
        key: "m2DakReady",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.m2DakReadyPercent"),
        key: "m2DakReadyPercent",
        visible: true
    },
    {
        title: i18_1.default.t("ServiceContracts.field.reportSent"),
        key: "outsourced",
        visible: true,
        render: function (rowIndex, __, rowData) {
            return (react_1.default.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-reportSent" }, rowData.outsourced ? "Ja" : "Nee"));
        },
        renderExport: function (rowData) {
            return rowData.outsourced ? "Ja" : "Nee";
        }
    }
];
exports.APPOINTMENTS = [
    {
        orderDate: moment_1.default()
            .subtract(1, "month")
            .toDate(),
        orderType: "InspectionAndMaintenance",
        status: "Not_Planned",
        interval: 0
    },
    {
        orderDate: new Date(),
        orderType: "Maintenance",
        status: "Done",
        interval: 3
    },
    {
        orderDate: moment_1.default()
            .add(2, "month")
            .toDate(),
        orderType: "Inspection",
        status: "Scheduled",
        interval: 1
    }
];
exports.SUBCOMPLEXES = [
    {
        id: "" + Math.random(),
        code: "AB" + String(Math.random()).slice(2, 4),
        number: 1,
        address: "Wegstraat 1",
        postcode: "1234 AA",
        place: "Gorinchem",
        name: "Henry",
        phone: "0612345678",
        access: "-",
        data: exports.APPOINTMENTS
    }
];
//# sourceMappingURL=constants.js.map