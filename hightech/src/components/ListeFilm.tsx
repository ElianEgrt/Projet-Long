import React from "react";

import styled from "styled-components";
import { Film } from "../api";
import FilmCard from "./FilmCard";

const FilmContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

interface Props {
  films: Film[];
}

class ListeFilm extends React.Component<Props, {}> {
  render() {
    return (
      <FilmContainer>
        {this.props.films.map((film) => (
          <FilmCard key={film.id} value={film} />
        ))}
      </FilmContainer>
    );
  }
}

export default ListeFilm;
