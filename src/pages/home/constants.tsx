import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";
import React from "react";
import _get from "lodash";

import Colors from "dakota-portal/dist/components/Colors";
import { createFilter } from "dakota-portal/dist/components/CustomFilter/FieldsFilter";
import { ORDER_STATUSES } from "../../constants";

import { TData, UnstyledLink } from "./styles";

export const PERIOD_OPTIONS = [
  {
    label: "Huidige contractperiode",
    value: "current"
  },
  {
    label: "Periode 2019",
    value: "2019"
  },
  {
    label: "Periode 2018",
    value: "2018"
  }
];

export const parseURL = data => {
  const q = {
    type: ""
  };
  data.replace(/([^=&]+)=([^&]*)/g, (_m, key, value) => {
    q[key] = (q[key] ? `${q[key]},` : "") + value;
  });
  return q;
};

export function makeUrlProp(customerCode, status) {
  return {
    comparisonType: "AND",
    filters: [
      createFilter({
        field: "customerCode",
        value: customerCode
      }),
      createFilter({
        field: "status",
        value: status
      })
    ]
  };
}

const getColor = (status: string) =>
  status.includes("Finished")
    ? Colors.limerick
    : status === "Cancelled"
    ? Colors.cinnabar
    : status === "In_Process"
    ? Colors.orangePeel
    : Colors.fiord;

export const CUSTOMER_COCKPIT_COLUMNS = [
  {
    key: "name",
    title: "",
    visible: true,
    fixedWidth: 100
  },
  ...ORDER_STATUSES.map(status => ({
    key: status.key,
    title: status.title,
    visible: true,
    render: (_, __, data: any = {}) => {
      const color = getColor(status.key);
      return data.name === "TOTAAL" ? (
        <TData key={status.key} color={color}>
          {data[status.key] || ""}
        </TData>
      ) : (
        <TData key={status.key} color={color}>
          <UnstyledLink
            to={
              "/so/list?filter=" +
              JSON.stringify(makeUrlProp(data.customerCode, status.key))
            }
          >
            {data[status.key] || ""}
          </UnstyledLink>
        </TData>
      );
    }
  }))
];

export const EMPLOYEE_COCKPIT_COLUMNS = [
  {
    key: "name",
    title: "",
    visible: true,
    fixedWidth: 100
  },
  ...ORDER_STATUSES.map((status, idx) => ({
    key: status.key,
    title: status.title,
    visible: true,
    render: (_, __, data: any) => {
      return (
        <TData key={status.key} color={getColor(status.key)}>
          {_get(data, status.key, "")}
        </TData>
      );
    }
  }))
];

export const COCKPIT_PAGE_SIZE = 6;
export const COCKPIT_LIMITS = [100, 200, 300, 400, 500];

const WRAP_OFFSET_HEIGHT = 800;
const ROW_HEIGHT = 60;

const height = document.body.offsetHeight;

export const PER_PAGE =
  10 + Math.round((height - WRAP_OFFSET_HEIGHT) / ROW_HEIGHT);

export const META = {
  activePage: 0,
  totalItems: 0,
  perPage: PER_PAGE
};
