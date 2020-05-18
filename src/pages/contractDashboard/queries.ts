import gql from "graphql-tag";

export const FETCH_CONTRACTS_STATUSES = gql`
  query getServiceContracts($where: ServiceContractWhereInput!) {
    serviceContracts(where: $where, orderBy: orderDate_DESC) {
      orderDate
      status
    }
  }
`;

export const FETCH_APPOINTMENTS_STATUSES = gql`
  query getServiceAppointments($where: ServiceAppointmentWhereInput!) {
    serviceAppointments(where: $where, orderBy: orderDate_DESC) {
      orderDate
      status
    }
  }
`;

export const FETCH_CONTRACTS = gql`
  query serviceContracts {
    serviceContracts {
      id
    }
  }
`;

export const FETCH_SAVED_FILTER_GROUPS = gql`
  query savedFilters {
    currentUser {
      savedSCFilterGroups
    }
  }
`;
export const SAVE_FILTER_GROUPS = gql`
  mutation saveFilterGroups($filterGroups: Json) {
    saveSCFilterGroups(filterGroups: $filterGroups)
  }
`;
