import React from "react";
import { TOrderGroupTooltipData } from "../../../types";
import CustomTooltip from "../CustomTooltip";
import OrderGroupTooltipContent from "./OrderGroupTooltipContent";

interface IProps {
  data: TOrderGroupTooltipData[];
}

export const OrderGroupTooltip: React.FC<IProps> = ({ data, children }) => (
  <CustomTooltip title={<OrderGroupTooltipContent data={data} />}>
    {children}
  </CustomTooltip>
);
