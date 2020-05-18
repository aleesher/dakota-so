import gql from "graphql-tag";

export const FETCH_SAVED_FILTER_GROUPS = gql`
  query savedFilters {
    currentUser {
      id
      savedFilterGroups
    }
  }
`;

export const SAVE_FILTER_GROUPS = gql`
  mutation saveFilterGroups($filterGroups: Json) {
    saveFilterGroups(filterGroups: $filterGroups)
  }
`;

export const FETCH_SERVICE_ORDERS_BY_CUSTOMERS = gql`
  query amountOfServiceOrdersByCustomers(
    $where: ServiceOrderWhereInput
    $limit: Int
  ) {
    amountOfServiceOrdersByCustomers(where: $where, limit: $limit)
  }
`;

export const FETCH_SERVICE_ORDERS_BY_EMPLOYEES = gql`
  query amountOfServiceOrdersByEmployees(
    $where: ServiceOrderWhereInput
    $limit: Int
  ) {
    amountOfServiceOrdersByEmployees(where: $where, limit: $limit)
  }
`;
