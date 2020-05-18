import * as React from "react";
import _get from "lodash/get";
import Grid from "@material-ui/core/Grid";

import {
  COUNTRIES,
  SO_TYPES,
  SERVICE_TYPES,
  PRIORITY_OPTIONS
} from "../../../../../serviceOrder/constants";
import urls from "../../../../../../helpers/urls";

import {
  FormLink,
  FormCard,
  FormLabel,
  FormInput,
  FormSelect,
  FormWrapper,
  FormWrapperSelect,
  ServiceWrapper,
  ServiceUnorderedList,
  ServiceList,
  ServiceSpan,
  ServiceAnchor
} from "../../styles";

export const ServiceSection = ({
  user,
  onUpdateSO,
  formikBag,
  onOpenMomentHistory
}) => {
  const role = _get(user, "roles[0].role.name");
  const onChange = (key: string) => async value => {
    const values = {
      ...formikBag.values,
      [key]: value.value
    };
    formikBag.handleChange({ target: { name: key, value } });
    await onUpdateSO(values);
  };

  const { values } = formikBag;

  return (
    <FormCard>
      <Grid container>
        <Grid item xs={6}>
          <FormWrapper>
            <FormLabel>Servicetype</FormLabel>
            <FormSelect
              classNamePrefix="type-select"
              options={SERVICE_TYPES}
              value={SERVICE_TYPES.find(
                option => _get(option, "value") === _get(values, "serviceType")
              )}
              isDisabled={role !== "admin"}
              onChange={onChange("serviceType")}
            />
          </FormWrapper>

          <FormWrapperSelect>
            <FormLabel>Selecteer land</FormLabel>
            <FormSelect
              classNamePrefix="type-select"
              options={COUNTRIES}
              value={COUNTRIES.find(
                option => _get(option, "value") === _get(values, "countryCode")
              )}
              onChange={onChange("countryCode")}
            />
          </FormWrapperSelect>

          <FormWrapperSelect>
            <FormLabel>Selecteer SO type</FormLabel>
            <FormSelect
              classNamePrefix="type-select"
              options={SO_TYPES}
              value={SO_TYPES.find(
                option => _get(option, "value") === _get(values, "orderType")
              )}
              onChange={onChange("orderType")}
            />
          </FormWrapperSelect>

          <FormWrapper>
            <FormLabel>Global ID</FormLabel>
            <FormInput value={_get(values, "globalId")} disabled />
          </FormWrapper>

          <FormWrapper>
            <FormLabel>Concept ID</FormLabel>
            <FormInput value={_get(values, "globalId")} disabled />
          </FormWrapper>

          <FormWrapperSelect>
            <FormLabel>Serviceorder nummer</FormLabel>
            <FormInput value={_get(values, "code")} disabled />
          </FormWrapperSelect>

          <FormWrapperSelect>
            <FormLabel>Prioriteit</FormLabel>
            <FormSelect
              classNamePrefix="type-select"
              options={PRIORITY_OPTIONS}
              value={PRIORITY_OPTIONS.find(
                option => _get(option, "value") === _get(values, "priority")
              )}
              onChange={onChange("priority")}
            />
          </FormWrapperSelect>

          <FormWrapper>
            <FormLabel>Status</FormLabel>
            <FormLink onClick={onOpenMomentHistory}>
              {_get(values, "status")}
            </FormLink>
          </FormWrapper>
        </Grid>
        <Grid item xs={6}>
          <ServiceWrapper>
            <ServiceUnorderedList>
              <ServiceAnchor>
                <ServiceList>Daken met garantie</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_DAKDAKA}> Ja</ServiceSpan>
              </ServiceAnchor>

              <ServiceAnchor>
                <ServiceList>Lekkages laatse 3 maanden</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}> 1</ServiceSpan>
              </ServiceAnchor>

              <ServiceAnchor>
                <ServiceList>Lekkages historie</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}> 25</ServiceSpan>
              </ServiceAnchor>

              <ServiceAnchor>
                <ServiceList>Sub-complex Value</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}> C501</ServiceSpan>
              </ServiceAnchor>

              <ServiceAnchor>
                <ServiceList>Daken Value</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}>10</ServiceSpan>
              </ServiceAnchor>

              <ServiceAnchor>
                <ServiceList>Activiteiten Value</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}>6</ServiceSpan>
              </ServiceAnchor>

              <ServiceAnchor>
                <ServiceList>Geregistreerde uren Value</ServiceList>
                <ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}>5</ServiceSpan>
              </ServiceAnchor>
            </ServiceUnorderedList>
          </ServiceWrapper>
        </Grid>
      </Grid>
    </FormCard>
  );
};
