import React from "react";
import styled, { css } from "styled-components";
import * as yup from "yup";
import { Formik } from "formik";

import { withStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import MaterialTooltip from "@material-ui/core/Tooltip";

import {
  Date as DakotaDate,
  Input as DakotaInput,
  Select as DakotaSelect,
  Currency as DakotaCurrency,
  SwitchComponent
} from "dakota-portal/dist/components";
import Colors from "dakota-portal/dist/components/Colors";

export interface ITerm {
  id: string;
  invoiceFrom: Date;
  nextInvoicingDate: Date;
  progressPercent: number;
  description: string;
  invoicePeriod: string;
  invoiceDirectly: boolean;
}

interface IProps {
  term: ITerm;
  onChange: (field: string, value: any) => void;
}

export const termValidationSchema = yup.object({
  invoiceFrom: yup.date().required(),
  nextInvoicingDate: yup.date().required(),
  progressPercent: yup.number().required(),
  description: yup.string().required(),
  invoicePeriod: yup.string().required(),
  invoiceDirectly: yup.boolean().required()
});

const Tooltip = withStyles(theme => ({
  tooltip: {
    padding: "10px 14px",
    backgroundColor: theme.palette.common.white,
    color: Colors.cinnabar,
    boxShadow: theme.shadows[1],
    fontSize: 13,
    fontWeight: "bold"
  }
}))(MaterialTooltip);

const invoicePeriodOptions = [
  { label: "Forehand", value: "Forehand" },
  { label: "Afterwards", value: "Afterwards" }
];

const Warning = ({ title }) => {
  return (
    <WarningIconWrapper>
      <Tooltip title={title} placement="right">
        <WarningIcon />
      </Tooltip>
    </WarningIconWrapper>
  );
};

const TermItem = ({ term, onChange }: IProps) => {
  return (
    <Container>
      <Formik
        validationSchema={termValidationSchema}
        initialValues={term}
        onSubmit={() => null}
      >
        {formikBag => {
          const handleChange = (field, value) => {
            onChange(field, value);
            formikBag.handleChange({ target: { name: field, value } });
          };

          return (
            <>
              <FieldWrapper
                isError={
                  formikBag.touched.invoiceFrom &&
                  !!formikBag.errors.invoiceFrom
                }
              >
                <Date
                  onChange={value => handleChange("invoiceFrom", value)}
                  value={formikBag.values.invoiceFrom}
                />
                {formikBag.touched.invoiceFrom &&
                  !!formikBag.errors.invoiceFrom && (
                    <Warning title={formikBag.errors.invoiceFrom} />
                  )}
              </FieldWrapper>
              <FieldWrapper
                isError={
                  formikBag.touched.nextInvoicingDate &&
                  !!formikBag.errors.nextInvoicingDate
                }
              >
                <Date
                  onChange={value => handleChange("nextInvoicingDate", value)}
                  value={formikBag.values.nextInvoicingDate}
                />
                {formikBag.touched.nextInvoicingDate &&
                  !!formikBag.errors.nextInvoicingDate && (
                    <Warning title={formikBag.errors.nextInvoicingDate} />
                  )}
              </FieldWrapper>
              <FieldWrapper
                isError={
                  formikBag.touched.progressPercent &&
                  !!formikBag.errors.progressPercent
                }
              >
                <Input
                  name="progressPercent"
                  value={formikBag.values.progressPercent}
                  onChange={formikBag.handleChange}
                  onBlur={e => {
                    formikBag.handleBlur(e);
                    handleChange(
                      "progressPercent",
                      parseInt(e.target.value, 10)
                    );
                  }}
                />
                {formikBag.touched.progressPercent &&
                  !!formikBag.errors.progressPercent && (
                    <Warning title={formikBag.errors.progressPercent} />
                  )}
              </FieldWrapper>
              <FieldWrapper
                isError={
                  formikBag.touched.description &&
                  !!formikBag.errors.description
                }
              >
                <Input
                  name="description"
                  value={formikBag.values.description}
                  onChange={formikBag.handleChange}
                  onBlur={e => {
                    formikBag.handleBlur(e);
                    handleChange("description", e.target.value);
                  }}
                />
                {formikBag.touched.description &&
                  !!formikBag.errors.description && (
                    <Warning title={formikBag.errors.description} />
                  )}
              </FieldWrapper>
              <FieldWrapper
                isError={
                  formikBag.touched.invoicePeriod &&
                  !!formikBag.errors.invoicePeriod
                }
              >
                <Select
                  onChange={({ value }) => handleChange("invoicePeriod", value)}
                  options={invoicePeriodOptions}
                  value={invoicePeriodOptions.find(
                    o => o.value === formikBag.values.invoicePeriod
                  )}
                />
                {formikBag.touched.invoicePeriod &&
                  !!formikBag.errors.invoicePeriod && (
                    <Warning title={formikBag.errors.invoicePeriod} />
                  )}
              </FieldWrapper>
              <FieldWrapper
                isError={
                  formikBag.touched.invoiceDirectly &&
                  !!formikBag.errors.invoiceDirectly
                }
              >
                <SwitchWrapper>
                  <span>NEE</span>
                  <SwitchComponent
                    checked={formikBag.values.invoiceDirectly}
                    onChange={() =>
                      handleChange(
                        "invoiceDirectly",
                        !formikBag.values.invoiceDirectly
                      )
                    }
                  />
                  <span>JA</span>
                </SwitchWrapper>
                {formikBag.touched.invoiceDirectly &&
                  !!formikBag.errors.invoiceDirectly && (
                    <Warning title={formikBag.errors.invoiceDirectly} />
                  )}
              </FieldWrapper>
            </>
          );
        }}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  border-radius: 6px;
  box-shadow: 0 0 12px -2px ${Colors.lavender};
  background-color: white;
`;

const WarningIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 2px;
  top: 5px;
  width: 45px;
  height: 45px;
  background-color: ${Colors.lightCinnabar};
  color: ${Colors.cinnabar};
`;

const FieldWrapper = styled.div<{ isError?: boolean }>`
  > div {
    width: 100%;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.lavender};
  }

  ${({ isError }) =>
    isError &&
    css`
      position: relative;
      border: 1px solid ${Colors.cinnabar} !important;

      div {
        background-color: ${Colors.lightCinnabar};
      }
    `}
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
  box-sizing: border-box;
  font-size: 15px;

  span {
    font-weight: bold;
    color: ${Colors.veryLightGrey};
  }

  span:last-child {
    color: ${Colors.primary};
  }
`;

const Input = styled(DakotaInput)`
  width: 100%;

  > div {
    border: 0 !important;
  }
`;

const Select = styled(DakotaSelect)`
  width: 100%;

  > div {
    border: 0;
  }
`;

const Currency = styled(DakotaCurrency)`
  width: 100%;

  > div {
    border: 0 !important;
  }
`;

const Date = styled(DakotaDate)`
  width: 100%;

  > div {
    border: 0 !important;
  }
`;

export default TermItem;
