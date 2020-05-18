import "@babel/polyfill";
import "url-search-params-polyfill";
import "isomorphic-unfetch";
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import ReactNotification from "react-notifications-component";

import { AppRoute } from "dakota-portal/dist/components/appRoute";

import { ActionButton } from "./components";
import urls from "./helpers/urls";

import GlobalStyle from "./styles/global";
import Home from "./pages/home/Loadable";
import Orders from "./pages/orders";
import Planning from "./pages/planning";
import ContractDashboard from "./pages/contractDashboard";
import Contracts from "./pages/contracts";

import "react-notifications-component/dist/theme.css";

export const AppIcon = {
  name: "S&O",
  icon: <CardTravelIcon />,
  path: "/so"
};

const pages = [
  {
    view: Orders,
    url: urls.SO_LIST
  },
  {
    view: ContractDashboard,
    url: urls.SC_HOME
  },
  {
    view: Contracts,
    url: urls.SC_LIST
  }
];

const App = ({ appPath }) => {
  return (
    <>
      <ReactNotification />
      <GlobalStyle />
      <Switch>
        {pages.map(page => (
          <AppRoute
            key={page.url}
            actionButton={ActionButton(appPath)}
            component={page.view}
            path={page.url}
            withoutAuth
          />
        ))}

        <Route exact path={urls.PLANNING} component={Planning} />

        <AppRoute
          path={appPath}
          component={Home}
          actionButton={ActionButton(appPath)}
          noContainer
          withoutAuth
        />
      </Switch>
    </>
  );
};

export default App;
