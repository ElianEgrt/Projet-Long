import React from "react";
import styled from "styled-components";

import FilmSlider from "./FilmSlider";
import FilmList from "./FilmList";
import { Film } from "../api";

const Wrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;

const CategoryHeader = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryColor};
  display: flex;
  align-items: center;
  padding-left: 1em;
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: bold;
`;

interface Props {
  category: string;
  films: Film[];
  type: "list" | "slider";
  loading: boolean;
}

const FilmCategory = (props: Props) => {
  return (
    <Wrapper>
      <CategoryHeader>
        <div>{props.category}</div>
      </CategoryHeader>
      {props.type === "slider" && (
        <FilmSlider films={props.films} loading={props.loading} />
      )}
      {props.type === "list" && (
        <FilmList films={props.films} loading={props.loading} />
      )}
    </Wrapper>
  );
};

export default FilmCategory;
