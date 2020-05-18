import React from "react";

import Minus from "@material-ui/icons/Remove";
import Plus from "@material-ui/icons/Add";

import { Checkbox } from "dakota-portal/dist/components";
import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";

import { convertColumns } from "./../../components/ExpandableTable/utils";
import { Mark, HeaderCheckboxWrapper } from "./styles";
import TransformedCheckbox from "./transformed-checkbox";

export const SUBCOMPLEX_COLUMNS = onChange =>
  convertColumns([
    {
      key: "select",
      visible: true,
      render: ({ data, width, value, index }) => {
        if (data) {
          const isChecked = data.every(item => {
            if (item.select !== "checked") {
              return false;
            }

            if (!item._original.roofs.every(({ select }) => !!select)) {
              return false;
            }

            return this;
          });

          return (
            <HeaderCheckboxWrapper>
              <Checkbox
                checked={isChecked}
                onChange={() => onChange(null, "selecthead", !isChecked)}
              />
            </HeaderCheckboxWrapper>
          );
        }

        return (
          <td style={{ width: `${width}px` }}>
            <div
              style={{ display: "inline-block" }}
              onClick={e => e.stopPropagation()}
            >
              <TransformedCheckbox
                checked={value}
                onChange={newValue => onChange(index, "select", newValue)}
              />
            </div>
          </td>
        );
      }
    },
    {
      key: "code",
      title: "Code",
      visible: true
    },
    {
      key: "name",
      title: "Name",
      visible: true
    },
    {
      key: "mark",
      title: "",
      visible: true,
      render: ({ data, original }) => {
        if (data) {
          return <Mark />;
        }

        return (
          <Mark>
            {original.select === "notfullychecked" ? (
              <Minus fontSize="inherit" />
            ) : (
              <Plus fontSize="inherit" />
            )}
          </Mark>
        );
      }
    }
  ]);

export const ROOF_COLUMNS = onChange => [
  {
    key: "select",
    title: "",
    visible: true,
    render: (rowIndex, __, rowData) => {
      if (!rowData) {
        return <Td key={`${rowIndex}-select`} />;
      }

      return (
        <Td key={`${rowIndex}-select`}>
          <Checkbox
            checked={rowData.select}
            onChange={() => onChange(rowIndex, "select", !rowData.select)}
          />
        </Td>
      );
    }
  },
  {
    key: "code",
    title: "Code",
    visible: true
  },
  {
    key: "subcomplexCode",
    title: "Subcomplex Code",
    visible: true
  },
  {
    key: "name",
    title: "Name",
    visible: true
  },
  {
    key: "address",
    title: "Address",
    visible: true
  }
];
