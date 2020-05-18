import React from "react";

import { Container, Icon, Input } from "./styles";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  bgColor?: string;
  color?: string;
}

const SearchInput = ({ value, onChange, bgColor, color }: IProps) => (
  <Container bgColor={bgColor} color={color}>
    <Icon />
    <Input
      placeholder="Vind een sub-complexen"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </Container>
);

export default SearchInput;
