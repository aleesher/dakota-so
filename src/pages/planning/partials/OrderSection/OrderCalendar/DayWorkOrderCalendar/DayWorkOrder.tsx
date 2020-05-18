import React from "react";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import WorkOrder from "./WorkOrder";
import WorkOrderWithoutTime from "./WorkOrderWithoutTime";

interface IProps {
  workOrder: CalendarOrder;
}

const DayWorkOrder: React.FC<IProps> = ({ workOrder }) => {
  if (workOrder.isWithTime) {
    return <WorkOrder workOrder={workOrder} />;
  } else {
    return <WorkOrderWithoutTime workOrder={workOrder} />;
  }
};

export default DayWorkOrder;
