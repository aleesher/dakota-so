import moment from "moment";
import React from "react";
import { ORDER_GROUP } from "../../../../constants";
import { useSettingsState } from "../../../../provider";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { WorkOrderGroupWrapper } from "../../../../styles";
import SelectableOrder from "../../../components/DayOrder/SelectableOrder";
import { OrderTooltip } from "../../../components/OrderTooltip";

interface IProps {
  workOrder: CalendarOrder;
}

const SimpleOrder: React.FC<IProps> = ({ workOrder }) => {
  const { orderTimeScale, timeUnit } = useSettingsState();

  if (!workOrder.startDate) {
    return null;
  }

  const start = moment(workOrder.startDate).startOf(
    ORDER_GROUP[timeUnit].startOf
  );
  const end = moment(workOrder.endDate).endOf(ORDER_GROUP[timeUnit].startOf);

  return (
    <OrderTooltip workOrder={workOrder}>
      <WorkOrderGroupWrapper
        start={orderTimeScale.getX(start)}
        end={orderTimeScale.getX(end)}
      >
        <SelectableOrder workOrder={workOrder} />
      </WorkOrderGroupWrapper>
    </OrderTooltip>
  );
};

export default SimpleOrder;
