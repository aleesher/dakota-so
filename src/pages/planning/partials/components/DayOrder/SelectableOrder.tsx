import React from "react";
import { CALENDAR_ORDER_TYPE } from "../../../constants";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { usePageDispatch } from "../../../provider/page";
import { useSettingsState } from "../../../provider/settings";
import { TSelectedOrder } from "../../../provider/types";
import OrderData from "./OrderData";

interface IProps {
  workOrder: CalendarOrder;
}

const SelectableOrder: React.FC<IProps> = ({ workOrder }) => {
  const { collapseOrders } = useSettingsState();
  const { setSelectedOrder, setSelectedStack } = usePageDispatch();

  const handleClick = e => {
    e.stopPropagation();

    // if stack was selected
    if (e.shiftKey && collapseOrders && !!workOrder.stackId) {
      setSelectedStack(workOrder.stackId);
    } else {
      const data: TSelectedOrder = { type: workOrder.type };

      if (workOrder.type !== CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER) {
        data.resourceCode = workOrder.soEmployeeCode;
      }

      if (workOrder.type === CALENDAR_ORDER_TYPE.STACK_ORDER) {
        data.stackId = workOrder.stackId;
      }

      setSelectedOrder(workOrder.code, data, e.ctrlKey || e.metaKey);
    }
  };

  return (
    <div onClick={handleClick}>
      <OrderData workOrder={workOrder} />
    </div>
  );
};

export default SelectableOrder;
