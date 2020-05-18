import gql from "graphql-tag";

export const SEARCH_BAG_NUMBER = gql`
  query bagNumbers($where: BagNumberWhereInput) {
    bagNumbers(where: $where) {
      id
      street
      postalCode
      houseNumber
      houseLetter
      houseNumberAddition
      city
    }
  }
`;

export const SEARCH_ADDRESS = gql`
  query addresses($where: AddressWhereInput) {
    addresses(where: $where, first: 1) {
      id
      code
      street
      postalCode
      houseNumber
      houseLetter
      city
      subComplex {
        code
        leakagesTrend
        warrantyDocument
        infoContactPerson {
          id
          code
          phone
          mobilePhone
          email
          city
          subscription
          firstContact {
            id
            firstName
            lastName
            code
          }
          company {
            id
            code
          }
        }
        complex {
          code
        }
      }
    }
  }
`;

export const SEARCH_SERVICE_ORDER = gql`
  query serviceOrders($where: ServiceOrderWhereInput) {
    serviceOrders(where: $where) {
      id
    }
  }
`;

export const LEAKAGES_PER_THREE_MONTHS = gql`
  query leakagesPerThreeMonths($where: ServiceOrderWhereInput) {
    leakagesPerThreeMonths(where: $where)
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

export const FETCH_SO_CUSTOMER = gql`
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

export const CREATE_SERVICE_ORDER = gql`
  mutation createServiceOrder($data: ServiceOrderCreateInput!) {
    createServiceOrder(data: $data) {
      id
      code
      globalId
      conceptId
      createdAt
    }
  }
`;

export const CREATE_ADDRESS = gql`
  mutation createAddress($data: AddressCreateInput!) {
    createAddress(data: $data) {
      code
    }
  }
`;

export const CREATE_REPORTER = gql`
  mutation createReporter($data: ReporterCreateInput!) {
    createReporter(data: $data) {
      code
    }
  }
`;

export const UPDATE_SERVICE_ORDER = gql`
  mutation updateServiceOrder(
    $data: ServiceOrderUpdateInput!
    $where: ServiceOrderWhereUniqueInput!
  ) {
    updateServiceOrder(data: $data, where: $where) {
      id
      code
      createdAt
    }
  }
`;

export const UPDATE_REPORTER = gql`
  mutation updateReporter(
    $data: ReporterUpdateInput!
    $where: ReporterWhereUniqueInput!
  ) {
    updateReporter(data: $data, where: $where) {
      id
    }
  }
`;

export const FETCH_ADDRESS = gql`
  query fetchAddress($where: AddressWhereUniqueInput!) {
    address(where: $where) {
      id
      code
      street
      postalCode
      houseNumber
      houseLetter
      city
      subComplex {
        code
        leakagesTrend
        warrantyDocument
        infoContactPerson {
          id
          code
          phone
          mobilePhone
          email
          city
          subscription
          firstContact {
            id
            firstName
            lastName
            code
          }
          company {
            id
            code
          }
        }
        complex {
          code
        }
      }
    }
  }
`;
