import React from "react";
import { usePageDispatch, usePageState } from "../../../provider";
import {
  ListHeaderWrapper,
  ListTitle,
  SortListButton
} from "../../components/ListHeader/styles";
import SortIcon from "../../icons/SortIcon";
import SelectAmountOfWorkOrders from "./SelectAmountOfWorkOrders";

const OrderListHeader: React.FC = () => {
  const { setOrderSort } = usePageDispatch();
  const { orderSort } = usePageState();

  return (
    <ListHeaderWrapper>
      <ListTitle>Werk orders</ListTitle>

      <SortListButton onClick={setOrderSort}>
        <SortIcon direction={orderSort} />
      </SortListButton>

      <SelectAmountOfWorkOrders />
    </ListHeaderWrapper>
  );
};

export default OrderListHeader;
