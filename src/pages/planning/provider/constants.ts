import { TTimeUnit, TWorkOrderFieldOption } from "../types";
import { ISettingsState } from "./types";

export const FRONTEND_FIELDS: TWorkOrderFieldOption[] = [
  { label: "Kostenplaats", value: "costCenter", type: "String" },
  { label: "Werknemer naam", value: "employeeName", type: "String" }
];

export const DEFAULT_SETTINGS: Partial<ISettingsState> = {
  showNonWorkingHours: false,
  collapseOrders: false,
  timeUnit: "day" as TTimeUnit,

  fixedAmountOfEmployees: 4,
  employeeCodes: [],
  employeeResourceCodes: [],

  fixedAmountOfOrders: 10,

  uiPreferences: {
    orderFields: ["code", "soCode"],
    messageCenter: {
      deadlineWarning: true,
      notificationLimit: 2,
      showNotifications: true,
      notificationUpdateInterval: 5,
      warningColor: "#FFA319",
      deadlineExpiredColor: "#FF0000"
    },
    popupFields: [
      "description",
      "code",
      "startTime",
      "endTime",
      "costCenter",
      "employeeName"
    ],
    colors: [
      { status: "Open", color: "#EF4B1C" },
      { status: "Finished", color: "#88AC1F" },
      { status: "In_Process", color: "#0083FF" }
    ]
  },

  messageCenter: {
    isOpen: false,
    isPinned: false
  }
};
