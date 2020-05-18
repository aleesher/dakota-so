import _get from "lodash/get";
import _omit from "lodash/omit";
import _reduce from "lodash/reduce";
import _isBoolean from "lodash/isBoolean";

import { UPDATE_WORK_ORDER } from "./queries";

import {
  NUMBER_FIELDS,
  FORM_VALUES,
  DEFAULT_LOG_MOMENT_CODE,
  DEFAULT_LOG_MOMENT_STATUS,
  BOOLEAN_FIELDS
} from "./constants";

export const generateWorkorderNumber = (onChange?: (value: string) => void) => {
  const digitLen: number = 100000000;
  const uniqueId: string = (Math.floor(Math.random() * digitLen) + digitLen)
    .toString()
    .substring(1);

  const result = `WO${uniqueId}`;
  if (onChange) {
    return onChange(result);
  }

  return result;
};

export const convertFieldsToNumber = (data: object) => {
  return _reduce(
    data,
    (acc, val, key) => ({
      ...acc,
      [key]: NUMBER_FIELDS.includes(key) ? parseInt(val, 10) : val
    }),
    {}
  );
};

export const generateUpdateMutation = (wo: object, data: object) => ({
  mutation: UPDATE_WORK_ORDER,
  variables: {
    data,
    where: { id: _get(wo, "id") }
  }
});

export const getDefaultFormValues = wos => {
  const description = _get(wos, `[0].serviceOrder.description`) || " ";
  return {
    ..._omit(FORM_VALUES, BOOLEAN_FIELDS),
    code: generateWorkorderNumber(),
    "serviceOrder.description": description,
    "moment.code": DEFAULT_LOG_MOMENT_CODE,
    "moment.status": DEFAULT_LOG_MOMENT_STATUS
  };
};
