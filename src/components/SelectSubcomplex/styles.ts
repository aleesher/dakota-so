import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const Container = styled.div`
  table {
    background-color: white;
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderCheckboxWrapper = styled.div`
  display: inline-block;

  svg {
    margin-left: 0 !important;
  }
`;

export const PerPageSelectWrapper = styled.div`
  margin-left: auto;
  margin-right: 4px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  padding: 14px 16px;
  border-bottom: 1px solid ${Colors.pattensBlue};
  background-color: ${Colors.aliceBlueGrayish};
  color: ${Colors.ghost};

  input {
    min-width: 30%;
  }
`;

export const ExpandedDataWrapper = styled.div`
  position: relative;
  margin-right: 34px;
  padding-left: 48px;
  padding-bottom: 5px;
  border-right: 1px solid ${Colors.pattensBlue};

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${Colors.ghost};
  }

  &::before {
    top: 0;
    left: 22px;
    width: 3px;
    height: 25px;
  }

  &::after {
    width: 2px;
    height: 10px;
    top: 19px;
    left: 27px;
    transform: rotate(90deg);
  }

  .fixed_table {
    display: none;
  }

  div[style*="margin-left"] {
    margin-left: 0 !important;
  }
`;

export const ExpandedContentWrapper = styled.div`
  border: 1px solid ${Colors.pattensBlue};
  border-right: 0;
`;

export const Mark = styled.div`
  margin-left: auto;
  width: 36px;
  height: 57px;
  line-height: 57px;
  border-left: 1px solid ${Colors.pattensBlue};
  box-shadow: 0 0 30px 5px ${Colors.pattensBlue};
  font-size: 20px;
  text-align: center;
  color: ${Colors.gullGrey2};
`;
