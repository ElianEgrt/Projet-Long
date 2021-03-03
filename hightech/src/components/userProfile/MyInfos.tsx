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
  margin-bottom: 1em;
`;

const TitleIcon = styled.div`
  margin-right: 1em;
`;

const Formulaire = styled.div`
  display : flex-block;
`;

const Label = styled.div`
  margin-right: 1em;
`;

const Input = styled.div`
  margin-bottom: 1em;
  max-width:fit-content%;
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
      <Formulaire>
      <form>
        <Label>
        <label htmlFor="fname">    Prénom : </label>
        </Label>
        <Input>
        <input type="text" id="fname" name="fname"  />
        </Input>
        <Label>
        <label htmlFor="lname">    Nom :  </label>
        </Label>
        <Input>
        <input type="text" id="lname" name="lname" />
        </Input>
        <Label>
        <label htmlFor="gender">    Genre : </label>
        </Label>
        <Input>
        <input list="gender" type="text" id="locale" name="locale"/>
        </Input>
        <datalist id="gender"> 
          <option value="Femme" />
          <option value="Homme" />
        </datalist>
        <Label>
        <label htmlFor="locale">    Date de naissance :  </label>
        </Label>
        <Input>
        <input type="date" id="locale" name="locale" />
        </Input>
        <Label>
        <label htmlFor="locale">    Langue :  </label>
        </Label>
        <Input>
        <input list="langue" type="text" id="locale" name="locale" />
        </Input>
        <datalist id="langue"> 
          <option value="FR" />
          <option value="EN" />
          <option value="IT" />
          <option value="DE" />
          <option value="US" />
          <option value="ES" />
        </datalist>
        <Label>
        <label htmlFor="locale">    Nombre d'enfant(s) à charge :  </label>
        </Label>
        <Input>
        <input type="number" min="0" id="locale" name="locale" />
        </Input>
        <Label>
        <label htmlFor="email" >    Email :  </label>
        </Label>
        <Input>
        <input type="email" id="email" name="email" />
        </Input>
        <Label>
        <label htmlFor="password">    Mot de passe :  </label>
        </Label>
        <Input>
        <input type="password" id="password" name="password" />
        </Input>
      </form>
      </Formulaire>
    </RightWrapper>
  );
};

export default MyInfos;
