import React, { useMemo } from "react";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../../provider/page";
import ResizableStackOrder from "./Resizable";
import SelectedStackOrder from "./Selected";
import SimpleStackOrder from "./Simple";

interface IProps {
  workOrder: CalendarOrder;
  top: number;
}

const StackOrder: React.FC<IProps> = ({ workOrder, top }) => {
  const { selectedOrders, totalSelected } = usePageState();

  const isSelected = useMemo(() => {
    return !!selectedOrders[workOrder.code];
  }, [selectedOrders]);

  if (!isSelected) {
    return <SimpleStackOrder workOrder={workOrder} top={top} />;
  }

  if (totalSelected === 1) {
    return <ResizableStackOrder workOrder={workOrder} top={top} />;
  }

  return <SelectedStackOrder workOrder={workOrder} top={top} />;
};

export default StackOrder;
