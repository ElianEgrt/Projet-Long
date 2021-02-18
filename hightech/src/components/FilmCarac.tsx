import React from "react";

import styled from "styled-components";


const Carac = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  display: block;
  margin: ${(props) => props.theme.metrics.mediumSize};
  font-size: ${(props) => props.theme.metrics.smallSize};
`;

const Text = styled.div`
    display : inline;
    font-size : ${(props) => props.theme.metrics.mediumSize};
    opacity : 50%;
`;

const Title = styled.div`
    display : inline;
    font-size : ${(props) => props.theme.metrics.largeSize};
    
`;

type typeCarac = {title : string, popularity : number, release_date : string};

interface Props {
  carac : typeCarac;
}

class FilmCarac extends React.Component<Props, {}> {
  render() {
    return (
      <Carac>
          <h1><Title>{this.props.carac.title}</Title></h1>
          <h1>Date de sortie: <Text>{this.props.carac.release_date}</Text></h1>
          <h1>Note: <Text>{this.props.carac.popularity}</Text></h1>
      </Carac>
    );
  }
}

export default FilmCarac;