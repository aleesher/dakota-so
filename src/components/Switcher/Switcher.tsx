import React from "react";

import { Container, Option } from "./styles";

export interface IOption {
  label: string;
  value: string;
}

interface IProps {
  options: IOption[];
  active: IOption;
  onChange: (option: IOption) => void;
}

const Switcher = ({ options, active, onChange }: IProps) => {
  const [activeOption, setActiveOption] = React.useState<IOption>(active);

  const handleChange = active => {
    setActiveOption(active);
    onChange(active);
  };

  return (
    <Container>
      {options.map(option => (
        <Option
          isActive={option.value === activeOption.value}
          key={option.value}
          onClick={() => handleChange(option)}
        >
          {option.label}
        </Option>
      ))}
    </Container>
  );
};

export default Switcher;
