import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import Colors from "dakota-portal/dist/components/Colors";

export const ErrorWrapper = styled(Grid).attrs(() => ({ xs: 12 }))`
  padding-top: 10px;
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.div`
  color: ${Colors.cinnabar};
  font-size: 16px;
`;
