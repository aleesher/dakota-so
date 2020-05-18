import React from "react";

import { SlideModal } from "dakota-portal/dist/components";

import { urls, authHelpers } from "../../../helpers";

interface TermsOfUseProps {
  history: any;
}

const TermsOfUse = ({ history }: TermsOfUseProps) => {
  const onClose = () => {
    if (isNeedAgreement) {
      authHelpers.signout();
      history.push(urls.LOGOUT);
    } else {
      history.goBack();
    }
  };

  const isNeedAgreement = authHelpers.isNeedAgreement === "true";

  return (
    <SlideModal
      headerProps={{
        onClose,
        title: "Gebruiksvoorwaarden"
      }}
    ></SlideModal>
  );
};

export default TermsOfUse;
