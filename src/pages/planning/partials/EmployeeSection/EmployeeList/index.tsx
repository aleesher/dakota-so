import React from "react";
import withAbilityToSelect from "../../../hocs";
import CalendarEmployee from "../../../provider/data/collections/CalendarEmployee";
import { ListBody } from "../../../styles";
import EmployeeListItem from "./EmployeeListItem";

interface IProps {
  employees: CalendarEmployee[];
}

const EmployeeList: React.FC<IProps> = ({ employees }) => {
  return (
    <ListBody>
      {employees.map(e => (
        <EmployeeListItem key={e.code} employee={e} />
      ))}
    </ListBody>
  );
};

export default withAbilityToSelect(EmployeeList);
