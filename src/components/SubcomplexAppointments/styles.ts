import styled from "styled-components";

import MaterialSearchIcon from "@material-ui/icons/Search";

import Colors from "dakota-portal/dist/components/Colors";

export const Container = styled.div`
  border-radius: 6px;
  border: 1px solid ${Colors.pattensBlue};
  background-color: white;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  position: relative;
  padding: 18px 14px;
  font-size: 14px;
  font-weight: bold;
  border-right: 1px solid ${Colors.pattensBlue};
  border-bottom: 1px solid ${Colors.pattensBlue};
  text-transform: capitalize;
  text-align: left;
  background-color: #eff3f4;

  &:first-child {
    background-color: transparent;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-right: 0;
  }
`;

export const Td = styled.td`
  position: relative;
  padding: 0 6px;
  width: 80px;
  max-width: 80px;
  height: 80px;
  max-height: 80px;
  box-sizing: border-box;
  border-right: 1px solid ${Colors.pattensBlue};
  vertical-align: middle;

  &:first-child {
    padding: 14px 10px;
  }

  &:last-child {
    border-right: 0;
  }
`;

export const StatusesDescription = styled.p`
  margin-top: 15px;
  font-size: 13px;
  text-align: right;
  color: darkgray;
`;
