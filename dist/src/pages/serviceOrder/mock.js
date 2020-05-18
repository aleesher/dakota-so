"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.SERVICE_ORDER_INITIAL_VALUES = {
    country: undefined,
    serviceType: constants_1.SERVICE_TYPES[0],
    soType: constants_1.SO_TYPES[0],
    serviceOrderNumber: "2019LE0000010",
    postCode: "4207-HB",
    houseNumber: "2D",
    street: "Stephensonstraat",
    place: "Gorinchem",
    clientName: "0000 XX",
    clientNumber: "Default001",
    clientAddress: "Default002",
    clientPhone: "+312000000000",
    billingTo: "Default B.V.",
    contactPerson: {
        name: "Merv Van Jensen",
        phone: "+3120000900",
        email: "Merv90@gmail.com",
        onBehalfOf: "WoCo",
        type: constants_1.REPORTER_TYPE_OPTIONS[0],
        reference: "190129",
        priority: constants_1.PRIORITY_OPTIONS[0]
    },
    soDescription: "Lekkage aan de linkerzidje van het dak",
    reporterType: constants_1.REPORTER_TYPE_OPTIONS[0],
    reporterReference: "190129",
    reporterPriority: constants_1.PRIORITY_OPTIONS[0],
    reportDescription: "Lekkage aan de linkerzidje van het dak"
};
//# sourceMappingURL=mock.js.map