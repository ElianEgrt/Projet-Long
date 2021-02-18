import React from "react";

import styled from "styled-components";

const BBar = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  width: auto;
  height: auto;
  padding: 1em;
  margin-bottom: 0;
  text-align : center;
`;

const TitleText = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
  
`;

class BottomBar extends React.Component {
  render() {
    return (
      <BBar>
        <TitleText>Page Suivante</TitleText>
      </BBar>
    );
  }
}

export default BottomBar;