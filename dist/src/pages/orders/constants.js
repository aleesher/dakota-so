"use strict";
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
var ImageViewer_1 = __importDefault(require("dakota-portal/dist/components/ImageViewer"));
var tableHelper_1 = __importDefault(require("../../helpers/tableHelper"));
var styles_1 = require("./partials/styles");
exports.PER_PAGE = 20;
exports.EXPORT_BUTTONS = {
    excel: {
        text: "EXPORT EXCEL"
    },
    pdf: {
        text: "DOWNLOAD PDF"
    }
};
exports.NAV_ITEMS = [
    {
        label: "Algemene informatie",
        link: "generalInfo"
    },
    {
        label: "Werkorders",
        link: "workOrders"
    },
    {
        label: "Documenten",
        link: "documents"
    },
    {
        label: "Beoordelen",
        link: "review"
    }
];
exports.COLUMNS = [
    {
        title: "Nr.",
        fixedWidth: 96,
        key: "id",
        visible: true
    },
    {
        title: "Omschrijving",
        key: "description",
        visible: true
    },
    tableHelper_1.default.createColumn.IsBlocked(),
    {
        title: "Klantnr.",
        key: "customerCode",
        visible: true
    },
    {
        title: "Klantnaam",
        key: "customerName",
        visible: true
    },
    {
        title: "Postcode",
        key: "postalCode",
        visible: true
    },
    {
        title: "Plaats",
        key: "city",
        visible: true
    },
    {
        title: "Ordersoort",
        key: "orderType",
        visible: false
    },
    {
        title: "Status",
        key: "status",
        visible: false
    },
    {
        title: "Prioriteit",
        key: "priority",
        visible: true
    },
    {
        title: "Orderdatum",
        key: "orderDate",
        visible: true
    },
    {
        title: "Startdatum",
        key: "startDate",
        visible: true
    },
    {
        title: "Einddatum",
        key: "endDate",
        visible: true
    },
    {
        title: "Werknemer",
        key: "employeeCode",
        visible: true
    },
    {
        title: "Aanneemsom",
        key: "orderAmount",
        visible: true
    },
    {
        title: "Te factureren bedrag",
        key: "invoicedPrice",
        visible: true
    }
];
exports.ROOF_HISTORY_TABLE_COLUMNS = [
    {
        key: "dakbowdeel",
        label: "Dakbowdeel",
        render: function (rowData) {
            return React.createElement(styles_1.RightPadding, null, rowData.dakbowdeel);
        }
    },
    {
        key: "oorzaak",
        label: "Oorzaak"
    },
    {
        key: "defect",
        label: "Defect",
        render: function (rowData) {
            return (React.createElement(styles_1.RightItem, null,
                rowData.defect,
                React.createElement(ImageViewer_1.default, { width: 174, height: 118, type: "icon", src: "https://media.gettyimages.com/photos/raakspoort-council-offices-bolles-and-wilson-haarlem-netherlands-picture-id154465929" })));
        }
    },
    {
        key: "maatregel",
        label: "Maatregel",
        render: function (rowData) {
            return (React.createElement(styles_1.RightItem, null,
                rowData.maatregel,
                React.createElement(ImageViewer_1.default, { width: 174, height: 118, type: "icon", src: "https://media.gettyimages.com/photos/raakspoort-council-offices-bolles-and-wilson-haarlem-netherlands-picture-id154465929" })));
        }
    },
    {
        key: "grootte",
        label: "Grootte",
        render: function (rowData) {
            return (React.createElement(styles_1.RightItem, null,
                rowData.grootte,
                " m",
                React.createElement("sup", null, "2")));
        }
    },
    {
        key: "verbruik",
        label: "Verbruik",
        render: function (rowData) {
            return (React.createElement(styles_1.RightItem, null,
                rowData.verbruik,
                React.createElement(styles_1.DialpadIcon, null)));
        }
    },
    {
        key: "schadeLevel",
        label: "Schade level",
        render: function (rowData) {
            return (React.createElement(styles_1.ItemTopic, { warn: rowData.schadeLevel === "Fair", danger: rowData.schadeLevel === "Kritisch", good: rowData.schadeLevel === "Good", tb: true }, rowData.schadeLevel));
        }
    },
    {
        key: "herhaling",
        label: "Herhaling",
        render: function (rowData) {
            return (React.createElement(styles_1.ItemData, { warn: rowData.schadeLevel === "Fair", danger: rowData.schadeLevel === "Kritisch", good: rowData.schadeLevel === "Good" }, rowData.herhaling));
        }
    },
    {
        key: "verontreiniging",
        label: "Verontreiniging"
    }
];
//# sourceMappingURL=constants.js.map