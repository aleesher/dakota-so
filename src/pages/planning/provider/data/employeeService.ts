import { useApolloClient } from "@apollo/react-hooks";
import { useMemo } from "react";
import _get from "lodash/get";
import _uniqBy from "lodash/uniqBy";
import { FETCH_SELECTED_EMPLOYEES } from "../../queries";
import { TEmployee } from "../../types";

interface IFetchEmployeeResponse {
  employees: TEmployee[];
  resourceCodes: string[];
}

function extractEmployees(response: any): IFetchEmployeeResponse {
  let employees: TEmployee[] = _get(
    response,
    "data.roofingCompanyEmployees",
    []
  );

  // fixme: temp trick
  // get only employees with unique resource code
  employees = _uniqBy(employees, "resource");
  const resourceCodes = employees.map(e => e.resource);

  return {
    employees,
    resourceCodes
  };
}

interface IEmployeeService {
  fetchSelected: (codes: string[]) => Promise<IFetchEmployeeResponse>;
}

const useEmployeeService = (): IEmployeeService => {
  const client = useApolloClient();

  return useMemo<IEmployeeService>(() => {
    const fetchSelected = (codes: string[]) => {
      return client
        .query({
          query: FETCH_SELECTED_EMPLOYEES,
          variables: {
            codes
          }
        })
        .then(extractEmployees);
    };

    return {
      fetchSelected
    };
  }, []);
};

export default useEmployeeService;
