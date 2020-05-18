import React from "react";
import _get from "lodash/get";

import { SlideModal, Loader } from "dakota-portal/dist/components";

import WorkOrder from "./partials/WorkOrder";
import { HeaderStep } from "../serviceOrder/partials";
import { urls } from "../../helpers";
import { getCurrentUser } from "../../components/AccessControl";

import { HeaderArrow, CloseIcon } from "../serviceOrder/styles";
import { LoaderWrapper } from "../serviceOrder/styles";

export default ({ history, location, match }) => {
  const [user, setUser] = React.useState<object>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const handleSubmit = () => null;
  const description = _get(location, "state.description");
  const soCode = _get(location, "state.soCode", "");

  React.useEffect(() => {
    getCurrentUser()
      .then(user => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err.message);
      });
  }, []);

  return (
    <SlideModal
      headerProps={{
        onClose: history.goBack,
        title: `Serviceorder: ${soCode}`,
        closeIcon: HeaderArrow,
        component: (
          <>
            <HeaderStep step={2} history={history} />
            <CloseIcon
              fontSize="large"
              onClick={() => history.push(urls.HOME)}
            />
          </>
        )
      }}
    >
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <WorkOrder
          onSubmit={handleSubmit}
          soDescription={description}
          soCode={soCode}
          routeProps={{ history, location, match }}
          currentUser={user}
        />
      )}
    </SlideModal>
  );
};
