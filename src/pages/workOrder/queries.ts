import gql from "graphql-tag";

export const FETCH_WORK_ORDERS = gql`
  query fetchWorkOrders($soCode: String) {
    workOrders(where: { serviceOrder: { code: $soCode } }) {
      id
      code
      status
      starDate
      startTime
      durationTime
      expectedHours
      id
      code
      description
      resourceType
      resourceCode
      resourceCompanyName
      isMainResource
      endDate
      endTime
      durationTime
      planAhead
      isFirmPlanned
      hasSignature
      createdAt
      orderIsSent
      moment {
        status
        code
      }
      serviceOrder {
        description
      }
      isExportBlocked
      isLocked
    }
  }
`;

export const CREATE_WORK_ORDER = gql`
  mutation createWorkOrder($data: WorkOrderCreateInput!) {
    createWorkOrder(data: $data) {
      id
    }
  }
`;

export const UPDATE_WORK_ORDER = gql`
  mutation updateWorkOrder(
    $data: WorkOrderUpdateInput!
    $where: WorkOrderWhereUniqueInput!
  ) {
    updateWorkOrder(data: $data, where: $where) {
      id
    }
  }
`;

export const DELETE_WORK_ORDER = gql`
  mutation deleteWorkOrder($where: WorkOrderWhereUniqueInput!) {
    deleteWorkOrder(where: $where) {
      id
    }
  }
`;

export const FETCH_MOMENTS = gql`
  query moments($where: MomentWhereInput) {
    moments(where: $where) {
      id
    }
  }
`;
