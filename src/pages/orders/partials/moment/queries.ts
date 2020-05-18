import gql from "graphql-tag";

import { PER_PAGE } from "../../constants";

export const FETCH_MOMENTS = gql`
  query moments(
    $skip: Int = 0,
    $perPage: Int = ${PER_PAGE},
    $where: MomentWhereInput,
    $orderBy: MomentOrderByInput
  ) {
    moments(
      skip: $skip
      first: $perPage
      where: $where
      orderBy: $orderBy
    ) {
      id
      type
      code
      navisionCode
      status
      actionId
      hasSoStatusChange
      hasWoPlanningStatusChange
      hasScStatusChange
      isWOPlanningBlocked
      isSCBlocked
      isSOBlocked
      isExportBlocked
    }
    momentsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const CREATE_MOMENT = gql`
  mutation createMoment($data: MomentCreateInput!) {
    createMoment(data: $data) {
      id
      type
      code
      navisionCode
      status
      actionId
      hasSoStatusChange
      hasWoPlanningStatusChange
      hasScStatusChange
      isWOPlanningBlocked
      isSCBlocked
      isSOBlocked
      isExportBlocked
    }
  }
`;

export const UPDATE_MOMENT = gql`
  mutation updateMoment(
    $data: MomentUpdateInput!
    $where: MomentWhereUniqueInput!
  ) {
    updateMoment(data: $data, where: $where) {
      id
      type
      code
      navisionCode
      status
      actionId
      hasSoStatusChange
      hasWoPlanningStatusChange
      hasScStatusChange
      isWOPlanningBlocked
      isSCBlocked
      isSOBlocked
      isExportBlocked
    }
  }
`;

export const DELETE_MOMENT = gql`
  mutation deleteMoment($where: MomentWhereUniqueInput!) {
    deleteMoment(where: $where) {
      id
    }
  }
`;
