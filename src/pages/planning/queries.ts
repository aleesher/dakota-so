import gql from "graphql-tag";

const FRAGMENTS = {
  EMPLOYEE: gql`
    fragment EmployeeFields on RoofingCompanyEmployee {
      code
      resource
      firstName
      lastName
      costCenterCode
    }
  `,
  WORK_ORDER: gql`
    fragment WorkOrderFields on WorkOrder {
      id
      code
      description
      soCode
      soStatus
      soOrderType
      soEmployeeCode
      soPriority
      starDate
      startTime
      endDate
      endTime
      isLocked
    }
  `
};

export const FETCH_PLANNING_PAGE_SETTINGS = gql`
  query planningPageSettings {
    currentUser {
      planningPageSettings
    }
  }
`;

export const SAVE_PLANNING_PAGE_SETTINGS = gql`
  mutation savePlanningPageSettings($settings: Json) {
    savePlanningPageSettings(settings: $settings)
  }
`;

export const FETCH_SELECTED_EMPLOYEES = gql`
  query fetchSelectedEmployees($codes: [String!]!) {
    roofingCompanyEmployees(where: { code_in: $codes }) {
      ...EmployeeFields
      photo
    }
  }
  ${FRAGMENTS.EMPLOYEE}
`;

export const FETCH_ALL_EMPLOYEES = gql`
  query fetchAllEmployees {
    roofingCompanyEmployees(where: { resource_not: null }) {
      ...EmployeeFields
    }
  }
  ${FRAGMENTS.EMPLOYEE}
`;

// fixme: startDate and endDate should have Date type
export const FETCH_ORDERS_OF_SELECTED_EMPLOYEES = gql`
  query fetchOrdersOfSelectedEmployees(
    $resourceCodes: [String!]!
    $startDate: String!
    $endDate: String!
  ) {
    workOrders(
      where: {
        AND: [
          { soEmployeeCode_in: $resourceCodes }
          { starDate_gte: $startDate }
          { endDate_lte: $endDate }
          { startTime_not: null }
          { endTime_not: null }
        ]
      }
    ) {
      ...WorkOrderFields
    }
  }
  ${FRAGMENTS.WORK_ORDER}
`;

export const FETCH_UNASSIGNED_ORDERS = gql`
  query fetchUnassignedOrders($startDate: String!, $endDate: String!) {
    workOrders(
      where: {
        OR: [
          # get unassigned work orders
          {
            AND: [
              { soStatus: "Open" }
              { soEmployeeCode: null }
              {
                OR: [
                  { startTime: null }
                  { starDate: null }
                  { endTime: null }
                  { endDate: null }
                  { starDate_gte: $startDate }
                  { endDate_lte: $endDate }
                ]
              }
            ]
          }
          # get assigned orders which don't have start or end times
          {
            AND: [
              { soStatus: "Open" }
              { soEmployeeCode_not: null }
              {
                OR: [
                  { startTime: null }
                  { starDate: null }
                  { endTime: null }
                  { endDate: null }
                ]
              }
            ]
          }
        ]
      }
    ) {
      ...WorkOrderFields
    }
  }
  ${FRAGMENTS.WORK_ORDER}
`;

export const UPDATE_WORK_ORDER = gql`
  mutation updateWorkOrder($code: String!, $data: WorkOrderUpdateInput!) {
    updateWorkOrder(where: { code: $code }, data: $data) {
      id
    }
  }
`;

export const UPDATE_SEVERAL_WORK_ORDERS = gql`
  mutation updateSeveralWorkOrders($orders: [WorkOrderUpdateInput!]!) {
    updateSeveralWorkOrders(orders: $orders)
  }
`;

export const GET_WORK_ORDER_FIELDS = gql`
  query getWorkOrderFields {
    __type(name: "WorkOrder") {
      name
      fields(includeDeprecated: false) {
        name
        type {
          kind
          name
          ofType {
            kind
            name
          }
        }
      }
    }
  }
`;
