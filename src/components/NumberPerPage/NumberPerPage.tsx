import React from "react";

import { Container, Label, Select } from "./styles";

interface IOption {
  label: string;
  value: number;
}

interface IProps {
  label: string;
  options: IOption[];
  value: IOption;
  onChange: (value: IOption) => void;
}

const NumberPerPage = ({ label, value, options, onChange }: IProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select options={options} value={value} onChange={onChange} />
    </Container>
  );
};

export default NumberPerPage;
