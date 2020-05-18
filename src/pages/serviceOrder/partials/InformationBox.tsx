import React from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _isBoolean from "lodash/isBoolean";

import { SERVICE_ORDER_INFO_FIELDS } from "../constants";

import {
  InformationBox,
  InformationBoxTitle,
  InformationBoxBody,
  InformatieRow,
  RowItem,
  RowLink
} from "../styles";

interface IProps {
  data?: object;
  informationBoxValues?: object;
}

export default ({ data, informationBoxValues }: IProps) => {
  const formatValue = (val: any) => {
    if (_isBoolean(val)) {
      return val ? "Ja" : "Nee";
    }

    return val;
  };

  const renderInfoItem = (title: string, val: string) => (
    <InformatieRow>
      <RowItem>{title}: </RowItem>
      <RowLink>{val}</RowLink>
    </InformatieRow>
  );

  const complexCode = _get(data, "subComplex.code");

  return !_isEmpty(informationBoxValues) ? (
    <InformationBox xs={10} item>
      <InformationBoxTitle>Informatiebox</InformationBoxTitle>
      <InformationBoxBody>
        {SERVICE_ORDER_INFO_FIELDS.map(({ title, key }) =>
          renderInfoItem(title, formatValue(informationBoxValues[key]))
        )}
        {renderInfoItem("Complex", complexCode)}
      </InformationBoxBody>
    </InformationBox>
  ) : (
    <></>
  );
};
