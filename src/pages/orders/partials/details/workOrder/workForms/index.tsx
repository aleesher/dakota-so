import * as React from "react";
import InputMask from "react-input-mask";

import Grid from "@material-ui/core/Grid";
import ReplyIcon from "@material-ui/icons/Reply";

import { ActionMenu, SortableTable } from "dakota-portal/dist/components";

import { GeneralButton } from "../../../../../../components";
import { TableText } from "../../../../../../components/SearchModal/styles";

import {
  TableButtonWrapper,
  Button,
  TableDropdown,
  ArrowUp
} from "./../../Tables/styles";
import { TABLE_COLUMNS } from "./../../Tables/constants";
import { TABLE_DATA } from "./../../Tables/mock";
import * as Styles from "../../styles";
import urls from "../../../../../../helpers/urls";

export const WorkForms = () => {
  return (
    <>
      <Styles.FormCard>
        <Grid container>
          <Grid item={true} xs={6}>
            <Styles.FormWrapper>
              <Styles.FormLabel>Werkorder nummer</Styles.FormLabel>
              <Styles.FormInput placeholder="WO184038" />
            </Styles.FormWrapper>

            <Styles.FormWrapperSelect>
              <Styles.FormLabel>Werknemer</Styles.FormLabel>
              <Styles.FormSelect
                classNamePrefix="type-select"
                options={[{ value: "Janssen", label: "Janssen" }]}
                value={{ value: "Janssen", label: "Janssen" }}
              />
            </Styles.FormWrapperSelect>

            <Styles.FormWrapperSelect>
              <Styles.FormLabel>Datum</Styles.FormLabel>
              <Styles.FormDate
                onChange={() => console.log("click")}
                InputProps={{
                  className: "so-datepicker",
                  disableUnderline: true
                }}
                keyboardIcon={<Styles.CalendarIcon fontSize="small" />}
                format={"DD-MM-YYYY"}
              />
            </Styles.FormWrapperSelect>

            <Styles.FormWrapperSelect>
              <Styles.FormLabel>Tijd</Styles.FormLabel>
              <Styles.FormTime>
                <InputMask mask="99:99" maskChar="" value={"14:00"}>
                  {() => (
                    <Styles.StyledInput
                      className="styled-input"
                      customType="root"
                      name={name}
                    />
                  )}
                </InputMask>
                <Styles.TimeIcon />
              </Styles.FormTime>
            </Styles.FormWrapperSelect>

            <Styles.FormWrapperSelect>
              <Styles.FormLabel>Doorlooptijd</Styles.FormLabel>
              <Styles.FormSelect
                classNamePrefix="type-select"
                options={[{ value: "2 uur", label: "2 uur" }]}
                value={{ value: "2 uur", label: "2 uur" }}
              />
            </Styles.FormWrapperSelect>

            <Styles.FormWrapperSelect>
              <Styles.FormLabel>Verwacht aantal uur</Styles.FormLabel>
              <Styles.FormSelect
                classNamePrefix="type-select"
                options={[{ value: "2 uur", label: "2 uur" }]}
                value={{ value: "2 uur", label: "2 uur" }}
              />
            </Styles.FormWrapperSelect>
          </Grid>
          <Grid item={true} xs={6}>
            <Styles.ServiceWrapper>
              <Styles.ServiceUnorderedList>
                <Styles.ServiceAnchor>
                  <Styles.ServiceList>Daken met garantie</Styles.ServiceList>
                  <Styles.ServiceSpan to={urls.EXTERNAL_DAKDAKA}>
                    Ja
                  </Styles.ServiceSpan>
                </Styles.ServiceAnchor>

                <Styles.ServiceAnchor>
                  <Styles.ServiceList>Complex</Styles.ServiceList>
                  <Styles.ServiceSpan to={urls.EXTERNAL_DAKDAKA}>
                    C501
                  </Styles.ServiceSpan>
                </Styles.ServiceAnchor>

                <Styles.ServiceAnchor>
                  <Styles.ServiceList>Dak toegang</Styles.ServiceList>
                  <Styles.ServiceSpan to={urls.EXTERNAL_ACTIVITIETEN}>
                    Details…
                  </Styles.ServiceSpan>
                </Styles.ServiceAnchor>
              </Styles.ServiceUnorderedList>
            </Styles.ServiceWrapper>
          </Grid>
        </Grid>
      </Styles.FormCard>

      <Grid container>
        <Styles.ButtonWrapper>
          <GeneralButton url="" title="Werkorder toevoegen" />
        </Styles.ButtonWrapper>
        <Styles.ButtonWrapper>
          <GeneralButton url="" title="Publiceren" />
        </Styles.ButtonWrapper>
      </Grid>

      <div>
        <Styles.ActionCard>
          <TableText className="workorder">Werkorders</TableText>
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
    </>
  );
};
