import React, { useState } from "react";
import ColorPopupWindow from "../ColorPopupWindow";

import { CurrentColor } from "./styles";

interface IProps {
  color: string;
  onSelect: (newColor: string) => void;
  disabled?: boolean;
}

const CustomColorPicker: React.FC<IProps> = ({
  color,
  onSelect,
  disabled = false
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <CurrentColor
        color={color}
        disabled={disabled}
        onClick={value => !disabled && setShowPopup(true)}
      />

      {showPopup && (
        <ColorPopupWindow
          open={true}
          initialColor={color}
          onClose={color => {
            onSelect(color);
            setShowPopup(false);
          }}
        />
      )}
    </>
  );
};

export default CustomColorPicker;
