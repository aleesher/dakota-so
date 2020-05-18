import React from "react";
import CalendarEmployee from "../../../../provider/data/collections/CalendarEmployee";
import PeriodEmployeeTimeLine from "./PeriodEmployeeTimeLine";

interface IProps {
  employees: CalendarEmployee[];
}

const PeriodEmployeeCalendar: React.FC<IProps> = ({ employees }) => {
  return (
    <>
      {employees.map(e => (
        <PeriodEmployeeTimeLine key={e.code} orders={e.getAllOrders()} />
      ))}
    </>
  );
};

export default PeriodEmployeeCalendar;
