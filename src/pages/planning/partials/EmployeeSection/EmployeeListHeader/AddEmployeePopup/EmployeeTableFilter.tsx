import React, { useState } from "react";
import SelectCostCenter from "./SelectCostCenter";
import {
  AddEmployeesButton,
  Label,
  EmployeeTableFilterWrapper,
  SearchEmployeeInput
} from "./styles";

interface IProps {
  showSaveButton: boolean;
  onClickSave: () => void;
  children: (data: {
    costCenters: string[];
    searchText: string;
  }) => React.ReactNode;
}

const EmployeeTableFilter: React.FC<IProps> = ({
  showSaveButton,
  onClickSave,
  children
}) => {
  const [costCenters, setCostCenters] = useState<string[]>([]);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <EmployeeTableFilterWrapper>
        <Label>Kostenplats</Label>

        <SelectCostCenter onChange={setCostCenters} />

        <SearchEmployeeInput
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Naam or nummer"
        />

        {showSaveButton && (
          <AddEmployeesButton onClick={onClickSave}>
            Toevoegen
          </AddEmployeesButton>
        )}
      </EmployeeTableFilterWrapper>

      {children({
        costCenters,
        searchText: searchText.toLowerCase()
      })}
    </>
  );
};

export default EmployeeTableFilter;
