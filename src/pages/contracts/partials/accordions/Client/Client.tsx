import React from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { Query } from "@apollo/react-components";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { Formik } from "formik";

import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

import { AccordionLink } from "dakota-portal/dist/components";

import { urls } from "./../../../../../helpers";
import SearchModal from "./../../../../../components/SearchModal";
import { ModalBox } from "./../../../../../components/SearchModal/styles";
import {
  AccordionContainer,
  AddressContent,
  FormWrapper,
  FormLabel,
  FormInput,
  FormValue,
  FormSelect,
  SubTitle
} from "../../../styles";
import {
  getCustomerData,
  UPDATE_CONTACT_PERSON_EVENT_NAME,
  updateContactPersonEvent
} from "../../helpers";
import {
  UPDATE_CLIENT_DATA,
  FETCH_CUSTOMERS,
  GET_CLIENT_DATA
} from "./queries";
import { CodeInputValue, SearchButton } from "./styles";
import { clientValidationSchema } from "./validation";

interface IProps {
  isLocked: boolean;
  code: string;
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
  history: any;
  match: any;
}

const Client = ({
  history,
  match,
  isLocked,
  code,
  refs,
  activeLinks,
  onClick
}: IProps) => {
  const client = useApolloClient();
  const [customerCode, setCustomerCode] = React.useState("");
  const [contactPersonCode, setContactPersonCode] = React.useState("");
  const [contactPersons, setContactPersons] = React.useState([]);
  const [customerData, setCustomerData] = React.useState({});
  const { url } = match;

  const loadData = async () => {
    try {
      const {
        customerData,
        contactPersonCode,
        contactPersons
      } = await getCustomerData({ client, code });

      setCustomerData(customerData || {});
      setCustomerCode(_get(customerData, "code", customerCode));
      setContactPersonCode(contactPersonCode);
      setContactPersons(contactPersons);
    } catch (error) {
      setCustomerData({});
      setCustomerCode("");
      setContactPersonCode("");
      setContactPersons([]);
    }
  };

  const [updateClientData] = useMutation(UPDATE_CLIENT_DATA, {
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

  const selectCustomer = ({ code: customerCode }) => {
    updateClientData({
      variables: {
        where: { code },
        data: { customerCode }
      }
    });
  };

  const selectContactPerson = async newContactPersonCode => {
    setContactPersonCode(newContactPersonCode);

    await updateClientData({
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

  return (
    <>
      <AccordionLink
        ref={refs.client}
        label="Klant informatie"
        link="client"
        isActive={activeLinks.includes("client")}
        onClick={() => onClick("client")}
      >
        <AccordionContainer>
          <Formik
            validationSchema={clientValidationSchema}
            initialValues={{
              customerCode: "",
              name: "",
              name2: "",
              address: "",
              postcode: "",
              city: ""
            }}
            onSubmit={() => null}
          >
            {formikBag => {
              const handleUpdate = (field, value) => {
                if (isLocked) {
                  return;
                }

                updateClientData({
                  variables: {
                    where: { code },
                    data: { [field]: value }
                  },
                  refetchQueries: [
                    {
                      query: GET_CLIENT_DATA,
                      variables: { where: { code } }
                    }
                  ]
                });
              };

              const handleBlur = (name, value) => {
                if (isLocked) {
                  return;
                }

                formikBag.handleBlur({ target: { name } });
                handleUpdate(name, value);
              };

              const handleQueryCompete = data => {
                const {
                  customerCode,
                  name,
                  name2,
                  address,
                  postcode,
                  city
                } = _get(data, "serviceContract", {});

                formikBag.setValues({
                  customerCode: customerCode || "",
                  name: name || "",
                  name2: name2 || "",
                  address: address || "",
                  postcode: postcode || "",
                  city: city || ""
                });
              };

              return (
                <Query
                  query={GET_CLIENT_DATA}
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
                            <FormLabel>Klantnummer</FormLabel>
                            <CodeInputValue>
                              <FormInput
                                placeholder="HE018"
                                name="customerCode"
                                onBlur={e =>
                                  handleBlur("customerCode", e.target.value)
                                }
                                onChange={formikBag.handleChange}
                                value={formikBag.values.customerCode}
                                helperText={
                                  !isLocked &&
                                  formikBag.touched.customerCode &&
                                  formikBag.errors.customerCode
                                }
                                error={
                                  !isLocked &&
                                  formikBag.touched.customerCode &&
                                  !!formikBag.errors.customerCode
                                }
                                disabled={isLocked}
                              />
                              <SearchButton
                                to={
                                  isLocked
                                    ? ""
                                    : urls.check(url + urls.SEARCH_CLIENT)
                                }
                              >
                                <SearchIcon fontSize="inherit" />
                              </SearchButton>
                            </CodeInputValue>
                          </FormWrapper>

                          <FormWrapper>
                            <FormLabel>Naam</FormLabel>
                            <FormValue>
                              <FormInput
                                placeholder="Woning Dak B.V."
                                name="name"
                                onBlur={e => handleBlur("name", e.target.value)}
                                onChange={formikBag.handleChange}
                                value={formikBag.values.name}
                                helperText={
                                  !isLocked &&
                                  formikBag.touched.name &&
                                  formikBag.errors.name
                                }
                                error={
                                  !isLocked &&
                                  formikBag.touched.name &&
                                  !!formikBag.errors.name
                                }
                                disabled={isLocked}
                              />
                            </FormValue>
                          </FormWrapper>

                          <FormWrapper>
                            <FormLabel>Naam 2</FormLabel>
                            <FormValue>
                              <FormInput
                                placeholder="..."
                                name="name2"
                                onBlur={e =>
                                  handleBlur("name2", e.target.value)
                                }
                                onChange={formikBag.handleChange}
                                value={formikBag.values.name2}
                                helperText={
                                  !isLocked &&
                                  formikBag.touched.name2 &&
                                  formikBag.errors.name2
                                }
                                error={
                                  !isLocked &&
                                  formikBag.touched.name2 &&
                                  !!formikBag.errors.name2
                                }
                                disabled={isLocked}
                              />
                            </FormValue>
                          </FormWrapper>

                          <FormWrapper>
                            <FormLabel>Adres</FormLabel>
                            <FormValue>
                              <FormInput
                                placeholder="Gorinchem"
                                name="address"
                                onBlur={e =>
                                  handleBlur("address", e.target.value)
                                }
                                onChange={formikBag.handleChange}
                                value={formikBag.values.address}
                                helperText={
                                  !isLocked &&
                                  formikBag.touched.address &&
                                  formikBag.errors.address
                                }
                                error={
                                  !isLocked &&
                                  formikBag.touched.address &&
                                  !!formikBag.errors.address
                                }
                                disabled={isLocked}
                              />
                            </FormValue>
                          </FormWrapper>

                          <FormWrapper>
                            <FormLabel>Postcode</FormLabel>
                            <FormValue>
                              <FormInput
                                placeholder="2650JJ"
                                name="postcode"
                                onBlur={e =>
                                  handleBlur("postcode", e.target.value)
                                }
                                onChange={formikBag.handleChange}
                                value={formikBag.values.postcode}
                                helperText={
                                  !isLocked &&
                                  formikBag.touched.postcode &&
                                  formikBag.errors.postcode
                                }
                                error={
                                  !isLocked &&
                                  formikBag.touched.postcode &&
                                  !!formikBag.errors.postcode
                                }
                                disabled={isLocked}
                              />
                            </FormValue>
                          </FormWrapper>

                          <FormWrapper>
                            <FormLabel>Plaats</FormLabel>
                            <FormValue>
                              <FormInput
                                placeholder="Gorinchem"
                                name="city"
                                onBlur={e => handleBlur("city", e.target.value)}
                                onChange={formikBag.handleChange}
                                value={formikBag.values.city}
                                helperText={
                                  !isLocked &&
                                  formikBag.touched.city &&
                                  formikBag.errors.city
                                }
                                error={
                                  !isLocked &&
                                  formikBag.touched.city &&
                                  !!formikBag.errors.city
                                }
                                disabled={isLocked}
                              />
                            </FormValue>
                          </FormWrapper>
                        </AddressContent>
                      </Grid>

                      <Grid item={true} xs={6}>
                        <AddressContent>
                          <SubTitle>Contractpersoon klant</SubTitle>

                          <FormWrapper>
                            <FormLabel>Naam</FormLabel>
                            {contactPersons.length < 2 ? (
                              <FormInput
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
                                    label: `${firstName || ""} ${lastName ||
                                      ""}`,
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
                    </Grid>
                  )}
                </Query>
              );
            }}
          </Formik>
        </AccordionContainer>
      </AccordionLink>
      <ModalBox
        component={SearchModal}
        path={urls.check(url + urls.SEARCH_CLIENT)}
        parentPath={url}
        outDelay={300}
        onBackdropClick={() => history.goBack()}
        props={{
          onSelect: data => {
            selectCustomer(data);
            history.goBack();
          },
          onClose: history.goBack,
          query: FETCH_CUSTOMERS,
          where: !_isEmpty(_get(customerData, "address.city"))
            ? {
                city: _get(customerData, "address.city")
              }
            : {}
        }}
      />
    </>
  );
};

export default Client;
