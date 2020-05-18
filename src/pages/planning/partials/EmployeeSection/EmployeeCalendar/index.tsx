import React from "react";
import withAbilityToSelect from "../../../hocs";
import { useSettingsState } from "../../../provider";
import CalendarEmployee from "../../../provider/data/collections/CalendarEmployee";
import { CalendarWrapper } from "../../../styles";
import DayEmployeeCalendar from "./DayEmployeeCalendar";
import PeriodEmployeeCalendar from "./PeriodEmployeeCalendar";

interface IProps {
  employees: CalendarEmployee[];
}

const EmployeeCalendar: React.FC<IProps> = ({ employees }) => {
  const { timeUnit } = useSettingsState();

  return (
    <CalendarWrapper>
      {timeUnit === "day" ? (
        <DayEmployeeCalendar employees={employees} />
      ) : (
        <PeriodEmployeeCalendar employees={employees} />
      )}
    </CalendarWrapper>
  );
};

export default withAbilityToSelect(EmployeeCalendar);
