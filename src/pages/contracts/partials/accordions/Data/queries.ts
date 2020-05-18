import gql from "graphql-tag";

export const GET_DATA = gql`
  query getTerminsData($where: ServiceContractWhereUniqueInput!) {
    serviceContract(where: $where) {
      startingDate
      endingDate
      terminationDate
      lastIndexDate
    }
  }
`;

export const UPDATE_DATA = gql`
  mutation updateTerminsData(
    $where: ServiceContractWhereUniqueInput!
    $data: ServiceContractUpdateInput!
  ) {
    updateServiceContract(where: $where, data: $data) {
      id
    }
  }
`;
