import moment from "moment";
import React, { useEffect, useState } from "react";
import { usePageState, useSettingsState } from "../../../provider";
import { StyledCurrentTimeline } from "./styles";

export const EmployeeCurrentTime = () => {
  const {
    showNonWorkingHours,
    employeeViewDate,
    employeeTimeScale
  } = useSettingsState();
  const { calendarWidth, currentTime } = usePageState();
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const { hours, minutes } = currentTime;
    setPosition(
      employeeTimeScale.getX(
        moment(employeeViewDate)
          .hours(hours)
          .minutes(minutes)
      )
    );
  }, [
    employeeTimeScale,
    showNonWorkingHours,
    calendarWidth,
    employeeViewDate,
    currentTime
  ]);

  return <StyledCurrentTimeline x={position} />;
};

export const OrderCurrentTime = () => {
  const {
    showNonWorkingHours,
    orderViewDate,
    orderTimeScale
  } = useSettingsState();
  const { calendarWidth, currentTime } = usePageState();
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const { hours, minutes } = currentTime;
    setPosition(
      orderTimeScale.getX(
        moment(orderViewDate)
          .hours(hours)
          .minutes(minutes)
      )
    );
  }, [
    orderTimeScale,
    showNonWorkingHours,
    calendarWidth,
    orderViewDate,
    currentTime
  ]);

  return <StyledCurrentTimeline x={position} />;
};
