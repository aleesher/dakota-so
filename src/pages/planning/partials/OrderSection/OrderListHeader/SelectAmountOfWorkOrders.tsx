import React from "react";
import {
  useSettingsDispatch,
  useSettingsState
} from "../../../provider/settings";
import SelectVisibleAmount from "../../components/SelectVisibleAmount";

const VALUES = [10, 25, 50, 75, 100];

const SelectAmountOfWorkOrders: React.FC = () => {
  const { fixedAmountOfOrders } = useSettingsState();
  const { setFixedAmountOfOrders } = useSettingsDispatch();

  return (
    <SelectVisibleAmount
      values={VALUES}
      value={fixedAmountOfOrders}
      onChange={setFixedAmountOfOrders}
    />
  );
};

export default SelectAmountOfWorkOrders;
