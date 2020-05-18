import { Moment } from "moment";
import React, { useMemo } from "react";
import { useSettingsState } from "../../../provider/settings";
import { CalendarViewDateWrapper } from "./styles";

interface IProps {
  viewDate: Moment;
}

const CalendarViewDate: React.FC<IProps> = ({ viewDate }) => {
  const { timeUnit } = useSettingsState();

  const date = useMemo<string>(() => {
    switch (timeUnit) {
      case "day":
        return viewDate.format("dddd D MMMM");
      case "week":
        return viewDate.format("wo YYYY");
      case "month":
        return viewDate.format("MMMM YYYY");
      case "year":
        return viewDate.format("YYYY");
    }
  }, [timeUnit, viewDate]);

  return <CalendarViewDateWrapper>{date}</CalendarViewDateWrapper>;
};

export default CalendarViewDate;
