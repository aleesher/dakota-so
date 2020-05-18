import Colors from "dakota-portal/dist/components/Colors";
import React, { memo } from "react";
import { ORDER_PREVIEW_OFFSET, ORDER_STYLES } from "../../../constants";
import OrderStack from "../../../provider/data/collections/OrderStack";
import OrderPreview from "../OrderPreview/OrderPreview";
import { StackPreviewWrapper } from "./styles";

interface IProps {
  stack: OrderStack;
  color?: string;
}

const StackPreview: React.FC<IProps> = ({
  stack,
  color = Colors.dodgerBlue
}) => {
  const topOrder = stack.getTopOrder();

  return (
    <StackPreviewWrapper>
      {stack.getBottomOrders().map((order, i) => (
        <div
          key={order.code}
          style={{
            ...ORDER_STYLES,
            width: order.width,
            borderColor: color,
            top: 8 + ORDER_PREVIEW_OFFSET * i
          }}
        />
      ))}

      <OrderPreview
        order={topOrder}
        top={8 + ORDER_PREVIEW_OFFSET * (stack.getLength() - 1)}
        color={color}
      />
    </StackPreviewWrapper>
  );
};

export default memo(StackPreview);
