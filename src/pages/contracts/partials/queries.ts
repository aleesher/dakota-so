import gql from "graphql-tag";

export const GET_CUSTOMER_CODE = gql`
  query getClientData($where: ServiceContractWhereUniqueInput!) {
    serviceContract(where: $where) {
      contactPersonCode
      contactPersonCodes
      customerCode
    }
  }
`;

export const GET_CUSTOMER_DATA = gql`
  query fetchCustomer($where: CompanyWhereUniqueInput!) {
    company(where: $where) {
      id
      code
      phone
      email
      name
      customer
      address
    }
  }
`;

export const GET_CONTACT_PERSONS = gql`
  query fetchContactPersons($where: CompanyEmployeeWhereInput!) {
    companyEmployees(where: $where) {
      code
      firstName
      lastName
      email
      phone
    }
  }
`;
