import React, { useMemo } from "react";
import { SECTION } from "../../constants";
import { useDataState, usePageState, useSettingsState } from "../../provider";
import { SectionBody } from "../../styles";
import OrderCalendar from "./OrderCalendar";
import OrderList from "./OrderList";

const OrderSectionBody = () => {
  const { searchText, activeSection } = usePageState();
  const { orders } = useDataState();
  const { uiPreferences, fixedAmountOfOrders } = useSettingsState();

  const visibleOrders = useMemo(() => {
    if (
      searchText !== "" &&
      (activeSection === SECTION.WORK_ORDER_LIST ||
        activeSection === SECTION.WORK_ORDER_CALENDAR)
    ) {
      const filtered = orders.filtered(o => {
        return uiPreferences.orderFields.some(f =>
          o[f].toLowerCase().includes(searchText)
        );
      });

      return filtered.slice(0, fixedAmountOfOrders);
    }

    return orders.all().slice(0, fixedAmountOfOrders);
  }, [orders, searchText, activeSection, fixedAmountOfOrders]);

  return (
    <SectionBody>
      <OrderList
        isLeft
        section={SECTION.WORK_ORDER_LIST}
        orders={visibleOrders}
      />
      <OrderCalendar
        section={SECTION.WORK_ORDER_CALENDAR}
        orders={visibleOrders}
      />
    </SectionBody>
  );
};

export default OrderSectionBody;
