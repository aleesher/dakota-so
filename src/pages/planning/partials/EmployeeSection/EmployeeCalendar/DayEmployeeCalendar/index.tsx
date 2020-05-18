import React from "react";
import CalendarEmployee from "../../../../provider/data/collections/CalendarEmployee";
import { EmployeeCurrentTime } from "../../../components/CurrentTime";
import EmployeeOrders from "./EmployeeOrders";
import DroppableEmployeeTimeLine from "./DroppableEmployeeTimeLine";
import OrderStacks from "./OrderStacks";

interface IProps {
  employees: CalendarEmployee[];
}

const DayEmployeeCalendar: React.FC<IProps> = ({ employees }) => {
  return (
    <>
      <EmployeeCurrentTime />

      {employees.map(e => (
        <DroppableEmployeeTimeLine key={e.code} employee={e}>
          <EmployeeOrders orders={e.getOrders()} />
          <OrderStacks orderStacks={e.getStacks()} />
        </DroppableEmployeeTimeLine>
      ))}
    </>
  );
};

export default DayEmployeeCalendar;
