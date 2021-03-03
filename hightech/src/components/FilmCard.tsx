import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Film } from "../api";
import FilmCarac from "./FilmCarac";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import IconButton from "@material-ui/core/IconButton";
import { AuthContext, AuthContextType } from "../context";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25em;
  height: 17em;
  margin: 1em;
`;

const FavContainer = styled.div`
  color: ${(p) => p.theme.colors.backgroundColor};
  position: absolute;
  background: rgba(42, 64, 61, 0.404);
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
  a {
    cursor: pointer;
  }
`;

const PlayMovieStyled = styled.div`
  a {
    cursor: pointer;
  }
`;

const PlayMovie = (posterPath: string, route: string) => {
  return (
    <PlayMovieStyled>
      <Link to={route}>
        <img src={posterPath} alt="Film Poster" />
      </Link>
    </PlayMovieStyled>
  );
};

interface Props {
  key: number;
  value: Film;
}

const displayIcon = (isFav: boolean) => {
  if (isFav) {
    return <AiFillStar fontSize="30px" />;
  } else {
    return <AiOutlineStar fontSize="30px" />;
  }
};

const FilmCard = (props: Props) => {
  const authContext = useContext(AuthContext);
  let film = props.value;
  let id = film.id;
  let isFav =
    authContext.userInfo?.films?.findIndex((f) => f === id.toString()) !== -1;
  let posterPath = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
  return (
    <Card>
      <FavContainer>
        <IconButton
          color="inherit"
          size="medium"
          onClick={() => {
            isFav
              ? authContext.removeFilm(
                  id.toString(),
                  authContext.userInfo?.id as string,
                  authContext.token as string
                )
              : authContext.addFilm(
                  id.toString(),
                  authContext.userInfo?.id as string,
                  authContext.token as string
                );
          }}
        >
          {displayIcon(isFav)}
        </IconButton>
      </FavContainer>
      <ImageContainer>{PlayMovie(posterPath, "/play")}</ImageContainer>
      <FilmCarac film={film} />
    </Card>
  );
};

export default FilmCard;
