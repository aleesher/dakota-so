"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var helpers_1 = require("./helpers");
var global_1 = require("./styles/global");
var menuItems = [
    {
        label: "Dashboard Orders",
        url: "/so",
        notificationKey: "dashboard",
        exact: true
    },
    {
        label: "Serviceorders",
        url: "/so/list",
        notificationKey: "serviceorders",
        subs: [
            {
                label: "Lekkages",
                url: "/so/list?type=LEKKAGE",
                notificationKey: "so-leakages"
            },
            {
                label: "Regieklus",
                url: "/so/list?type=REGIEKLUS",
                notificationKey: "so-regiklus"
            },
            {
                label: "Correctief",
                url: "/so/list?type=CORRECTIEF",
                notificationKey: "so-correctief"
            },
            {
                label: "Correctief onderhoud",
                url: "/so/list?type=CORRECTIVE_ONDERHOUD",
                notificationKey: "so-correctief-onderhoud"
            },
            {
                label: "Onderhoud en inspectie",
                url: "/so/list?type=IO",
                notificationKey: "so-onderhoud-en-inspectie"
            },
            {
                label: "Onderhoud",
                url: "/so/list?type=ONDERHOUD",
                notificationKey: "so-onderhoud"
            },
            {
                label: "Nulmeting",
                url: "/so/list?type=NULMETING",
                notificationKey: "so-nulmeting"
            },
            {
                label: "Inspectie",
                url: "/so/list?type=INSPECTIE",
                notificationKey: "so-inspectie"
            },
            {
                label: "Voorspeldo",
                url: "/so/list?type=VOORSPELDO",
                notificationKey: "so-voorspeldo"
            },
            {
                label: "Valbeleili",
                url: "/so/list?type=VALBEVEILI",
                notificationKey: "so-valbeleili"
            },
            {
                label: "Contract",
                url: "/so/list?type=CONTRACT",
                notificationKey: "so-contract"
            }
        ]
    },
    {
        label: "Service Contracts",
        url: helpers_1.urls.SC_HOME,
        notificationKey: "sc-dash",
        subs: [
            {
                label: "Dashboard Contracten",
                url: helpers_1.urls.SC_HOME,
                notificationKey: "sc-home"
            },
            {
                label: "Service Contracten",
                url: helpers_1.urls.SC_LIST,
                notificationKey: "contracts"
            }
        ]
    },
    {
        label: "",
        url: "",
        notificationKey: "so-planning",
        render: function () { return (react_1.default.createElement(global_1.MenuLink, { onClick: function () { return window.open(helpers_1.urls.PLANNING); } }, "Werkorder Planning")); }
    }
];
exports.default = menuItems;
//# sourceMappingURL=menuItems.js.map