import gql from "graphql-tag";

export const UPDATE_CLIENT_DATA = gql`
  mutation updateClientData(
    $where: ServiceContractWhereUniqueInput!
    $data: ServiceContractUpdateInput!
  ) {
    updateServiceContract(where: $where, data: $data) {
      id
    }
  }
`;

export const GET_CLIENT_DATA = gql`
  query getClientData($where: ServiceContractWhereUniqueInput!) {
    serviceContract(where: $where) {
      customerCode
      name
      name2
      address
      postcode
      city
    }
  }
`;

export const FETCH_CUSTOMERS = gql`
  query fetchCustomers(
    $where: CompanyWhereInput
    $skip: Int = 0,
    $perPage: Int = ${7},
    $orderBy: CompanyOrderByInput
  ) {
    companies(
      skip: $skip
      first: $perPage
      where: $where
      orderBy: $orderBy
    ) {
      id
      code
      phone
      email
      name
      customer
      address
    }
    companiesConnection(
      where: $where
    ) {
      aggregate {
        count
      }
    }
  }
`;
