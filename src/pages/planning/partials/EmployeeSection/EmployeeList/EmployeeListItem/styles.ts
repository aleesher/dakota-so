import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const EmployeeAvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 17px;
  margin-right: 16px;
`;

export const EmployeeAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const EmployeeInfo = styled.div`
  margin-right: auto;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.gullGrey2};

  & > div {
    height: 21px;
  }

  & > div:nth-child(2) {
    color: ${Colors.arsenic2};
  }
`;
