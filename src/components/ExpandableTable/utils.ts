import IColumn from "dakota-portal/dist/components/SortableTable/IColumn";
import { Column } from "react-table";

export function convertColumns(columns: IColumn[]): Column[] {
  return columns.map(c => ({
    Header: c.title ? c.title : c.render,
    accessor: c.key,
    Cell: c.render ? c.render : undefined
  }));
}
