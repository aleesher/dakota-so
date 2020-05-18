import * as React from "react";
import Block from "@material-ui/icons/Block";
import { Checkbox } from "@material-ui/core";
import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";
import Colors from "dakota-portal/dist/components/Colors";
import { YES_NO_UNKNOWN } from "../../constants";
import i18n from "../../helpers/i18";
import { IFormatting } from "dakota-portal/dist/components/SortableTable/IColumn";

const createColumn = {
  IsBlocked() {
    return {
      key: "isBlocked",
      title: i18n.t("Common.isBlocked"),
      render: (rowIndex, __, rowData) => {
        if (!rowData || !rowData.isBlocked) {
          return <Td key={`${rowIndex}-isBlocked`} />;
        }

        return (
          <Td key={`${rowIndex}-isBlocked`}>
            <Block nativeColor={Colors.cinnabar} />
          </Td>
        );
      },
      visible: true,
      renderExport: rowData => {
        if (!rowData || !rowData.isBlocked) {
          return "";
        }
        return i18n.t("Common.isBlocked");
      }
    };
  },

  Boolean(title, key) {
    return {
      key,
      title,
      render: (rowIndex, __, rowData) => {
        return (
          <Td key={`${rowIndex}-boolean`}>
            <Checkbox disabled checked={!!rowData[key]} />
          </Td>
        );
      },
      visible: true,
      type: "boolean" as IFormatting
    };
  },

  YesNoUnknown(title, key) {
    return {
      title,
      key,
      visible: true,
      render: (rowIndex, __, rowData) => {
        return (
          <Td key={`${rowIndex}-yesNoUnknown`}>
            {YES_NO_UNKNOWN[rowData[key]]}
          </Td>
        );
      },
      renderExport: rowData => {
        return YES_NO_UNKNOWN[rowData[key]];
      }
    };
  }
};

export default createColumn;
