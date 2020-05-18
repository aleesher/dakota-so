import React from "react";
import _get from "lodash/get";
import { Query } from "@apollo/react-components";
import { Helmet } from "react-helmet";

import TopArea from "../../components/TopArea";
import BottomArea from "./partials/BottomArea";
import { HomePage, Title } from "./styles";

import { ModalRoute } from "dakota-portal/dist/components";

import ServiceOrder from "../serviceOrder";
import { urls } from "../../helpers";
import { FETCH_SAVED_FILTER_GROUPS, SAVE_FILTER_GROUPS } from "./queries";
import { useFiltersState } from "../../hooks/useFiltersState";

import DashboardContent from "../../components/DashboardContent";

const Home = ({ match, history }) => {
  const { url } = match;

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="Dakota S&O dashboard" content="Service order management" />
      </Helmet>

      <Query query={FETCH_SAVED_FILTER_GROUPS} fetchPolicy="cache-and-network">
        {({ loading, error = null, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          if (error) {
            return <div>{JSON.stringify(error)}</div>;
          }

          const initialGroups =
            _get(data, "currentUser.savedFilterGroups") || [];

          const userId = _get(data, "currentUser.id") || "";
          const entityName = "ServiceOrder";

          return (
            <DashboardContent
              url={url}
              history={history}
              initialGroups={initialGroups}
              useFiltersState={useFiltersState(
                SAVE_FILTER_GROUPS,
                FETCH_SAVED_FILTER_GROUPS,
                entityName
              )}
            >
              <HomePage>
                <Title>Dashboard</Title>
                <TopArea />
                <BottomArea url={url} userId={userId} />
              </HomePage>
            </DashboardContent>
          );
        }}
      </Query>

      <ModalRoute
        component={ServiceOrder}
        path={`${url}${urls.CREATE_SERVICE_ORDER}`}
        parentPath={url}
        variant="wide"
      />
    </>
  );
};

export default Home;
