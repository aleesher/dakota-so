import moment from "moment";
import _get from "lodash/get";
import _pickBy from "lodash/pickBy";
import _reduce from "lodash/reduce";
import _identity from "lodash/identity";
import _isString from "lodash/isString";
import _isNumber from "lodash/isNumber";
import _toNumber from "lodash/toNumber";
import _isEmpty from "lodash/isEmpty";
import _isObject from "lodash/isObject";
import _omit from "lodash/omit";

import { SOType, SOFormField, SOTypes, CardItemTypes } from "./models";
import { SERVICE_TYPES } from "./constants";

export const generateServicerOrderNo = data => null;

export const generateCurrentDate = (): string =>
  moment().format("DD MMMM YYYY hh:mm:ss");

export const formatLimitedText = (value?: any, maxLength?: number): any =>
  maxLength && _isString(value) ? value.substring(0, maxLength) : value;

export const getFormFields = (fields: SOFormField[], soType?: SOType) =>
  fields
    .filter(f => {
      if (!f.isMajorField && (!f.soType || !f.soType.includes(soType))) {
        return false;
      }

      return true;
    })
    .map(f => {
      if (f.selectSoType && f.selectSoType.includes(soType)) {
        return { ...f, type: CardItemTypes.select };
      }
      return f;
    });

const isPostalCode = (val: string): boolean => {
  const regex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
  return regex.test(val);
};

export const parseSearchValue = (val: string, fields: string[]) => {
  if (!val) {
    return [];
  }

  const splitted = val.split(" ");
  const toIgnore: string[] = [];
  let result: object[] = [];
  const toIgnoreFields: string[] = [];
  splitted.map((str, i) => {
    const isNumber = !isNaN(parseInt(str, 10));
    if (toIgnore.includes(str)) {
      return;
    }

    fields.map(field => {
      let val: object;
      if (isNumber && (field === "houseNumber" || field === "postalCode")) {
        if (field === "postalCode") {
          if (isPostalCode(`${str} ${splitted[i + 1]}`)) {
            toIgnore.push(splitted[i + 1]);
            toIgnoreFields.push(field);
            result = result.filter(
              val => Object.keys(val)[0] !== `${field}_contains`
            );
            val = { postalCode_contains: `${str} ${splitted[i + 1]}` };
          } else if (str.length >= 4) {
            if (!toIgnoreFields.includes(field)) {
              val = { postalCode_contains: str };
            }
          }
        } else if (str.length < 4) {
          val = { houseNumber: _toNumber(str) };
        }
      } else if (
        !isNumber &&
        field !== "houseNumber" &&
        field !== "postalCode"
      ) {
        if (!toIgnoreFields.includes(field)) {
          val = { [`${field}_contains`]: str };
        }
      }

      if (val) {
        result.push(val);
      }
    });
  });

  const OR = [];
  result = _reduce(
    result,
    (acc, val, i) => {
      const key = Object.keys(val)[0];
      if (key.includes("houseNumber") || key.includes("postalCode")) {
        return [...acc, val];
      } else {
        if (val) {
          OR.push(val);
        }
        return acc;
      }
    },
    []
  );

  if (!_isEmpty(OR)) {
    result = [...result, { OR }];
  }

  return result;
};

export const getDefaultServiceType = (orderType: SOType) => {
  if (
    [
      SOTypes.LEAKAGE,
      SOTypes.DIRECTION_JOB,
      SOTypes.CORRECTIVE_MAINTENANCE
    ].includes(orderType)
  ) {
    return SERVICE_TYPES[0].value;
  }

  return SERVICE_TYPES[1].value;
};
