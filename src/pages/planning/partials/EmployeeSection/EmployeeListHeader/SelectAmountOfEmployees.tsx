import React from "react";
import {
  useSettingsDispatch,
  useSettingsState
} from "../../../provider/settings";
import SelectVisibleAmount from "../../components/SelectVisibleAmount";

const VALUES = [2, 4, 6, 8, 10, 12];

const SelectAmountOfEmployees: React.FC = () => {
  const { fixedAmountOfEmployees } = useSettingsState();
  const { setFixedAmountOfEmployees } = useSettingsDispatch();

  return (
    <SelectVisibleAmount
      values={VALUES}
      value={fixedAmountOfEmployees}
      onChange={setFixedAmountOfEmployees}
    />
  );
};

export default SelectAmountOfEmployees;
