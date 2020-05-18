import styled, { css } from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";
import Card from "dakota-portal/dist/components/Card";
export const MainContent = styled.div`
  max-width: 1200px;
`;

export const Title = styled.h1`
  color: ${Colors.eclipse};
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  padding: 0px 30px;
  margin-top: 40px;
  padding: 1px 10px 0px 36px;
`;

export const ContractenStats = styled.div`
  margin-top: 10px;
`;

export const LegendsWrapper = styled.div`
  border-top: solid 1px ${Colors.lightGray};
  background-color: ${Colors.aliceBlueGrayish};
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ChartWrapper = styled.div`
  padding: 20px;
`;

export const Legend = styled.span`
  background-color: ${({ color = Colors.mediumSeaGreen }) => color};
  width: 16px;
  height: 8px;
  border-radius: 3px;
  margin: 5px;
`;
export const LegendWrapper = styled.button<{ isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-right: 10px;
  padding-right: 4px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid gray;
      border-radius: 4px;
    `}
`;

export const Appointments = styled(Card)`
  padding: 0;
  padding-bottom: 0px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: flex-start;
  display: ${({ display = "flex" }) => display};
  flex-direction: column;
  && table thead tr {
    background-color: ${Colors.white};
    th {
      span {
        text-transform: unset;
      }
      font-weight: 400;
    }
  }
  table.fixed_table tr td:first-child {
    font-size: 14px;
  }
`;
