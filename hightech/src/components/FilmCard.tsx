import React from "react";

import styled from "styled-components";
import { Film } from "../api";
import FilmCarac from "./FilmCarac";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 32em;
  height: 17em;
  margin: 0 1em;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

interface Props {
  key: number;
  value: Film;
}

class FilmCard extends React.Component<Props, {}> {
  render() {
    let film = this.props.value;
    let posterPath = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
    return (
      <Card>
        <ImageContainer>
          <img src={posterPath} alt="Film Poster" />
        </ImageContainer>
        <FilmCarac film={film} />
      </Card>
    );
  }
}

export default FilmCard;
