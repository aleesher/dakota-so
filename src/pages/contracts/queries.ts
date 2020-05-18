import gql from "graphql-tag";
import { PER_PAGE } from "./constants";

export const FETCH_CONTRACTS = gql`
    query contracts(
        $skip: Int = 0,
        $perPage: Int = ${PER_PAGE},
        $where: ServiceContractWhereInput,
        $orderBy: ServiceContractOrderByInput
    ) {
        serviceContracts(
            skip: $skip
            first: $perPage
            where: $where
            orderBy: $orderBy
        ) {
            id
            code
            description
            address
            roofAddress
            roofCity
            customerCode
            name
            name2
            city
            billedAmount
            totalCost
            endingDate
            firstYearMaintenance
            maintenanceMonth
            readySO
            openedSO
            createdSO
            acknowledgedSO
            percentageReady
            workingHours
            spendHours
            hoursSpentLastYear
            totalCost
            m2Dak
            m2DakReady
            m2DakReadyPercent
            outsourced
            initialSalesAmount
            isLocked
            lockedBy
        }
        serviceContractsConnection(
            where: $where
        ) {
            aggregate {
                count
            }
        }

    }
`;

export const GET_CONTACT_DATA = gql`
  query getContactCode($where: ServiceContractWhereUniqueInput!) {
    serviceContract(where: $where) {
      code
      isLocked
      lockedBy
      address
      roofAddress
      roofCity
      name
      name2
      city
      billedAmount
      totalCost
      endingDate
      firstYearMaintenance
      maintenanceMonth
      readySO
      openedSO
      createdSO
      acknowledgedSO
      percentageReady
      workingHours
      spendHours
      hoursSpentLastYear
      totalCost
      m2Dak
      m2DakReady
      m2DakReadyPercent
      outsourced
      initialSalesAmount
      isLocked
    }
  }
`;

export const CREATE_CONTRACT = gql`
  mutation createServiceContract($data: ServiceContractCreateInput!) {
    createServiceContract(data: $data) {
      id
      code
    }
  }
`;

export const DUBLICATE_CONTRACT = gql`
  mutation createServiceContract($data: ServiceContractCreateInput!) {
    createServiceContract(data: $data) {
      id
      code
      address
      roofAddress
      roofCity
      customerCode
      name
      name2
      city
      billedAmount
      totalCost
      endingDate
      firstYearMaintenance
      maintenanceMonth
      readySO
      openedSO
      createdSO
      acknowledgedSO
      percentageReady
      workingHours
      spendHours
      hoursSpentLastYear
      totalCost
      m2Dak
      m2DakReady
      m2DakReadyPercent
      outsourced
      initialSalesAmount
      isLocked
      lockedBy
    }
  }
`;

export const CREATE_CO_INDEXING = gql`
  mutation createServiceContractIndex($data: ServiceContractIndexCreateInput!) {
    createServiceContractIndex(data: $data) {
      id
      indexMethod
      indexTime
      indexedAmount
      indexFigure
      contractNumber
      contractAmount
    }
  }
`;

export const FETCH_ALL_CONTRACTS = gql`
  query allContracts(
    $skip: Int = 0,
    $perPage: Int = ${PER_PAGE},
    $where: ServiceContractWhereInput,
    $orderBy: ServiceContractOrderByInput
  ) {
    allServiceContracts(
      skip: $skip
      first: $perPage
      where: $where
      orderBy: $orderBy
    ) {
      id
      code
      description
      address
      roofAddress
      roofCity
      customerCode
      name
      name2
      city
      billedAmount
      totalCost
      endingDate
      firstYearMaintenance
      maintenanceMonth
      readySO
      openedSO
      createdSO
      acknowledgedSO
      percentageReady
      workingHours
      spendHours
      hoursSpentLastYear
      totalCost
      m2Dak
      m2DakReady
      m2DakReadyPercent
      outsourced
      initialSalesAmount
      isLocked
      lockedBy
    }
    serviceContractsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
