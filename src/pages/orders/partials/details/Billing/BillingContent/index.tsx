import * as React from "react";

import Grid from "@material-ui/core/Grid";
import ReplyIcon from "@material-ui/icons/Reply";

import { ActionMenu, SortableTable } from "dakota-portal/dist/components";

import {
  TableButtonWrapper,
  Button,
  TableDropdown,
  ArrowUp
} from "./../../Tables/styles";
import { TABLE_COLUMNS } from "./../../Tables/constants";
import { TABLE_DATA } from "./../../Tables/mock";
import { TableText } from "../../../../../../components/SearchModal/styles";
import * as Styles from "../../styles";

export const BillingContent = () => {
  return (
    <Styles.BillingContentWrapper>
      <Styles.AddressCard>
        <Styles.AddressHeader>
          <Styles.AddressTitle>Factuuradres</Styles.AddressTitle>
          <Styles.AddresAction>Verberg</Styles.AddresAction>
        </Styles.AddressHeader>
        <Grid container>
          <Grid item={true} xs={6}>
            <Styles.AddressContent>
              <Styles.ListWrapper>
                <Styles.FormLabel>Factureren aan</Styles.FormLabel>
                <Styles.FormTexts color="blue">
                  Bedrijf XYZ B.V.
                </Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Factuurnaam</Styles.FormLabel>
                <Styles.FormTexts>Default 001</Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Factuurnaam 2</Styles.FormLabel>
                <Styles.FormTexts>Default 002</Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Factuur contactpersoon</Styles.FormLabel>
                <Styles.FormTexts color="blue">349052840</Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Contactpersoon naam</Styles.FormLabel>
                <Styles.FormTexts color="blue">Mevr. Janssen</Styles.FormTexts>
              </Styles.ListWrapper>
            </Styles.AddressContent>
          </Grid>

          <Grid item={true} xs={6}>
            <Styles.AddressContent>
              <Styles.ListWrapper>
                <Styles.FormLabel>Factuuradres</Styles.FormLabel>
                <Styles.FormTexts>Stephensonweg 2</Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Factuur postcode</Styles.FormLabel>
                <Styles.FormTexts>4207 HB</Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Factuur plaats</Styles.FormLabel>
                <Styles.FormTexts>Gorinchem</Styles.FormTexts>
              </Styles.ListWrapper>

              <Styles.ListWrapper>
                <Styles.FormLabel>Taalcode</Styles.FormLabel>
                <Styles.FormTexts>NL</Styles.FormTexts>
              </Styles.ListWrapper>
            </Styles.AddressContent>
          </Grid>
        </Grid>
      </Styles.AddressCard>

      <Styles.BillingTable>
        <div>
          <Styles.ActionCard>
            <TableText>Kostenregels</TableText>
            <Styles.PushRight>
              <ActionMenu
                alwaysVisible={true}
                alignMenu="left"
                items={[
                  {
                    title: "Document delen",
                    icon: <ReplyIcon />,
                    onClick: () => console.log("clicked View")
                  },
                  {
                    title: "Document verwijderen",
                    icon: <ReplyIcon />,
                    onClick: () => console.log("clicked Edit")
                  },
                  {
                    title: "downloaden",
                    icon: <ReplyIcon />,
                    onClick: () => console.log("clicked Delete")
                  }
                ]}
              />
            </Styles.PushRight>
          </Styles.ActionCard>
          <SortableTable
            isNotConfigurable
            isSelectable
            columns={TABLE_COLUMNS}
            dataSource={TABLE_DATA}
          />
          <TableButtonWrapper>
            <div className="drop">
              <Button>
                Met geselecteerd
                <ArrowUp />
              </Button>

              <TableDropdown
                options={[
                  { value: "Maak een keuze", label: "Maak een keuze" },
                  { value: "Maak een keuze", label: "Maak een keuze" }
                ]}
                value={{ value: "Maak een keuze", label: "Maak een keuze" }}
              />
            </div>
          </TableButtonWrapper>
        </div>

        <div>
          <Styles.ActionCard>
            <TableText>Factuurregels</TableText>
            <Styles.PushRight>
              <ActionMenu
                alwaysVisible={true}
                alignMenu="left"
                items={[
                  {
                    title: "Document delen",
                    icon: <ReplyIcon />,
                    onClick: () => console.log("clicked View")
                  },
                  {
                    title: "Document verwijderen",
                    icon: <ReplyIcon />,
                    onClick: () => console.log("clicked Edit")
                  },
                  {
                    title: "downloaden",
                    icon: <ReplyIcon />,
                    onClick: () => console.log("clicked Delete")
                  }
                ]}
              />
            </Styles.PushRight>
          </Styles.ActionCard>
          <SortableTable
            isNotConfigurable
            isSelectable
            columns={TABLE_COLUMNS}
            dataSource={TABLE_DATA}
          />
          <TableButtonWrapper>
            <div className="drop">
              <Button>
                Met geselecteerd
                <ArrowUp />
              </Button>

              <TableDropdown
                options={[
                  { value: "Maak een keuze", label: "Maak een keuze" },
                  { value: "Maak een keuze 1", label: "Maak een keuze 1" }
                ]}
                value={{ value: "Maak een keuze", label: "Maak een keuze" }}
              />
            </div>
          </TableButtonWrapper>
        </div>
      </Styles.BillingTable>
    </Styles.BillingContentWrapper>
  );
};
