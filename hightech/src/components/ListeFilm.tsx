import React from "react";

import styled from "styled-components";
import { Film } from "../api";
import FilmCard from "./FilmCard";

const FilmContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, auto);
  margin: ${(props) => props.theme.metrics.mediumSize};
  gap: ${(props) => props.theme.metrics.mediumSize};
`;

interface Props {
  films: Film[];
}

class ListeFilm extends React.Component<Props, {}> {
  render() {
    return (
      <FilmContainer>
        {this.props.films.map((film) => (
          <FilmCard key={film.id} value={film}/>
        ))}
      </FilmContainer>
    );
  }
}

export default ListeFilm;
