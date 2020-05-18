import _get from "lodash/get";

import {
  GET_CUSTOMER_CODE,
  GET_CUSTOMER_DATA,
  GET_CONTACT_PERSONS
} from "./queries";

interface IProps {
  client: any;
  code: string;
}

export const UPDATE_CONTACT_PERSON_EVENT_NAME =
  "UPDATE_CONTACT_PERSON_EVENT_NAME";

export const updateContactPersonEvent = new Event(
  UPDATE_CONTACT_PERSON_EVENT_NAME
);

export const getCustomerData = async ({ client, code }: IProps) => {
  const { data } = await client.query({
    query: GET_CUSTOMER_CODE,
    variables: {
      where: { code }
    }
  });

  const { data: customerData } = await client.query({
    query: GET_CUSTOMER_DATA,
    variables: {
      where: { code: _get(data, "serviceContract.customerCode", "") }
    }
  });

  const { data: contactPersonsData } = await client.query({
    query: GET_CONTACT_PERSONS,
    variables: {
      where: { code_in: _get(data, "serviceContract.contactPersonCodes", []) }
    }
  });

  return {
    customerData: _get(customerData, "company", {}),
    contactPersonCode: _get(data, "serviceContract.contactPersonCode", ""),
    contactPersons: _get(contactPersonsData, "companyEmployees", [])
  };
};
