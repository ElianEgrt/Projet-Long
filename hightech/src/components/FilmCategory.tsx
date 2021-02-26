import React from "react";
import styled from "styled-components";

import ListeFilm from "./ListeFilm";
import { Film } from "../api";

const Wrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
`;

const CategoryHeader = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryColor};
  display: flex;
  align-items: center;
  padding-left: 1em;
  margin-bottom: 0.5em;
  font-size: 2em;
`;

interface Props {
  category: string;
  films: Film[];
}

const FilmCategory = (props: Props) => {
  return (
    <Wrapper>
      <CategoryHeader>
        <div>{props.category}</div>
      </CategoryHeader>
      <ListeFilm films={props.films} />
    </Wrapper>
  );
};

export default FilmCategory;
