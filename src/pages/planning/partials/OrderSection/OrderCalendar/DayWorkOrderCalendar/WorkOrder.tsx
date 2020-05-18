import React from "react";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import CommonOrder from "../../../components/DayOrder/CommonOrder";
import DisabledOrder from "../../../components/DayOrder/DisabledOrder";

interface IProps {
  workOrder: CalendarOrder;
}

const WorkOrder: React.FC<IProps> = ({ workOrder }) => {
  if (workOrder.isLocked) {
    return <DisabledOrder workOrder={workOrder} />;
  }

  return <CommonOrder workOrder={workOrder} />;
};

export default WorkOrder;
