import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { StyledAdornment } from "./styles";

const StyledTextField = withStyles(() => ({
  root: {
    width: 137
  }
}))(TextField);

interface IProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  unit: string;
  disabled: boolean;
}

const NumberInput: React.FC<IProps> = ({
  value,
  onChange,
  min,
  max,
  unit,
  disabled
}) => {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleChange = (newValue: string) => {
    setInputValue(newValue);
    if (newValue.trim() !== "") {
      onChange(+newValue);
    }
  };

  return (
    <StyledTextField
      value={inputValue}
      onChange={e => handleChange(e.target.value)}
      type="number"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <StyledAdornment length={inputValue.length} disabled={disabled}>
            {unit}
          </StyledAdornment>
        )
      }}
      inputProps={{
        min,
        max
      }}
      disabled={disabled}
    />
  );
};

export default NumberInput;
