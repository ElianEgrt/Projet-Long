import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBook } from "react-icons/bs";
import { IconType } from "react-icons";

const NBar = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 17%;
`;

const NBut = styled.div`
  background-color: black;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .buttons {
    color: white;
    display: flex;
    flex-direction: row;
  }
`;

const TitleText = styled.div`
  font-size: ${(props) => props.theme.metrics.extraLargeSize};
  color: white;
  justify-self: flex-end;
  text-align: center;
  vertical-align: middle;
  padding: 0.2em;
`;

const ButtonIconStyled = styled.div`
  font-size: ${(props) => props.theme.metrics.largeSize};
  a {
    color: white;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
  margin-left: 1em;
`;

const ButtonIcon = (Icon: IconType, route: string) => {
  return (
    <ButtonIconStyled>
      <Link to={route}>
        <Icon />
      </Link>
    </ButtonIconStyled>
  );
};

interface Props {}

const Navbar = (props: Props) => {
  return (
    <NBar>
      <TitleText>Allo7né</TitleText>
      <NBut>
        <div className="buttons">
          {ButtonIcon(HiOutlineHome, "/")}
          {ButtonIcon(BsBook, "/tutorial")}
        </div>
        <div className="buttons">
          {ButtonIcon(IoSettingsOutline, "/")}
          {ButtonIcon(FaUserCircle, "/profile")}
        </div>
      </NBut>
    </NBar>
  );
};

export default Navbar;
