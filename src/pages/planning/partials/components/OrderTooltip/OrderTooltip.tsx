import React from "react";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import CustomTooltip from "../CustomTooltip";
import OrderTooltipContent from "./OrderTooltipContent";

interface IProps {
  workOrder: CalendarOrder;
}

export const OrderTooltip: React.FC<IProps> = ({ workOrder, children }) => (
  <CustomTooltip title={<OrderTooltipContent workOrder={workOrder} />}>
    {children}
  </CustomTooltip>
);
