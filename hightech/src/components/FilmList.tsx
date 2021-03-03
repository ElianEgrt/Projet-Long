import React from "react";
import styled from "styled-components";

import { Film } from "../api";
import FilmCard from "./FilmCard";

import { Loading } from "./LoadingCard";

interface Props {
  films: Film[];
  loading: boolean;
}

const WrapperList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilmList = (props: Props) => {
  const renderList = () => (
    <WrapperList>
      {props.films.map((film) => (
        <FilmCard key={film.id} value={film} />
      ))}
    </WrapperList>
  );
  return (
    <>
      {props.loading ? (
        <WrapperLoading>
          <Loading />
        </WrapperLoading>
      ) : (
        renderList()
      )}
    </>
  );
};

export default FilmList;
