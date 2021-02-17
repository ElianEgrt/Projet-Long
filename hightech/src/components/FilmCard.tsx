import React from "react";

import styled from "styled-components";
import { Film } from "../api";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  display: flex;
  margin: ${(props) => props.theme.metrics.mediumSize};
  width: ${(props) => props.theme.metrics.cardSize};
`;

interface Props {
  key: number;
  value: Film;
}

class ListeFilm extends React.Component<Props, {}> {
  render() {
    let film = this.props.value;
    let key = this.props.key;
    let posterPath = `https://image.tmdb.org/t/p/w200${film.poster_path}`;
    return (
      <Card>
        <img src={posterPath} alt="Film Poster" />
        <h3>{film.title}</h3>
      </Card>
    );
  }
}

export default ListeFilm;
