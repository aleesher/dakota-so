import React from "react";
import _get from "lodash/get";
import Grid from "@material-ui/core/Grid";

import CardItem from "./CardItem";
import { REPORTER_FIELDS } from "../constants";
import { getFormFields } from "../helpers";
import { CardItemTypes } from "../models";

import { FormCard, CardContent, CardTitle } from "../styles";

interface IProps {
  title?: string;
  onChange: (value: any) => void;
  values: object;
  errors: object;
  onBlur: any;
}

export default ({ title = "", onChange, values, errors, onBlur }: IProps) => {
  const soType = _get(values, "orderType");
  const primaryFields = getFormFields(REPORTER_FIELDS[0], soType);
  const secondaryFields = getFormFields(REPORTER_FIELDS[1], soType);

  return (
    <FormCard>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>
        <Grid xs={6}>
          {primaryFields.map(
            ({
              title,
              type,
              name,
              disabled,
              maxLength,
              options,
              titleChange
            }) => {
              const titleText =
                !!titleChange && titleChange.selectedSOType.includes(soType)
                  ? titleChange.text
                  : title;
              return (
                <CardItem
                  title={titleText}
                  type={type}
                  onChange={onChange}
                  name={name}
                  value={_get(values, name)}
                  errors={errors}
                  onBlur={onBlur}
                  disabled={disabled}
                  maxLength={maxLength}
                  options={options}
                  key={name}
                />
              );
            }
          )}
        </Grid>
        <Grid xs={6} container justify="flex-end">
          {secondaryFields.map(
            ({
              title,
              type,
              name,
              disabled,
              maxLength,
              options,
              titleChange
            }) => {
              const titleText =
                !!titleChange && titleChange.selectedSOType.includes(soType)
                  ? titleChange.text
                  : title;
              return (
                <CardItem
                  title={titleText}
                  type={type}
                  onChange={onChange}
                  name={name}
                  value={_get(values, name)}
                  errors={errors}
                  onBlur={onBlur}
                  disabled={disabled}
                  maxLength={maxLength}
                  options={options}
                  key={name}
                />
              );
            }
          )}
        </Grid>
        <Grid xs={12}>
          <CardItem
            title="SO Omschrijving"
            type={CardItemTypes.textarea}
            onChange={onChange}
            name="description"
            value={_get(values, "description")}
            errors={errors}
            onBlur={onBlur}
            maxLength={500}
          />
        </Grid>
      </CardContent>
    </FormCard>
  );
};
