import IColumn from "dakota-portal/dist/components/SortableTable/IColumn";
import React, { useState } from "react";

import { SortableTable } from "dakota-portal/dist/components";
import { IMeta } from "dakota-portal/dist/components/SortableTable";

import { COCKPIT_PAGE_SIZE, META } from "../../constants";

interface IProps {
  columns: IColumn[];
  dataSource: any[];
  totalRow: any;
  filterRow: object;
}

const Cockpit: React.FC<IProps> = ({ columns, dataSource = [], totalRow }) => {
  const [meta, setMeta] = useState<IMeta>({
    ...META,
    perPage: COCKPIT_PAGE_SIZE,
    totalItems: dataSource.length
  });

  const from = meta.perPage * meta.activePage;
  const pageData = dataSource.slice(from, from + meta.perPage);

  return (
    <SortableTable
      key={columns.length}
      columns={columns}
      dataSource={pageData}
      meta={meta}
      isNotConfigurable
      onQueryChange={setMeta}
      totalRowData={[totalRow]}
      isSnOTable
    />
  );
};

export default Cockpit;
