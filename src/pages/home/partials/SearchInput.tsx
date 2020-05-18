import React from "react";
import styled from "styled-components";

import Search from "@material-ui/icons/Search";

import { Colors, Input as DakotaInput } from "dakota-portal/dist/components";

const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  padding: 8 8 45px;

  && .Search {
    margin-left: 50px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: -4px;
  bottom: 0;
  left: 1px;
  z-index: 1;
  width: 34px;
  font-size: 16px;
  text-align: left;
  padding-left: 15px;
  color: ${Colors.heather};
`;

const Input = styled(DakotaInput)`
  flex: 1;
  font-size: 19px;

  .dakota-textfield-input--underline {
    border-bottom: 0 !important;
  }
`;

interface IProps {
  text?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchInput = ({ text = "", placeholder, onSearch }: IProps) => {
  const [value, setValue] = React.useState(text);
  return (
    <Container>
      <Button onClick={() => onSearch(value)}>
        <Search color="inherit" />
      </Button>
      <Input
        value={value}
        className="Search"
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
};

export default SearchInput;
