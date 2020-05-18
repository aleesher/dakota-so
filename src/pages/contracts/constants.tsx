import React from "react";
import moment from "moment";

import ReplyIcon from "@material-ui/icons/Reply";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

import { IColumn } from "dakota-portal/dist/components/SortableTable";
import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";

import { IAppointment } from "../../components/SubcomplexAppointments/SubcomplexAppointments";

import i18n from "../../helpers/i18";
import { INavItem } from "../../components/Nav";

export const PER_PAGE = 20;

export const DOCUMENT_ACTIONS = [
  {
    title: "Document delen",
    icon: <ReplyIcon className="replyIcon" />,
    onClick: () => console.log("clicked View")
  },
  {
    title: "Document verwijderen",
    icon: <DeleteRoundedIcon className="replyIcon" />,
    onClick: () => console.log("clicked Edit")
  },
  {
    title: "Document downloaden",
    icon: <GetAppRoundedIcon className="replyIcon" />,
    onClick: () => console.log("clicked Delete")
  }
];

export const NAV_ITEMS: INavItem[] = [
  {
    title: "Algemeen",
    label: "Algemeen informatie",
    link: "termins"
  },
  {
    title: "Klant",
    label: "Klant informatie",
    link: "client"
  },
  {
    label: "Data",
    link: "data"
  },
  {
    label: "Afspraken",
    link: "appointments"
  },
  {
    label: "Facturering",
    link: "billing"
  },
  {
    label: "Termijnen",
    link: "terms"
  },
  {
    label: "Documenten",
    link: "document"
  }
];

export const YES_NO_UNKNOWN = {
  UNKNOWN: i18n.t("Common.unknown"),
  YES: i18n.t("Common.yes"),
  NO: i18n.t("Common.no")
};

export const EXPORT_BUTTONS = {
  excel: {
    text: i18n.t("Common.exportExcel")
  },
  pdf: {
    text: i18n.t("Common.downloadPdf")
  }
};

export const COLUMNS: IColumn[] = [
  {
    title: i18n.t("ServiceContracts.field.code"),
    fixedWidth: 96,
    key: "code",
    visible: true,
    nonConfigurable: true
  },
  {
    title: i18n.t("ServiceContracts.field.description"),
    key: "description",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.customerCode"),
    key: "customerCode",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.name"),
    key: "name",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.costCenterCode"),
    key: "costCenterCode",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.endingDate"),
    key: "endingDate",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.initialSalesAmount"),
    key: "initialSalesAmount",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.firstYearMaintenance"),
    key: "firstYearMaintenance",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.maintenanceMonth"),
    key: "maintenanceMonth",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.acknowledgedSO"),
    key: "acknowledgedSO",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.createdSO"),
    key: "createdSO",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.readySO"),
    key: "readySO",
    visible: true
  },

  {
    title: i18n.t("ServiceContracts.field.percentageReady"),
    key: "percentageReady",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.workingHours"),
    key: "workingHours",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.spendHours"),
    key: "spendHours",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.hoursSpentLastYear"),
    key: "hoursSpentLastYear",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.totalCost"),
    key: "totalCost",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.billedAmount"),
    key: "billedAmount",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.m2Dak"),
    key: "m2Dak",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.m2DakReady"),
    key: "m2DakReady",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.m2DakReadyPercent"),
    key: "m2DakReadyPercent",
    visible: true
  },
  {
    title: i18n.t("ServiceContracts.field.reportSent"),
    key: "outsourced",
    visible: true,
    render: (rowIndex, __, rowData) => {
      return (
        <Td key={`${rowIndex}-reportSent`}>
          {rowData.outsourced ? "Ja" : "Nee"}
        </Td>
      );
    },
    renderExport: rowData => {
      return rowData.outsourced ? "Ja" : "Nee";
    }
  }
];

export const APPOINTMENTS: IAppointment[] = [
  {
    orderDate: moment()
      .subtract(1, "month")
      .toDate(),
    orderType: "InspectionAndMaintenance",
    status: "Not_Planned",
    interval: 0
  },
  {
    orderDate: new Date(),
    orderType: "Maintenance",
    status: "Done",
    interval: 3
  },
  {
    orderDate: moment()
      .add(2, "month")
      .toDate(),
    orderType: "Inspection",
    status: "Scheduled",
    interval: 1
  }
];

export const SUBCOMPLEXES = [
  {
    id: `${Math.random()}`,
    code: `AB${String(Math.random()).slice(2, 4)}`,
    number: 1,
    address: "Wegstraat 1",
    postcode: "1234 AA",
    place: "Gorinchem",
    name: "Henry",
    phone: "0612345678",
    access: "-",
    data: APPOINTMENTS
  }
];
