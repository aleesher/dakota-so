import React from "react";
import { ORDER_HEIGHT } from "../../../constants";
import OrderStack from "../../../provider/data/collections/OrderStack";
import DroppableOrderStack from "./DroppableOrderStack";
import StackOrder from "./StackOrder";

const OFFSET = ORDER_HEIGHT + 16;

interface IProps {
  stack: OrderStack;
}

const FullSizeOrderStack: React.FC<IProps> = ({ stack }) => {
  return (
    <DroppableOrderStack stack={stack}>
      {stack.getOrders().map((order, i) => (
        <StackOrder key={order.code} workOrder={order} top={8 + OFFSET * i} />
      ))}
    </DroppableOrderStack>
  );
};

export default FullSizeOrderStack;
