import i18n from "../helpers/i18";
import { IOrderStatus, TOrderStatus } from "../pages/planning/types";

export const SIZE = {
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

export const YES_NO_UNKNOWN = {
  UNKNOWN: i18n.t("Common.unknown"),
  YES: i18n.t("Common.yes"),
  NO: i18n.t("Common.no")
};

export const ORDER_STATUSES: IOrderStatus[] = [
  {
    title: i18n.t("ServiceOrder.status.open"),
    key: "Open"
  },
  {
    title: i18n.t("ServiceOrder.status.inProcess"),
    key: "In_Process"
  },
  {
    title: i18n.t("ServiceOrder.status.technicalFinished"),
    key: "Technical_Finished"
  },
  {
    title: i18n.t("ServiceOrder.status.administrativeFinished"),
    key: "Administrative_Finished"
  },
  {
    title: i18n.t("ServiceOrder.status.finished"),
    key: "Finished"
  },
  {
    title: i18n.t("ServiceOrder.status.cancelled"),
    key: "Cancelled"
  }
];

export const ORDER_STATUS_KEYS: TOrderStatus[] = ORDER_STATUSES.map(
  status => status.key
);
