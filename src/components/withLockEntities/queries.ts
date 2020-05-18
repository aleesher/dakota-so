import gql from "graphql-tag";

export const ON_LOCK_SUB = (entityName: string) => gql`
    subscription onLockSub {
        ${entityName}_LOCK {
          key 
          data {
              serviceContractsIds
              serviceOrdersIds
              workOrdersIds
          }
        }
    }
`;

export const ON_UNLOCK_SUB = (entityName: string) => gql`
    subscription onUnlockSub {
      ${entityName}_UNLOCK {
          key 
          data {
              serviceContractsIds
              serviceOrdersIds
              workOrdersIds
          }
        }
    }
`;

export const ON_LOCK_EXPORT_SUB = gql`
  subscription onLockExportSub {
    workOrder_LOCK_EXPORT {
      key
      data {
        workOrdersIds
        exportBlockedWOIds
      }
    }
  }
`;

export const ON_UNLOCK_EXPORT_SUB = gql`
  subscription onUnlockExportSub {
    workOrder_UNLOCK_EXPORT {
      key
      data {
        workOrdersIds
        exportBlockedWOIds
      }
    }
  }
`;

export const ON_LOCK_MUTATION = gql`
  mutation lockEntity(
    $data: LockedEntityInput!
    $where: LockedEntityWhereInput!
  ) {
    lockEntityRecord(data: $data, where: $where) {
      id
      isLocked
      lockedBy
    }
  }
`;

export const ON_UNLOCK_MUTATION = gql`
  mutation unlockEntity(
    $data: LockedEntityInput!
    $where: LockedEntityWhereInput!
  ) {
    unlockEntityRecord(data: $data, where: $where) {
      id
      isLocked
      lockedBy
    }
  }
`;
