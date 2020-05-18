import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import _get from "lodash/get";
import { Loader } from "dakota-portal/dist/components";
import { CUSTOMER_COCKPIT_COLUMNS } from "../../constants";
import { FETCH_SERVICE_ORDERS_BY_CUSTOMERS } from "../../queries";
import { CockpitLoaderWrapper } from "../../styles";

import Cockpit from "./Cockpit";

interface IProps {
  customerCodes: string[];
  statuses: string[];
  limit: number;
  startDate: Date;
  endDate: Date;
  filterRow: any;
}

const OrdersByCustomers: React.FC<IProps> = ({
  customerCodes,
  statuses,
  limit,
  startDate,
  filterRow,
  endDate
}) => {
  const [filterState, setFilter] = useState(filterRow.customer);

  useEffect(() => {
    const filteredKey = Object.keys(filterRow.customer).filter(function(k) {
      return filterRow.customer[k];
    });

    const filteredColumn = CUSTOMER_COCKPIT_COLUMNS.filter(d =>
      filteredKey.includes(d.key)
    );
    setFilter(filteredColumn);
  }, [filterRow]);

  const { loading, error, data } = useQuery(FETCH_SERVICE_ORDERS_BY_CUSTOMERS, {
    variables: {
      where: {
        customerCode_in: customerCodes.length > 0 ? customerCodes : undefined,
        status_in: statuses,
        creationDate_gte: startDate,
        creationDate_lte: endDate
      },
      limit
    }
  });

  if (loading) {
    return (
      <CockpitLoaderWrapper>
        <Loader />
      </CockpitLoaderWrapper>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const rows = _get(data, "amountOfServiceOrdersByCustomers.rows");
  const totalRow = _get(data, "amountOfServiceOrdersByCustomers.totalRow");

  return (
    <Cockpit
      columns={filterState}
      dataSource={rows}
      totalRow={totalRow}
      filterRow={filterRow}
    />
  );
};

export default OrdersByCustomers;
