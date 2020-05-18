import React from "react";
import _get from "lodash/get";
import _map from "lodash/map";
import Grid from "@material-ui/core/Grid";

import { SelectOptionType } from "dakota-portal/dist/components/SideFilterForm/Select";

import { CardItemTypes } from "../models";

import * as Styled from "../../home/styles";
import { CombinedInputInner, CombinedInputWrapper } from "../styles";

interface IProps {
  title: string | string[];
  onChange: (value: any) => void;
  onBlur: any;
  value?: SelectOptionType | string | number | object;
  name: string | string[];
  disabled?: boolean;
}

const CombinedInput = ({
  onChange,
  onBlur,
  value,
  title,
  disabled,
  name
}: IProps) => (
  <Grid xs={12} container>
    <Grid xs={4}>
      <Styled.ItemTitle paddingTop={22}>{_get(title, `[0]`)}</Styled.ItemTitle>
    </Grid>
    <CombinedInputWrapper>
      {_map(name, (n, i) => (
        <CombinedInputInner
          width={i === 0 ? 25 : 40}
          key={`${_get(value, n)}_${i}`}
        >
          {i !== 0 && (
            <Styled.ItemTitle paddingTop={22} marginRight={20}>
              {_get(title, `${[i]}`)}
            </Styled.ItemTitle>
          )}
          <Styled.StyledInput
            value={_get(value, n) || ""}
            onChange={onChange}
            className="styled-input"
            customType="root"
            disabled={disabled}
            name={n}
            onBlur={onBlur}
            type={CardItemTypes.combinedInput}
          />
        </CombinedInputInner>
      ))}
    </CombinedInputWrapper>
  </Grid>
);

export default CombinedInput;
