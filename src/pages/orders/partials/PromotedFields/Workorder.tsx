import React from "react";
import BaseLayout from "./BaseLayout";
import { PromotableField } from "./index";

const FIELDS: PromotableField[] = [
  {
    name: "werkorderNummer",
    label: "Werkorder nummer",
    onChange: () => null,
    checked: false
  },
  {
    name: "dakenMetGarantie",
    label: "Daken met garantie",
    onChange: () => null,
    checked: false
  },
  {
    name: "complex",
    label: "Complex",
    onChange: () => null,
    checked: false
  },
  {
    name: "dakToegang",
    label: "Dak toegang",
    onChange: () => null,
    checked: false
  },
  {
    name: "werkNemer",
    label: "Werknemer",
    onChange: () => null,
    checked: false
  },
  {
    name: "datum",
    label: "Datum",
    onChange: () => null,
    checked: false
  },
  {
    name: "tijd",
    label: "Tijd",
    onChange: () => null,
    checked: false
  },
  {
    name: "doorloopTijd",
    label: "Doorlooptijd",
    onChange: () => null,
    checked: false
  },
  {
    name: "verwachtAantalUur",
    label: "Verwacht aantal uur",
    onChange: () => null,
    checked: false
  },
  {
    name: "werkordersTotaal",
    label: "Werkorders Totaal",
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
    title={"Workorders"}
  />
);
