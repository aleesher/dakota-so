import React, { useEffect, useMemo } from "react";
import {
  CALENDAR_HEADER_HEIGHT,
  CALENDAR_LINE_HEIGHT,
  LIST_WIDTH
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
import EmployeeListHeader from "./EmployeeListHeader";
import EmployeeSectionBody from "./EmployeeSectionBody";

const EmployeeSection = () => {
  const {
    employeeCodes,
    employeeTimeScale,
    employeeViewDate,
    employeeResourceCodes,
    startDate,
    endDate,
    fixedAmountOfEmployees
  } = useSettingsState();
  const { setEmployeeViewDate } = useSettingsDispatch();
  const { fetchEmployees, fetchEmployeeOrders } = useDataDispatch();
  const { calendarWidth } = usePageState();
  const styles = useMemo(() => {
    const amountOfEmployees = Math.min(
      employeeCodes.length,
      fixedAmountOfEmployees
    );
    return {
      width: calendarWidth + LIST_WIDTH,
      height: amountOfEmployees * CALENDAR_LINE_HEIGHT + CALENDAR_HEADER_HEIGHT
    };
  }, [calendarWidth, fixedAmountOfEmployees, employeeCodes]);

  useEffect(() => fetchEmployees(employeeCodes), [employeeCodes]);
  useEffect(fetchEmployeeOrders, [employeeResourceCodes, startDate, endDate]);

  return (
    <SectionWrapper style={styles}>
      <SectionHeader>
        <EmployeeListHeader />

        <CalendarHeader>
          <CalendarScrollbar
            viewDate={employeeViewDate}
            onChange={setEmployeeViewDate}
          />
          <CalendarTimeScale timeScale={employeeTimeScale} />
        </CalendarHeader>
      </SectionHeader>

      <EmployeeSectionBody />
    </SectionWrapper>
  );
};

export default EmployeeSection;
