import React, { useState } from "react";
import styled from "styled-components";

import LeftMenu from "../components/userProfile/LeftMenu";
import MyFilms from "../components/userProfile/MyFilms";
import MyInfos from "../components/userProfile/MyInfos";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 2em;
  height: 83%;
  display: flex;
  flex-direction: row;
`;

const UserProfile = () => {
  const [route, setRoute] = useState("/me");
  return (
    <Wrapper>
      <LeftMenu route={route} setRoute={setRoute} />
      {route === "/me" && <MyInfos />}
      {route === "/films" && <MyFilms />}
    </Wrapper>
  );
};

export default UserProfile;
