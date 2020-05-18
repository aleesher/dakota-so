import React from "react";
import moment from "moment";
import _get from "lodash/get";
import _set from "lodash/set";
import _omit from "lodash/omit";
import _isEmpty from "lodash/isEmpty";

import { notification } from "../../helpers";
import client from "../../../dev/apollo";
import {
  CREATE_SERVICE_ORDER,
  UPDATE_REPORTER,
  UPDATE_SERVICE_ORDER,
  CREATE_ADDRESS,
  CREATE_REPORTER,
  LEAKAGES_PER_THREE_MONTHS,
  FETCH_SO_CUSTOMER,
  FETCH_ADDRESS
} from "./queries";
import { generateCreationMutation, generateGlobalId } from "./helpers";
import { SO_CONNECTED_FIELDS, FORMIK_FIELDS_TO_IGNORE } from "./constants";

export default function withSOActions() {
  return WrappedComponent => {
    class WrappedClass extends React.PureComponent<any, any> {
      state = {
        isLoading: false
      };

      setIsLoading = (isLoading: boolean) => {
        this.setState({ isLoading });
      };

      handleExecuteMutation = async ({
        formikValues,
        callback,
        serviceOrderId,
        prevFormikValues,
        currentUser,
        onAddComments
      }) => {
        try {
          this.setIsLoading(true);
          const timestamp = moment().unix();

          let error: boolean = false;

          // const {
          //   code: addressCode,
          //   error: addressError,
          //   formikValues: newValues
          // } = await this.handleCreateAddress(formikValues, timestamp);

          // error = addressError;
          // formikValues = newValues;

          const reporter = await this.handleCreateOrUpdateReporter(
            formikValues,
            timestamp
          );

          if (reporter.error) {
            error = reporter.error;
          }

          const reporterCode = reporter.code;

          const serviceOrderCode = _get(
            prevFormikValues,
            "code",
            `SO${timestamp}`
          );

          const { globalId, conceptId, isPublished } = this.handleGenerateId(
            formikValues,
            error,
            timestamp,
            prevFormikValues
          );

          const values = {
            ..._omit(formikValues, FORMIK_FIELDS_TO_IGNORE),
            // serviceLocationCode: addressCode,
            reporter: reporterCode,
            customerCode: _get(formikValues, "customer.code", ""),
            countryCode: _get(
              formikValues,
              "country",
              _get(formikValues, "countryCode", "")
            ),
            code: serviceOrderCode,
            globalId,
            conceptId,
            isPublished,
            status: "Open"
          };

          const {
            id: soId,
            code: soCode,
            creationDate
          } = await this.handleCreateOrUpdateSO(
            values,
            isPublished,
            serviceOrderId
          );

          if (onAddComments) {
            await onAddComments(
              soCode,
              _get(currentUser, "companyEmployee.code", "")
            );
          }

          if (callback) {
            callback({
              soId,
              creationDate,
              isLoading: false,
              formikValues: {
                ...formikValues,
                globalId,
                conceptId,
                code: soCode,
                reporter: {
                  ..._get(formikValues, "reporter"),
                  code: reporterCode
                }
                // address: {
                //   ..._get(formikValues, "address"),
                //   code: addressCode
                // }
              }
            });
          }

          this.setIsLoading(false);
        } catch (err) {
          console.warn(err, JSON.stringify(err));
          this.setIsLoading(false);

          notification.addNotification({
            type: "danger",
            message: "Er is een fout opgetreden"
          });
        }
      };

      handleCreateOrUpdateSO = async (
        values: object,
        isPublished: boolean,
        id?: string
      ): Promise<{ id?: string; code?: string; creationDate?: string }> => {
        try {
          const mutation = !id
            ? {
                type: CREATE_SERVICE_ORDER,
                field: "createServiceOrder"
              }
            : {
                type: UPDATE_SERVICE_ORDER,
                field: "updateServiceOrder"
              };

          values = _omit(values, ["id", "serviceLocation"]);

          const { ...soMutation } = generateCreationMutation(
            mutation.type,
            values,
            "",
            SO_CONNECTED_FIELDS
          );

          _set(soMutation, "variables.data.isPublished", isPublished);

          if (!!id) {
            _set(soMutation, "variables.where", { id });
          }

          const res = await client.mutate(soMutation);

          const soId = _get(res, `data.${mutation.field}.id`);
          const code = _get(res, `data.${mutation.field}.code`);
          const creationDate = _get(res, `data.${mutation.field}.createdAt`);
          return { id: soId, code, creationDate };
        } catch (err) {
          console.warn(err, JSON.stringify(err, null, 2));
          return {};
        }
      };

      handleGenerateId = (
        formikValues: object,
        error: boolean,
        timestamp: number,
        prevFormikValues: object
      ): { conceptId?: string; globalId?: string; isPublished: boolean } => {
        let globalId = _get(prevFormikValues, "globalId");
        let conceptId = _get(prevFormikValues, "conceptId");
        let isPublished = false;

        if (_get(formikValues, "customer.id") && !error && !globalId) {
          globalId = generateGlobalId(timestamp, formikValues);
        } else if (!conceptId) {
          conceptId = `C${timestamp}`;
        }

        if (globalId) {
          isPublished = true;
        }

        return { conceptId, globalId, isPublished };
      };

      handleCreateAddress = async (
        formikValues: object,
        timestamp
      ): Promise<{
        code?: string;
        error?: boolean;
        formikValues?: object;
      }> => {
        const addressCode = _get(formikValues, "address.code");
        if (addressCode) {
          return { error: false, code: addressCode, formikValues };
        }

        const bagNumberId = _get(formikValues, "address.id");
        _set(formikValues, "address.bagNumberId", bagNumberId);
        _set(formikValues, "address.id", null);
        _set(formikValues, "address.code", `AD${timestamp}`);

        const { error, ...addressMutation } = generateCreationMutation(
          CREATE_ADDRESS,
          formikValues,
          "address"
        );

        let code;

        if (!error) {
          const res = await client.mutate(addressMutation);
          code = _get(res, "data.createAddress.code");
        }

        return { code, error, formikValues };
      };

      handleCreateOrUpdateReporter = async (
        formikValues: object,
        timestamp: number
      ): Promise<{
        code?: string;
        error?: boolean;
      }> => {
        let code = _get(formikValues, "reporter.code");
        const isTrackAndTraceActive = _get(
          formikValues,
          "reporter.isTrackAndTraceActive"
        );

        const mutation = !code
          ? {
              type: CREATE_REPORTER,
              field: "createReporter"
            }
          : {
              type: UPDATE_REPORTER,
              field: "updateReporter"
            };

        const {
          error,
          ...reporterMutation
        } = generateCreationMutation(
          mutation.type,
          _get(formikValues, "reporter", {}),
          "",
          [""]
        );

        if (!!code) {
          _set(reporterMutation.variables, "where", { code });
        } else {
          _set(reporterMutation.variables, "data.code", `RE${timestamp}`);
        }

        _set(
          reporterMutation.variables,
          "data.isTrackAndTraceActive",
          !!isTrackAndTraceActive
        );

        if (!error) {
          const res = await client.mutate(reporterMutation);
          if (!code) {
            code = _get(res, `data.${mutation.field}.code`);
          }
        }

        return { code, error };
      };

      getInformationBoxValues = async (address: object) => {
        try {
          let informationBoxValues;
          let customer;
          const subComplex = _get(address, "subComplex");
          const complexCode = _get(subComplex, "complex.code");

          if (complexCode) {
            const result = await client.query({
              query: LEAKAGES_PER_THREE_MONTHS,
              variables: {
                where: { complexCode }
              }
            });
            informationBoxValues = _get(
              result,
              "data.leakagesPerThreeMonths",
              {}
            );
          }

          if (_get(subComplex, "infoContactPerson")) {
            customer = _get(subComplex, "infoContactPerson");
          }

          return { informationBoxValues, customer };
        } catch (err) {
          console.warn(err, JSON.stringify(err));
          return null;
        }
      };

      getSOCustomer = async serviceOrder => {
        try {
          const customerCode = _get(serviceOrder, "customerCode");

          if (!!customerCode) {
            const res = await client.query({
              query: FETCH_SO_CUSTOMER,
              variables: { where: { code: customerCode } }
            });
            return _get(res, "data.company", {});
          }

          return {};
        } catch (err) {
          console.error(err.message);
        }
      };

      getSOAddress = async (code: string) => {
        try {
          const res = await client.query({
            query: FETCH_ADDRESS,
            variables: { where: { code } }
          });

          return _get(res, "data.address");
        } catch (err) {
          console.error(err.message);
        }
      };

      render() {
        const { isLoading } = this.state;

        const props = {
          ...this.props,
          isSOLoading: isLoading,
          onExecuteMutation: this.handleExecuteMutation,
          onGetInfoBoxValues: this.getInformationBoxValues,
          onCreateOrUpdateReporter: this.handleCreateOrUpdateReporter,
          onCreateOrUpdateSO: this.handleCreateOrUpdateSO,
          onCreateAddress: this.handleCreateAddress,
          onGenerateId: this.handleGenerateId,
          onGetSOCustomer: this.getSOCustomer,
          onGetSOAddress: this.getSOAddress
        };

        return <WrappedComponent {...props} />;
      }
    }

    return WrappedClass;
  };
}
