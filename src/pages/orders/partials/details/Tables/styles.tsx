import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Select } from "dakota-portal/dist/components";

export const TableButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  && .drop {
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  width: 200px;
  color: #556068;
  background-color: #f2f5f7;
  padding: 10px;
  font-size: 16px;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ArrowUp = styled(ArrowUpwardIcon)`
  font-size: 15px !important;
`;

export const TableDropdown = styled(Select)`
  font-size: 15px !important;
  width: 200px;
  background: #f2f5f7;

  && .default__control {
    border: none;
  }

  && .default__menu {
    background-color: #fff !important;
  }
`;
