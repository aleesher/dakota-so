import React from "react";
import _get from "lodash/get";
import Grid from "@material-ui/core/Grid";

import { SearchResults } from "./";
import { IBagNumber, CardItemTypes } from "../models";
import CardItem from "./CardItem";

import { FormCard, CardContent, CardTitle } from "../styles";
import { BaseRow } from "../../home/styles";
interface IProps {
  title?: string;
  onChange: (value: any) => any;
  values: object;
  errors: object;
  onBlur: any;
  searchResults: IBagNumber[];
  onSelectAddress: ({ values: object, address: IBagNumber }) => void;
}

export default ({
  title = "",
  onChange,
  values,
  errors,
  onBlur,
  searchResults,
  onSelectAddress
}: IProps) => {
  return (
    <FormCard>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>
        <Grid xs={6}>
          <CardItem
            title="Zoeken"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "searchAddress")}
            name="searchAddress"
            errors={errors}
            onBlur={onBlur}
          />
          <CardItem
            title="Postcode"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "address.postalCode")}
            name="address.postalCode"
            errors={errors}
            onBlur={onBlur}
            disabled
          />
          <CardItem
            title={["Huisnummer", "Letter", "Toevoeing"]}
            type={CardItemTypes.combinedInput}
            onChange={onChange}
            value={values}
            name={[
              "address.houseNumber",
              "address.houseLetter",
              "address.houseNumberAddition"
            ]}
            errors={errors}
            onBlur={onBlur}
            disabled
          />
          <CardItem
            title="Straatnaam"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "address.street")}
            name="address.street"
            errors={errors}
            onBlur={onBlur}
            disabled
          />
          <CardItem
            title="Plaats"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "address.city")}
            name="address.city"
            errors={errors}
            onBlur={onBlur}
            disabled
          />
        </Grid>
        <BaseRow xs={6} justify="flex-end" container>
          <SearchResults
            onSelectResult={onSelectAddress}
            results={searchResults}
            values={values}
          />
        </BaseRow>
      </CardContent>
    </FormCard>
  );
};
