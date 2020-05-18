import React, { useMemo } from "react";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../provider/page";
import SelectedOrder from "./SelectedOrder";
import ResizableOrder from "./ResizableOrder";
import SimpleOrder from "./SimpleOrder";
import DisabledOrder from "./DisabledOrder";

interface IProps {
  workOrder: CalendarOrder;
}

const CommonOrder: React.FC<IProps> = ({ workOrder }) => {
  if (workOrder.isLocked) {
    return <DisabledOrder workOrder={workOrder} />;
  }

  const { selectedOrders, totalSelected } = usePageState();

  const isSelected = useMemo(() => {
    return !!selectedOrders[workOrder.code];
  }, [selectedOrders]);

  if (!isSelected) {
    return <SimpleOrder workOrder={workOrder} />;
  }

  if (totalSelected === 1) {
    return <ResizableOrder workOrder={workOrder} />;
  }

  return <SelectedOrder workOrder={workOrder} />;
};

export default CommonOrder;
