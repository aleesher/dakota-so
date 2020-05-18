import styled from "styled-components";
import Link from "react-router-dom/Link";

import { Select } from "dakota-portal/dist/components";
import Colors from "dakota-portal/dist/components/Colors";
import { ModalBox as DakotaModalBox } from "dakota-portal/dist/components/ModalWrapper";

export const modalWrapper = styled(Link)`
  text-decoration: none;
  color: ${Colors.fiord};
  margin-right: auto;
`;

export const DocumentContent = styled.div`
  && {
    display: flex;
    padding: 20px;
    border-bottom: 1px solid ${Colors.pattensBlue};

    &&:hover {
      background-color: ${Colors.zircon};
    }
  }
`;

export const DocumentClose = styled.div`
  margin-left: 10px;
`;

export const DocumentLeft = styled.div`
  display: flex;
  padding: 10px;
`;
export const DocumentRight = styled.div`
  display: flex;
  padding: 10px;
  margin-left: auto;
  && .titleName {
    margin-top: 20px;
    margin-right: 20px;
  }
  && .titleLabel {
    margin-top: 20px;
    margin-right: 20px;
    min-width: 150px;
  }
`;

export const DocumentImg = styled.div`
  padding-top: 6px;
`;

export const DocumentContainer = styled.div`
  background-color: ${Colors.aliceBlueGrayish};
  padding: 20px;
`;
export const DocumentPreview = styled.div`
  padding-top: 6px;
  height: 600px;
  overflow-y: scroll;
  justify-content: center;
  display: flex;
`;

export const DocumentFormWrapper = styled.div`
  min-width: 300px;
  && .ActionTitle {
    margin-top: 29px;
    margin-right: 20px;
  }
`;

export const DocumentDetails = styled.div`
  && {
    margin-left: 20px;
  }
  && .filename {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  && .filecreated {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  && .filupdated {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  && .filetime {
    margin-top: 5px;
  }

  && .reply {
    color: ${Colors.dodgerBlue};
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const FormSelect = styled(Select)`
  && {
    width: calc(100% - ${({ width = 50 }) => width}px);
    max-width: 330px;
    font-weight: normal;
    color: ${Colors.fiord};
    font-size: 16px;
    margin-top: 5px;
  }

  .type-select__control {
    height: ${({ height = 56 }) => height}px;
    border: 2px solid ${Colors.pattensBlue};
    border-radius: 5px;
    box-shadow: none;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 16px;
  }

  .type-select__control--is-focused,
  .type-select__control--menu-is-open {
    border: 2px solid ${Colors.fiord};
    &:hover {
      border-color: ${Colors.fiord};
    }
  }

  .type-select__indicator-separator {
    display: none;
  }
`;

export const MenuCard = styled.div`
  margin-left: 20px;

  && .replyIcon {
    color: ${Colors.dodgerBlue};
  }
`;

export const ModalBox = styled(DakotaModalBox)`
  width: 80% !important;
`;
