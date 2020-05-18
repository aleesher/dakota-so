import React from "react";
import { Query } from "@apollo/react-components";

import { CURRENT_USER_QUERY } from "./queries";

interface IProps {
  allowedRoles: string[];
  renderByDefault?: any;
  children: any;
}

const roleAccess = ({ allowedRoles, renderByDefault, children }: IProps) => (
  <Query query={CURRENT_USER_QUERY} fetchPolicy="no-cache">
    {({ data }) => {
      if (data && data.currentUser && data.currentUser.roles) {
        const { roles } = data.currentUser;
        for (const userRole of roles) {
          if (
            userRole.role &&
            userRole.role.name &&
            allowedRoles.includes(userRole.role.name)
          ) {
            return children;
          }
        }
      }

      return renderByDefault || null;
    }}
  </Query>
);

export default roleAccess;
