import React from "react";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { TimeLineWrapper } from "../../../../styles";
import SimpleOrder from "./SimpleOrder";

interface IProps {
  orders: CalendarOrder[];
}

const WorkOrderCalendar: React.FC<IProps> = ({ orders }) => {
  return (
    <>
      {orders.map(wo => (
        <TimeLineWrapper key={wo.code}>
          <SimpleOrder key={wo.code} workOrder={wo} />
        </TimeLineWrapper>
      ))}
    </>
  );
};

export default WorkOrderCalendar;
