import React from "react";
import { Query } from "@apollo/react-components";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import _get from "lodash/get";
import { Formik } from "formik";

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
  SubTitle
} from "../../../styles";
import {
  getCustomerData,
  UPDATE_CONTACT_PERSON_EVENT_NAME,
  updateContactPersonEvent
} from "./../../helpers";
import { GET_TERMINS_DATA, UPDATE_TERMINS_DATA } from "./queries";
import { STATUS_OPTIONS } from "./constants";
import { terminsValidationSchema } from "./validation";

interface IProps {
  isLocked: boolean;
  code: string;
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
}

const Termins = ({
  isLocked,
  code: scCode,
  refs,
  activeLinks,
  onClick
}: IProps) => {
  const client = useApolloClient();
  const [code, setCode] = React.useState(scCode);
  const [contactPersonCode, setContactPersonCode] = React.useState("");
  const [contactPersons, setContactPersons] = React.useState([]);

  const selectContactPerson = async newContactPersonCode => {
    setContactPersonCode(newContactPersonCode);

    await updateTerminsData({
      variables: {
        where: { code },
        data: { contactPersonCode: newContactPersonCode }
      }
    });

    window.dispatchEvent(updateContactPersonEvent);
  };

  const selectedContactPerson =
    contactPersons.length > 1
      ? contactPersons.find(
          contactPerson => contactPerson.code === contactPersonCode
        )
      : _get(contactPersons, "[0]", {});

  const loadData = async () => {
    try {
      const { contactPersonCode, contactPersons } = await getCustomerData({
        client,
        code
      });

      setContactPersonCode(contactPersonCode);
      setContactPersons(contactPersons);
    } catch (error) {
      setContactPersonCode("");
      setContactPersons([]);
    }
  };

  const [updateTerminsData] = useMutation(UPDATE_TERMINS_DATA, {
    onCompleted: loadData
  });

  React.useEffect(() => {
    const handleContactPersonUpdate = () => loadData();

    window.addEventListener(
      UPDATE_CONTACT_PERSON_EVENT_NAME,
      handleContactPersonUpdate
    );

    return () => {
      window.removeEventListener(
        UPDATE_CONTACT_PERSON_EVENT_NAME,
        handleContactPersonUpdate
      );
    };
  });

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <AccordionLink
      ref={refs.termins}
      label="Algemeen informatie"
      link="termins"
      isActive={activeLinks.includes("termins")}
      onClick={() => onClick("termins")}
    >
      <AccordionContainer>
        <Formik
          validationSchema={terminsValidationSchema}
          initialValues={{
            code: scCode,
            status: "",
            description: "",
            roofCity: "",
            roofAddress: "",
            workingHours: "",
            contactName: "",
            phoneNo: "",
            email: "",
            yourReference: "",
            outsourced: false,
            lastExecutedBy: "",
            contactPersonCode: ""
          }}
          initialTouched={{
            code: true,
            description: true,
            roofCity: true,
            yourReference: true
          }}
          initialErrors={{
            code: "code is a required field",
            description: "description is a required field",
            roofCity: "roofCity is a required field",
            yourReference: "yourReference is a required field"
          }}
          onSubmit={() => null}
        >
          {formikBag => {
            const handleUpdate = (field, value) => {
              if (isLocked) {
                return;
              }

              updateTerminsData({
                variables: {
                  where: { code: formikBag.values.code },
                  data: { [field]: value }
                },
                refetchQueries: [
                  {
                    query: GET_TERMINS_DATA,
                    variables: { where: { code: formikBag.values.code } }
                  }
                ]
              });
            };

            const handleQueryCompete = data => {
              const {
                code = "",
                status,
                description,
                roofCity,
                roofAddress,
                workingHours,
                contactName,
                phoneNo,
                email,
                yourReference,
                outsourced = false,
                lastExecutedBy,
                contactPersonCode
              } = _get(data, "serviceContract") || {};

              formikBag.setValues({
                code,
                status,
                description: description || "",
                roofCity: roofCity || "",
                roofAddress: roofAddress || "",
                workingHours: workingHours || 0,
                contactName: contactName || "",
                phoneNo: phoneNo || "",
                email: email || "",
                yourReference: yourReference || "",
                outsourced,
                lastExecutedBy: lastExecutedBy || "",
                contactPersonCode: contactPersonCode || ""
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
                query={GET_TERMINS_DATA}
                variables={{ where: { code: formikBag.values.code } }}
                onCompleted={handleQueryCompete}
                fetchPolicy="cache-and-network"
              >
                {() => (
                  <Grid container>
                    <Grid item={true} xs={6}>
                      <AddressContent>
                        <FormWrapper>
                          <FormLabel>Nummer</FormLabel>
                          <FormValue>
                            <FormInput
                              name="code"
                              onBlur={e => handleBlur("code", e.target.value)}
                              onChange={e => {
                                setCode(e.target.value);
                                formikBag.handleChange(e);
                              }}
                              placeholder="099576290"
                              value={formikBag.values.code}
                              helperText={
                                !isLocked &&
                                formikBag.touched.code &&
                                formikBag.errors.code
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.code &&
                                !!formikBag.errors.code
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Omschrijving</FormLabel>
                          <FormValue>
                            <FormInput
                              name="description"
                              onBlur={e =>
                                handleBlur("description", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              placeholder="Dit is een omschrijving"
                              value={formikBag.values.description}
                              helperText={
                                !isLocked &&
                                formikBag.touched.description &&
                                formikBag.errors.description
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.description &&
                                !!formikBag.errors.description
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Eerste sub-complex adres</FormLabel>
                          <FormValue>
                            <FormInput
                              name="roofCity"
                              onBlur={e =>
                                handleBlur("roofCity", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              placeholder="Stephensonstraat"
                              value={formikBag.values.roofCity}
                              helperText={
                                !isLocked &&
                                formikBag.touched.roofCity &&
                                formikBag.errors.roofCity
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.roofCity &&
                                !!formikBag.errors.roofCity
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Eerste sub-complex plaats</FormLabel>
                          <FormValue>
                            <FormInput
                              name="roofAddress"
                              onBlur={e =>
                                handleBlur("roofAddress", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              placeholder="Gorinchem"
                              value={formikBag.values.roofAddress}
                              helperText={
                                !isLocked &&
                                formikBag.touched.roofAddress &&
                                formikBag.errors.roofAddress
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.roofAddress &&
                                !!formikBag.errors.roofAddress
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Contract uren</FormLabel>
                          <FormValue>
                            <FormInput
                              name="workingHours"
                              onBlur={e =>
                                handleBlur("workingHours", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              placeholder="40"
                              value={formikBag.values.workingHours}
                              helperText={
                                !isLocked &&
                                formikBag.touched.workingHours &&
                                formikBag.errors.workingHours
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.workingHours &&
                                !!formikBag.errors.workingHours
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <SubTitle>Contractpersoon contract</SubTitle>

                        <FormWrapper>
                          <FormLabel>Naam</FormLabel>
                          {contactPersons.length < 2 ? (
                            <FormInput
                              name="contactPersonCode"
                              value={`${_get(
                                selectedContactPerson,
                                "firstName",
                                ""
                              )} ${_get(
                                selectedContactPerson,
                                "lastName",
                                ""
                              )}`}
                              onChange={e =>
                                setContactPersonCode(e.target.value)
                              }
                              onBlur={() =>
                                selectContactPerson(contactPersonCode)
                              }
                              disabled={isLocked}
                            />
                          ) : (
                            <FormSelect
                              options={contactPersons.map(
                                ({ firstName, lastName, code }) => ({
                                  label: `${firstName || ""} ${lastName || ""}`,
                                  value: code
                                })
                              )}
                              value={
                                !!selectedContactPerson
                                  ? {
                                      label: `${selectedContactPerson.firstName ||
                                        ""} ${selectedContactPerson.lastName ||
                                        ""}`
                                    }
                                  : undefined
                              }
                              onChange={({ value }) =>
                                selectContactPerson(value)
                              }
                              isDisabled={isLocked}
                            />
                          )}
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Telefoonnummer</FormLabel>
                          <FormInput
                            value={_get(selectedContactPerson, "phone", "")}
                            disabled
                          />
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>E-mailadres</FormLabel>
                          <FormInput
                            value={_get(selectedContactPerson, "email", "")}
                            disabled
                          />
                        </FormWrapper>
                      </AddressContent>
                    </Grid>

                    <Grid item={true} xs={6}>
                      <AddressContent>
                        <SubTitle>Overig</SubTitle>

                        <FormWrapper>
                          <FormLabel>Vertegenwoordiger</FormLabel>
                          <FormValue>
                            <FormInput
                              placeholder="Jan-Karel Hoorndijk"
                              disabled
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Status</FormLabel>
                          <FormValue>
                            <FormSelect
                              options={STATUS_OPTIONS}
                              value={STATUS_OPTIONS.find(
                                ({ value }) => value === formikBag.values.status
                              )}
                              onChange={({ value }) =>
                                formikBag.handleChange({
                                  target: {
                                    name: "status",
                                    value
                                  }
                                })
                              }
                              helperText={
                                !isLocked &&
                                formikBag.touched.status &&
                                formikBag.errors.status
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.status &&
                                !!formikBag.errors.status
                              }
                              isDisabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Uw referentie</FormLabel>
                          <FormValue>
                            <FormInput
                              name="yourReference"
                              onBlur={e =>
                                handleBlur("yourReference", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              placeholder="0634897198"
                              value={formikBag.values.yourReference}
                              helperText={
                                !isLocked &&
                                formikBag.touched.yourReference &&
                                formikBag.errors.yourReference
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.yourReference &&
                                !!formikBag.errors.yourReference
                              }
                              disabled={isLocked}
                            />
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Uitbesteed</FormLabel>
                          <FormValue>
                            <span style={{ marginRight: 5 }}>NEE</span>
                            <SwitchComponent
                              onChange={() => {
                                handleBlur(
                                  "outsourced",
                                  !formikBag.values.outsourced
                                );
                                formikBag.handleChange({
                                  target: {
                                    name: "outsourced",
                                    value: !formikBag.values.outsourced
                                  }
                                });
                              }}
                              checked={formikBag.values.outsourced}
                              disabled={isLocked}
                            />
                            <span style={{ marginLeft: 5 }}>JA</span>
                          </FormValue>
                        </FormWrapper>

                        <FormWrapper>
                          <FormLabel>Laatst doorgevoerd</FormLabel>
                          <FormValue>
                            <FormInput
                              name="lastExecutedBy"
                              onBlur={e =>
                                handleBlur("lastExecutedBy", e.target.value)
                              }
                              onChange={formikBag.handleChange}
                              placeholder="Marcel de Huis"
                              value={formikBag.values.lastExecutedBy}
                              helperText={
                                !isLocked &&
                                formikBag.touched.lastExecutedBy &&
                                formikBag.errors.lastExecutedBy
                              }
                              error={
                                !isLocked &&
                                formikBag.touched.lastExecutedBy &&
                                !!formikBag.errors.lastExecutedBy
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

export default Termins;
