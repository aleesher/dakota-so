import React from "react";
import Grid from "@material-ui/core/Grid";
import * as Styled from "../styles";
import Checkbox from "dakota-portal/dist/components/Checkbox";
import { PromotableField } from "./index";

export default ({
  title,
  fields
}: {
  title: string;
  fields: PromotableField[];
}) => (
  <Grid
    container
    item
    direction="row"
    xs={12}
    alignItems="flex-start"
    justify="flex-start"
  >
    <Grid item xs={12}>
      <Styled.ItemTitle>{title}</Styled.ItemTitle>
    </Grid>
    <Styled.CheckBoxContainer
      container
      item
      xs={12}
      alignItems="flex-start"
      justify="flex-start"
    >
      {fields.map(field => (
        <Grid item xs={4}>
          <Styled.StyledFormControlLabel
            name={field.name}
            control={
              <Checkbox
                color="secondary"
                checked={field.checked}
                onChange={field.onChange}
              />
            }
            label={field.label}
            classes={{ label: "control-label" }}
          />
        </Grid>
      ))}
    </Styled.CheckBoxContainer>
  </Grid>
);
