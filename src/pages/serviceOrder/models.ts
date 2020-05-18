import { SelectOptionType } from "dakota-portal/dist/components/SideFilterForm/Select";

export enum CardItemTypes {
  select = "select",
  input = "input",
  textarea = "textarea",
  text = "text",
  combinedInput = "combinedInput",
  date = "date",
  time = "time",
  phone = "phone",
  hour = "hour",
  price = "price",
  switch = "switch"
}

export type CardItemType = keyof typeof CardItemTypes;

export enum SOTypes {
  LEAKAGE = "LEKKAGE",
  DIRECTION_JOB = "REGIEKLUS",
  CORRECTIVE_MAINTENANCE = "CORRECTIVE_ONDERHOUD",
  MAINTENANCE_AND_INSPECTION = "ONDERHOUD_EN_INSPECTIE",
  MAINTENANCE = "ONDERHOUD",
  INITIAL_INSPECTION = "NULMETING",
  INSPECTION = "INSPECTIE",
  PREDICTED_MAINTENANCE = "VOORSPELD_ONDERHOUD",
  ALL_PROTECTION_INSPECTION = "INSPECTIE_VALBEVEILIGING",
  MAINTENANCE_GREEN_ROOF = "ONDERHOUD_GROENDAK"
}

export enum BronTypes {
  CONTRACT = "CO",
  WARRANTY = "WA",
  REGIE = "RE",
  SERVICE = "SE"
}

export enum CustomerTypes {
  Consolidated = "CN"
}

export type SOType = typeof SOTypes[keyof typeof SOTypes];

export interface SOFormField {
  type: CardItemType;
  soType?: SOType[];
  title: string;
  name: string;
  disabled?: boolean;
  isMajorField?: boolean;
  maxLength?: number;
  options?: SelectOptionType[];
  selectSoType?: SOType[];
  titleChange?: {
    text: string;
    selectedSOType: SOType[];
  };
}

export interface IBagNumber {
  id: string;
  postalCode: string;
  houseNumber: number;
  houseLetter: string;
  street: string;
  city: string;
  houseNumberAddition: string;
}

export interface ISOState {
  isLoading: boolean;
  searchAddress: string;
  searchResults: IBagNumber[];
  orderType: string;
  postalCode: string;
  currentUser?: object;
  formikValues: object;
  informationBoxValues?: object;
  soId?: string;
  formIsValid: object;
  creationDate?: string;
  needsRedirect?: boolean;
  isSubmitting?: boolean;
}

export interface IInformationBoxFields {
  title: string;
  key: string | number;
}

export enum InvoiceTypes {
  Director = "Regie",
  Contractor = "Aanneming"
}
