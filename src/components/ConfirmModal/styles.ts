import styled from "styled-components";
import Close from "@material-ui/icons/Close";

import { Colors } from "dakota-portal/dist/components";

export const ModalText = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const ModalClose = styled(Close)`
  position: absolute;
  top: 13px;
  right: 27px;
  color: ${Colors.black};
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  padding: 60px;
  border-radius: 10px;
`;
