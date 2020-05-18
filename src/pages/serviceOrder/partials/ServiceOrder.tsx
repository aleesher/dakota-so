import React from "react";
import { Formik } from "formik";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _isArray from "lodash/isArray";
import _reduce from "lodash/reduce";
import _debounce from "lodash/debounce";
import _omit from "lodash/omit";
import _set from "lodash/set";
import _difference from "lodash/difference";
import moment from "moment";
import { compose } from "recompose";

import Loader from "dakota-portal/dist/components/Loader";

import {
  Details,
  Address,
  CommentCard,
  ClientInformation,
  ReportingInformation
} from "./";

import {
  withSOComments,
  ConfirmModal,
  SearchModal,
  withSOActions
} from "../../../components";

import { urls, notification } from "../../../helpers";
import validationSchema from "../validation";
import { COUNTRIES, BAG_FIELDS, INITIAL_STATE } from "../constants";
import {
  SEARCH_ADDRESS,
  SEARCH_BAG_NUMBER,
  SEARCH_SERVICE_ORDER,
  FETCH_CUSTOMERS
} from "../../../components/withSOActions/queries";
import client from "../../../../dev/apollo";
import { getCurrentUser } from "../../../components/AccessControl";
import { parseSearchValue } from "../helpers";
import { ISOState } from "../models";
import {
  CommentCardTypes,
  IComment
} from "../../../components/withSOComments/models";
import {
  generateAddressQuery,
  generateSOQuery
} from "../../../components/withSOActions/helpers";

import {
  FilledButton,
  TransparentButton,
  ButtonWrapper,
  ArrowIcon,
  LoaderWrapper
} from "../styles";
import { ModalBox } from "../../../components/SearchModal/styles";

interface IProps {
  url: string;
  history: any;
  problemComments: IComment[];
  internalComments: IComment[];
  onAddComment: (
    comment: IComment,
    currentUser: object,
    formikValues: object
  ) => void;
  onDeleteComment: (id: string) => void;
  onAddComments: (soCode: string, authorCode: string) => void;
  isLoading: boolean;
  isSOLoading: boolean;
  onExecuteMutation: (data: object) => void;
  onGetInfoBoxValues: (address: object) => void;
  onSetCity: (val: string) => void;
}

class ServiceOrder extends React.Component<IProps, ISOState> {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.onValueChange = _debounce(this.onValueChange, 1000);
  }

  async componentDidMount() {
    try {
      const { creationDate } = this.state;

      if (creationDate && this.handleCheckCreationDate()) {
        this.setState(({ formikValues }) => ({
          formikValues: {
            ...formikValues,
            customer: { name: "Geanonimiseerd" }
          }
        }));
      }

      await this.handleGetCurrentUser();
    } catch (err) {
      console.warn(err, JSON.stringify(err, null, 2));
    }
  }

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  onNext = () => {
    const { history, url } = this.props;
    const { formikValues } = this.state;
    const soCode = _get(formikValues, "code");
    const description = _get(formikValues, "description");
    history.push(urls.check(url + urls.CREATE_WORK_ORDER), {
      soCode,
      description
    });
  };

  handleSave = async (formikValues: object) => {
    const { onExecuteMutation, onAddComments } = this.props;
    const { formIsValid, soId, currentUser } = this.state;
    if (_get(formIsValid, "error")) {
      alert(_get(formIsValid, "message"));
      return;
    }

    await onExecuteMutation({
      formikValues,
      prevFormikValues: formikValues,
      callback: this.handleOnMutationEnd,
      serviceOrderId: soId,
      currentUser,
      onAddComments
    });
  };

  handleOnMutationEnd = (values: object) => {
    this.setState(
      () => values,
      () => {
        const { needsRedirect, formikValues } = this.state;
        const globalId = _get(formikValues, "globalId");
        const conceptId = _get(formikValues, "conceptId");
        const text = globalId
          ? `Global ID: ${globalId}`
          : `Concept ID: ${conceptId}`;

        if (needsRedirect) {
          this.onNext();
        }

        notification.addNotification({
          title: "Nieuwe serviceorder creëren",
          message: `Wijzigingen succesvol opgeslagen. ${text}`
        });
      }
    );
  };

  handleCheckCreationDate = () => {
    const { creationDate } = this.state;
    const diff = moment().diff(moment(creationDate), "months", true);
    return diff > 2;
  };

  handleGetCurrentUser = async () => {
    try {
      const user = await getCurrentUser();

      if (!_isEmpty(user)) {
        const countryRegionCode = _get(
          user,
          "companyEmployee.countryRegionCode"
        );
        const country = COUNTRIES.find(
          ({ value }) => value === countryRegionCode
        );

        let stateValues;

        if (country) {
          const { formikValues } = this.state;
          stateValues = {
            formikValues: {
              ...formikValues,
              country: _get(country, "value")
            }
          };
        }

        this.setState({ ...stateValues, currentUser: user });
      }
    } catch (err) {
      console.warn(err, JSON.stringify(err, null, 2));
    }
  };

  handleSelectCustomer = (customer: object) => {
    const { history } = this.props;
    const { formikValues } = this.state;
    this.setState({ formikValues: { ...formikValues, customer } });
    history.goBack();
  };

  handleSearchAddress = async () => {
    try {
      const { searchAddress } = this.state;

      const parsedSearchValue = parseSearchValue(searchAddress, BAG_FIELDS);

      const bagResult = await client.query({
        query: SEARCH_BAG_NUMBER,
        variables: {
          where: {
            AND: parsedSearchValue
          }
        }
      });

      const bagNumbers = _get(bagResult, "data.bagNumbers") || [];

      this.setState({ searchResults: bagNumbers, isLoading: false });
    } catch (err) {
      this.setIsLoading(false);
      console.warn("err", err, JSON.stringify(err));
    }
  };

  handleSelectAddress = async ({ address: bagNumber, values }) => {
    try {
      this.setState({ isLoading: true });
      const { onGetInfoBoxValues } = this.props;
      let code: string = "";
      let informationBoxValues = {};
      let customer = _get(values, "customer", {});
      const id = _get(bagNumber, "id");
      const addressResult = await client.query({
        query: SEARCH_ADDRESS,
        variables: {
          where: { bagNumberId: id }
        }
      });

      const addresses = _get(addressResult, "data.addresses");
      if (!_isEmpty(addresses)) {
        const address = addresses[0];
        code = _get(address, "code");
        if (_get(address, "subComplex")) {
          const infoBoxValues = await onGetInfoBoxValues(address);
          informationBoxValues =
            _get(infoBoxValues, "informationBoxValues") || {};
          customer = _get(infoBoxValues, "customer") || customer;
        }
      }

      this.setState(
        {
          formikValues: {
            ...values,
            address: { ...bagNumber, code },
            searchAddress: "",
            customer
          },
          searchAddress: "",
          searchResults: [],
          informationBoxValues,
          isLoading: false
        },
        () => {
          const { formikValues } = this.state;
          const { onSetCity } = this.props;
          if (_get(formikValues, "address.city")) {
            onSetCity(_get(formikValues, "address.city"));
          }
        }
      );
    } catch (err) {
      this.setState({ isLoading: true });
      console.warn("err", err, JSON.stringify(err));
    }
  };

  handleSearchSO = async (formikValues: object) => {
    try {
      this.setIsLoading(true);
      let formIsValid: object = { error: false, message: "" };
      const addressResult = await client.query({
        query: SEARCH_ADDRESS,
        variables: generateAddressQuery(formikValues)
      });

      const addresses = _get(addressResult, "data.addresses");

      if (!_isEmpty(addresses)) {
        const soResult = await client.query({
          query: SEARCH_SERVICE_ORDER,
          variables: generateSOQuery(addresses, _get(formikValues, "orderType"))
        });

        const serviceOrders = _get(soResult, "data.serviceOrders");
        if (!_isEmpty(serviceOrders)) {
          formIsValid = { error: false, message: "Serviceorder bestaat al" };
          alert("Serviceorder bestaat al");
        }
      }

      this.setState(({ formikValues }) => ({
        formikValues: {
          ...formikValues,
          orderType: _get(formikValues, "orderType"),
          postalCode: _get(formikValues, "postalCode")
        },
        isLoading: false,
        formIsValid
      }));
    } catch (err) {
      this.setIsLoading(false);
      console.warn("err", err, JSON.stringify(err));
    }
  };

  onValueChange = async (formikValues: object) => {
    const {
      searchAddress,
      orderType: stateOrderType,
      postalCode: statePostalCode
    } = this.state;

    const postalCode = _get(formikValues, "address.postalCode");
    const orderType = _get(formikValues, "address.orderType");

    if (_get(formikValues, "searchAddress") !== searchAddress) {
      if (!_get(formikValues, "searchAddress")) {
        this.setState({ searchResults: [], searchAddress: "" });
        return;
      }

      this.setState(
        {
          searchAddress: _get(formikValues, "searchAddress"),
          isLoading: true
        },
        this.handleSearchAddress
      );

      return;
    }

    if (
      postalCode &&
      orderType &&
      (orderType !== stateOrderType || postalCode !== statePostalCode)
    ) {
      await this.handleSearchSO(formikValues);
    }
  };

  handleOpenConfimModal = (values: object, handleSubmit: () => void) => {
    const { history, url } = this.props;
    const { currentUser } = this.state;
    const userCompany = _get(currentUser, "companyEmployee.company.code");
    const customerCompany = _get(values, "customer.company.code");
    if (userCompany && customerCompany && userCompany !== customerCompany) {
      history.push(urls.check(url + urls.CONFIRM_MODAL));
    } else {
      this.handleSubmit(true, handleSubmit);
    }
  };

  handleChangeCustomer = (values: object, handleSubmit: () => any) => {
    const { currentUser } = this.state;
    const customer = _get(currentUser, "companyEmployee");
    this.setState(
      () => ({
        formikValues: {
          ...values,
          customer
        },
        needsRedirect: true
      }),
      handleSubmit
    );
  };

  handleSubmit = (needsRedirect: boolean, handleSubmit: () => any) => {
    this.setState({ needsRedirect }, handleSubmit);
  };

  handleValidation = (isValid, errors, isSubmitting) => {
    const { isSubmitting: submitting } = this.state;
    if (!isValid && !_isEmpty(errors) && isSubmitting && !submitting) {
      this.setState({ isSubmitting }, () => {
        notification.addNotification({
          type: "danger",
          title: "Fout",
          message: "Niet alle velden zijn ingevuld"
        });
      });
    }
  };

  render() {
    const {
      formikValues,
      searchResults,
      currentUser,
      isLoading,
      informationBoxValues
    } = this.state;

    const {
      problemComments,
      internalComments,
      onAddComment,
      onDeleteComment,
      isLoading: commentsLoading
    } = this.props;

    const { history, url } = this.props;

    return (
      <Formik
        onSubmit={(data, err) => this.handleSave(data)}
        validationSchema={validationSchema}
        initialValues={formikValues}
        enableReinitialize
      >
        {({
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          isValid,
          isSubmitting
        }) => {
          const validation = { errors, touched };

          this.onValueChange(values);
          this.handleValidation(isValid, errors, isSubmitting);

          return (
            <div>
              {(isLoading || commentsLoading) && (
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              )}
              <Details
                title="Serviceorder details"
                onChange={handleChange}
                values={values}
                errors={validation}
                onBlur={handleBlur}
                informationBoxValues={informationBoxValues}
              />
              <Address
                title="Adres informatie"
                onChange={handleChange}
                values={values}
                errors={validation}
                onBlur={handleBlur}
                searchResults={searchResults}
                onSelectAddress={this.handleSelectAddress}
              />
              <ClientInformation
                title="Klant informatie"
                onChange={handleChange}
                values={values}
                errors={validation}
                onBlur={handleBlur}
                url={url}
              />
              <ReportingInformation
                title="Melder informatie"
                onChange={handleChange}
                values={values}
                errors={validation}
                onBlur={handleBlur}
              />
              <CommentCard
                title="Probleem Omschrijving"
                type={CommentCardTypes.Problem_Text}
                user={currentUser}
                onDeleteComment={onDeleteComment}
                onAddComment={onAddComment}
                values={values}
                comments={problemComments}
              />
              <CommentCard
                title="Inteme tekst"
                type={CommentCardTypes.Internal_Text}
                user={currentUser}
                onDeleteComment={onDeleteComment}
                onAddComment={onAddComment}
                values={values}
                comments={internalComments}
              />
              <ButtonWrapper>
                <TransparentButton
                  onClick={() => this.handleSubmit(false, handleSubmit)}
                >
                  Opslaan
                </TransparentButton>
                <FilledButton
                  onClick={() =>
                    this.handleOpenConfimModal(values, handleSubmit)
                  }
                >
                  Volgende
                  <ArrowIcon />
                </FilledButton>
              </ButtonWrapper>

              <ModalBox
                component={ConfirmModal}
                path={urls.check(url + urls.CONFIRM_MODAL)}
                parentPath={url}
                outDelay={300}
                onBackdropClick={() => history.goBack()}
                props={{
                  onConfirm: () => this.handleSubmit(true, handleSubmit),
                  onCancel: () =>
                    this.handleChangeCustomer(values, handleSubmit),
                  onClose: history.goBack,
                  text: "De klant heeft een andere dakpartner, wilt u doorgaan?"
                }}
                width="auto"
              />
            </div>
          );
        }}
      </Formik>
    );
  }
}

export default compose(withSOActions(), withSOComments())(ServiceOrder);
