import gql from "graphql-tag";

import { PER_PAGE } from "../../pages/home/constants";

export const FETCH_WORK_ORDERS = gql`
  query fetchWorkOrders(
    $skip: Int = 0,
    $perPage: Int = ${PER_PAGE},
    $where: WorkOrderWhereInput,
    $orderBy: WorkOrderOrderByInput
  ) {
    workOrders(
      skip: $skip
      first: $perPage
      where: $where
      orderBy: $orderBy
    ) {
      startTime
      starDate
      moment {
        status
        code
      }
      serviceOrder {
        status
      }
      updateByUser {
        id
        roofingCompanyEmployee {
					firstName
          lastName
        }
      }
    }
    workOrdersConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
