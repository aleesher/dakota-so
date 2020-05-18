import * as React from "react";

import { urls } from "../../helpers";

import { NewSOButton } from "../../components/TopActionButton/style";
import { MenuLink } from "../../styles/global";

const Action = (url: string) => () => {
  return (
    <MenuLink
      target="_blank"
      href={`${url}${urls.CREATE_SERVICE_ORDER}`}
      onClick={e => e.stopPropagation()}
    >
      <NewSOButton>Nieuwe Serviceorder</NewSOButton>
    </MenuLink>
  );
};

export default Action;
