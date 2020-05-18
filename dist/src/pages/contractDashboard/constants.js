"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.APPOINTMENTS_TYPES = {
    NO_APPOINTMENT: "NO_APPOINTMENT",
    NOT_PLANNED: "NOT_PLANNED",
    SCHEDULED: "SCHEDULED",
    DONE: "DONE"
};
exports.APPOINTMENTS_TITLES = (_a = {},
    _a[exports.APPOINTMENTS_TYPES.NO_APPOINTMENT] = "Geen Afspraak",
    _a[exports.APPOINTMENTS_TYPES.NOT_PLANNED] = "Afspraak Niet geplaned",
    _a[exports.APPOINTMENTS_TYPES.SCHEDULED] = "Afspraak Gepland",
    _a[exports.APPOINTMENTS_TYPES.DONE] = "Afspraak Gereed",
    _a);
exports.APPOINTMENTS_COLORS = (_b = {},
    _b[exports.APPOINTMENTS_TYPES.NO_APPOINTMENT] = Colors_1.default.lightGray,
    _b[exports.APPOINTMENTS_TYPES.NOT_PLANNED] = Colors_1.default.orangePeel,
    _b[exports.APPOINTMENTS_TYPES.SCHEDULED] = Colors_1.default.royalBlue,
    _b[exports.APPOINTMENTS_TYPES.DONE] = Colors_1.default.mediumSeaGreen,
    _b);
exports.APPOINTMENTS_STATUSES = {
    No_Appointment: exports.APPOINTMENTS_TYPES.NO_APPOINTMENT,
    Not_Planned: exports.APPOINTMENTS_TYPES.NOT_PLANNED,
    Scheduled: exports.APPOINTMENTS_TYPES.SCHEDULED,
    Done: exports.APPOINTMENTS_TYPES.DONE
};
exports.APPOINTMENTS_STATUSES_BY_TITLES = {
    "Geen Afspraak": "No_Appointment",
    "Afspraak Niet geplaned": "Not_Planned",
    "Afspraak Gepland": "Scheduled",
    "Afspraak Gereed": "Done"
};
// Contracts
exports.CONTRACTS_TYPES = {
    MAINTENANCE_SCHEDULED: "MAINTENANCE_SCHEDULED",
    APPOINTMENT_SCHEDULED: "APPOINTMENT_SCHEDULED",
    MAINTENANCE_PROPOSAL: "MAINTENANCE_PROPOSAL",
    MAINTENANCE_GREED: "MAINTENANCE_GREED"
};
exports.CONTRACTS_TITLES = (_c = {},
    _c[exports.CONTRACTS_TYPES.MAINTENANCE_SCHEDULED] = "Onderhoud Geplaned",
    _c[exports.CONTRACTS_TYPES.APPOINTMENT_SCHEDULED] = "Afspraak Gepland",
    _c[exports.CONTRACTS_TYPES.MAINTENANCE_PROPOSAL] = "Onderhoud Voorstel",
    _c[exports.CONTRACTS_TYPES.MAINTENANCE_GREED] = "Onderhoud Greed",
    _c);
exports.CONTRACTS_COLORS = (_d = {},
    _d[exports.CONTRACTS_TYPES.MAINTENANCE_SCHEDULED] = Colors_1.default.mediumSeaGreen,
    _d[exports.CONTRACTS_TYPES.APPOINTMENT_SCHEDULED] = Colors_1.default.lightningYellow,
    _d[exports.CONTRACTS_TYPES.MAINTENANCE_PROPOSAL] = Colors_1.default.cinnabar,
    _d[exports.CONTRACTS_TYPES.MAINTENANCE_GREED] = Colors_1.default.lynch,
    _d);
exports.CONTRACTS_STATUSES = {
    Invoicing_Allowed: exports.CONTRACTS_TYPES.MAINTENANCE_SCHEDULED,
    Offered: exports.CONTRACTS_TYPES.MAINTENANCE_PROPOSAL,
    Order: exports.CONTRACTS_TYPES.APPOINTMENT_SCHEDULED,
    Expired: exports.CONTRACTS_TYPES.MAINTENANCE_GREED
};
exports.CONTRACTS_STATUSES_BY_TITLES = (_e = {},
    _e[exports.CONTRACTS_TITLES.MAINTENANCE_SCHEDULED] = "Invoicing_Allowed",
    _e[exports.CONTRACTS_TITLES.MAINTENANCE_PROPOSAL] = "Offered",
    _e[exports.CONTRACTS_TITLES.APPOINTMENT_SCHEDULED] = "Order",
    _e[exports.CONTRACTS_TITLES.MAINTENANCE_GREED] = "Expired",
    _e);
//# sourceMappingURL=constants.js.map