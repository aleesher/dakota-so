import React from "react";
import _isEmpty from "lodash/isEmpty";
import _isObject from "lodash/isObject";
import _toString from "lodash/toString";
import _get from "lodash/get";

import { formatValidationErrorText } from "./helpers";

import { ErrorWrapper, ErrorMessage } from "./styles";

interface IProps {
  field: string | string[];
  hasError: boolean;
  text: string | string[];
}

const ValidationError = ({
  field = "Veld",
  hasError = false,
  text = ""
}: IProps) => {
  if (!text) {
    return <></>;
  }

  const message = _isObject(text) ? _get(text, "value") : text;

  if (!hasError) {
    return <></>;
  }

  return (
    <ErrorWrapper>
      <ErrorMessage>
        {!!text
          ? formatValidationErrorText(message, _toString(field))
          : `${field} is verplicht`}{" "}
      </ErrorMessage>
    </ErrorWrapper>
  );
};

export default ValidationError;
