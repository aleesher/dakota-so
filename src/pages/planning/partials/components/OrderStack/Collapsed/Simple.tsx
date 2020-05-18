import React from "react";
import { ORDER_PREVIEW_OFFSET } from "../../../../constants";
import { useDataDispatch } from "../../../../provider/data";
import OrderStack from "../../../../provider/data/collections/OrderStack";
import OrderData from "../../DayOrder/OrderData";
import DroppableOrderStack from "../DroppableOrderStack";
import StackOrder from "../StackOrder";
import { BottomStackOrderWrapper } from "../styles";

interface IProps {
  stack: OrderStack;
}

const SimpleCollapsedStack: React.FC<IProps> = ({ stack }) => {
  const { setTopOrderOfStack } = useDataDispatch();

  return (
    <DroppableOrderStack stack={stack}>
      {stack.getBottomOrders().map((order, i) => (
        <BottomStackOrderWrapper
          key={order.code}
          width={order.width}
          top={8 + ORDER_PREVIEW_OFFSET * i}
          left={0}
          onClick={e => {
            setTopOrderOfStack(
              stack.employeeResourceCode,
              stack.id,
              order.code
            );
          }}
        >
          <OrderData workOrder={order} />
        </BottomStackOrderWrapper>
      ))}

      <StackOrder
        workOrder={stack.getTopOrder()}
        top={8 + ORDER_PREVIEW_OFFSET * (stack.getLength() - 1)}
      />
    </DroppableOrderStack>
  );
};

export default SimpleCollapsedStack;
