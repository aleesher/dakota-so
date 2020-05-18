import * as React from "react";

import { GeneralButton } from "../../../../../../components";
import * as Styles from "../../styles";

export const BillingHead = () => {
  return (
    <Styles.Billing>
      <Styles.BillingHead>
        <GeneralButton className="faded" url="#" title="Preview factuur" />
      </Styles.BillingHead>
    </Styles.Billing>
  );
};
