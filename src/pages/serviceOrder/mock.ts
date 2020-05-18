import {
  SO_TYPES,
  SERVICE_TYPES,
  REPORTER_TYPE_OPTIONS,
  PRIORITY_OPTIONS
} from "./constants";

export const SERVICE_ORDER_INITIAL_VALUES = {
  country: undefined,
  serviceType: SERVICE_TYPES[0],
  soType: SO_TYPES[0],
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
    type: REPORTER_TYPE_OPTIONS[0],
    reference: "190129",
    priority: PRIORITY_OPTIONS[0]
  },
  soDescription: "Lekkage aan de linkerzidje van het dak",
  reporterType: REPORTER_TYPE_OPTIONS[0],
  reporterReference: "190129",
  reporterPriority: PRIORITY_OPTIONS[0],
  reportDescription: "Lekkage aan de linkerzidje van het dak"
};
