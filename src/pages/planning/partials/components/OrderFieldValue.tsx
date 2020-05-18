import React, { memo } from "react";
import moment from "moment";
import { TWorkOrderFieldType } from "../../types";

interface IProps {
  type: TWorkOrderFieldType;
  value: any;
}

const OrderFieldValue: React.FC<IProps> = ({ type, value }) => {
  switch (type) {
    case "DateTime": {
      return moment.isMoment(value) && value.isValid()
        ? value.format("YYYY.MM.DD HH:mm")
        : "-";
    }
    case "Date": {
      return moment.isMoment(value) && value.isValid()
        ? value.format("YYYY.MM.DD")
        : "-";
    }
    case "Time": {
      return moment.isMoment(value) && value.isValid()
        ? value.format("HH:mm")
        : "-";
    }
  }

  return value === null || typeof value === "undefined" ? "-" : value;
};

export default memo(OrderFieldValue);
