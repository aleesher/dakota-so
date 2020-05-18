import React from "react";
import BaseLayout from "./BaseLayout";
import { PromotableField } from "./index";

const FIELDS: PromotableField[] = [
  {
    name: "serviceType",
    label: "Service Type",
    onChange: () => null,
    checked: false
  },
  {
    name: "soType",
    label: "Service Order Type",
    onChange: () => null,
    checked: false
  },
  {
    name: "globalID",
    label: "Global ID",
    onChange: () => null,
    checked: false
  },
  {
    name: "soNumber",
    label: "Service Order Number",
    onChange: () => null,
    checked: false
  },

  // card
  {
    name: "dakenMetGarantie",
    label: "Daken met garantie",
    onChange: () => null,
    checked: false
  },
  {
    name: "lekkagesLaatse3maanden",
    label: "Lekkages laatse 3 maanden",
    onChange: () => null,
    checked: false
  },
  {
    name: "lekkagesHistorie",
    label: "Lekkages historie",
    onChange: () => null,
    checked: false
  },
  {
    name: "subComplexValue",
    label: "Sub-complex Value",
    onChange: () => null,
    checked: false
  },

  {
    name: "dakenValue",
    label: "Daken Value",
    onChange: () => null,
    checked: false
  },
  {
    name: "activiteitenValue",
    label: "Activiteiten Value",
    onChange: () => null,
    checked: false
  },
  {
    name: "geregistreerdeUrenValue",
    label: "Geregistreerde uren Value",
    onChange: () => null,
    checked: false
  },
  // next card
  {
    name: "postcode",
    label: "Postcode",
    onChange: () => null,
    checked: false
  },
  {
    name: "Straatnaam",
    label: "straatnaam",
    onChange: () => null,
    checked: false
  },
  {
    name: "plaats",
    label: "Plaats",
    onChange: () => null,
    checked: false
  },
  {
    name: "huisnummer",
    label: "Huisnummer",
    onChange: () => null,
    checked: false
  },
  {
    name: "klantNaam",
    label: "Klant Naam",
    onChange: () => null,
    checked: false
  },
  {
    name: "klantNummer",
    label: "Klant Nummer",
    onChange: () => null,
    checked: false
  },
  {
    name: "klantAdres",
    label: "Klant Address",
    onChange: () => null,
    checked: false
  },
  {
    name: "klanttelefoonnummer",
    label: "Telefoonnummer",
    onChange: () => null,
    checked: false
  },
  {
    name: "klantFacturen aan",
    label: "Klant Facturen aan",
    onChange: () => null,
    checked: false
  },
  {
    name: "melder",
    label: "Melder",
    onChange: () => null,
    checked: false
  },
  {
    name: "melderNAmes",
    label: "MelderNAmes",
    onChange: () => null,
    checked: false
  },
  {
    name: "melderTelefoonnummer",
    label: "Melder Telefoonnummer",
    onChange: () => null,
    checked: false
  },
  {
    name: "melderType",
    label: "Melder Type",
    onChange: () => null,
    checked: false
  },
  {
    name: "melderEmailadres",
    label: "Melder E-mailadres",
    onChange: () => null,
    checked: false
  },
  {
    name: "melderPrioriteit",
    label: "Prioriteit",
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
    title={"Algemene informatie"}
  />
);
