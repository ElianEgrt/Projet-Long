import React from "react";

import styled from "styled-components";

const TextFilm = styled.h3`
  color: ${(props) => props.theme.colors.accentColor};
`;

class ListeFilm extends React.Component {
  render() {
    return <TextFilm>film.titre</TextFilm>;
  }
}

export default ListeFilm;
