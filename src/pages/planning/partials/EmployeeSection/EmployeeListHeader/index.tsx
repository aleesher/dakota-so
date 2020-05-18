import React, { useState } from "react";
import {
  usePageDispatch,
  usePageState,
  useSettingsDispatch
} from "../../../provider";
import {
  AddListItemButton,
  ListHeaderWrapper,
  ListTitle,
  SortListButton
} from "../../components/ListHeader/styles";
import PlusIcon from "../../icons/PlusIcon";
import SortIcon from "../../icons/SortIcon";
import AddEmployeePopup from "./AddEmployeePopup";
import SelectAmountOfEmployees from "./SelectAmountOfEmployees";

const EmployeeListHeader: React.FC = () => {
  const { setEmployeeCodes } = useSettingsDispatch();
  const { setEmployeeSort } = usePageDispatch();
  const { employeeSort } = usePageState();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleClickAdd = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleSave = (codes: string[], resourceCodes: string[]) => {
    setEmployeeCodes(codes, resourceCodes);
    setShowPopup(false);
  };

  return (
    <>
      <ListHeaderWrapper>
        <ListTitle>Medewerkers</ListTitle>
        <SortListButton onClick={setEmployeeSort}>
          <SortIcon direction={employeeSort} />
        </SortListButton>

        <SelectAmountOfEmployees />

        <AddListItemButton onClick={handleClickAdd}>
          <PlusIcon />
        </AddListItemButton>
      </ListHeaderWrapper>

      <AddEmployeePopup
        open={showPopup}
        onClose={handleClosePopup}
        onSave={handleSave}
      />
    </>
  );
};

export default EmployeeListHeader;
