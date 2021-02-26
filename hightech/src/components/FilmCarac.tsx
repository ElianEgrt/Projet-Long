import React from "react";

import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Film } from "../api";

const CaracContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.theme.metrics.smallSize};
  width: 60%;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: ${(props) => props.theme.metrics.extraSmallSize};
`;

const Meta = styled.div`
  margin-bottom: ${(props) => props.theme.metrics.extraSmallSize};
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  .popularity {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  font-size: 15px;
  opacity: 50%;
  overflow-y: scroll;
`;

interface Props {
  film: Film;
}

class FilmCarac extends React.Component<Props, {}> {
  render() {
    let { film } = this.props;
    let release_date = new Date(film.release_date).toLocaleDateString("fr", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return (
      <CaracContainer>
        <Title>{film.title}</Title>
        <Meta>
          <div>{release_date}</div>
          <div className="popularity">
            <AiFillStar />
            {Math.trunc(film.popularity)}
          </div>
        </Meta>
        <Text>{film.overview}</Text>
      </CaracContainer>
    );
  }
}

export default FilmCarac;
