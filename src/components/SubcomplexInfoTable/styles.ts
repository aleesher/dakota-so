import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const SortableTableWrapper = styled.div`
  thead {
    tr {
      height: 50px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  border-radius: 6px;
  border: 1px solid ${Colors.pattensBlue};
  background-color: white;

  > div {
    flex: 1;
  }
`;

export const Table = styled.table`
  width: 16%;
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

export const Content = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  width: 100%;
  height: 80px;
`;
