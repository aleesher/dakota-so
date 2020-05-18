import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { SliderPicker } from "react-color";

interface IProps {
  open: boolean;
  initialColor: string;
  onClose: (color: string) => void;
}

const ColorPopupWindow: React.FC<IProps> = ({
  open,
  initialColor,
  onClose
}) => {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => setCurrentColor(initialColor), [initialColor]);

  return (
    <Popup
      open={open}
      closeOnDocumentClick={true}
      closeOnEscape={true}
      lockScroll
      contentStyle={{
        width: 410,
        height: 44,
        padding: 20,
        borderRadius: 5
      }}
      onClose={() => onClose(currentColor)}
    >
      <>
        <SliderPicker
          color={currentColor}
          onChangeComplete={color => setCurrentColor(color.hex)}
        />
      </>
    </Popup>
  );
};

export default ColorPopupWindow;
