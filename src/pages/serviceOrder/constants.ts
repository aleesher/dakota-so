import { SelectOptionType } from "dakota-portal/dist/components/SideFilterForm/Select";

import {
  SOTypes,
  SOFormField,
  ISOState,
  IInformationBoxFields,
  InvoiceTypes,
  CardItemTypes
} from "./models";

export const INITIAL_STATE: ISOState = {
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

export const SERVICE_ORDER_INFO_FIELDS: IInformationBoxFields[] = [
  { title: "Daken met garantie", key: "roofWarranty" },
  { title: "Lekkages laatste 3 maanden:", key: "leakagePerThreeMonthsCount" },
  { title: "Lekkages Historie:", key: "allLeakagesCount" },
  { title: "Complex", key: "complexCode" }
];

export const COUNTRIES: SelectOptionType[] = [
  { label: "Nederland", value: "NL" },
  { label: "Duitsland", value: "DE" },
  { label: "Belgie", value: "BE" }
];

export const SO_TYPES: SelectOptionType[] = [
  { label: "Lekkage", value: SOTypes.LEAKAGE },
  { label: "Regieklus", value: SOTypes.DIRECTION_JOB },
  { label: "Correctief Onderhoud", value: SOTypes.CORRECTIVE_MAINTENANCE },
  {
    label: "Onderhoud en Inspectie",
    value: SOTypes.MAINTENANCE_AND_INSPECTION
  },
  { label: "Onderhoud", value: SOTypes.MAINTENANCE },
  { label: "Nulmeting", value: SOTypes.INITIAL_INSPECTION },
  { label: "Inspectie", value: SOTypes.INSPECTION },
  { label: "Voorspeld onderhoud", value: SOTypes.PREDICTED_MAINTENANCE },
  {
    label: "Inspectie Valbeveiliging",
    value: SOTypes.ALL_PROTECTION_INSPECTION
  },
  {
    label: "Onderhoud Groendak",
    value: SOTypes.MAINTENANCE_GREEN_ROOF
  }
];

// sourceType
export const SERVICE_TYPES: SelectOptionType[] = [
  { label: "Regie", value: "REGIE" },
  { label: "Contract", value: "CONTRACT" },
  { label: "Garantie", value: "WARRANTY" },
  { label: "Service", value: "SERVICE" }
];

// detectorType
export const REPORTER_TYPE_OPTIONS: SelectOptionType[] = [
  { label: "Bewoner", value: "BEWONER" },
  { label: "Opdrachtgever", value: "OPDRACHTGEVER" },
  { label: "Beheerde", value: "BEHEERDE" }
];

export const PRIORITY_OPTIONS: SelectOptionType[] = [
  { label: "Laag", value: "LOW" },
  { label: "Medium", value: "MEDIUM" },
  { label: "Hoog", value: "HIGH" }
];

export const INVOICE_OPTIONS: SelectOptionType[] = [
  { label: "Regie", value: InvoiceTypes.Director },
  { label: "Aanneming", value: InvoiceTypes.Contractor }
];

export const BAG_FIELDS: string[] = [
  "postalCode",
  "houseNumber",
  "houseLetter",
  "street",
  "city"
];

export const CLIENT_INFORMATION_FIELDS: SOFormField[] = [
  {
    title: "Naam",
    type: CardItemTypes.input,
    name: "customer.name",
    disabled: true,
    isMajorField: true
  },
  {
    title: "Nummer",
    type: CardItemTypes.input,
    name: "customer.code",
    disabled: true,
    isMajorField: true,
    maxLength: 10
  },
  {
    title: "Adres",
    type: CardItemTypes.input,
    name: "customer.address",
    disabled: true,
    isMajorField: true
  },
  {
    title: "Telefoonnr",
    type: CardItemTypes.input,
    name: "customer.phone",
    disabled: true,
    isMajorField: true
  },
  {
    title: "Contract nummer",
    type: CardItemTypes.input,
    name: "contractCode",
    soType: [
      SOTypes.MAINTENANCE,
      SOTypes.INITIAL_INSPECTION,
      SOTypes.INSPECTION,
      SOTypes.ALL_PROTECTION_INSPECTION,
      SOTypes.MAINTENANCE_AND_INSPECTION,
      SOTypes.MAINTENANCE_GREEN_ROOF
    ]
  },
  {
    title: "Factureren aan",
    type: CardItemTypes.input,
    name: "billingAddress",
    isMajorField: true
  },
  {
    title: "Soort factureren",
    type: CardItemTypes.input,
    name: "invoiceType",
    soType: [
      SOTypes.DIRECTION_JOB,
      SOTypes.CORRECTIVE_MAINTENANCE,
      SOTypes.PREDICTED_MAINTENANCE
    ],
    selectSoType: [SOTypes.DIRECTION_JOB, SOTypes.CORRECTIVE_MAINTENANCE],
    options: INVOICE_OPTIONS
  },
  {
    title: "Opdracht datum",
    type: CardItemTypes.date,
    name: "orderDate",
    soType: [SOTypes.DIRECTION_JOB, SOTypes.CORRECTIVE_MAINTENANCE]
  },
  {
    title: "Opdracht nummer",
    type: CardItemTypes.input,
    name: "orderNumber",
    soType: [SOTypes.DIRECTION_JOB]
  },
  {
    title: "Aanneemsom",
    type: CardItemTypes.price,
    name: "invoicedPrice",
    soType: [SOTypes.DIRECTION_JOB, SOTypes.CORRECTIVE_MAINTENANCE]
  }
];

export const REPORTER_FIELDS: SOFormField[][] = [
  [
    {
      title: "Naam",
      type: CardItemTypes.input,
      name: "reporter.name",
      isMajorField: true,
      titleChange: {
        text: "Melder voornaam",
        selectedSOType: [SOTypes.LEAKAGE, SOTypes.MAINTENANCE_GREEN_ROOF]
      }
    },
    {
      title: "Melder achternaam",
      type: CardItemTypes.input,
      name: "reporter.surname",
      soType: [SOTypes.LEAKAGE, SOTypes.MAINTENANCE_GREEN_ROOF]
    },
    {
      title: "Telefoonnr",
      type: CardItemTypes.input,
      name: "reporter.phone",
      isMajorField: true
    },
    {
      title: "E-mail Adres",
      type: CardItemTypes.input,
      name: "reporter.email",
      isMajorField: true
    },
    {
      title: "Namens",
      type: CardItemTypes.input,
      name: "reporter.onBehalfOf",
      soType: [SOTypes.LEAKAGE]
    },
    {
      title: "Type",
      type: CardItemTypes.select,
      options: REPORTER_TYPE_OPTIONS,
      name: "reporter.type",
      soType: [SOTypes.LEAKAGE]
    }
  ],
  [
    {
      title: "Uw referentie",
      type: CardItemTypes.input,
      name: "reporter.reference",
      soType: [
        SOTypes.LEAKAGE,
        SOTypes.DIRECTION_JOB,
        SOTypes.CORRECTIVE_MAINTENANCE,
        SOTypes.PREDICTED_MAINTENANCE
      ]
    },
    {
      title: "Priorteit",
      type: CardItemTypes.select,
      options: PRIORITY_OPTIONS,
      name: "reporter.priority",
      soType: [SOTypes.LEAKAGE]
    },
    {
      title: "Track & Trace",
      type: CardItemTypes.switch,
      name: "reporter.isTrackAndTraceActive",
      soType: [SOTypes.LEAKAGE]
    },
    {
      title: "Werkzaamheden tekst",
      type: CardItemTypes.input,
      name: "reporter.workText",
      soType: [
        SOTypes.LEAKAGE,
        SOTypes.DIRECTION_JOB,
        SOTypes.CORRECTIVE_MAINTENANCE
      ],
      titleChange: {
        text: "Probleem tekst",
        selectedSOType: [SOTypes.LEAKAGE]
      }
    },
    {
      title: "Interne tekst",
      type: CardItemTypes.input,
      name: "reporter.internalText",
      isMajorField: true
    },
    {
      title: "Advies Tekst",
      type: CardItemTypes.input,
      name: "reporter.adviceText",
      soType: [SOTypes.CORRECTIVE_MAINTENANCE]
    }
  ]
];
