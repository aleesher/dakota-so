import React, { useState, useEffect } from "react";
import _get from "lodash/get";
import { useQuery } from "@apollo/react-hooks";
import { Loader } from "dakota-portal/dist/components";
import { EMPLOYEE_COCKPIT_COLUMNS } from "../../constants";
import { FETCH_SERVICE_ORDERS_BY_EMPLOYEES } from "../../queries";
import { CockpitLoaderWrapper } from "../../styles";
import Cockpit from "./Cockpit";

interface IProps {
  employeeCodes: string[];
  statuses: string[];
  limit: number;
  startDate: Date;
  endDate: Date;
  userId: string;
  filterRow: any;
}

const OrdersByEmployees: React.FC<IProps> = ({
  employeeCodes,
  statuses,
  limit,
  startDate,
  endDate,
  filterRow,
  userId
}) => {
  const [filterState, setFilter] = useState(filterRow.employee);

  useEffect(() => {
    const filteredKey = Object.keys(filterRow.employee).filter(function(k) {
      return filterRow.employee[k];
    });
    const filteredColumn = EMPLOYEE_COCKPIT_COLUMNS.filter(d =>
      filteredKey.includes(d.key)
    );
    setFilter(filteredColumn);
  }, [filterRow]);

  const { loading, error, data } = useQuery(FETCH_SERVICE_ORDERS_BY_EMPLOYEES, {
    variables: {
      where: {
        employeeCode_in: employeeCodes.length > 0 ? employeeCodes : undefined,
        status_in: statuses,
        creationDate_gte: startDate,
        creationDate_lte: endDate,
        cratedBy: userId
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

  const rows = _get(data, "amountOfServiceOrdersByEmployees.rows");
  const totalRow = _get(data, "amountOfServiceOrdersByEmployees.totalRow");
  return (
    <Cockpit
      columns={filterState}
      dataSource={rows}
      totalRow={totalRow}
      filterRow={filterRow}
    />
  );
};

export default OrdersByEmployees;
