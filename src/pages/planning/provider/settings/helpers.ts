import { Moment } from "moment";
import { LIST_WIDTH, MESSAGES_MENU_WIDTH } from "../../constants";
import { buildTimeScale } from "./TimeScale";
import { TTimeUnit } from "../../types";
import { TStateDraft } from "../types";

export function calculateCalendarWidth(draft: TStateDraft) {
  let calendarWidth = draft.pageState.pageWidth - LIST_WIDTH;
  if (
    draft.settings.messageCenter.isPinned &&
    draft.settings.messageCenter.isOpen
  ) {
    calendarWidth -= MESSAGES_MENU_WIDTH;
  }
  draft.pageState.calendarWidth = calendarWidth;
}

export function calculateStatusColors(draft: TStateDraft) {
  return draft.settings.uiPreferences.colors.reduce(
    (acc, c) => ({ ...acc, [c.status]: c.color }),
    {}
  );
}

function calculateTimeUnit(
  diffD: number,
  diffW: number,
  diffM: number
): TTimeUnit {
  if (diffM > 6) {
    return "year";
  } else if (diffW > 6) {
    return "month";
  } else if (diffD > 14) {
    return "week";
  } else {
    return "day";
  }
}

export function setTimeScale(draft: TStateDraft, type: "employee" | "order") {
  return buildTimeScale(
    type === "employee"
      ? draft.settings.employeeViewDate
      : draft.settings.orderViewDate,
    draft.settings.timeUnit,
    draft.pageState.calendarWidth,
    draft.settings.showNonWorkingHours
  );
}

// on change start or end date
export function onChangeDate(
  draft: TStateDraft,
  startDate: Moment,
  endDate: Moment
) {
  const diffM = endDate.diff(startDate, "month");
  const diffW = endDate.diff(startDate, "week");
  const diffD = endDate.diff(startDate, "day");

  draft.settings.timeUnit = calculateTimeUnit(diffD, diffW, diffM);
  draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
  draft.settings.orderTimeScale = setTimeScale(draft, "order");
}

export function recalculateStartPositionAndWidthOfOrders(draft: TStateDraft) {
  draft.data.employees.forEach(e => {
    e.getOrders().forEach(o => {
      o.recalculateStartAndWidth(draft.settings.employeeTimeScale);
    });
    e.getStacks().forEach(s => {
      s.recalculateStartAndWidth(draft.settings.employeeTimeScale);
    });
  });
  draft.data.orders.all().forEach(o => {
    o.recalculateStartAndWidth(draft.settings.orderTimeScale);
  });
}

export function recalculateMessageCenterState(
  draft: TStateDraft,
  isOpen: boolean
) {
  draft.settings.messageCenter.isOpen = isOpen;

  calculateCalendarWidth(draft);

  // if messageCenter is pinned
  if (draft.settings.messageCenter.isPinned) {
    draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
    draft.settings.orderTimeScale = setTimeScale(draft, "order");
    recalculateStartPositionAndWidthOfOrders(draft);
  }
}
