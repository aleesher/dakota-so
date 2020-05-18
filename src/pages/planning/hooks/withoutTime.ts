import moment from "moment";
import { useMemo } from "react";
import { DEFAULT_WORK_ORDER_DURATION } from "../constants";
import { usePageState } from "../provider/page";
import { useSettingsState } from "../provider/settings";

// this hook generates start and end times for orders without time
export function useStartAndEndTimes() {
  const { orderViewDate } = useSettingsState();
  const { currentTime } = usePageState();

  return useMemo(() => {
    const startTime = moment(orderViewDate)
      .hours(currentTime.hours)
      .minutes(currentTime.minutes);
    const endTime = moment(startTime).add(DEFAULT_WORK_ORDER_DURATION, "hours");

    return [startTime, endTime];
  }, [currentTime, orderViewDate]);
}
