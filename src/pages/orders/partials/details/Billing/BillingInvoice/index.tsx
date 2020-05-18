import * as React from "react";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";

import * as Styles from "../../styles";

export const BillingInvoice = () => {
  return (
    <Styles.AddressCard>
      <Styles.AddressHeader>
        <Styles.AddressTitle>Factuur teksten</Styles.AddressTitle>
        <Styles.AddresAction>Verberg</Styles.AddresAction>
      </Styles.AddressHeader>
      <Grid container>
        <Grid item={true} xs={12}>
          <Styles.ProblemParent>
            <Styles.ProblemWrapper>
              <Styles.ProblemTitle>Factuur tekst</Styles.ProblemTitle>

              <Styles.ProblemTextarea
                multiline={true}
                fullWidth={true}
                defaultValue="Lekkage aan de linkerzijde van het dak, oorzaak is onbekend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut velit vel tortor viverra gravida sit amet at nisi.Cras quis dolor efficitur erat hendrerit ornare."
                // onChange={handleChange}
              ></Styles.ProblemTextarea>
            </Styles.ProblemWrapper>
            <Styles.ProblemDelete>
              <Styles.ProblemIcon />
            </Styles.ProblemDelete>
          </Styles.ProblemParent>

          <Styles.ProblemParent>
            <Styles.ProblemWrapper>
              <Styles.ProblemTitle>Vanuit Serviceorder</Styles.ProblemTitle>
              <Styles.ProblemTextarea
                multiline={true}
                fullWidth={true}
                defaultValue="Lekkage aan de linkerzijde van het dak, oorzaak is onbekend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut velit vel tortor viverra gravida sit amet at nisi.Cras quis dolor efficitur erat hendrerit ornare."
                // onChange={handleChange}
              ></Styles.ProblemTextarea>
            </Styles.ProblemWrapper>
            <Styles.ProblemDelete>
              <Styles.ProblemIcon />
            </Styles.ProblemDelete>
          </Styles.ProblemParent>
        </Grid>
      </Grid>
    </Styles.AddressCard>
  );
};
