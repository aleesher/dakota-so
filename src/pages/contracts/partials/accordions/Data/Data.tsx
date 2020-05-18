import React from "react";
import { Formik } from "formik";
import { Query } from "@apollo/react-components";
import { useMutation } from "@apollo/react-hooks";

import _get from "lodash/get";

import Grid from "@material-ui/core/Grid";

import { AccordionLink } from "dakota-portal/dist/components";

import {
  AccordionContainer,
  AddressContent,
  FormWrapper,
  FormLabel,
  FormValue,
  FormDate
} from "../../../styles";
import { GET_DATA, UPDATE_DATA } from "./queries";
import { dataValidationSchema } from "./validation";

interface IProps {
  isLocked: boolean;
  code: string;
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
}

const Data = ({ isLocked, code, refs, activeLinks, onClick }: IProps) => {
  const [updateData] = useMutation(UPDATE_DATA);

  return (
    <AccordionLink
      ref={refs.data}
      label="Data"
      link="data"
      isActive={activeLinks.includes("data")}
      onClick={() => onClick("data")}
    >
      <AccordionContainer>
        <Formik
          validationSchema={dataValidationSchema}
          initialValues={{
            startingDate: "",
            endingDate: "",
            terminationDate: "",
            lastIndexDate: ""
          }}
          onSubmit={() => null}
        >
          {formikBag => {
            const handleUpdate = (field, value) => {
              if (isLocked) {
                return;
              }

              updateData({
                variables: {
                  where: { code },
                  data: { [field]: value }
                },
                refetchQueries: [
                  {
                    query: GET_DATA,
                    variables: { where: { code } }
                  }
                ]
              });
            };

            const handleQueryCompete = data => {
              const {
                startingDate,
                endingDate,
                terminationDate,
                lastIndexDate
              } = _get(data, "serviceContract") || {};

              formikBag.setValues({
                startingDate: startingDate || "",
                endingDate: endingDate || "",
                terminationDate: terminationDate || "",
                lastIndexDate: lastIndexDate || ""
              });
            };

            const handleDateChange = (name, d) => {
              if (isLocked) {
                return;
              }

              const newValue = d.format("DD-MM-YYYY");

              handleUpdate(name, newValue);
              formikBag.handleChange({ target: { name, value: newValue } });
            };

            return (
              <Query
                query={GET_DATA}
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
                          <FormLabel>Ingangsdatum</FormLabel>
                          <FormValue>
                            <FormDate
                              onChange={e =>
                                handleDateChange("startingDate", e)
                              }
                              value={formikBag.values.startingDate}
                              helperText={
                                !isLocked &&
                                formikBag.touched.startingDate &&
                                formikBag.errors.startingDate
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.startingDate &&
                                !!formikBag.errors.startingDate
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Einddatum</FormLabel>
                          <FormValue>
                            <FormDate
                              onChange={e => handleDateChange("endingDate", e)}
                              value={formikBag.values.endingDate}
                              helperText={
                                !isLocked &&
                                formikBag.touched.endingDate &&
                                formikBag.errors.endingDate
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.endingDate &&
                                !!formikBag.errors.endingDate
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
                          <FormLabel>Opzegdatum</FormLabel>
                          <FormValue>
                            <FormDate
                              onChange={e =>
                                handleDateChange("terminationDate", e)
                              }
                              value={formikBag.values.terminationDate}
                              helperText={
                                !isLocked &&
                                formikBag.touched.terminationDate &&
                                formikBag.errors.terminationDate
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.terminationDate &&
                                !!formikBag.errors.terminationDate
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>
                        <FormWrapper>
                          <FormLabel>Laatste indexeringsdatum</FormLabel>
                          <FormValue>
                            <FormDate
                              onChange={e =>
                                handleDateChange("lastIndexDate", e)
                              }
                              value={formikBag.values.lastIndexDate}
                              helperText={
                                !isLocked &&
                                formikBag.touched.lastIndexDate &&
                                formikBag.errors.lastIndexDate
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.lastIndexDate &&
                                !!formikBag.errors.lastIndexDate
                              }
                              disabled={isLocked}
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

export default Data;
