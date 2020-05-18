import React from "react";
import _get from "lodash/get";
import _set from "lodash/set";
import _difference from "lodash/difference";
import _union from "lodash/union";
import _isEmpty from "lodash/isEmpty";

import client from "../../../dev/apollo";

import {
  ON_LOCK_MUTATION,
  ON_LOCK_SUB,
  ON_UNLOCK_MUTATION,
  ON_UNLOCK_SUB,
  ON_LOCK_EXPORT_SUB,
  ON_UNLOCK_EXPORT_SUB
} from "./queries";
import { USER_ID } from "./constants";

export type LockType = "LOCK" | "UNLOCK" | "LOCK_EXPORT" | "UNLOCK_EXPORT";
export type EntityType =
  | "workOrder"
  | "serviceOrder"
  | "serviceContract"
  | "planning";

interface IProps {
  entity: EntityType;
}

export default function withLockEntities({ entity }: IProps) {
  return WrappedComponent => {
    class WrappedClass extends React.PureComponent<any, any> {
      state = {
        serviceOrdersIds: [],
        serviceContractsIds: [],
        workOrdersIds: [],
        exportBlockedWOIds: [],
        lockedOrdersIds: [],
        unlockedOrdersIds: []
      };

      lockSubscription;
      unlockSubscription;
      lockExportSubscription;
      unlockExportSubscription;

      componentWillUnmount() {
        this.unsubscribe();
      }

      executeSubscriptions = () => {
        this.lockSubscription = this.runSubscription(
          ON_LOCK_SUB(entity),
          "LOCK"
        );

        this.unlockSubscription = this.runSubscription(
          ON_UNLOCK_SUB(entity),
          "UNLOCK"
        );

        if (entity === "workOrder") {
          this.lockExportSubscription = this.runSubscription(
            ON_LOCK_EXPORT_SUB,
            "LOCK_EXPORT"
          );

          this.unlockExportSubscription = this.runSubscription(
            ON_UNLOCK_EXPORT_SUB,
            "UNLOCK_EXPORT"
          );
        }
      };

      unsubscribe = () => {
        if (this.lockSubscription) {
          this.lockSubscription.unsubscribe();
        }

        if (this.unlockSubscription) {
          this.unlockSubscription.unsubscribe();
        }

        if (entity === "workOrder") {
          if (this.lockExportSubscription) {
            this.lockExportSubscription.unsubscribe();
          }

          if (this.unlockExportSubscription) {
            this.unlockExportSubscription.unsubscribe();
          }
        }
      };

      runSubscription = (query, type: LockType) => {
        return client.subscribe({ query }).subscribe({
          next: data => {
            const result = this.getSubscriptionResult(data, type);
            if (type === "LOCK_EXPORT" || type === "UNLOCK_EXPORT") {
              this.setState({ exportBlockedWOIds: result });
            } else if (entity === "planning") {
              this.setPlanningResult(result, type);
            } else {
              this.setState({ [`${entity}sIds`]: result });
            }
          },
          error: err => {
            console.log("subscription err", err);
          }
        });
      };

      getQuery = (type: LockType) =>
        type === "LOCK" ? ON_LOCK_MUTATION : ON_UNLOCK_MUTATION;

      getSubscriptionResult = (data: object, type: LockType): string[] => {
        const key = type.includes("EXPORT")
          ? "exportBlockedWOIds"
          : entity === "planning"
          ? "workOrdersIds"
          : `${entity}sIds`;

        const result = _get(data, `data.${entity}_${type}.data.${key}`, []);

        const ids = this.state[key];
        if (type.includes("UNLOCK")) {
          return _difference(ids, result);
        }
        return _union([...ids, ...result]);
      };

      setPlanningResult = (result: object, type: LockType) => {
        const key = type === "LOCK" ? "lockedOrdersIds" : "unlockedOrdersIds";
        const ids = _get(result, `data.${entity}_${type}.data.${key}`, []);
        const { lockedOrdersIds, unlockedOrdersIds } = this.state;
        if (type === "LOCK") {
          _set(lockedOrdersIds, _union(ids, lockedOrdersIds));
          _set(unlockedOrdersIds, _difference(ids, unlockedOrdersIds));
        } else {
          _set(lockedOrdersIds, _difference(ids, lockedOrdersIds));
          _set(unlockedOrdersIds, _union(ids, unlockedOrdersIds));
        }

        this.setState(() => ({
          lockedOrdersIds,
          unlockedOrdersIds
        }));
      };

      handleLockEntity = async (type: LockType, variables: object = {}) => {
        try {
          const mutation = this.getQuery(type);
          await client.mutate({ mutation, variables });
        } catch (err) {
          console.log("err", err);
        }
      };

      getDisabledRows = (data: any[]) => {
        const ids = this.state[`${entity}sIds`] || [];

        const disaledRows = data
          .filter(item => item.isLocked)
          .map(item => item.id);

        return _union(disaledRows, ids);
      };

      render() {
        const {
          exportBlockedWOIds,
          lockedOrdersIds,
          unlockedOrdersIds
        } = this.state;
        const props = {
          ...this.props,
          onLockEntity: this.handleLockEntity,
          getDisabledRows: this.getDisabledRows,
          executeSubscriptions: this.executeSubscriptions,
          userId: USER_ID,
          exportBlockedWOIds,
          lockedOrdersIds,
          unlockedOrdersIds
        };

        return <WrappedComponent {...props} />;
      }
    }

    return WrappedClass;
  };
}
