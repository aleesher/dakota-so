import _get from "lodash/get";
import _pickBy from "lodash/pickBy";
import _isEmpty from "lodash/isEmpty";
import _isObject from "lodash/isObject";
import _identity from "lodash/identity";
import _reduce from "lodash/reduce";
import moment from "moment";

import { CustomerTypes, BronTypes } from "./models";
import { NUMBER_FIELDS } from "./constants";

export const omitEmptyFields = (value: object) => _pickBy(value, _identity);

export const generateAddressQuery = (formikValues: object = {}) => {
  const address = _get(formikValues, "address", {}) || {};
  return { where: omitEmptyFields(address) };
};

export const collectAddressCodes = (addresses: object[]) =>
  addresses.map(address => _get(address, "code"));

export const generateSOQuery = (
  addresses: object[] = [],
  orderType: string
) => {
  const codes = collectAddressCodes(addresses);
  return {
    where: {
      serviceLocationCode_in: codes,
      orderType,
      creationDate: moment()
    }
  };
};

export const generateCreationMutation = (
  mutation: any,
  data: object,
  field?: string,
  connectedFields?: string[]
): { mutation: any; variables: object; error: boolean } => {
  let variables: object = {};

  if (field) {
    variables = {
      data: omitEmptyFields(_get(data, field))
    };
  }

  if (!_isEmpty(connectedFields)) {
    variables = {
      data: _reduce(
        data,
        (acc, val, key) =>
          !val
            ? acc
            : !connectedFields.includes(key)
            ? {
                ...acc,
                [key]: _isObject(val)
                  ? _get(val, "value")
                  : NUMBER_FIELDS.includes(key)
                  ? parseInt(val, 10)
                  : val
              }
            : { ...acc, [key]: { connect: { code: val } } },
        {}
      )
    };
  }

  return {
    mutation,
    variables,
    error: _isEmpty(_get(variables, "data"))
  };
};

export const generateGlobalId = (
  timestamp: number,
  formikValues: object
): string => {
  const year = moment()
    .year()
    .toString()
    .substring(2, 4);
  const bronType =
    BronTypes[_get(formikValues, "serviceType.value")] || BronTypes.REGIE;
  const customer =
    CustomerTypes[_get(formikValues, "customer.company.name")] || "CN";
  return `D${bronType}${customer}${year}${timestamp}`;
};
