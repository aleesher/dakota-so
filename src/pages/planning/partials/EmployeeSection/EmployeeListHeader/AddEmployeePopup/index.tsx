import React, { useEffect, useState } from "react";
import { useSettingsState } from "../../../../provider";
import { TEmployee } from "../../../../types";
import CustomPopup from "../../../components/CustomPopup";
import EmployeeTableFilter from "./EmployeeTableFilter";
import EmployeeTable from "./EmployeeTable";
import { AddEmployeePopupContent } from "./styles";

interface IProps {
  open: boolean;
  onClose: () => void;
  onSave: (codes: string[], resourceCodes: string[]) => void;
}

const AddEmployeePopup: React.FC<IProps> = ({
  open = false,
  onClose,
  onSave
}) => {
  const { employeeCodes, employeeResourceCodes } = useSettingsState();
  const [codes, setCodes] = useState<string[]>(employeeCodes);
  const [resourceCodes, setResourceCodes] = useState<string[]>(
    employeeResourceCodes
  );
  const [showSaveButton, setShowSaveButton] = useState(false);

  useEffect(() => setCodes(employeeCodes), [employeeCodes]);

  const handleClickSave = () => onSave(codes, resourceCodes);

  const handleSelect = (employee: TEmployee) => {
    let newCodes;
    let newResourceCodes;
    if (codes.includes(employee.code)) {
      newCodes = codes.filter(c => c !== employee.code);
      newResourceCodes = resourceCodes.filter(c => c !== employee.resource);
    } else {
      newCodes = [...codes, employee.code];
      newResourceCodes = [...resourceCodes, employee.resource];
    }
    setCodes(newCodes);
    setResourceCodes(newResourceCodes);
    setShowSaveButton(
      employeeCodes
        .slice()
        .sort()
        .join("") !== newCodes.sort().join("")
    );
  };

  return (
    <CustomPopup
      title="Werknemer Toevoegen"
      open={open}
      onClose={onClose}
      withHeaderBorder
    >
      <AddEmployeePopupContent>
        <EmployeeTableFilter
          showSaveButton={showSaveButton}
          onClickSave={handleClickSave}
        >
          {({ costCenters, searchText }) => (
            <EmployeeTable
              codes={codes}
              costCenters={costCenters}
              searchText={searchText}
              onSelect={handleSelect}
            />
          )}
        </EmployeeTableFilter>
      </AddEmployeePopupContent>
    </CustomPopup>
  );
};

export default AddEmployeePopup;
