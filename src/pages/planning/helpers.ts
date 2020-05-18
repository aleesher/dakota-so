import moment, { Moment } from "moment";
import { DropTargetMonitor } from "react-dnd/lib/interfaces/monitors";
import { CALENDAR_ORDER_TYPE, DRAG_ITEM_TYPE } from "./constants";
import { ITimeScale, TDragOrderItem } from "./types";

export function calculateNewStart(start: number, mon: DropTargetMonitor) {
  const delta = mon.getDifferenceFromInitialOffset();
  return start + delta.x;
}

export function roundUpToQuarterHour(date: Moment): Moment {
  const minutes = (Math.ceil(date.minutes() / 15) * 15) % 60;
  date.minutes(minutes);
  if (minutes === 0) {
    date.add(1, "hour");
  }
  return date;
}

export function canDropToEmployee(
  timeScale: ITimeScale,
  viewDate: Moment,
  delta: { x: number; y: number },
  object: { start: number; width: number }
): boolean {
  if (!object || !delta) {
    return false;
  }

  if (viewDate.isBefore(moment().startOf("day"))) {
    return false;
  }

  const curTimeX = timeScale.getX(moment());
  const start = object.start + delta.x;
  const endX = start + object.width;

  return curTimeX < endX;
}

export function canDropToUnassignedOrder(
  item: TDragOrderItem,
  orderCode: string
) {
  if (item.type !== DRAG_ITEM_TYPE.ORDER) {
    return false;
  }

  return (
    item.order.type === CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER &&
    item.order.code === orderCode &&
    item.totalSelected === 1
  );
}

export function canDropToStack(
  timeScale: ITimeScale,
  viewDate: Moment,
  end: number
) {
  if (viewDate.isBefore(moment().startOf("day"))) {
    return false;
  }

  const curTimeX = timeScale.getX(moment());
  return curTimeX < end;
}
