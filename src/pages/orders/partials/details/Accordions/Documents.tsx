import React from "react";

import { AccordionLink } from "dakota-portal/dist/components";

import { AccordionPanelDetails } from "./../../styles";
import { Documents as DetailsDocuments } from "./../../../partials/details/Documents";

const Documents = ({ refs, activeLinks, onClick, match, promotedFields }) => {
  return (
    <AccordionLink
      label="Documenten"
      link="documents"
      ref={refs.documents}
      isActive={activeLinks.includes("documents")}
      onClick={() => onClick("documents")}
      promotedFields={promotedFields.map(f => ({ label: f, value: 4 }))}
    >
      <AccordionPanelDetails>
        <DetailsDocuments match={match} />
      </AccordionPanelDetails>
    </AccordionLink>
  );
};

export default Documents;
