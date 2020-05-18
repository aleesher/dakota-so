/* tslint:disable:interface-over-type-literal */
import { Moment } from "moment";
import { DRAG_ITEM_TYPE } from "./constants";
import CalendarOrder from "./provider/data/collections/CalendarOrder";
import OrderStack from "./provider/data/collections/OrderStack";

export type TEmployee = {
  id: string;
  photo: string;
  code: string;
  resource: string;
  firstName: string;
  lastName: string;
  costCenterCode: string;
};

export type TTimeUnit = "day" | "week" | "month" | "year";

export type TOrderStatus =
  | "Open"
  | "In_Process"
  | "Technical_Finished"
  | "Administrative_Finished"
  | "Finished"
  | "Cancelled";

export type TOrderType = "NULMETING" | "INSPECTIE" | "REGIEKLUS" | "LEKKAGE";

export type TPriority = "LOW" | "MEDIUM" | "HIGH";

export type TWorkOrder = {
  code: string;
  soCode: string;
  soEmployeeCode: string;
  soStatus: TOrderStatus;
  soOrderType: TOrderType;
  soPriority: TPriority;
  startDate: Moment;
  startTime: Moment;
  endDate: Moment;
  endTime: Moment;
  description: string;
};

export type TUpdateOrderData = {
  code: string;
  startTime: Moment;
  starDate: Moment;
  endTime: Moment;
  endDate: Moment;
  soEmployeeCode?: string;
};

export type TWorkOrderGroup = {
  key: string;
  total: string;
  orders: CalendarOrder[];
  startDate: Moment;
  endDate: Moment;
};

export type TOrderGroupTooltipData = {
  status: TOrderStatus;
  amount: number;
};

export type TDragOrderItem = {
  type: DRAG_ITEM_TYPE.ORDER;
  order: CalendarOrder;
  totalSelected: number;
};

export type TDragStackItem = {
  type: DRAG_ITEM_TYPE.STACK;
  stack: OrderStack;
};

export type TDragItem = TDragOrderItem | TDragStackItem;

export type TScaleValue = {
  x: number;
  label: string;
};

export interface ITimeScale {
  getTime: (x: number) => Moment;
  getX: (date: Moment) => number;
  getValues: () => TScaleValue[];
  defaultOrderWidth?: number;
}

export type TMessage = {
  id: number;
  type: "Warning" | "DeadlineExpired";
  text: string;
};

export type TWorkOrderFieldType =
  | "Int"
  | "Float"
  | "String"
  | "DateTime"
  | "Date"
  | "Time";

export type TWorkOrderFieldOption = {
  label: string;
  value: string;
  type: TWorkOrderFieldType;
};

export interface IOrderStatus {
  title: string;
  key: TOrderStatus;
}
