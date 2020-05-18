import React, { useState } from "react";

import { AccordionLink } from "dakota-portal/dist/components";

import { AccordionPanelDetails } from "./../../styles";
import WorkOrder from "../../../../workOrder/partials/WorkOrder";

const WorkOrders = ({
  refs,
  activeLinks,
  onClick,
  routeProps,
  soCode,
  soDescription,
  onOpenMomentHistory,
  currentUser,
  promotedFields
}) => {
  const [woTotal, updateWoTotal] = useState(1);
  return (
    <AccordionLink
      label="Werkorders"
      link="workOrders"
      ref={refs.workOrders}
      isActive={activeLinks.includes("workOrders")}
      onClick={() => onClick("workOrders")}
      promotedFields={promotedFields.map(f => ({
        label: f,
        value: woTotal
      }))}
    >
      <AccordionPanelDetails>
        {!!soCode ? (
          <WorkOrder
            routeProps={routeProps}
            onSubmit={() => null}
            soCode={soCode}
            soDescription={soDescription}
            onOpenMomentHistory={onOpenMomentHistory}
            currentUser={currentUser}
            updateWoTotal={updateWoTotal}
          />
        ) : (
          <></>
        )}
      </AccordionPanelDetails>
    </AccordionLink>
  );
};

export default WorkOrders;
