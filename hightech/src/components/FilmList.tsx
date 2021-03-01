import React from "react";
import styled from "styled-components";

import { Film } from "../api";
import FilmCard from "./FilmCard";

interface Props {
  films: Film[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class FilmSlider extends React.Component<Props, {}> {
  render() {
    return (
      <Wrapper>
        {this.props.films.map((film) => (
          <FilmCard key={film.id} value={film} />
        ))}
      </Wrapper>
    );
  }
}

export default FilmSlider;
