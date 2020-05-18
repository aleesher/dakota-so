import moment from "moment";
import React from "react";
import Colors from "dakota-portal/dist/components/Colors";
import { useSettingsDispatch } from "../../provider/settings";
import CalendarIcon from "../icons/CalendarIcon";
import { TodayButtonWrapper } from "./styles";

const TodayButton: React.FC = () => {
  const { setEmployeeViewDate, setOrderViewDate } = useSettingsDispatch();

  const handleClick = () => {
    setEmployeeViewDate(moment());
    setOrderViewDate(moment());
  };

  return (
    <TodayButtonWrapper onClick={handleClick}>
      <CalendarIcon color={Colors.dodgerBlue} />
      <span>Vandaag</span>
    </TodayButtonWrapper>
  );
};

export default TodayButton;
