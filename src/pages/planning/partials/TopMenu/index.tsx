import Colors from "dakota-portal/dist/components/Colors";
import React from "react";
import { useSettingsDispatch, useSettingsState } from "../../provider/settings";

import { DatePeriodPicker } from "./../../../../components";

import SearchIcon from "../icons/SearchIcon";
import SettingsIcon from "../icons/SettingsIcon";
import SearchInput from "./SearchInput";
import ShowMessagesButton from "./ShowMessagesButton";
import {
  PlanningHeader,
  SettingsButton,
  SearchButton,
  DatePeriodLabel
} from "./styles";
import SwitchesButton from "./SwitchesButton";
import TimeUnitInput from "./TimeUnitInput";
import TodayButton from "./TodayButton";

interface IProps {
  onClickSettingsButton: () => void;
}

const PlanningTopMenu: React.FC<IProps> = ({ onClickSettingsButton }) => {
  const { startDate, endDate, uiPreferences } = useSettingsState();
  const { setStartDate, setEndDate } = useSettingsDispatch();

  return (
    <PlanningHeader>
      <SwitchesButton />

      <SearchButton>
        <SearchIcon color={Colors.fiord} />
      </SearchButton>

      <SearchInput />

      <TodayButton />

      <DatePeriodLabel>Periode</DatePeriodLabel>

      <DatePeriodPicker
        startDate={startDate}
        endDate={endDate}
        onChangeStartDate={setStartDate}
        onChangeEndDate={setEndDate}
      />

      <TimeUnitInput />

      <SettingsButton onClick={onClickSettingsButton}>
        <SettingsIcon />
      </SettingsButton>

      {uiPreferences.messageCenter.deadlineWarning && <ShowMessagesButton />}
    </PlanningHeader>
  );
};

export default PlanningTopMenu;
