"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18_1 = __importDefault(require("../helpers/i18"));
exports.SIZE = {
    wrap: 1360,
    desktop: 1200,
    laptopLg: 1100,
    hdr: 1030,
    laptop: 985,
    laptopXs: 860,
    tablet: 768,
    mobileLg: 600,
    mobileL: 560,
    mobile: 480,
    mobileXs: 400
};
exports.YES_NO_UNKNOWN = {
    UNKNOWN: i18_1.default.t("Common.unknown"),
    YES: i18_1.default.t("Common.yes"),
    NO: i18_1.default.t("Common.no")
};
exports.ORDER_STATUSES = [
    {
        title: i18_1.default.t("ServiceOrder.status.open"),
        key: "Open"
    },
    {
        title: i18_1.default.t("ServiceOrder.status.inProcess"),
        key: "In_Process"
    },
    {
        title: i18_1.default.t("ServiceOrder.status.technicalFinished"),
        key: "Technical_Finished"
    },
    {
        title: i18_1.default.t("ServiceOrder.status.administrativeFinished"),
        key: "Administrative_Finished"
    },
    {
        title: i18_1.default.t("ServiceOrder.status.finished"),
        key: "Finished"
    },
    {
        title: i18_1.default.t("ServiceOrder.status.cancelled"),
        key: "Cancelled"
    }
];
exports.ORDER_STATUS_KEYS = exports.ORDER_STATUSES.map(function (status) { return status.key; });
//# sourceMappingURL=index.js.map