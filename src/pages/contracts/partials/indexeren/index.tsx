import React, { useState } from "react";

import * as Style from "../../styles";
import client from "../../../../../dev/apollo";
import { CREATE_CO_INDEXING } from "../../queries";
import { getCOServiceContractIndex } from "../../helpers";
import Loader from "dakota-portal/dist/components/Loader";

import IndexerenForm from "./IndexerenForm";
import { notification } from "../../../../helpers";
import * as Styled from "../../../home/styles";
import { Colors } from "dakota-portal/dist/components";
import SlideModal from "dakota-portal/dist/components/SlideModal";

const Index = ({ match, history }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSave = async (values, { setErrors }) => {
    setIsLoading(true);

    try {
      const {
        data: { createServiceContractIndex }
      } = await client.mutate(
        getCOServiceContractIndex(CREATE_CO_INDEXING, values)
      );
      history.goBack();
      notification.addNotification({
        type: "success",
        message: "Indexeren in progress..."
      });
    } catch (e) {
      setErrors({
        errorMessage: `Sorry, something went wrong ${e.getMessage()}.`
      });
    }
    setIsLoading(false);
  };

  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: "Indexeren Contracten Bedragen",
        titleStyle: { color: Colors.fiord }
      }}
    >
      {isLoading && (
        <Style.LoaderWrapper>
          <Loader />
        </Style.LoaderWrapper>
      )}
      <Style.ModalWrapper>
        <IndexerenForm handleSave={handleSave} />
      </Style.ModalWrapper>
    </SlideModal>
  );
};

export default Index;
