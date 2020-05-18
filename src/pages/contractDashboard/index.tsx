import React from "react";
import { Query } from "@apollo/react-components";
import _get from "lodash/get";
import TopArea from "../../components/TopArea";
import { Helmet } from "react-helmet";

import DashboardContent from "../../components/DashboardContent";
import { FETCH_SAVED_FILTER_GROUPS, SAVE_FILTER_GROUPS } from "./queries";
import { useFiltersState } from "../../hooks/useFiltersState";
import { MainContent, Title, Wrapper } from "./styles";
import BottomArea from "./partials/BottomArea";

const Dashboard = ({ match, history }) => {
  const { url } = match;
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="Service Contracten Dashboard"
          content="Service contracts management"
        />
      </Helmet>
      <Query query={FETCH_SAVED_FILTER_GROUPS} fetchPolicy="cache-and-network">
        {({ loading, error = null, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          if (error) {
            return <div>{error}</div>;
          }

          const initialGroups =
            _get(data, "currentUser.savedSCFilterGroups") || [];

          const entityName = "ServiceContract";

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
              entityName={entityName}
            >
              <MainContent>
                <Wrapper>
                  <Title>Dashboard</Title>
                </Wrapper>
                <TopArea />
                <Wrapper>
                  <BottomArea url={url} history={history} />
                </Wrapper>
              </MainContent>
            </DashboardContent>
          );
        }}
      </Query>
    </>
  );
};

export default Dashboard;
