import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.pattensBlue};
  padding: 12px 12px 12px 32px;
`;

export const ToolbarLeft = styled.div`
  display: flex;
  flex: 2;
`;

export const TableToolbarItemText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;

export const TableToolbarItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${props => (props.active ? Colors.primary : Colors.heather)};
  }

  ${TableToolbarItemText} {
    color: ${props => (props.active ? Colors.primary : Colors.fiord)};
    opacity: ${props => (props.active ? 1 : 0.5)};
  }
`;

export const TableToolbarSelect = styled.div`
  border-left: 1px solid ${Colors.pattensBlue};
  padding: 0 14px;
`;
