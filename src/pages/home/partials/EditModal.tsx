import React from "react";

import Grid from "@material-ui/core/Grid";

import Checkbox from "dakota-portal/dist/components/Checkbox";

import SearchInput from "./SearchInput";
import { parseURL } from "../constants";

import * as Styled from "../styles";

interface IProps {
  onChange: (name: string, type: string) => void;
  checkedPropsState: any;
  history: any;
}

const EditModal = ({ onChange, checkedPropsState, history }: IProps) => {
  const parsed = parseURL(location.search.slice(1));
  const type = parsed.type;
  if (!type) {
    return null;
  }

  return (
    <Styled.ModalWrapper>
      <Styled.ModalHeader>
        <div>
          {" "}
          <Styled.ModelHeadTagline>Instellingen tabel</Styled.ModelHeadTagline>
          <Styled.ModelHeadTitle>
            Serviceorder per {parsed.type}
          </Styled.ModelHeadTitle>
        </div>
        <div>
          <Styled.CloseIcon onClick={history.goBack} />
        </div>
      </Styled.ModalHeader>
      <Styled.ModalBody container justify="space-between" alignItems="center">
        <Styled.BaseRow
          container
          item
          direction="row"
          xs={12}
          alignItems="flex-start"
          justify="flex-start"
        >
          <Grid item xs={3}>
            <Styled.ItemTitle>Toon kolommen</Styled.ItemTitle>
          </Grid>
          <Styled.CheckBoxContainer
            container
            item
            xs={9}
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="name"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].name}
                    onChange={() => {
                      onChange("name", type);
                    }}
                  />
                }
                label={"Naam"}
                classes={{ label: "control-label" }}
              />
            </Grid>

            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="Open"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].Open}
                    onChange={() => {
                      onChange("Open", type);
                    }}
                  />
                }
                label={"Open"}
                classes={{ label: "control-label" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="Process"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].In_Process}
                    onChange={() => onChange("In_Process", type)}
                  />
                }
                label={"Werkwijze"}
                classes={{ label: "control-label" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="Technical"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].Technical_Finished}
                    onChange={() => onChange("Technical_Finished", type)}
                  />
                }
                label={"Technisch"}
                classes={{ label: "control-label" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="administrative"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].Administrative_Finished}
                    onChange={() => onChange("Administrative_Finished", type)}
                  />
                }
                label={"Administratief"}
                classes={{ label: "control-label" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="finished"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].Finished}
                    onChange={() => onChange("Finished", type)}
                  />
                }
                label={"Afgewerkt"}
                classes={{ label: "control-label" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Styled.StyledFormControlLabel
                name="cancelled"
                control={
                  <Checkbox
                    color="secondary"
                    checked={checkedPropsState[type].Cancelled}
                    onChange={() => onChange("Cancelled", type)}
                  />
                }
                label={"Geannuleerd"}
                classes={{ label: "control-label" }}
              />
            </Grid>
          </Styled.CheckBoxContainer>
        </Styled.BaseRow>
        <Styled.BaseRow container item direction="row" xs={12}>
          <Grid item xs={3}>
            <Styled.ItemTitle>Type</Styled.ItemTitle>
          </Grid>
          <Grid item xs={9}>
            <Styled.StyledSelect
              options={[
                { value: "klant", label: "Klant" },
                { value: "medewerker", label: "Medewerker" }
              ]}
              classNamePrefix="type-select"
              width={150}
              height={60}
            />
          </Grid>
        </Styled.BaseRow>
        <Styled.BaseRow container item direction="row" xs={12}>
          <Grid xs={3} item>
            <Styled.ItemTitle>Toon rijen</Styled.ItemTitle>
          </Grid>

          <Styled.RowItem
            xs={9}
            container
            item
            alignItems="flex-start"
            justify="space-between"
          >
            <Styled.ARow
              container
              item
              direction="row"
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Styled.CPName item xs={6}>
                Pro Delta Real Estate Service BV
              </Styled.CPName>
              <Styled.CPAction item xs={2}>
                verbergen
              </Styled.CPAction>
            </Styled.ARow>
            <Styled.ARow
              container
              item
              direction="row"
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Styled.CPName item xs={6}>
                Pro Delta Real Estate Service BV
              </Styled.CPName>
              <Styled.CPAction item xs={2}>
                verbergen
              </Styled.CPAction>
            </Styled.ARow>
            <Styled.ARow
              container
              item
              direction="row"
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Styled.CPName item xs={6}>
                Pro Delta Real Estate Service BV
              </Styled.CPName>
              <Styled.CPAction item xs={2}>
                verbergen
              </Styled.CPAction>
            </Styled.ARow>
            <Styled.ARow
              container
              item
              direction="row"
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Styled.CPName item xs={6}>
                Pro Delta Real Estate Service BV
              </Styled.CPName>
              <Styled.CPAction item xs={2}>
                verbergen
              </Styled.CPAction>
            </Styled.ARow>
            <Styled.ARow
              container
              item
              direction="row"
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Styled.CPName item xs={6}>
                Pro Delta Real Estate Service BV
              </Styled.CPName>
              <Styled.CPAction item xs={2}>
                verbergen
              </Styled.CPAction>
            </Styled.ARow>

            <Styled.ARow
              container
              item
              direction="row"
              xs={12}
              justify="space-between"
              alignItems="center"
            >
              <Styled.CPName item xs={6}>
                Pro Delta Real Estate Service BV
              </Styled.CPName>
              <Styled.CPAction item xs={2}>
                verbergen
              </Styled.CPAction>
            </Styled.ARow>
            <Styled.ARow container item direction="row" xs={12}>
              <SearchInput
                onSearch={value => console.log(value)}
                placeholder="Zoeken"
              />
            </Styled.ARow>
          </Styled.RowItem>

          <Grid item xs={12}>
            <Styled.SaveButton>Opslaan</Styled.SaveButton>
          </Grid>
        </Styled.BaseRow>
      </Styled.ModalBody>
    </Styled.ModalWrapper>
  );
};
export default EditModal;
