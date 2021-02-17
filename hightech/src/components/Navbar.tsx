import React from "react";

import styled from "styled-components";

const Bar = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  width: auto;
  height: ${(props) => props.theme.metrics.extraLargeSize};
  padding: ${(props) => props.theme.metrics.mediumSize};
  margin-bottom: ${(props) => props.theme.metrics.extraLargeSize};
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
`;

class Navbar extends React.Component {
  render() {
    return (
      <Bar>
        <TitleText>ccc</TitleText>
      </Bar>
    );
  }
}

export default Navbar;
