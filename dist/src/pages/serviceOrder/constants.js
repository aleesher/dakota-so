"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
exports.INITIAL_STATE = {
    isLoading: false,
    searchAddress: "",
    searchResults: [],
    orderType: "",
    postalCode: "",
    currentUser: {},
    formikValues: {
        searchAddress: "",
        country: {},
        serviceType: {},
        orderType: {}
    },
    formIsValid: { error: false, message: "" }
};
exports.SERVICE_ORDER_INFO_FIELDS = [
    { title: "Daken met garantie", key: "roofWarranty" },
    { title: "Lekkages laatste 3 maanden:", key: "leakagePerThreeMonthsCount" },
    { title: "Lekkages Historie:", key: "allLeakagesCount" },
    { title: "Complex", key: "complexCode" }
];
exports.COUNTRIES = [
    { label: "Nederland", value: "NL" },
    { label: "Duitsland", value: "DE" },
    { label: "Belgie", value: "BE" }
];
exports.SO_TYPES = [
    { label: "Lekkage", value: models_1.SOTypes.LEAKAGE },
    { label: "Regieklus", value: models_1.SOTypes.DIRECTION_JOB },
    { label: "Correctief Onderhoud", value: models_1.SOTypes.CORRECTIVE_MAINTENANCE },
    {
        label: "Onderhoud en Inspectie",
        value: models_1.SOTypes.MAINTENANCE_AND_INSPECTION
    },
    { label: "Onderhoud", value: models_1.SOTypes.MAINTENANCE },
    { label: "Nulmeting", value: models_1.SOTypes.INITIAL_INSPECTION },
    { label: "Inspectie", value: models_1.SOTypes.INSPECTION },
    { label: "Voorspeld onderhoud", value: models_1.SOTypes.PREDICTED_MAINTENANCE },
    {
        label: "Inspectie Valbeveiliging",
        value: models_1.SOTypes.ALL_PROTECTION_INSPECTION
    },
    {
        label: "Onderhoud Groendak",
        value: models_1.SOTypes.MAINTENANCE_GREEN_ROOF
    }
];
// sourceType
exports.SERVICE_TYPES = [
    { label: "Regie", value: "REGIE" },
    { label: "Contract", value: "CONTRACT" },
    { label: "Garantie", value: "WARRANTY" },
    { label: "Service", value: "SERVICE" }
];
// detectorType
exports.REPORTER_TYPE_OPTIONS = [
    { label: "Bewoner", value: "BEWONER" },
    { label: "Opdrachtgever", value: "OPDRACHTGEVER" },
    { label: "Beheerde", value: "BEHEERDE" }
];
exports.PRIORITY_OPTIONS = [
    { label: "Laag", value: "LOW" },
    { label: "Medium", value: "MEDIUM" },
    { label: "Hoog", value: "HIGH" }
];
exports.INVOICE_OPTIONS = [
    { label: "Regie", value: models_1.InvoiceTypes.Director },
    { label: "Aanneming", value: models_1.InvoiceTypes.Contractor }
];
exports.BAG_FIELDS = [
    "postalCode",
    "houseNumber",
    "houseLetter",
    "street",
    "city"
];
exports.CLIENT_INFORMATION_FIELDS = [
    {
        title: "Naam",
        type: models_1.CardItemTypes.input,
        name: "customer.name",
        disabled: true,
        isMajorField: true
    },
    {
        title: "Nummer",
        type: models_1.CardItemTypes.input,
        name: "customer.code",
        disabled: true,
        isMajorField: true,
        maxLength: 10
    },
    {
        title: "Adres",
        type: models_1.CardItemTypes.input,
        name: "customer.address",
        disabled: true,
        isMajorField: true
    },
    {
        title: "Telefoonnr",
        type: models_1.CardItemTypes.input,
        name: "customer.phone",
        disabled: true,
        isMajorField: true
    },
    {
        title: "Contract nummer",
        type: models_1.CardItemTypes.input,
        name: "contractCode",
        soType: [
            models_1.SOTypes.MAINTENANCE,
            models_1.SOTypes.INITIAL_INSPECTION,
            models_1.SOTypes.INSPECTION,
            models_1.SOTypes.ALL_PROTECTION_INSPECTION,
            models_1.SOTypes.MAINTENANCE_AND_INSPECTION,
            models_1.SOTypes.MAINTENANCE_GREEN_ROOF
        ]
    },
    {
        title: "Factureren aan",
        type: models_1.CardItemTypes.input,
        name: "billingAddress",
        isMajorField: true
    },
    {
        title: "Soort factureren",
        type: models_1.CardItemTypes.input,
        name: "invoiceType",
        soType: [
            models_1.SOTypes.DIRECTION_JOB,
            models_1.SOTypes.CORRECTIVE_MAINTENANCE,
            models_1.SOTypes.PREDICTED_MAINTENANCE
        ],
        selectSoType: [models_1.SOTypes.DIRECTION_JOB, models_1.SOTypes.CORRECTIVE_MAINTENANCE],
        options: exports.INVOICE_OPTIONS
    },
    {
        title: "Opdracht datum",
        type: models_1.CardItemTypes.date,
        name: "orderDate",
        soType: [models_1.SOTypes.DIRECTION_JOB, models_1.SOTypes.CORRECTIVE_MAINTENANCE]
    },
    {
        title: "Opdracht nummer",
        type: models_1.CardItemTypes.input,
        name: "orderNumber",
        soType: [models_1.SOTypes.DIRECTION_JOB]
    },
    {
        title: "Aanneemsom",
        type: models_1.CardItemTypes.price,
        name: "invoicedPrice",
        soType: [models_1.SOTypes.DIRECTION_JOB, models_1.SOTypes.CORRECTIVE_MAINTENANCE]
    }
];
exports.REPORTER_FIELDS = [
    [
        {
            title: "Naam",
            type: models_1.CardItemTypes.input,
            name: "reporter.name",
            isMajorField: true,
            titleChange: {
                text: "Melder voornaam",
                selectedSOType: [models_1.SOTypes.LEAKAGE, models_1.SOTypes.MAINTENANCE_GREEN_ROOF]
            }
        },
        {
            title: "Melder achternaam",
            type: models_1.CardItemTypes.input,
            name: "reporter.surname",
            soType: [models_1.SOTypes.LEAKAGE, models_1.SOTypes.MAINTENANCE_GREEN_ROOF]
        },
        {
            title: "Telefoonnr",
            type: models_1.CardItemTypes.input,
            name: "reporter.phone",
            isMajorField: true
        },
        {
            title: "E-mail Adres",
            type: models_1.CardItemTypes.input,
            name: "reporter.email",
            isMajorField: true
        },
        {
            title: "Namens",
            type: models_1.CardItemTypes.input,
            name: "reporter.onBehalfOf",
            soType: [models_1.SOTypes.LEAKAGE]
        },
        {
            title: "Type",
            type: models_1.CardItemTypes.select,
            options: exports.REPORTER_TYPE_OPTIONS,
            name: "reporter.type",
            soType: [models_1.SOTypes.LEAKAGE]
        }
    ],
    [
        {
            title: "Uw referentie",
            type: models_1.CardItemTypes.input,
            name: "reporter.reference",
            soType: [
                models_1.SOTypes.LEAKAGE,
                models_1.SOTypes.DIRECTION_JOB,
                models_1.SOTypes.CORRECTIVE_MAINTENANCE,
                models_1.SOTypes.PREDICTED_MAINTENANCE
            ]
        },
        {
            title: "Priorteit",
            type: models_1.CardItemTypes.select,
            options: exports.PRIORITY_OPTIONS,
            name: "reporter.priority",
            soType: [models_1.SOTypes.LEAKAGE]
        },
        {
            title: "Track & Trace",
            type: models_1.CardItemTypes.switch,
            name: "reporter.isTrackAndTraceActive",
            soType: [models_1.SOTypes.LEAKAGE]
        },
        {
            title: "Werkzaamheden tekst",
            type: models_1.CardItemTypes.input,
            name: "reporter.workText",
            soType: [
                models_1.SOTypes.LEAKAGE,
                models_1.SOTypes.DIRECTION_JOB,
                models_1.SOTypes.CORRECTIVE_MAINTENANCE
            ],
            titleChange: {
                text: "Probleem tekst",
                selectedSOType: [models_1.SOTypes.LEAKAGE]
            }
        },
        {
            title: "Interne tekst",
            type: models_1.CardItemTypes.input,
            name: "reporter.internalText",
            isMajorField: true
        },
        {
            title: "Advies Tekst",
            type: models_1.CardItemTypes.input,
            name: "reporter.adviceText",
            soType: [models_1.SOTypes.CORRECTIVE_MAINTENANCE]
        }
    ]
];
//# sourceMappingURL=constants.js.map