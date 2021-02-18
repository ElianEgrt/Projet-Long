import React from "react";

import styled from "styled-components";

const NBar = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  width: auto;
  height: ${(props) => props.theme.metrics.extraLargeSize};
  padding: ${(props) => props.theme.metrics.mediumSize};
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
`;

class Navbar extends React.Component {
  render() {
    return (
      <NBar>
        <TitleText>ccc</TitleText>
      </NBar>
    );
  }
}

export default Navbar;
