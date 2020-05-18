import React, { useMemo } from "react";
import { SECTION } from "../../constants";
import { useDataState, usePageState } from "../../provider";
import { SectionBody } from "../../styles";
import EmployeeCalendar from "./EmployeeCalendar";
import EmployeeList from "./EmployeeList";

const EmployeeSectionBody = () => {
  const { searchText, activeSection } = usePageState();
  const { employees } = useDataState();
  const visibleEmployees = useMemo(() => {
    if (activeSection === SECTION.EMPLOYEE_LIST && searchText !== "") {
      return employees.filter(em => {
        return (
          em.code.toLowerCase().includes(searchText) ||
          em.firstName.toLowerCase().includes(searchText) ||
          em.costCenterCode.toLowerCase().includes(searchText)
        );
      });
    }

    return employees;
  }, [employees, searchText, activeSection]);

  return (
    <SectionBody>
      <EmployeeList
        isLeft
        section={SECTION.EMPLOYEE_LIST}
        employees={visibleEmployees}
      />
      <EmployeeCalendar
        section={SECTION.EMPLOYEE_CALENDAR}
        employees={visibleEmployees}
      />
    </SectionBody>
  );
};

export default EmployeeSectionBody;
