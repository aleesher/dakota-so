import React from "react";
import CheckboxIcon from "../../../icons/CheckboxIcon";
import { CheckboxLabel } from "./styles";

interface IProps {
  label: string;
  onClick: () => void;
  checked: boolean;
  disabled?: boolean;
}

const CustomCheckbox: React.FC<IProps> = ({
  label,
  onClick,
  checked,
  disabled = false
}) => (
  <>
    <CheckboxLabel onClick={() => !disabled && onClick()}>
      <CheckboxIcon checked={checked} disabled={disabled} />
      {label}
    </CheckboxLabel>
  </>
);

export default CustomCheckbox;
