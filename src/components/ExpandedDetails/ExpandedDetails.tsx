import * as React from "react";
import styled, { css } from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

const Container = styled.div<{ showShadow?: boolean }>`
  ${({ showShadow }) =>
    showShadow ? `box-shadow: 0 2px 8px 0px ${Colors.lightGray};` : ""}

  position: relative;
  z-index: 1;
  border-top-width: 0;
`;

const Header = styled.button`
  width: 100%;
  height: 46px;
  line-height: 46px;
  border: none;
  outline: none;
  text-align: center;
  background-color: ${Colors.aliceBlueGrayish};
  color: ${Colors.solitude};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;

  ${({ isOpened }: { isOpened: boolean }) =>
    isOpened &&
    css`
      background-color: ${Colors.white};
    `}
`;

const Body = styled.div`
  max-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  opacity: 0;

  ${({ isOpened }: { isOpened: boolean }) =>
    isOpened &&
    css`
      padding: 20px 40px 40px;
      max-height: initial;
      opacity: 1;
      transition: opacity 0.6s;
      background-color: ${Colors.white};
    `}
`;

interface IState {
  isOpened: boolean;
}

interface IProps {
  showShadow?: boolean;
  moreText?: string;
  lessText?: string;
}

class ExpandedDetails extends React.Component<IProps, IState> {
  state = {
    isOpened: false
  };

  static defaultProps = {
    showShadow: false
  };

  handleToggle = () => {
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  };

  render() {
    const { isOpened } = this.state;
    const {
      children,
      showShadow,
      moreText = "Toon details",
      lessText = "Sluit details"
    } = this.props;

    return (
      <Container showShadow={showShadow}>
        <Body isOpened={isOpened}>{children}</Body>
        <Header onClick={this.handleToggle} isOpened={isOpened}>
          {isOpened ? lessText : moreText}
        </Header>
      </Container>
    );
  }
}

export default ExpandedDetails;
