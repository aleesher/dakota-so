import * as React from "react";
import { Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import {
  AddressCard,
  AddressHeader,
  AddressTitle,
  AddresAction,
  AddressContent,
  FormWrapper,
  FormLabel,
  FormInput,
  FormGroup,
  CalendarIcon,
  FormSmallInput,
  FormInputIcon,
  FormDate,
  FormSelect,
  FormSmallLabel,
  FormSmallWrapper
} from "../../styles";
import InputAdornment from "@material-ui/core/InputAdornment";

export const BillingForm = () => {
  return (
    <AddressCard>
      <AddressHeader>
        <AddressTitle>Factuurinformatie</AddressTitle>
        <AddresAction>Verberg</AddresAction>
      </AddressHeader>
      <Grid container>
        <Grid item={true} xs={6}>
          <AddressContent>
            <FormWrapper>
              <FormLabel>Opdrachtnummer</FormLabel>
              <FormInput placeholder="108472940" />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Opdracht datum</FormLabel>

              <FormDate
                onChange={() => console.log("click")}
                InputProps={{
                  className: "so-datepicker",
                  disableUnderline: true
                }}
                keyboardIcon={<CalendarIcon fontSize="small" />}
                format={"DD-MM-YYYY"}
              />
            </FormWrapper>

            <FormWrapper className="withIcon">
              <FormLabel>Aanneemsom</FormLabel>
              <FormInputIcon
                className="iconText"
                placeholder="2.500,00"
                InputProps={{
                  startAdornment: <div className="IconEuro">€</div>
                }}
              />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Service Type</FormLabel>
              <FormSelect
                classNamePrefix="type-select"
                options={[{ value: "Regie", label: "Regie" }]}
                value={{ value: "Regie", label: "Regie" }}
              />
            </FormWrapper>
          </AddressContent>
        </Grid>

        <Grid item={true} xs={6}>
          <AddressContent>
            <FormWrapper>
              <FormLabel>Garantie gegevens</FormLabel>
              <FormSelect
                classNamePrefix="type-select"
                options={[{ value: "ja", label: "ja" }]}
                value={{ value: "ja", label: "ja" }}
              />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Klant afspraak</FormLabel>
              <FormSelect
                classNamePrefix="type-select"
                options={[{ value: "ja", label: "ja" }]}
                value={{ value: "ja", label: "ja" }}
              />
            </FormWrapper>

            <FormWrapper className="withIcon">
              <FormLabel>Factuurbedrag</FormLabel>
              <FormInputIcon
                className="iconText"
                placeholder="2.500,00"
                InputProps={{
                  startAdornment: <div className="IconEuro">€</div>
                }}
              />
            </FormWrapper>

            <FormWrapper className="withIcon">
              <FormLabel>Mandaat totaal</FormLabel>
              <FormInputIcon
                className="iconText"
                placeholder="-"
                InputProps={{
                  startAdornment: <div className="IconEuro">€</div>
                }}
              />
            </FormWrapper>
          </AddressContent>
        </Grid>
      </Grid>
    </AddressCard>
  );
};
