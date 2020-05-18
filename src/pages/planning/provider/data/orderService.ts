import { useApolloClient } from "@apollo/react-hooks";
import { useContext } from "react";
import _get from "lodash/get";
import { notification } from "../../../../helpers";
import {
  FETCH_ORDERS_OF_SELECTED_EMPLOYEES,
  FETCH_UNASSIGNED_ORDERS,
  UPDATE_SEVERAL_WORK_ORDERS,
  UPDATE_WORK_ORDER
} from "../../queries";
import { TUpdateOrderData, TWorkOrder } from "../../types";
import { PlanningStateContext } from "../context";

function extractOrders(response: any): TWorkOrder[] {
  return _get(response, "data.workOrders", []);
}

export interface IOrderService {
  fetchOrders: () => Promise<TWorkOrder[]>;
  fetchEmployeeOrders: () => Promise<TWorkOrder[]>;
  updateOrder: (code: string, orderData: TUpdateOrderData) => Promise<any>;
  updateSeveralOrders: (orders: TUpdateOrderData[]) => Promise<any>;
}

const useOrderService = (): IOrderService => {
  const client = useApolloClient();
  const { settings } = useContext(PlanningStateContext);
  const { startDate, endDate, employeeResourceCodes } = settings;

  const fetchOrders = () => {
    return client
      .query({
        query: FETCH_UNASSIGNED_ORDERS,
        variables: {
          startDate,
          endDate
        }
      })
      .then(extractOrders);
  };

  const fetchEmployeeOrders = () => {
    return client
      .query({
        query: FETCH_ORDERS_OF_SELECTED_EMPLOYEES,
        variables: {
          resourceCodes: employeeResourceCodes,
          startDate,
          endDate
        }
      })
      .then(extractOrders);
  };

  const updateOrder = (code: string, data: TUpdateOrderData) => {
    return client
      .mutate({
        mutation: UPDATE_WORK_ORDER,
        variables: {
          code,
          data
        }
      })
      .catch(() => {
        notification.addNotification({
          type: "danger",
          message: "Er is een fout opgetreden"
        });
      });
  };

  const updateSeveralOrders = (orders: TUpdateOrderData[]) => {
    return client
      .mutate({
        mutation: UPDATE_SEVERAL_WORK_ORDERS,
        variables: { orders }
      })
      .catch(() => {
        notification.addNotification({
          type: "danger",
          message: "Er is een fout opgetreden"
        });
      });
  };

  return {
    fetchOrders,
    fetchEmployeeOrders,
    updateOrder,
    updateSeveralOrders
  };
};

export default useOrderService;
