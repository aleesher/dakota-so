import * as React from "react";

import { IColumn } from "dakota-portal/dist/components/SortableTable";
import ImageViewer from "dakota-portal/dist/components/ImageViewer";

import tableHelper from "../../helpers/tableHelper";
import { INavItem } from "./../../components/Nav";
import {
  ItemTopic,
  RightItem,
  ItemData,
  DialpadIcon,
  RightPadding
} from "./partials/styles";

export const PER_PAGE = 20;
export const EXPORT_BUTTONS = {
  excel: {
    text: "EXPORT EXCEL"
  },
  pdf: {
    text: "DOWNLOAD PDF"
  }
};

export const NAV_ITEMS: INavItem[] = [
  {
    label: "Algemene informatie",
    link: "generalInfo"
  },
  {
    label: "Werkorders",
    link: "workOrders"
  },
  {
    label: "Documenten",
    link: "documents"
  },
  {
    label: "Beoordelen",
    link: "review"
  }
];

export const COLUMNS: IColumn[] = [
  {
    title: "Nr.",
    fixedWidth: 96,
    key: "id",
    visible: true
  },
  {
    title: "Omschrijving",
    key: "description",
    visible: true
  },
  tableHelper.createColumn.IsBlocked(),
  {
    title: "Klantnr.",
    key: "customerCode",
    visible: true
  },
  {
    title: "Klantnaam",
    key: "customerName",
    visible: true
  },
  {
    title: "Postcode",
    key: "postalCode",
    visible: true
  },
  {
    title: "Plaats",
    key: "city",
    visible: true
  },
  {
    title: "Ordersoort",
    key: "orderType",
    visible: false
  },
  {
    title: "Status",
    key: "status",
    visible: false
  },
  {
    title: "Prioriteit",
    key: "priority",
    visible: true
  },
  {
    title: "Orderdatum",
    key: "orderDate",
    visible: true
  },
  {
    title: "Startdatum",
    key: "startDate",
    visible: true
  },
  {
    title: "Einddatum",
    key: "endDate",
    visible: true
  },
  {
    title: "Werknemer",
    key: "employeeCode",
    visible: true
  },

  {
    title: "Aanneemsom",
    key: "orderAmount",
    visible: true
  },
  {
    title: "Te factureren bedrag",
    key: "invoicedPrice",
    visible: true
  }
];

export const ROOF_HISTORY_TABLE_COLUMNS = [
  {
    key: "dakbowdeel",
    label: "Dakbowdeel",
    render: (rowData: any) => {
      return <RightPadding>{rowData.dakbowdeel}</RightPadding>;
    }
  },
  {
    key: "oorzaak",
    label: "Oorzaak"
  },
  {
    key: "defect",
    label: "Defect",
    render: (rowData: any) => {
      return (
        <RightItem>
          {rowData.defect}
          <ImageViewer
            width={174}
            height={118}
            type={"icon"}
            src={
              "https://media.gettyimages.com/photos/raakspoort-council-offices-bolles-and-wilson-haarlem-netherlands-picture-id154465929"
            }
          />
        </RightItem>
      );
    }
  },
  {
    key: "maatregel",
    label: "Maatregel",
    render: (rowData: any) => {
      return (
        <RightItem>
          {rowData.maatregel}
          <ImageViewer
            width={174}
            height={118}
            type={"icon"}
            src={
              "https://media.gettyimages.com/photos/raakspoort-council-offices-bolles-and-wilson-haarlem-netherlands-picture-id154465929"
            }
          />
        </RightItem>
      );
    }
  },
  {
    key: "grootte",
    label: "Grootte",
    render: (rowData: any) => {
      return (
        <RightItem>
          {rowData.grootte} m<sup>2</sup>
        </RightItem>
      );
    }
  },
  {
    key: "verbruik",
    label: "Verbruik",
    render: (rowData: any) => {
      return (
        <RightItem>
          {rowData.verbruik}
          <DialpadIcon />
        </RightItem>
      );
    }
  },
  {
    key: "schadeLevel",
    label: "Schade level",
    render: (rowData: any) => {
      return (
        <ItemTopic
          warn={rowData.schadeLevel === "Fair"}
          danger={rowData.schadeLevel === "Kritisch"}
          good={rowData.schadeLevel === "Good"}
          tb
        >
          {rowData.schadeLevel}
        </ItemTopic>
      );
    }
  },
  {
    key: "herhaling",
    label: "Herhaling",
    render: (rowData: any) => {
      return (
        <ItemData
          warn={rowData.schadeLevel === "Fair"}
          danger={rowData.schadeLevel === "Kritisch"}
          good={rowData.schadeLevel === "Good"}
        >
          {rowData.herhaling}
        </ItemData>
      );
    }
  },
  {
    key: "verontreiniging",
    label: "Verontreiniging"
  }
];
