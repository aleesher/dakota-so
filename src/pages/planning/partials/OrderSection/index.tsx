import React, { useEffect, useMemo } from "react";
import {
  CALENDAR_HEADER_HEIGHT,
  CALENDAR_LINE_HEIGHT,
  DIVIDER_HEIGHT,
  LIST_WIDTH,
  TOP_MENU_HEIGHT
} from "../../constants";
import {
  useDataDispatch,
  usePageState,
  useSettingsDispatch,
  useSettingsState
} from "../../provider";
import { CalendarHeader, SectionHeader, SectionWrapper } from "../../styles";
import CalendarScrollbar from "../components/CalendarScrollbar";
import CalendarTimeScale from "../components/CalendarTimeScale";

import OrderListHeader from "./OrderListHeader";
import OrderSectionBody from "./OrderSectionBody";

const OrderSection = () => {
  const {
    orderTimeScale,
    orderViewDate,
    startDate,
    endDate,
    fixedAmountOfEmployees,
    employeeCodes
  } = useSettingsState();
  const { setOrderViewDate } = useSettingsDispatch();
  const { calendarWidth } = usePageState();
  const { fetchOrders } = useDataDispatch();
  const styles = useMemo(() => {
    const amountOfEmployees = Math.min(
      employeeCodes.length,
      fixedAmountOfEmployees
    );
    const height =
      window.innerHeight -
      (TOP_MENU_HEIGHT +
        DIVIDER_HEIGHT +
        CALENDAR_HEADER_HEIGHT +
        amountOfEmployees * CALENDAR_LINE_HEIGHT +
        DIVIDER_HEIGHT);
    return {
      width: calendarWidth + LIST_WIDTH,
      height,
      minHeight: CALENDAR_HEADER_HEIGHT + CALENDAR_LINE_HEIGHT * 4
    };
  }, [
    calendarWidth,
    fixedAmountOfEmployees,
    employeeCodes,
    window.innerHeight
  ]);

  useEffect(fetchOrders, [startDate, endDate]);

  return (
    <SectionWrapper style={styles}>
      <SectionHeader>
        <OrderListHeader />

        <CalendarHeader>
          <CalendarScrollbar
            viewDate={orderViewDate}
            onChange={setOrderViewDate}
          />
          <CalendarTimeScale timeScale={orderTimeScale} />
        </CalendarHeader>
      </SectionHeader>

      <OrderSectionBody />
    </SectionWrapper>
  );
};

export default OrderSection;
