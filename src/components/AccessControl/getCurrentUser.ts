import _get from "lodash/get";

import client from "../../../dev/apollo";
import { CURRENT_USER_QUERY } from "./queries";

export default async () => {
  const { data } = await client.query({ query: CURRENT_USER_QUERY });
  const currentUser = _get(data, "currentUser");

  return currentUser || {};
};
