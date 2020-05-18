import gql from "graphql-tag";
import { PER_PAGE } from "./constants";

export const FETCH_LEAKAGES = gql`
    query leakages(
        $skip: Int = 0,
        $perPage: Int = ${PER_PAGE},
        $where: ServiceOrderWhereInput,
        $orderBy: ServiceOrderOrderByInput
    ) {
        serviceOrders(
            skip: $skip
            first: $perPage
            where: $where
            orderBy: $orderBy
        ) {
            id
            code
            description
            customerCode
            customerName
            postalCode
            city
            orderType
            status
            priority
            orderDate
            startDate
            endDate
            employeeCode
            orderAmount
            invoicedPrice
            isLocked
            lockedBy
        }
        serviceOrdersConnection(
            where: $where
        ) {
            aggregate {
                count
            }
        }
    }
`;

export const FETCH_ALL_SERVICE_ORDERS = gql`
  query allServiceOrders(
    $skip: Int = 0,
    $perPage: Int = ${PER_PAGE},
    $where: ServiceOrderWhereInput,
    $orderBy: ServiceOrderOrderByInput
  ) {
    allServiceOrders(
      skip: $skip
      first: $perPage
      where: $where
      orderBy: $orderBy
    ) {
      id
      code
      description
      customerCode
      customerName
      postalCode
      city
      orderType
      status
      priority
      orderDate
      startDate
      endDate
      employeeCode
      orderAmount
      invoicedPrice
      isLocked
      lockedBy
    }
    serviceOrdersConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const FETCH_SO_PROMOTED_FIELDS = gql`
  query soPromotedFields {
    currentUser {
      soDetailsPromotedFields
    }
  }
`;

export const SAVE_SO_PROMOTED_FIELDS = gql`
  mutation saveSOPromotedFields($promoted: Json) {
    saveSoDetailsPromotedFields(promoted: $promoted)
  }
`;
export const FETCH_SERVICE_ORDER = gql`
  query fetchServiceOrder($where: ServiceOrderWhereUniqueInput!) {
    serviceOrder(where: $where) {
      id
      code
      orderType
      serviceType
      invoiceType
      invoicedPrice
      globalId
      conceptId
      description
      customerCode
      reference
      serviceLocationCode
      sourceType
      orderDate
      orderTime
      budgetHours
      expectedHours
      durationTime
      isFirmPlanned
      startDate
      startTime
      endDate
      endTime
      priority
      status
      updateDate
      updatedBy
      countryCode
      actualHours
      orderNumber
      reporter {
        code
        name
        surname
        phone
        email
        onBehalfOf
        type
        reference
        priority
        workText
        internalText
        adviceText
        description
        isTrackAndTraceActive
      }
    }
  }
`;
