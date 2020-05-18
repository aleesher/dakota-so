import React from "react";
import useClickOutside from "../../../../../hooks/useClickOutside";
import {
  useSettingsDispatch,
  useSettingsState
} from "../../../provider/settings";
import { SwitchesMenuWrapper } from "../styles";
import CustomSwitch from "./CustomSwitch";

interface IProps {
  onClickOutside: () => void;
}

const SwitchesMenu: React.FC<IProps> = ({ onClickOutside }) => {
  const ref = useClickOutside(onClickOutside);
  const { showNonWorkingHours, collapseOrders } = useSettingsState();
  const { setShowNonWorkingHours, setCollapseOrders } = useSettingsDispatch();

  return (
    <SwitchesMenuWrapper ref={ref}>
      <CustomSwitch
        label="Niet werktijden"
        checked={showNonWorkingHours}
        onToggle={setShowNonWorkingHours}
      />

      <CustomSwitch
        label="Rijen Inklappen"
        checked={collapseOrders}
        onToggle={setCollapseOrders}
      />
    </SwitchesMenuWrapper>
  );
};

export default SwitchesMenu;
