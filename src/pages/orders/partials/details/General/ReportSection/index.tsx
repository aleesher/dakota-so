import React from "react";

import Grid from "@material-ui/core/Grid";

import {
  AddressCard,
  AddressHeader,
  AddressTitle,
  AddresAction,
  AddressContent
} from "../../styles";

export const ReportSection = ({ renderField, fields }) => {
  const { majorFields, minorFields } = fields;

  return (
    <AddressCard>
      <AddressHeader>
        <AddressTitle>Melder informatie</AddressTitle>
        <AddresAction>Verberg</AddresAction>
      </AddressHeader>
      <Grid container>
        <Grid item={true} xs={6}>
          <AddressContent>
            {majorFields.map(fieldData => renderField(fieldData))}
          </AddressContent>
        </Grid>

        <Grid item={true} xs={6}>
          <AddressContent>
            {minorFields.map(fieldData => renderField(fieldData))}
          </AddressContent>
        </Grid>
      </Grid>
    </AddressCard>
  );
};
