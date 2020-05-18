import React, { useMemo } from "react";
import OrderStack from "../../../../provider/data/collections/OrderStack";
import { useSettingsState } from "../../../../provider/settings";
import CollapsedOrderStack from "../../../components/OrderStack/Collapsed";
import FullSizeOrderStack from "../../../components/OrderStack/FullSize";

interface IProps {
  orderStacks: OrderStack[];
}

const OrderStacks: React.FC<IProps> = ({ orderStacks }) => {
  const { collapseOrders, employeeViewDate } = useSettingsState();

  const viewStacks = useMemo(() => {
    return orderStacks.filter(
      o =>
        o.startTime.format("YYYYMMDD") === employeeViewDate.format("YYYYMMDD")
    );
  }, [orderStacks, employeeViewDate]);

  return (
    <>
      {viewStacks.map(s =>
        collapseOrders ? (
          <CollapsedOrderStack key={s.id} stack={s} />
        ) : (
          <FullSizeOrderStack key={s.id} stack={s} />
        )
      )}
    </>
  );
};

export default OrderStacks;
