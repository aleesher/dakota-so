import React from "react";
import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";

import { IBagNumber } from "../models";

interface IProps {
  onSelectResult: (address: object) => void;
  results: IBagNumber[];
  values: object;
}

import {
  SearchResultWrapper,
  ResultTopArea,
  ResultBottomArea,
  SearchResult,
  LocationIcon,
  ResultText,
  SearchResultTitle
} from "../styles";

export default ({ onSelectResult, results = [], values }: IProps) => {
  if (_isEmpty(results)) {
    return <></>;
  }

  const formatAddress = ({ id, street, ...rest }: IBagNumber): string =>
    _reduce(
      rest,
      (acc, val, key) => {
        if (val) {
          return `${acc}, ${val}`;
        }

        return acc;
      },
      street
    );

  return (
    <SearchResultWrapper xs={10} item>
      <ResultTopArea>
        <SearchResultTitle>Resultaten</SearchResultTitle>
        <SearchResultTitle type="minor">
          Aantal resultaten: {results.length}
        </SearchResultTitle>
      </ResultTopArea>
      <ResultBottomArea>
        {results.map(address => (
          <SearchResult
            key={address.id}
            onClick={() => onSelectResult({ address, values })}
          >
            <LocationIcon />
            <ResultText>{formatAddress(address)}</ResultText>
          </SearchResult>
        ))}
      </ResultBottomArea>
    </SearchResultWrapper>
  );
};
