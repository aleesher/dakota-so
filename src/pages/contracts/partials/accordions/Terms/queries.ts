import gql from "graphql-tag";

export const GET_TERMS_DATA = gql`
  query getTermsData($where: ServiceContractTermWhereInput!) {
    serviceContractTerms(where: $where) {
      id
      invoiceFrom
      nextInvoicingDate
      progressPercent
      description
      invoicePeriod
      invoiceDirectly
    }
  }
`;

export const UPDATE_TERMS_DATA = gql`
  mutation updateTermsData(
    $where: ServiceContractTermWhereUniqueInput!
    $data: ServiceContractTermUpdateInput!
  ) {
    updateServiceContractTerm(where: $where, data: $data) {
      id
    }
  }
`;

export const CREATE_TERM = gql`
  mutation createTerm($data: ServiceContractTermCreateInput!) {
    createServiceContractTerm(data: $data) {
      id
      invoiceFrom
      nextInvoicingDate
      progressPercent
      description
      invoicePeriod
      invoiceDirectly
    }
  }
`;

export const DELETE_TERM = gql`
  mutation deleteTerm($where: ServiceContractTermWhereUniqueInput!) {
    deleteServiceContractTerm(where: $where) {
      id
    }
  }
`;
