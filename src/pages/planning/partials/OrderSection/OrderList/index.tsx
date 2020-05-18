import React from "react";
import withAbilityToSelect from "../../../hocs";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { ListBody } from "../../../styles";
import OrderListItem from "./OrderListItem";

interface IProps {
  orders: CalendarOrder[];
}

const OrderList: React.FC<IProps> = ({ orders }) => {
  return (
    <ListBody>
      {orders.map(wo => (
        <OrderListItem key={wo.code} workOrder={wo} />
      ))}
    </ListBody>
  );
};

export default withAbilityToSelect(OrderList);
