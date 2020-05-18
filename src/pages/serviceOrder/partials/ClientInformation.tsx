import React from "react";
import _get from "lodash/get";
import Grid from "@material-ui/core/Grid";

import CardItem from "./CardItem";
import { urls } from "../../../helpers";
import { CLIENT_INFORMATION_FIELDS } from "../constants";
import { getFormFields } from "../helpers";

import {
  FormCard,
  CardContent,
  CardTitle,
  SearchButton,
  SearchIcon
} from "../styles";

interface IProps {
  title?: string;
  onChange: (value: any) => void;
  values: object;
  errors: object;
  onBlur: any;
  url: string;
}

export default ({
  title = "",
  onChange,
  values,
  errors,
  onBlur,
  url
}: IProps) => {
  const fields = getFormFields(
    CLIENT_INFORMATION_FIELDS,
    _get(values, "orderType")
  );

  return (
    <FormCard>
      <CardTitle xs={12} direction="row" container item>
        {title}
        <SearchButton to={urls.check(url + urls.SEARCH_CLIENT)}>
          <SearchIcon />
          Zoek Klant
        </SearchButton>
      </CardTitle>

      <CardContent>
        <Grid xs={6}>
          {fields.map(({ title, type, name, disabled, maxLength, options }) => {
            return (
              <CardItem
                title={title}
                type={type}
                onChange={onChange}
                name={name}
                value={_get(values, name)}
                errors={errors}
                onBlur={onBlur}
                disabled={disabled}
                maxLength={maxLength}
                key={name}
                options={options}
              />
            );
          })}
        </Grid>
      </CardContent>
    </FormCard>
  );
};
