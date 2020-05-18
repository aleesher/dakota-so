import React from "react";
import loadable from "../../helpers/loadable";

import Loader from "dakota-portal/dist/components/Loader";

export default loadable(() => import("./index"), {
  // @ts-ignore
  fallback: <Loader />
});
