import React from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";

export const tableColumns = [
  {
    key: "startTime",
    title: "Datum / tijd start of the logmoment",
    visible: true,
    render: (rowIndex, __, rowData) => {
      let date = `${_get(rowData, "starDate", "")}, `;
      date = `${date}${_get(rowData, "startTime", "")}`;
      if (date.trim().length === 1) {
        date = "-";
      }
      return <Td key={`${rowIndex}-logmoment-date`}>{date}</Td>;
    },
    isSortable: false,
    fixedWidth: 240
  },
  {
    key: "serviceOrder.status",
    title: "Service order status",
    visible: true,
    isSortable: false
  },
  {
    key: "moment.code",
    title: "Logmoment nummer",
    visible: true,
    isSortable: false
  },
  {
    key: "moment.status",
    title: "Logmoment omschrijving",
    visible: true,
    isSortable: false
  },
  {
    key: "user",
    title: "Gewijzigd door gebruiker",
    visible: true,
    isSortable: false,
    render: (rowIndex, _, rowData) => {
      const user = _get(rowData, "updateByUser.roofingCompanyEmployee");
      let name = _get(user, "firstName", "");
      name = `${name} ${_get(user, "lastName", "")}`;
      if (name.trim() === 1) {
        name = "-";
      }

      return <Td key={`${rowIndex}-logmoment-updated-user`}>{name}</Td>;
    }
  }
];
