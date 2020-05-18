import React, { useState } from "react";

import { CUSTOMER_CODES, EMPLOYEE_CODES } from "../../mock";
import * as Styled from "../../styles";
import EditModal from "../EditModal";
import CockpitControls from "./CockpitControls";
import OrdersByCustomers from "./OrdersByCustomers";
import { ORDER_STATUS_KEYS } from "../../../../constants";
import OrdersByEmployees from "./OrdersByEmployees";

const BottomArea = ({ url, userId }) => {
  const [checkedState, setCheckedState] = useState({
    customer: {
      Open: true,
      In_Process: true,
      Technical_Finished: true,
      Administrative_Finished: true,
      Finished: true,
      Cancelled: true,
      name: true
    },
    employee: {
      Open: true,
      In_Process: true,
      Technical_Finished: true,
      Administrative_Finished: true,
      Finished: true,
      Cancelled: true,
      name: true
    }
  });

  const handleCheckbox = (name: string, type: string) => {
    setCheckedState(checkedState => ({
      ...checkedState,
      [type]: { ...checkedState[type], [name]: !checkedState[type][name] }
    }));
  };

  return (
    <Styled.BottomWrapper>
      <CockpitControls title="Service orders per Klant" type="customer">
        {({ limit, startDate, endDate }) => (
          <OrdersByCustomers
            limit={limit}
            startDate={startDate}
            endDate={endDate}
            statuses={ORDER_STATUS_KEYS}
            customerCodes={CUSTOMER_CODES}
            filterRow={checkedState}
          />
        )}
      </CockpitControls>

      <CockpitControls title="Service orders per medewerker" type="employee">
        {({ limit, startDate, endDate }) => (
          <OrdersByEmployees
            limit={limit}
            startDate={startDate}
            endDate={endDate}
            statuses={ORDER_STATUS_KEYS}
            employeeCodes={EMPLOYEE_CODES}
            filterRow={checkedState}
            userId={userId}
          />
        )}
      </CockpitControls>

      <Styled.ModalBoxs
        path={"/so/table/settings"}
        parentPath={url}
        component={EditModal}
        variant="wide"
        props={{
          onChange: handleCheckbox,
          checkedPropsState: checkedState
        }}
      />
    </Styled.BottomWrapper>
  );
};

export default BottomArea;
