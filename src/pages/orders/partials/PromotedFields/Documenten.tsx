import React from "react";
import BaseLayout from "./BaseLayout";
import { PromotableField } from "./index";

const FIELDS: PromotableField[] = [
  {
    name: "documentenTotaal",
    label: "Documenten Totaal",
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
    title={"Documenten"}
  />
);
