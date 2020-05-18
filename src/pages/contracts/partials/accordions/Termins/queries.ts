import gql from "graphql-tag";

export const GET_TERMINS_DATA = gql`
  query getTerminsData($where: ServiceContractWhereUniqueInput!) {
    serviceContract(where: $where) {
      code
      description
      roofCity
      roofAddress
      workingHours
      contactName
      phoneNo
      email
      status
      yourReference
      outsourced
      contactPersonCode
      lastExecutedBy
    }
  }
`;

export const UPDATE_TERMINS_DATA = gql`
  mutation updateTerminsData(
    $where: ServiceContractWhereUniqueInput!
    $data: ServiceContractUpdateInput!
  ) {
    updateServiceContract(where: $where, data: $data) {
      id
    }
  }
`;
