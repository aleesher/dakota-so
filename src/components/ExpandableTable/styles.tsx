import * as React from "react";
import styled from "styled-components";
import {
  ColumnText,
  HeaderText,
  Table,
  Td,
  Th,
  Tr
} from "dakota-portal/dist/components/SortableTable/SortableTableStyles";
import { Colors } from "dakota-portal/dist/components";

export const TableComponent = styled(Table)`
  overflow-x: auto;

  > thead > tr > th,
  > tbody > tr > td {
    &:not(:only-child):first-child {
      display: none;
    }
  }
`;

export const TrComponent = styled(Tr)`
  border-top: 1px solid ${Colors.pattensBlue};
  border-bottom: 0;

  &:hover {
    background-color: ${Colors.aliceBlueGrayish};
  }
`;

export const ExpandedDataWrapper = styled.div`
  background-color: ${Colors.white};
`;

export const TheadComponent = props => <thead>{props.children}</thead>;
export const TbodyComponent = props => (
  <tbody style={{ borderTop: `1px solid ${Colors.pattensBlue}` }}>
    {props.children}
  </tbody>
);
export const TrGroupComponent = props => <>{props.children}</>;

export const UpdatedTd = styled(Td)`
  &:nth-child(2) {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const UpdatedTh = styled(Th)`
  &:nth-child(2) {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const ThComponent = props => (
  <UpdatedTh>
    <HeaderText style={{ display: "block" }}>{props.children}</HeaderText>
  </UpdatedTh>
);

export const TdComponent = props => (
  <UpdatedTd>
    <ColumnText>{props.children}</ColumnText>
  </UpdatedTd>
);
