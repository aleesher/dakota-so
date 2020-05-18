import React from "react";
import BaseLayout from "./BaseLayout";
import { PromotableField } from "./index";
const FIELDS: PromotableField[] = [
  {
    name: "opdrachtNummer",
    label: "Opdrachtnummer",
    onChange: () => null,
    checked: false
  },
  {
    name: "garantieGegevens",
    label: "Garantie gegevens",
    onChange: () => null,
    checked: false
  },
  {
    name: "opdrachtDatum",
    label: "Opdracht datum",
    onChange: () => null,
    checked: false
  },
  {
    name: "klantAfspraak",
    label: "Klant afspraak",
    onChange: () => null,
    checked: false
  },
  {
    name: "aanneemsom",
    label: "Aanneemsom",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurBedrag",
    label: "Factuurbedrag",
    onChange: () => null,
    checked: false
  },
  {
    name: "serviceType",
    label: "Service Type",
    onChange: () => null,
    checked: false
  },
  {
    name: "mandaatTotaal",
    label: "Mandaat totaal",
    onChange: () => null,
    checked: false
  },
  {
    name: "facturerenAan",
    label: "Factureren aan",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurAdres",
    label: "Factuuradres",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurNaam",
    label: "Factuurnaam",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurPostcode",
    label: "Factuur postcode",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurNaam2",
    label: "Factuurnaam 2",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurPlaats",
    label: "Factuur plaats",
    onChange: () => null,
    checked: false
  },
  {
    name: "factuurContactpersoon",
    label: "Factuur contactpersoon",
    onChange: () => null,
    checked: false
  },
  {
    name: "taalcode",
    label: "Taalcode",
    onChange: () => null,
    checked: false
  },
  {
    name: "contactpersoonNaam",
    label: "Contactpersoon naam",
    onChange: () => null,
    checked: false
  }
];
export default ({ promotedGroup, updatePromotedGroup }) => (
  <BaseLayout
    fields={FIELDS.map(promoted => ({
      ...promoted,
      checked: promotedGroup.includes(promoted.name),
      onChange: () => {
        if (
          !promotedGroup.includes(promoted.name) &&
          promotedGroup.length < 3
        ) {
          updatePromotedGroup([...promotedGroup, promoted.name]);
        } else {
          updatePromotedGroup([
            ...promotedGroup.filter(e => e !== promoted.name)
          ]);
        }
      }
    }))}
    title={"Beoordelen"}
  />
);
