import styled, { css } from "styled-components";

export const Container = styled.div<{ startedCreating: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  ${props =>
    !props.startedCreating &&
    css`
      user-select: none;
      cursor: pointer;

      * {
        display: none;
      }
    `}
`;

export const SelectWrapper = styled.div`
  margin-bottom: 12px;
  width: 62px;
`;

export const Input = styled.input`
  margin-left: 4px;
  width: 20px;
  outline: none;
`;

export const IntervalLabel = styled.span`
  font-size: 14px;
`;

export const CancelButton = styled.button`
  position: absolute;
  top: 4px;
  right: -6px;

  font-size: 15px;
  cursor: pointer;
`;

export const SubmitButton = styled(CancelButton)`
  right: 8px;
`;
