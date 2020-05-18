import styled from "styled-components";
import Button from "dakota-portal/dist/components/Button";

export const TopWrapper = styled.div`
  padding: 0px 30px;
`;
export const CreateButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CreateButton = styled(Button)`
  && {
    margin-left: 20px;
    text-transform: none;
    font-size: 14px;
    padding: 6px 24px;
  }
`;
