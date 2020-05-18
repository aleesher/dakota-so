import gql from "graphql-tag";

export const GET_BILLING_DATA = gql`
  query getBillingData($where: ServiceContractWhereUniqueInput!) {
    serviceContract(where: $where) {
      invoiceType
      installmentType
      serviceIndexMethod
      installmentsBasedOnProgress
      maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate
      initialSalesAmount
      totalCost
      currencyCode
      billToCustomerNoContr
      billToNameContract
      billToAddressContract
      billToPostCodeContract
      billToCityContract
    }
  }
`;

export const UPDATE_BILLING_DATA = gql`
  mutation updateClientData(
    $where: ServiceContractWhereUniqueInput!
    $data: ServiceContractUpdateInput!
  ) {
    updateServiceContract(where: $where, data: $data) {
      id
    }
  }
`;
