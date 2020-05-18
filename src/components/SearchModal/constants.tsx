import React from "react";
import _get from "lodash/get";

import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";

import { TableButton } from "./styles";

export const DEFAULT_CLIENT = {
  name: "John Doe",
  code: "0000000000",
  phone: "0000000000",
  address: "Amsterdam"
};

export const tableColumns = onSelect => [
  {
    key: "code",
    title: "Klantnummer",
    visible: true,
    isSearchable: true,
    fixedWidth: 150
  },
  {
    key: "name",
    title: "Naam",
    visible: true,
    isSearchable: true
  },
  {
    key: "address",
    title: "Adres",
    visible: true,
    isSearchable: true
  },
  {
    key: "phone",
    title: "Telefoonnr",
    visible: true,
    isSearchable: true
  },
  {
    key: "selectButton",
    title: "",
    visible: true,
    nonConfigurable: true,
    render: (rowIndex, __, rowData) => (
      <Td key={`${rowIndex}-selectButton`}>
        <TableButton onClick={() => onSelect(rowData)}>Selecteer</TableButton>
      </Td>
    )
  }
];

const PER_PAGE = 7;

export const META = {
  activePage: 0,
  totalItems: 0,
  perPage: PER_PAGE
};
