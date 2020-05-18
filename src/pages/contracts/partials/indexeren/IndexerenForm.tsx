import React from "react";
import { Formik, FormikErrors } from "formik";
import * as Style from "../../styles";
import { Input } from "dakota-portal/dist/components";

interface FormValues {
  indexMethod: string;
  indexTime: string;
  contractNumber: string;
  contractAmount: string;
  indexedAmount: string;
  indexFigure: string;
  errorMessage?: any;
}

const IndexerenForm = ({ handleSave }) => {
  const METHOD_OPTIONS = [
    {
      value: "regie",
      label: "regie"
    }
  ];
  return (
    <Formik
      initialValues={{
        indexMethod: "",
        indexTime: "",
        contractNumber: "",
        contractAmount: "",
        indexedAmount: "",
        indexFigure: ""
      }}
      validate={(values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.indexTime) {
          errors.indexTime = "Required";
        } else if (!values.contractNumber) {
          errors.contractNumber = "Required";
        } else if (!values.contractAmount) {
          errors.contractAmount = "Required";
        } else if (!values.indexedAmount) {
          errors.indexedAmount = "Required";
        }
        return errors;
      }}
      onSubmit={handleSave}
    >
      {formikBag => (
        <Style.IndexFormWrapper>
          <Style.ErrorMessage>
            {formikBag.errors.errorMessage}
          </Style.ErrorMessage>
          <Style.StyledSelect
            name={"indexMethod"}
            classNamePrefix="index"
            placeholder={"Indexeren Method"}
            options={METHOD_OPTIONS}
            value={METHOD_OPTIONS.find(
              e => e.value === formikBag.values.indexMethod
            )}
            onChange={b => formikBag.setFieldValue("indexMethod", b.value)}
          />
          <Style.DateInput
            name={"indexTime"}
            value={formikBag.values.indexTime}
            onChange={n => formikBag.setFieldValue("indexTime", n.format())}
          />

          <Style.InputWrapperIndex
            placeholder={"Cijfer"}
            name="indexFigure"
            required
            helperText={
              formikBag.touched.indexFigure && formikBag.errors.indexFigure
            }
            error={
              formikBag.touched.indexFigure && !!formikBag.errors.indexFigure
            }
            value={formikBag.values.indexFigure}
            onChange={formikBag.handleChange}
            onBlur={formikBag.handleBlur}
          />

          <Style.InputWrapperIndex
            placeholder={"Contract nummer"}
            name="contractNumber"
            required
            helperText={
              formikBag.touched.contractNumber &&
              formikBag.errors.contractNumber
            }
            error={
              formikBag.touched.contractNumber &&
              !!formikBag.errors.contractNumber
            }
            value={formikBag.values.contractNumber}
            onChange={formikBag.handleChange}
            onBlur={formikBag.handleBlur}
          />

          <Style.InputWrapperIndex
            placeholder={"Contract bedrag"}
            name="contractAmount"
            required
            helperText={
              formikBag.touched.contractAmount &&
              formikBag.errors.contractAmount
            }
            error={
              formikBag.touched.contractAmount &&
              !!formikBag.errors.contractAmount
            }
            value={formikBag.values.contractAmount}
            onChange={formikBag.handleChange}
            onBlur={formikBag.handleBlur}
          />

          <Style.InputWrapperIndex
            placeholder={"Geindexeerde bedrag"}
            name="indexedAmount"
            required
            helperText={
              formikBag.touched.indexedAmount && formikBag.errors.indexedAmount
            }
            error={
              formikBag.touched.indexedAmount &&
              !!formikBag.errors.indexedAmount
            }
            value={formikBag.values.indexedAmount}
            onChange={formikBag.handleChange}
            onBlur={formikBag.handleBlur}
          />
          <Style.SubmitButton
            disabled={!formikBag.isValid || !formikBag.dirty}
            onClick={formikBag.handleSubmit}
            isSecond
          >
            Update
          </Style.SubmitButton>
        </Style.IndexFormWrapper>
      )}
    </Formik>
  );
};

export default IndexerenForm;
