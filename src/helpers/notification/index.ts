import { store } from "react-notifications-component";
import _isEmpty from "lodash/isEmpty";

import { DEFAULT_NOTIFICATION } from "./constants";

interface INotification {
  title?: string;
  message: string;
  duration?: number;
  type?: "success" | "danger" | "info" | "default" | "warning";
  container?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
}

export default {
  addNotification(config: INotification) {
    const notification = { ...DEFAULT_NOTIFICATION, ...config };
    if (notification.message) {
      store.addNotification(notification);
    }
  }
};
