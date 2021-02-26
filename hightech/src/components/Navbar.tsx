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
  height: ${(props) => props.theme.metrics.extraLargeSize};
  padding: ${(props) => props.theme.metrics.mediumSize};
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .buttons {
    width: 7em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TitleText = styled.div`
  font-size: ${(props) => props.theme.metrics.extraLargeSize};
  color: white;
  justify-self: flex-end;
`;

const ButtonIconStyled = styled.div`
  font-size: ${(props) => props.theme.metrics.largeSize};
  a {
    color: white;
  }
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
      <div className="buttons">
        {ButtonIcon(HiOutlineHome, "/")}
        {ButtonIcon(BsBook, "/tutorial")}
      </div>
      <TitleText>Allo7né</TitleText>
      <div className="buttons">
        {ButtonIcon(IoSettingsOutline, "/")}
        {ButtonIcon(FaUserCircle, "/")}
      </div>
    </NBar>
  );
};

export default Navbar;
