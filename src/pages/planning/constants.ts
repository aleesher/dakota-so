import { CSSProperties } from "react";
import { TTimeUnit } from "./types";

export const PAGE_WIDTH = document.documentElement.clientWidth;
export const TOP_MENU_HEIGHT = 90;
export const DIVIDER_HEIGHT = 2;
export const LIST_WIDTH = 400;
export const ORDER_HEIGHT = 84;
export const CALENDAR_HEADER_HEIGHT = 100;
export const CALENDAR_LINE_HEIGHT = 100;
export const MESSAGES_MENU_WIDTH = 340;
export const SCROLL_WIDTH = 960;
export const CALENDAR_DATE_WIDTH = 220;
export const SCROLL_BUTTONS_WIDTH = 87;

export enum SECTION {
  NONE,
  EMPLOYEE_LIST,
  EMPLOYEE_CALENDAR,
  WORK_ORDER_LIST,
  WORK_ORDER_CALENDAR
}

export enum SORT {
  ASC,
  DESC
}

export enum CALENDAR_ORDER_TYPE {
  EMPLOYEE_ORDER = "employee-order",
  UNASSIGNED_ORDER = "unassigned-order",
  STACK_ORDER = "stack-order"
}

export enum DRAG_ITEM_TYPE {
  ORDER = "order",
  STACK = "stack"
}

export const ORDER_GROUP = {
  week: {
    startOf: "day",
    format: "YYYYMMDD"
  },
  month: {
    startOf: "week",
    format: "YYYYWW"
  },
  year: {
    startOf: "month",
    format: "YYYYMM"
  }
};

export const EMPLOYEE_TABLE_COLUMNS = [
  { key: "code", label: "Nummer" },
  { key: "firstName", label: "Voornaam" },
  { key: "lastName", label: "Achternaam" },
  { key: "costCenterCode", label: "Kostenplaats" },
  { key: "-", label: "Selecteren" }
];

export const TIME_UNITS: Array<{ label: string; value: TTimeUnit }> = [
  { label: "Dag", value: "day" },
  { label: "Week", value: "week" },
  { label: "Maand", value: "month" },
  { label: "Jaar", value: "year" }
];

export const ORDER_STYLES = {
  position: "absolute",
  height: ORDER_HEIGHT,
  boxSizing: "border-box",
  borderRadius: 5,
  borderWidth: 2,
  borderStyle: "solid",
  backgroundColor: "white"
} as CSSProperties;

export const ORDER_PREVIEW_OFFSET = 12;

export const DEFAULT_WORK_ORDER_DURATION = 2;
