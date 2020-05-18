import React from "react";
import { useApolloClient } from "@apollo/react-hooks";

import { SideFilterPage, AlertContext } from "dakota-portal/dist/components";

import { SideFilterDetails } from "../pages/home/partials/SideFilterDetails";
import FiltersActionsContext from "../helpers/filters/FiltersActionsContext";

const DashboardContent = ({
  url,
  history,
  initialGroups,
  useFiltersState,
  entityName = "ServiceOrder",
  children
}) => {
  const client = useApolloClient();
  const alertContext = React.useContext(AlertContext);
  const {
    groups,
    setGroups,
    selectedFilter,
    selectedGroupId,
    actions,
    isNew
  } = useFiltersState(initialGroups, client, alertContext);
  // useEffect(() => setGroups(initialGroups), [initialGroups]);
  return (
    <FiltersActionsContext.Provider
      value={{
        groups,
        setGroups,
        selectedFilter,
        selectedGroupId,
        actions,
        isNew
      }}
    >
      <SideFilterPage>
        {children}
        <SideFilterDetails history={history} entityName={entityName} />
      </SideFilterPage>
    </FiltersActionsContext.Provider>
  );
};

export default DashboardContent;
