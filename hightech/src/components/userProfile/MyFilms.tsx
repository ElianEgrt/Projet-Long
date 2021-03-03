import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Film, getAll } from "../../api";
import { AuthContext } from "../../context";
import FilmCategory from "../FilmCategory";

const RightWrapper = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

const MyInfos = () => {
  const [load, setLoad] = useState(true);
  const [films, setFilms] = useState<Film[]>([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("hookcalled");
    getAll(authContext.userInfo?.films as string[]).then((films) => {
      setFilms(films);
      setLoad(false);
    });
  }, [authContext.userInfo?.films]);

  return (
    <RightWrapper>
      <FilmCategory
        category={"Mes films favoris"}
        type={"list"}
        films={films}
        loading={load}
      />
    </RightWrapper>
  );
};

export default MyInfos;
