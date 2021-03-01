import React from "react";
import styled from "styled-components";

const RightWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.123);
  width: 100%;
  height: 100%;
`;

const MyInfos = () => {
  return <RightWrapper>{"<ListeFilm films={user.films} />"}</RightWrapper>;
};

export default MyInfos;
