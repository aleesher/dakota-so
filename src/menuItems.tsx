import React from "react";
import { MenuItem } from "dakota-portal/dist/components/AppMenu";
import { urls } from "./helpers";
import { MenuLink } from "./styles/global";

const menuItems: MenuItem[] = [
  {
    label: "Dashboard Orders",
    url: "/so",
    notificationKey: "dashboard",
    exact: true
  },
  {
    label: "Serviceorders",
    url: "/so/list",
    notificationKey: "serviceorders",
    subs: [
      {
        label: "Lekkages",
        url: "/so/list?type=LEKKAGE",
        notificationKey: "so-leakages"
      },
      {
        label: "Regieklus",
        url: "/so/list?type=REGIEKLUS",
        notificationKey: "so-regiklus"
      },
      {
        label: "Correctief",
        url: "/so/list?type=CORRECTIEF",
        notificationKey: "so-correctief"
      },
      {
        label: "Correctief onderhoud",
        url: "/so/list?type=CORRECTIVE_ONDERHOUD",
        notificationKey: "so-correctief-onderhoud"
      },
      {
        label: "Onderhoud en inspectie",
        url: "/so/list?type=IO",
        notificationKey: "so-onderhoud-en-inspectie"
      },
      {
        label: "Onderhoud",
        url: "/so/list?type=ONDERHOUD",
        notificationKey: "so-onderhoud"
      },
      {
        label: "Nulmeting",
        url: "/so/list?type=NULMETING",
        notificationKey: "so-nulmeting"
      },
      {
        label: "Inspectie",
        url: "/so/list?type=INSPECTIE",
        notificationKey: "so-inspectie"
      },
      {
        label: "Voorspeldo",
        url: "/so/list?type=VOORSPELDO",
        notificationKey: "so-voorspeldo"
      },
      {
        label: "Valbeleili",
        url: "/so/list?type=VALBEVEILI",
        notificationKey: "so-valbeleili"
      },
      {
        label: "Contract",
        url: "/so/list?type=CONTRACT",
        notificationKey: "so-contract"
      }
    ]
  },
  {
    label: "Service Contracts",
    url: urls.SC_HOME,
    notificationKey: "sc-dash",
    subs: [
      {
        label: "Dashboard Contracten",
        url: urls.SC_HOME,
        notificationKey: "sc-home"
      },
      {
        label: "Service Contracten",
        url: urls.SC_LIST,
        notificationKey: "contracts"
      }
    ]
  },
  {
    label: "",
    url: "",
    notificationKey: "so-planning",
    render: () => (
      <MenuLink onClick={() => window.open(urls.PLANNING)}>
        Werkorder Planning
      </MenuLink>
    )
  }
];

export default menuItems;
