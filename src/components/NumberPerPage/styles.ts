import styled from "styled-components";

import { Select as DakotaSelect } from "dakota-portal/dist/components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled(DakotaSelect)`
  margin-right: 16px;
  width: 76px;

  > div {
    padding-left: 6px;
    border-width: 2px !important;
    border-radius: 4px !important;
  }
`;

export const Label = styled.span`
  margin-right: 14px;
`;
