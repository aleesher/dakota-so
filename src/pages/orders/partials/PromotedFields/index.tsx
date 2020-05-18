import React, { useEffect, useState } from "react";
import _get from "lodash/get";
import SlideModal from "dakota-portal/dist/components/SlideModal";
import { Colors } from "dakota-portal/dist/components";
import * as Styled from "../styles";
import Algemene from "./Algemene";
import WorkOrder from "./Workorder";
import Documenten from "./Documenten";
import Beoordelen from "./Beoordelen";
import { PromotedFieldModalSubmitButton } from "../styles";
import Loader from "dakota-portal/dist/components/Loader";
import { useApolloClient } from "@apollo/react-hooks";
import {
  FETCH_SO_PROMOTED_FIELDS,
  SAVE_SO_PROMOTED_FIELDS
} from "../../queries";

export interface PromotableField {
  label: string;
  name: string;
  onChange: () => any;
  checked: boolean;
}

export default ({ history }) => {
  const [promotedAlgemene, updatePromotedAlgemene] = useState<string[]>([]);
  const [promotedWorkOrder, updatePromotedWorkOrder] = useState<string[]>([]);
  const [promotedDocumenten, updatePromotedDocumenten] = useState<string[]>([]);
  const [promotedBeoordelen, updatePromotedBeoordelen] = useState<string[]>([]);
  const [loading, updateLoader] = useState<boolean>(false);
  const client = useApolloClient();
  const handleSave = async () => {
    updateLoader(true);
    await client.mutate({
      mutation: SAVE_SO_PROMOTED_FIELDS,
      variables: {
        promoted: {
          promotedAlgemene,
          promotedWorkOrder,
          promotedDocumenten,
          promotedBeoordelen
        }
      }
    });

    updateLoader(false);
  };

  useEffect(() => {
    client
      .query({
        query: FETCH_SO_PROMOTED_FIELDS
      })
      .then(({ data }) => {
        const promoted = _get(data, "currentUser.soDetailsPromotedFields");
        if (promoted) {
          updatePromotedAlgemene(_get(promoted, "promotedAlgemene", []));
          updatePromotedWorkOrder(_get(promoted, "promotedWorkOrder", []));
          updatePromotedDocumenten(_get(promoted, "promotedDocumenten", []));
          updatePromotedBeoordelen(_get(promoted, "promotedBeoordelen", []));
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: "Promoot velden",
        titleStyle: { color: Colors.fiord }
      }}
      noPadding
    >
      {loading && (
        <Styled.LoaderWrapper>
          <Loader />
        </Styled.LoaderWrapper>
      )}
      <Styled.PromotedModalWrapper>
        <Algemene
          promotedGroup={promotedAlgemene}
          updatePromotedGroup={updatePromotedAlgemene}
        />
        <WorkOrder
          promotedGroup={promotedWorkOrder}
          updatePromotedGroup={updatePromotedWorkOrder}
        />
        <Documenten
          promotedGroup={promotedDocumenten}
          updatePromotedGroup={updatePromotedDocumenten}
        />
        <Beoordelen
          promotedGroup={promotedBeoordelen}
          updatePromotedGroup={updatePromotedBeoordelen}
        />
        <PromotedFieldModalSubmitButton isSecond onClick={handleSave}>
          Opslaan
        </PromotedFieldModalSubmitButton>
      </Styled.PromotedModalWrapper>
    </SlideModal>
  );
};
