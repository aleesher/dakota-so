import moment from "moment";
import React, { createContext } from "react";
import { LIST_WIDTH, SECTION, SORT } from "../constants";
import OrderCollection from "./data/collections/OrderCollection";
import { buildTimeScale } from "./settings/TimeScale";
import {
  IDataState,
  IPageState,
  ISettingsState,
  TPlanningDispatch
} from "./types";

const defaultSettingsState: ISettingsState = {
  showNonWorkingHours: false,
  collapseOrders: false,
  startDate: moment().startOf("day"),
  endDate: moment().endOf("day"),
  timeUnit: "day",

  fixedAmountOfEmployees: 4,
  employeeCodes: [],
  employeeResourceCodes: [],
  employeeViewDate: moment(),
  employeeTimeScale: buildTimeScale(moment(), "day"),

  fixedAmountOfOrders: 10,
  orderViewDate: moment(),
  orderTimeScale: buildTimeScale(moment(), "day"),

  uiPreferences: {
    orderFields: [],
    messageCenter: {
      deadlineWarning: false,
      notificationLimit: 1,
      showNotifications: false,
      notificationUpdateInterval: 1,
      warningColor: "orange",
      deadlineExpiredColor: "red"
    },
    popupFields: [],
    colors: []
  },

  messageCenter: {
    isOpen: false,
    isPinned: false
  }
};

const defaultPageState: IPageState = {
  activeSection: SECTION.NONE,
  searchText: "",

  pageWidth: document.documentElement.clientWidth,
  calendarWidth: document.documentElement.clientWidth - LIST_WIDTH,

  employeeSort: SORT.ASC,
  orderSort: SORT.ASC,

  selectedOrders: {},
  totalSelected: 0,
  selectedStackId: "",
  isOrderDragging: false,

  fieldOptions: [],
  fieldLabels: {},
  fieldTypes: {},

  statusColors: {}
};

const defaultDataState: IDataState = {
  employees: [],
  orders: new OrderCollection([])
};

export interface IPlanningPageContext {
  settings: ISettingsState;
  pageState: IPageState;
  data: IDataState;
}

export const DEFAULT_PLANNING_STATE: IPlanningPageContext = {
  settings: defaultSettingsState,
  pageState: defaultPageState,
  data: defaultDataState
};

export const PlanningStateContext = createContext<IPlanningPageContext>(
  undefined
);
export const PlanningDispatchContext = createContext<TPlanningDispatch>(
  undefined
);
