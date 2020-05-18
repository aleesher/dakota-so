import React from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import { SlideModal, ModalRoute } from "dakota-portal/dist/components";

import { ServiceOrder, HeaderStep } from "./partials";
import WorkOrder from "../workOrder";
import { urls } from "../../helpers";
import { SearchModal } from "../../components";

import { HeaderArrow } from "./styles";
import { ModalBox } from "../../components/SearchModal/styles";

import { FETCH_CUSTOMERS } from "../../components/withSOActions/queries";

export default ({ history, match }) => {
  const [city, setCity] = React.useState<string>("");
  const { url } = match;

  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: "Nieuwe serviceorder aanmaken",
        closeIcon: HeaderArrow,
        component: <HeaderStep step={1} history={history} />
      }}
    >
      <ServiceOrder url={url} history={history} onSetCity={setCity} />
      <ModalBox
        component={SearchModal}
        path={urls.check(url + urls.SEARCH_CLIENT)}
        parentPath={url}
        outDelay={300}
        onBackdropClick={() => history.goBack()}
        props={{
          onSelect: this.handleSelectCustomer,
          onClose: history.goBack,
          query: FETCH_CUSTOMERS,
          where: !!city ? { city } : {}
        }}
      />
      <ModalRoute
        component={WorkOrder}
        path={urls.check(url + urls.CREATE_WORK_ORDER)}
        parentPath={url}
        variant="wide"
      />
    </SlideModal>
  );
};
