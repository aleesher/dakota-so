import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { Query } from "@apollo/react-components";
import _get from "lodash/get";

import Grid from "@material-ui/core/Grid";

import { SwitchComponent, AccordionLink } from "dakota-portal/dist/components";

import {
  AccordionContainer,
  AddressContent,
  FormWrapper,
  FormLabel,
  FormInput,
  FormSelect,
  FormValue,
  FormCurrencyWrapper,
  FormCurrency,
  FormCurrencyInput
} from "../../../styles";
import { billingValidationSchema } from "./validation";
import {
  TERMIN_TYPE_OPTIONS,
  INVOICING_OPTIONS,
  INDEXATION_METHOD_OPTIONS
} from "./constants";
import { GET_BILLING_DATA, UPDATE_BILLING_DATA } from "./queries";

interface IProps {
  isLocked: boolean;
  code: string;
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
}

const Billing = ({ isLocked, code, refs, activeLinks, onClick }: IProps) => {
  const [updateBillingData] = useMutation(UPDATE_BILLING_DATA);

  return (
    <AccordionLink
      ref={refs.billing}
      label="Facturering"
      link="billing"
      isActive={activeLinks.includes("billing")}
      onClick={() => onClick("billing")}
    >
      <AccordionContainer>
        <Formik
          validationSchema={billingValidationSchema}
          initialValues={{
            invoiceType: "",
            installmentType: "",
            serviceIndexMethod: "",
            installmentsBasedOnProgress: false,
            maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate: 0,
            initialSalesAmount: 0,
            totalCost: 0,
            currencyCode: "",
            billToCustomerNoContr: "",
            billToNameContract: "",
            billToAddressContract: "",
            billToPostCodeContract: "",
            billToCityContract: ""
          }}
          onSubmit={() => null}
        >
          {formikBag => {
            const handleUpdate = (field, value) => {
              if (isLocked) {
                return;
              }

              updateBillingData({
                variables: {
                  where: { code },
                  data: { [field]: value }
                },
                refetchQueries: [
                  {
                    query: GET_BILLING_DATA,
                    variables: { where: { code } }
                  }
                ]
              });
            };

            const handleQueryCompete = data => {
              const {
                invoiceType,
                installmentType,
                serviceIndexMethod,
                installmentsBasedOnProgress,
                maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate,
                initialSalesAmount,
                totalCost,
                currencyCode,
                billToCustomerNoContr,
                billToNameContract,
                billToAddressContract,
                billToPostCodeContract,
                billToCityContract
              } = _get(data, "serviceContract") || {};

              formikBag.setValues({
                invoiceType: invoiceType || "",
                installmentType: installmentType || "",
                serviceIndexMethod: serviceIndexMethod || "",
                installmentsBasedOnProgress:
                  installmentsBasedOnProgress || false,
                maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate:
                  maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate || 0,
                initialSalesAmount: initialSalesAmount || 0,
                totalCost: totalCost || 0,
                currencyCode: currencyCode || "",
                billToCustomerNoContr: billToCustomerNoContr || "",
                billToNameContract: billToNameContract || "",
                billToAddressContract: billToAddressContract || "",
                billToPostCodeContract: billToPostCodeContract || "",
                billToCityContract: billToCityContract || ""
              });
            };

            const handleBlur = (name, value) => {
              if (isLocked) {
                return;
              }

              formikBag.handleBlur({ target: { name } });
              handleUpdate(name, value);
            };

            return (
              <Query
                query={GET_BILLING_DATA}
                variables={{
                  where: { code }
                }}
                onCompleted={handleQueryCompete}
                fetchPolicy="cache-and-network"
              >
                {() => (
                  <Grid container>
                    <Grid item={true} xs={6}>
                      <AddressContent>
                        <FormWrapper>
                          <FormLabel>Type termijn</FormLabel>
                          <FormValue>
                            <FormSelect
                              options={TERMIN_TYPE_OPTIONS}
                              value={TERMIN_TYPE_OPTIONS.find(
                                ({ value }) =>
                                  value === formikBag.values.invoiceType
                              )}
                              onChange={({ value }) =>
                                formikBag.handleChange({
                                  target: {
                                    name: "invoiceType",
                                    value
                                  }
                                })
                              }
                              helperText={
                                !isLocked &&
                                formikBag.touched.invoiceType &&
                                formikBag.errors.invoiceType
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.invoiceType &&
                                !!formikBag.errors.invoiceType
                              }
                              isDisabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Factureren</FormLabel>
                          <FormValue>
                            <FormSelect
                              options={INVOICING_OPTIONS}
                              value={INVOICING_OPTIONS.find(
                                ({ value }) =>
                                  value === formikBag.values.installmentType
                              )}
                              onChange={({ value }) =>
                                formikBag.handleChange({
                                  target: {
                                    name: "installmentType",
                                    value
                                  }
                                })
                              }
                              helperText={
                                !isLocked &&
                                formikBag.touched.installmentType &&
                                formikBag.errors.installmentType
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.installmentType &&
                                !!formikBag.errors.installmentType
                              }
                              isDisabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Termijn - voortgang</FormLabel>
                          <FormValue>
                            <span style={{ marginRight: 5 }}>NEE</span>
                            <SwitchComponent
                              onChange={() => {
                                handleBlur(
                                  "installmentsBasedOnProgress",
                                  !formikBag.values.installmentsBasedOnProgress
                                );
                                formikBag.handleChange({
                                  target: {
                                    name: "installmentsBasedOnProgress",
                                    value: !formikBag.values
                                      .installmentsBasedOnProgress
                                  }
                                });
                              }}
                              checked={
                                formikBag.values.installmentsBasedOnProgress
                              }
                              disabled={isLocked}
                            />
                            <span style={{ marginLeft: 5 }}>JA</span>
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Gefactureerd t/m</FormLabel>
                          <FormValue>
                            <FormInput
                              name="maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate"
                              onBlur={e =>
                                handleBlur(
                                  "maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate",
                                  e.target.value
                                )
                              }
                              onChange={formikBag.handleChange}
                              placeholder="0"
                              value={
                                formikBag.values
                                  .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate
                              }
                              helperText={
                                !isLocked &&
                                formikBag.touched
                                  .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate &&
                                formikBag.errors
                                  .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate
                              }
                              error={
                                !isLocked &&
                                formikBag.touched
                                  .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate &&
                                !!formikBag.errors
                                  .maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Initieel verkoopbedrag</FormLabel>
                          <FormCurrencyWrapper>
                            <FormCurrency>€</FormCurrency>
                            <FormCurrencyInput
                              placeholder="0"
                              name="initialSalesAmount"
                              onBlur={e =>
                                handleBlur("initialSalesAmount", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.initialSalesAmount}
                              helperText={
                                !isLocked &&
                                formikBag.touched.initialSalesAmount &&
                                formikBag.errors.initialSalesAmount
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.initialSalesAmount &&
                                !!formikBag.errors.initialSalesAmount
                              }
                              disabled={isLocked}
                            />
                          </FormCurrencyWrapper>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Actueel contractbedrag</FormLabel>
                          <FormCurrencyWrapper>
                            <FormCurrency>€</FormCurrency>
                            <FormCurrencyInput
                              placeholder="0"
                              name="totalCost"
                              onBlur={e =>
                                handleBlur("totalCost", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.totalCost}
                              helperText={
                                !isLocked &&
                                formikBag.touched.totalCost &&
                                formikBag.errors.totalCost
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.totalCost &&
                                !!formikBag.errors.totalCost
                              }
                              disabled={isLocked}
                            />
                          </FormCurrencyWrapper>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Kostenplaats code</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="Amsterdam"
                              name="currencyCode"
                              onBlur={e =>
                                handleBlur("currencyCode", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.currencyCode}
                              helperText={
                                !isLocked &&
                                formikBag.touched.currencyCode &&
                                formikBag.errors.currencyCode
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.currencyCode &&
                                !!formikBag.errors.currencyCode
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                      </AddressContent>
                    </Grid>
                    <Grid item={true} xs={6}>
                      <AddressContent>
                        <FormWrapper>
                          <FormLabel>Factureren aan</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="Bedrijf ABC B.V."
                              name="billToCustomerNoContr"
                              onBlur={e =>
                                handleBlur(
                                  "billToCustomerNoContr",
                                  e.target.value
                                )
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.billToCustomerNoContr}
                              helperText={
                                !isLocked &&
                                formikBag.touched.billToCustomerNoContr &&
                                formikBag.errors.billToCustomerNoContr
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.billToCustomerNoContr &&
                                !!formikBag.errors.billToCustomerNoContr
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Factureren naam</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="Kant B.V."
                              name="billToNameContract"
                              onBlur={e =>
                                handleBlur("billToNameContract", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.billToNameContract}
                              helperText={
                                !isLocked &&
                                formikBag.touched.billToNameContract &&
                                formikBag.errors.billToNameContract
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.billToNameContract &&
                                !!formikBag.errors.billToNameContract
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Factuur adres</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="Stephensonweg 2"
                              name="billToAddressContract"
                              onBlur={e =>
                                handleBlur(
                                  "billToAddressContract",
                                  e.target.value
                                )
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.billToAddressContract}
                              helperText={
                                !isLocked &&
                                formikBag.touched.billToAddressContract &&
                                formikBag.errors.billToAddressContract
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.billToAddressContract &&
                                !!formikBag.errors.billToAddressContract
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Factuur postcode</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="4208 HB"
                              name="billToPostCodeContract"
                              onBlur={e =>
                                handleBlur(
                                  "billToPostCodeContract",
                                  e.target.value
                                )
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.billToPostCodeContract}
                              helperText={
                                !isLocked &&
                                formikBag.touched.billToPostCodeContract &&
                                formikBag.errors.billToPostCodeContract
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.billToPostCodeContract &&
                                !!formikBag.errors.billToPostCodeContract
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Factuur plaats</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="Gorinchem"
                              name="billToCityContract"
                              onBlur={e =>
                                handleBlur("billToCityContract", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              value={formikBag.values.billToCityContract}
                              helperText={
                                !isLocked &&
                                formikBag.touched.billToCityContract &&
                                formikBag.errors.billToCityContract
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.billToCityContract &&
                                !!formikBag.errors.billToCityContract
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Indexeringsmethode</FormLabel>
                          <FormValue>
                            <FormSelect
                              options={INDEXATION_METHOD_OPTIONS}
                              value={INDEXATION_METHOD_OPTIONS.find(
                                ({ value }) =>
                                  value === formikBag.values.serviceIndexMethod
                              )}
                              onChange={({ value }) =>
                                formikBag.handleChange({
                                  target: {
                                    name: "serviceIndexMethod",
                                    value
                                  }
                                })
                              }
                              helperText={
                                !isLocked &&
                                formikBag.touched.serviceIndexMethod &&
                                formikBag.errors.serviceIndexMethod
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.serviceIndexMethod &&
                                !!formikBag.errors.serviceIndexMethod
                              }
                              isDisabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                      </AddressContent>
                    </Grid>
                  </Grid>
                )}
              </Query>
            );
          }}
        </Formik>
      </AccordionContainer>
    </AccordionLink>
  );
};

export default Billing;
