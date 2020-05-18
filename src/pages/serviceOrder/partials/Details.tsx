import React from "react";
import _get from "lodash/get";
import Grid from "@material-ui/core/Grid";

import CardItem from "./CardItem";
import InformationBox from "./InformationBox";
import {
  COUNTRIES,
  SO_TYPES,
  SERVICE_TYPES,
  PRIORITY_OPTIONS
} from "../constants";
import { CardItemTypes } from "../models";

import { FormCard, CardContent, CardTitle } from "../styles";
import { BaseRow } from "../../home/styles";

interface IProps {
  title?: string;
  onChange: (value: any) => any;
  onBlur: any;
  values: object;
  errors: object;
  informationBoxValues?: object;
}

export default ({
  title = "",
  onChange,
  values,
  errors,
  onBlur,
  informationBoxValues
}: IProps) => {
  return (
    <FormCard>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>
        <Grid xs={6}>
          <CardItem
            title="Servicetype"
            type={CardItemTypes.select}
            options={SERVICE_TYPES}
            onChange={onChange}
            value={_get(values, "serviceType")}
            name="serviceType"
            errors={errors}
            onBlur={onBlur}
          />
          <CardItem
            title="Selecteer Land"
            type={CardItemTypes.select}
            options={COUNTRIES}
            onBlur={onBlur}
            onChange={onChange}
            value={_get(values, "country")}
            name="country"
            errors={errors}
          />
          <CardItem
            title="Selecteer SO type"
            type={CardItemTypes.select}
            options={SO_TYPES}
            onChange={onChange}
            value={_get(values, "orderType")}
            name="orderType"
            errors={errors}
            onBlur={onBlur}
          />
          <CardItem
            title="Global ID"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "globalId")}
            name="globalId"
            errors={errors}
            onBlur={onBlur}
            disabled
          />
          <CardItem
            title="Concept ID"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "conceptId")}
            name="conceptId"
            errors={errors}
            onBlur={onBlur}
            disabled
          />
          <CardItem
            title="Serviceordernummer"
            type={CardItemTypes.input}
            onChange={onChange}
            value={_get(values, "code")}
            name="code"
            errors={errors}
            onBlur={onBlur}
            disabled
          />
          <CardItem
            title="Prioriteit"
            type={CardItemTypes.select}
            options={PRIORITY_OPTIONS}
            onChange={onChange}
            value={_get(values, "priority")}
            name="priority"
            errors={errors}
            onBlur={onBlur}
          />
        </Grid>
        <BaseRow xs={6} justify="flex-end" container>
          <InformationBox
            data={values}
            informationBoxValues={informationBoxValues}
          />
        </BaseRow>
      </CardContent>
    </FormCard>
  );
};
