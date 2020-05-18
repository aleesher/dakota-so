/* tslint:disable:interface-over-type-literal */
import { Draft } from "immer";
import { Moment } from "moment";
import { SECTION, CALENDAR_ORDER_TYPE, SORT } from "../constants";
import {
  ITimeScale,
  TOrderStatus,
  TTimeUnit,
  TWorkOrderFieldOption,
  TWorkOrderFieldType
} from "../types";
import CalendarEmployee from "./data/collections/CalendarEmployee";
import OrderCollection from "./data/collections/OrderCollection";

export type TOrderColorSetting = {
  status: TOrderStatus;
  color: string;
};

export type TMessageCenterSettings = {
  deadlineWarning: boolean;
  notificationLimit: number;
  showNotifications: boolean;
  notificationUpdateInterval: number;
  warningColor: string;
  deadlineExpiredColor: string;
};

export interface ISettingsState {
  showNonWorkingHours: boolean;
  collapseOrders: boolean;
  startDate: Moment;
  endDate: Moment;
  timeUnit: TTimeUnit;

  fixedAmountOfEmployees: number;
  employeeCodes: string[];
  employeeResourceCodes: string[];
  employeeViewDate: Moment;
  employeeTimeScale: ITimeScale;

  fixedAmountOfOrders: number;
  orderViewDate: Moment;
  orderTimeScale: ITimeScale;

  uiPreferences: {
    orderFields: string[];
    messageCenter: TMessageCenterSettings;
    popupFields: string[];
    colors: TOrderColorSetting[];
  };

  messageCenter: {
    isOpen: boolean;
    isPinned: boolean;
  };
}

export type TSelectedOrder = {
  type: CALENDAR_ORDER_TYPE;
  // code: string,
  resourceCode?: string;
  stackId?: string;
};

export interface IPageState {
  activeSection: SECTION;

  searchText: string;

  pageWidth: number;
  calendarWidth: number;

  employeeSort: SORT;
  orderSort: SORT;

  selectedOrders: {
    [code: string]: TSelectedOrder;
  };
  totalSelected: number;
  selectedStackId: string;
  isOrderDragging: boolean;

  fieldOptions: TWorkOrderFieldOption[];
  fieldLabels: {
    [field: string]: string;
  };
  fieldTypes: {
    [field: string]: TWorkOrderFieldType;
  };

  statusColors: {
    [status: string]: string;
  };
}

export interface IDataState {
  employees: CalendarEmployee[];
  orders: OrderCollection;
}

export interface IPlanningPageContext {
  settings: ISettingsState;
  pageState: IPageState;
  data: IDataState;
}

export type TStateDraft = Draft<IPlanningPageContext>;

export type TPlanningDispatch = (
  f: (draft: TStateDraft) => void | IPlanningPageContext
) => void;
