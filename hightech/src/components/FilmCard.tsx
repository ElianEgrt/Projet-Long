import React from "react";

import styled from "styled-components";
import { Film } from "../api";
import FilmCarac from "./FilmCarac";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  display: inline-flex;
  width: auto;
`;



interface Props {
  key: number;
  value: Film;
}

class FilmCard extends React.Component<Props, {}> {
  render() {
    let film = this.props.value;
    let key = this.props.key;
    let carac = {title:film.title, popularity:film.popularity, release_date:film.release_date};
    let posterPath = `https://image.tmdb.org/t/p/w200${film.poster_path}`;
    return (
      <Card>
        <img src={posterPath} alt="Film Poster" />
        <FilmCarac carac={carac} />
      </Card>
    );
  }
}

export default FilmCard;
