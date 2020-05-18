import React from "react";

import { AccordionLink } from "dakota-portal/dist/components";

import { AccordionPanelDetails } from "../../styles";
import { BillingHead } from "../Billing/BillingHead";
import { BillingForm } from "../Billing/BillingForm";
import { BillingContent } from "../Billing/BillingContent";
import { BillingInvoice } from "../Billing/BillingInvoice";
import { BillingFooter } from "../Billing/BillingFooter";

const Review = ({ refs, activeLinks, onClick, promotedFields }) => {
  return (
    <AccordionLink
      label="Beoordelen"
      link="review"
      ref={refs.review}
      isActive={activeLinks.includes("review")}
      onClick={() => onClick("review")}
      promotedFields={promotedFields.map(f => ({
        label: f,
        value: "<placeholder>"
      }))}
    >
      <AccordionPanelDetails>
        <BillingHead />
        <BillingForm />
        <BillingContent />
        <BillingInvoice />
        <BillingFooter />
      </AccordionPanelDetails>
    </AccordionLink>
  );
};

export default Review;
