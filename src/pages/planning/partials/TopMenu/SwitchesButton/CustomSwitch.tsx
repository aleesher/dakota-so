import React from "react";
import Switch from "react-switch";
import Colors from "dakota-portal/dist/components/Colors";
import { SwitchWrapper } from "../styles";

interface IProps {
  label?: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

const CustomSwitch: React.FC<IProps> = ({ label = "", checked, onToggle }) => {
  return (
    <SwitchWrapper>
      <label>
        {!!label && <span>{label}</span>}
        <Switch
          checked={checked}
          onChange={onToggle}
          onColor={Colors.dodgerBlue2}
          handleDiameter={32}
          uncheckedIcon={false}
          checkedIcon={false}
          height={40}
          width={71}
          className="react-switch"
        />
      </label>
    </SwitchWrapper>
  );
};

export default CustomSwitch;
