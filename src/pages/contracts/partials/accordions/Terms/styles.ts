import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const TermsContainer = styled.div`
  padding-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  padding-top: 55px;
`;

export const Labels = styled.div`
  width: 220px;
`;

export const Label = styled.span`
  display: block;
  height: 55px;
  line-height: 52px;
  font-size: 15px;
  color: ${Colors.lynch};
`;

export const ContentItem = styled.div`
  width: calc((100% - 220px) / 3);
  max-width: 260px;
  margin-right: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: -34px;
  margin-bottom: 8px;
`;

export const Title = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.fiord2};
`;
