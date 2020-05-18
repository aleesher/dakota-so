import * as React from "react";
import _get from "lodash/get";
import Grid from "@material-ui/core/Grid";

import { urls } from "../../../../../../helpers";

import {
  AddressCard,
  AddressHeader,
  AddressTitle,
  AddresAction,
  AddressContent
} from "../../styles";
import { SearchButton, SearchIcon } from "../../../../../serviceOrder/styles";

export const CustomerInfoSection = ({
  url,
  formikBag,
  renderField,
  fields
}) => {
  const { values } = formikBag;
  const { majorFields, minorFields } = fields;
  return (
    <AddressCard>
      <AddressHeader>
        <AddressTitle>Klantinformatie</AddressTitle>
        <SearchButton right={"100px"} to={urls.check(url + urls.SEARCH_CLIENT)}>
          <SearchIcon />
          Zoek Klant
        </SearchButton>
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
            {minorFields.map(field => renderField(field))}
          </AddressContent>
        </Grid>
      </Grid>
    </AddressCard>
  );
};
