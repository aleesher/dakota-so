import * as React from "react";
import _get from "lodash/get";
import _debounce from "lodash/debounce";

import Grid from "@material-ui/core/Grid";

import { SearchResults } from "../../../../../serviceOrder/partials";
import { SEARCH_BAG_NUMBER } from "../../../../../../components/withSOActions/queries";
import { parseSearchValue } from "../../../../../serviceOrder/helpers";
import { BAG_FIELDS } from "../../../../../serviceOrder/constants";
import { IBagNumber } from "../../../../../serviceOrder/models";
import useDebounce from "../../../../../../helpers/debounceHook";
import { generateHouseLetters } from "../../../../../../helpers";

import {
  AddressCard,
  AddressHeader,
  AddressTitle,
  AddresAction,
  AddressContent,
  FormWrapper,
  FormWrapperSelect,
  FormLabel,
  FormInput,
  FormGroup,
  FormSmallInput,
  FormSmallLabel,
  FormSmallWrapper,
  FormSelect,
  SearchResultWrapper
} from "../../styles";

export const AddressSection = ({
  apolloClient,
  setIsLoading,
  formikBag,
  onUpdateSO
}) => {
  const [bagNumbers, setBagNumbers] = React.useState<IBagNumber[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const debounceSearch = useDebounce(search, 800);
  const { values } = formikBag;

  React.useEffect(() => {
    if (debounceSearch) {
      handleSearchAddress(debounceSearch)
        .then(res => {
          const bagNumbers = _get(res, "data.bagNumbers") || [];
          setBagNumbers(bagNumbers);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          console.error(err.message);
        });
    } else {
      setBagNumbers([]);
    }
  }, [debounceSearch]);

  const handleSearchAddress = (addressSearch: string) => {
    setIsLoading(true);
    return apolloClient.query({
      query: SEARCH_BAG_NUMBER,
      variables: {
        where: {
          AND: parseSearchValue(addressSearch, BAG_FIELDS)
        }
      }
    });
  };

  const handleSelectAddress = async ({ address }) => {
    const newValues = { ...values, address };
    setSearch("");
    formikBag.setValues(newValues);
    await onUpdateSO(newValues);
  };

  return (
    <AddressCard>
      <AddressHeader>
        <AddressTitle>Adresgegevens</AddressTitle>
        <AddresAction>Verberg</AddresAction>
      </AddressHeader>
      <Grid container>
        <Grid item xs={6}>
          <AddressContent>
            <FormWrapper>
              <FormLabel>Zoeken</FormLabel>
              <FormInput
                onChange={e => setSearch(e.target.value)}
                placeholder="Zoeken adres"
              />
            </FormWrapper>
            <FormWrapper>
              <FormLabel>Postcode</FormLabel>
              <FormInput
                value={_get(values, "address.postalCode")}
                placeholder="1019 DD"
                disabled
              />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Huisnummer</FormLabel>
              <FormGroup>
                <FormSmallWrapper>
                  <FormSmallInput
                    value={_get(values, "address.houseNumber")}
                    placeholder="36"
                    disabled
                  />
                </FormSmallWrapper>

                <FormWrapperSelect>
                  <FormSmallLabel>Letter</FormSmallLabel>
                  <FormSelect
                    classNamePrefix="type-select"
                    options={generateHouseLetters()}
                    value={{
                      value: _get(values, "address.houseLetter"),
                      label: _get(values, "address.houseLetter")
                    }}
                    isDisabled
                  />
                </FormWrapperSelect>

                <FormSmallWrapper>
                  <FormSmallLabel>Toev.</FormSmallLabel>
                  <FormSmallInput
                    value={_get(values, "address.houseNumberAddition")}
                    disabled
                  />
                </FormSmallWrapper>
              </FormGroup>
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Straatnaam</FormLabel>
              <FormInput
                value={_get(values, "address.street")}
                placeholder="Veemarkt"
                disabled
              />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Plaats</FormLabel>
              <FormInput
                value={_get(values, "address.city")}
                placeholder="Amsterdam"
                disabled
              />
            </FormWrapper>
          </AddressContent>
        </Grid>

        {!!bagNumbers.length && (
          <Grid item xs={6}>
            <SearchResultWrapper>
              <SearchResults
                onSelectResult={handleSelectAddress}
                results={bagNumbers}
                values={values}
              />
            </SearchResultWrapper>
          </Grid>
        )}
      </Grid>
    </AddressCard>
  );
};
