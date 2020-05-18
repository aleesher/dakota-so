import { Button } from "dakota-portal/dist/components";
import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const AddEmployeePopupContent = styled.div`
  padding: 0 40px;
`;

export const EmployeeTableFilterWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
`;

export const Label = styled.div`
  margin-right: 12px;
  font-size: 19px;
  font-weight: 500;
  color: ${Colors.arsenic2};
`;

export const SearchEmployeeInput = styled.input`
  box-sizing: border-box;
  height: 57px;
  width: 284px;
  padding: 0 45px 0 20px;
  font-size: 19px;
  color: ${Colors.arsenic2};
  border: 2px solid ${Colors.lightGray};
  border-radius: 3px;
  outline: none;

  &:focus {
    border-color: ${Colors.fiord2};
  }

  &::placeholder {
    color: ${Colors.veryLightGrey};
  }
`;

export const AddEmployeesButton = styled(Button)`
  && {
    margin-right: 40px;
    margin-left: auto;
    height: 56px;
    width: 171px;
    font-size: 18px;
    text-transform: capitalize;
    background-color: ${Colors.royalBlue};
    border-radius: 7px;
  }
`;

const ROW_HEIGHT = 84;
const BORDER_WIDTH = 1;

export const EmployeeTableWrapper = styled.div`
  table {
    margin-bottom: 40px;
    width: 100%;

    /* 
      trick to make table scrollable
    */
    thead,
    tbody,
    tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    thead {
      height: 65px;
      background-color: ${Colors.aliceBlue4};

      th {
        font-size: 20px;
        font-weight: bold;
        color: ${Colors.arsenic2};
        line-height: 65px;
        vertical-align: middle;
        text-align: left;

        :first-child {
          padding-left: 40px;
        }
      }
    }

    tbody {
      display: block;
      table-layout: fixed;
      height: ${ROW_HEIGHT * 5 + BORDER_WIDTH * 5}px;
      overflow-y: auto;

      tr {
        height: ${ROW_HEIGHT}px;

        :not(:last-child) {
          border-bottom: ${BORDER_WIDTH}px solid ${Colors.lightGray};
        }
      }

      td {
        font-size: 18px;
        color: ${Colors.arsenic2};
        line-height: ${ROW_HEIGHT}px;
        vertical-align: middle;

        :first-child {
          padding-left: 40px;
        }
      }

      .checkbox {
        margin-left: 14px;
        cursor: pointer;
      }
    }
  }
`;
