import React from "react";
import styled from "styled-components";

import { Film } from "../api";
import FilmCard from "./FilmCard";
import { Loading } from "./LoadingCard";
import Slider from "./Slider";

interface Props {
  films: Film[];
  loading: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilmSlider = (props: Props) => {
  const renderSlider = () => (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      />
      <Slider
        options={{
          accessibility: true,
          percentPosition: true,
          contain: true,
          resize: false,
        }}
      >
        {props.films.map((film) => (
          <FilmCard key={film.id} value={film} />
        ))}
      </Slider>
    </>
  );

  return (
    <>
      {props.loading ? (
        <Wrapper>
          <Loading />
        </Wrapper>
      ) : (
        renderSlider()
      )}
    </>
  );
};

export default FilmSlider;
