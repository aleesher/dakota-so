import React from "react";
import { usePageState } from "../../../provider/page";
import { TOrderGroupTooltipData } from "../../../types";
import {
  OrderTooltipField,
  OrderTooltipRow,
  OrderTooltipValue
} from "./styles";

interface IProps {
  data: TOrderGroupTooltipData[];
}

const OrderGroupTooltipContent: React.FC<IProps> = ({ data }) => {
  const { statusColors } = usePageState();

  return (
    <>
      {data.map(({ status, amount }) => (
        <OrderTooltipRow key={status}>
          <OrderTooltipField color={statusColors[status]}>
            {status}:
          </OrderTooltipField>
          <OrderTooltipValue>{amount}</OrderTooltipValue>
        </OrderTooltipRow>
      ))}
    </>
  );
};

export default OrderGroupTooltipContent;
