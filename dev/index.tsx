import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Redirect } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-common";
import Portal, { PortalApp } from "dakota-portal/dist";

import menuItems from "../src/menuItems";
import App, { AppIcon as SOAppIcon } from "../src";
import apolloClient from "./apollo";
import { urls } from "../src/helpers";

const ReactApp = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Portal apps={[SOAppIcon]}>
        <PortalApp path={urls.HOME} menuItems={menuItems} component={App} />
        <Route
          path="/"
          menuItems={menuItems}
          render={() => <Redirect to={urls.HOME} />}
        />
      </Portal>
    </ApolloProvider>
  );
};

ReactDOM.render(<ReactApp />, document.getElementById("dakota-portal-app"));
