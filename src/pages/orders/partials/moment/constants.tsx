import * as React from "react";

import { IColumn } from "dakota-portal/dist/components/SortableTable";
import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";
import { Checkbox } from "dakota-portal/dist/components";

export const COLUMNS = (onChange): IColumn[] => [
  {
    key: "code",
    title: "Nr",
    visible: true,
    inputType: "text"
  },
  {
    key: "status",
    title: "Omschrijving",
    visible: true,
    inputType: "text"
  },
  {
    key: "hasSoStatusChange",
    title: "Serviceorder Status",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-hasSoStatusChange`}>
        <Checkbox
          checked={rowData.hasSoStatusChange}
          onChange={() =>
            onChange({
              hasSoStatusChange: !rowData.hasSoStatusChange,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  },
  {
    key: "hasWoPlanningStatusChange",
    title: "Werkorder Planning Status",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-hasWoPlanningStatusChange`}>
        <Checkbox
          checked={rowData.hasWoPlanningStatusChange}
          onChange={() =>
            onChange({
              hasWoPlanningStatusChange: !rowData.hasWoPlanningStatusChange,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  },
  {
    key: "hasScStatusChange",
    title: "Service Contract Status",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-hasScStatusChange`}>
        <Checkbox
          checked={rowData.hasScStatusChange}
          onChange={() =>
            onChange({
              hasScStatusChange: !rowData.hasScStatusChange,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  },
  {
    key: "isWOPlanningBlocked",
    title: "Blokkeer in Werkorder planning",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-isWOPlanningBlocked`}>
        <Checkbox
          checked={rowData.isWOPlanningBlocked}
          onChange={() =>
            onChange({
              isWOPlanningBlocked: !rowData.isWOPlanningBlocked,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  },
  {
    key: "isSCBlocked",
    title: "Blokkeer in Service Contract",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-isSCBlocked`}>
        <Checkbox
          checked={rowData.isSCBlocked}
          onChange={() =>
            onChange({
              isSCBlocked: !rowData.isSCBlocked,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  },
  {
    key: "isSOBlocked",
    title: "Blokkeer in Serviceorder",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-isSOBlocked`}>
        <Checkbox
          checked={rowData.isSOBlocked}
          onChange={() =>
            onChange({
              isSOBlocked: !rowData.isSOBlocked,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  },
  {
    key: "isExportBlocked",
    title: "Blokkeer Export naar buitendienst",
    visible: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-isExportBlocked`}>
        <Checkbox
          checked={rowData.isExportBlocked}
          onChange={() =>
            onChange({
              isExportBlocked: !rowData.isExportBlocked,
              id: rowData.id
            })
          }
        />
      </Td>
    ),
    inputType: "checkbox"
  }
];

export const FORM_VALUES = {
  type: "WO",
  code: "",
  navisionCode: "",
  status: "",
  hasSoStatusChange: true,
  hasWoPlanningStatusChange: true,
  hasScStatusChange: true,
  isWOPlanningBlocked: true,
  isSCBlocked: true,
  isSOBlocked: true,
  isExportBlocked: true
};

export const NUMBER_FIELDS = ["navisionCode", "code"];
