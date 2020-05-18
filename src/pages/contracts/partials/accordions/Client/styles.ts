import styled from "styled-components";
import Link from "react-router-dom/Link";

import Colors from "dakota-portal/dist/components/Colors";

import { FormValue } from "./../../../styles";

export const CodeInputValue = styled(FormValue)`
  position: relative;

  input {
    padding-right: 36px;
  }
`;

export const SearchButton = styled(Link)`
  position: absolute;
  right: 2px;
  top: 2px;
  width: 55px;
  height: 52px;
  line-height: 60px;
  outline: none;
  border: none;
  font-size: 25px;
  background-color: white;
  cursor: pointer;
  text-align: center;
  color: ${Colors.fiord};
`;
