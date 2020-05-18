import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const Documentmodals = styled.div`
  /* padding-top: 30px;
  padding-bottom: 30px; */
  margin: auto;
  height: auto;
`;

export const ActionWrappers = styled.div`
  display: flex;
  margin-left: 20px;

  && .replyIcon {
    color: ${Colors.dodgerBlue};
  }
`;
export const ActionMenu = styled.p`
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
  color: ${Colors.dodgerBlue};
  text-decoration: underline;
  margin-top: 4px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  padding-top: 25px;
  margin-right: 29px;
`;

export const ActionLabel = styled.div`
  display: flex;
`;
