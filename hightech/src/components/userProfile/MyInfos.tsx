import React from "react";
import styled from "styled-components";

import { AiFillEdit } from "react-icons/ai";

const RightWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.123);
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2em;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 40px;
  padding-bottom: 10px;
  border-bottom: 3px groove;
`;

const TitleIcon = styled.div`
  margin-right: 1em;
`;

const MyInfos = () => {
  return (
    <RightWrapper>
      <Title>
        <TitleIcon>
          <AiFillEdit />
        </TitleIcon>
        Editer mon profil.
      </Title>
      <form>
        <label htmlFor="fname">Prénom :</label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="lname">Nom :</label>
        <input type="text" id="lname" name="lname" />
        <label htmlFor="gender">Genre :</label>
        <input type="text" id="gender" name="gender" />
        <label htmlFor="locale">Langue :</label>
        <input type="text" id="locale" name="locale" />
        <label htmlFor="email">Email :</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Mot de passe :</label>
        <input type="text" id="password" name="password" />
      </form>
    </RightWrapper>
  );
};

export default MyInfos;
