import React from 'react';

import styled from 'styled-components'

const Bar = styled.div`
  background: ${props => props.theme.colors.backgroundColor};
  width: 100%;
  height: 3em;
  padding: 1em;
  margin-bottom: 5em;
  display: flex;
  align-items: center;
`
const Bar2 = styled.div`
  background: ${props => props.theme.colors.accentColor};
`

const TitleText = styled.h1`
  color: ${props => props.theme.colors.textColor};
`

class Navbar extends React.Component {
    render() {
        return (
          <Bar>
            <TitleText>ccc</TitleText>
          </Bar>
        )
    }
}

export default Navbar