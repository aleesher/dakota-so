import * as React from "react";
import ReactTable, { Column, SubComponentFunction } from "react-table";
import "react-table/react-table.css";

import {
  ExpandedDataWrapper,
  TableComponent,
  TbodyComponent,
  TdComponent,
  ThComponent,
  TheadComponent,
  TrComponent,
  TrGroupComponent
} from "./styles";

interface IProps {
  columns: Column[];
  data: any[];
  renderExpandedData: SubComponentFunction;
  children?: any;
  expanded: {
    [key: number]: boolean;
  };
}

export const REACT_TABLE_OPTIONS = {
  TableComponent,
  TheadComponent,
  TbodyComponent,
  TrComponent,
  ThComponent,
  TdComponent,
  TrGroupComponent,

  getTheadTrProps: () => ({
    headerRow: true,
    clickable: true
  }),

  minRows: 1,
  showPagination: false,
  sortable: false,
  multiSort: false,
  resizable: false,
  filterable: false
};

const ExpandableTable: React.FunctionComponent<IProps> = ({
  renderExpandedData,
  expanded,
  ...props
}) => {
  return (
    <ReactTable
      {...props}
      {...REACT_TABLE_OPTIONS}
      style={{ overflowX: "auto" }}
      expanded={expanded}
      getTrProps={(_, rowInfo) => {
        return {
          onClick: () => console.log(rowInfo.index),
          clickable: true
        };
      }}
      SubComponent={row => (
        <tr>
          <td colSpan={props.columns.length}>
            <ExpandedDataWrapper>{renderExpandedData(row)}</ExpandedDataWrapper>
          </td>
        </tr>
      )}
    />
  );
};

export default ExpandableTable;
