import React, { useMemo } from "react";
import { useQuery } from "@apollo/react-hooks";
import _get from "lodash/get";
import _uniqBy from "lodash/uniqBy";
import { Loader } from "dakota-portal/dist/components";
import { EMPLOYEE_TABLE_COLUMNS } from "../../../../constants";
import { FETCH_ALL_EMPLOYEES } from "../../../../queries";
import { TEmployee } from "../../../../types";
import CheckboxIcon from "../../../icons/CheckboxIcon";
import { EmployeeTableWrapper } from "./styles";

interface IProps {
  codes: string[];
  costCenters: string[];
  searchText: string;
  onSelect: (employee: TEmployee) => void;
}

const EmployeeTable: React.FC<IProps> = ({
  codes,
  costCenters,
  searchText,
  onSelect
}) => {
  const { loading, error, data } = useQuery(FETCH_ALL_EMPLOYEES, {
    fetchPolicy: "cache-and-network"
  });

  const visibleEmployees = useMemo(() => {
    if (!data) {
      return [];
    }

    let employees: TEmployee[] = _get(data, "roofingCompanyEmployees", []);

    // fixme: temp trick
    // get only employees with unique resource code
    employees = _uniqBy(employees, "resource");

    if (costCenters.length > 0) {
      employees = employees.filter(e => costCenters.includes(e.costCenterCode));
    }

    if (searchText !== "") {
      employees = employees.filter(
        e =>
          e.firstName.toLowerCase().includes(searchText) ||
          e.lastName.toLowerCase().includes(searchText) ||
          e.code.toLowerCase().includes(searchText)
      );
    }

    return employees;
  }, [data, costCenters, searchText]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <EmployeeTableWrapper>
      <table>
        <thead>
          <tr>
            {EMPLOYEE_TABLE_COLUMNS.map(c => (
              <th key={c.key}>{c.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {visibleEmployees.map(employee => (
            <tr key={employee.code}>
              {EMPLOYEE_TABLE_COLUMNS.slice(0, -1).map(c => (
                <td key={c.key}>{employee[c.key]}</td>
              ))}
              <td>
                <div className="checkbox" onClick={() => onSelect(employee)}>
                  <CheckboxIcon checked={codes.includes(employee.code)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </EmployeeTableWrapper>
  );
};

export default EmployeeTable;
