import React from "react";
import styled from "styled-components";

import { AiFillEdit } from "react-icons/ai";

import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

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
  margin-bottom: 20px;
`;

const TitleIcon = styled.div`
  margin-right: 1em;
`;

const LoginForm = styled.form`
  max-height: 100%;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  .field {
    margin-bottom: 2em;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    div,
    input {
      width: 100%;
    }
  }
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
      <LoginForm>
        <div className="field">
          <InputLabel htmlFor="gender">Nom</InputLabel>
          <Input type="text" id="fname" name="fname" />
        </div>
        <div className="field">
          <InputLabel htmlFor="gender">Prénom</InputLabel>
          <Input type="text" id="lname" name="lname" />
        </div>
        <div className="field">
          <InputLabel htmlFor="gender">Genre</InputLabel>
          <Select>
            <option aria-label="None" value="" />
            <option value="Femme">Femme</option>
            <option value="Homme">Homme</option>
          </Select>
        </div>
        <div className="field">
          <InputLabel htmlFor="gender">Date de naissance :</InputLabel>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="field">
          <InputLabel htmlFor="locale">Langue préférée</InputLabel>
          <Select>
            <option aria-label="None" value="" />
            <option value={"fr"}>France</option>
            <option value={"en-us"}>U.S.A</option>
            <option value={"es"}>Espagne</option>
          </Select>
        </div>
        <div className="field">
          <InputLabel htmlFor="email">Adresse email</InputLabel>
          <Input type="email" id="email" name="email" />
        </div>
        <div className="field">
          <InputLabel htmlFor="password">Mot de passe :</InputLabel>
          <Input type="password" id="password" name="password" />
        </div>
        <div className="field">
          <Button
            size="large"
            variant="outlined"
            fullWidth={true}
            startIcon={<AiFillEdit />}
          >
            Edit
          </Button>
        </div>
      </LoginForm>
    </RightWrapper>
  );
};

export default MyInfos;
