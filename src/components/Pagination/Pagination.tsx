import React from "react";

import DakotaPagination, {
  IProps as IPagination
} from "dakota-portal/dist/components/Pagination";

import { PaginationWrapper } from "./styles";

const Pagination = (props: IPagination) => (
  <PaginationWrapper>
    <DakotaPagination {...props} />
  </PaginationWrapper>
);

export default Pagination;
