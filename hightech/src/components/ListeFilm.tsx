import React from "react";

import { Film } from "../api";
import FilmCard from "./FilmCard";
import Slider from "./Slider";

interface Props {
  films: Film[];
}

class ListeFilm extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        />
        <Slider
          options={{
            accessibility: true,
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            resize: false,
          }}
        >
          {this.props.films.map((film) => (
            <FilmCard key={film.id} value={film} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default ListeFilm;
