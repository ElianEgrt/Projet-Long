import React from "react";
import styled from "styled-components";

import { FaUserCircle } from "react-icons/fa";
import { IoCaretForward } from "react-icons/io5";

const LeftWrapper = styled.div`
  margin-right: 2em;
  width: 300px;
  height: 100%;
`;

const LeftMenuWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const LeftMenuItem = styled.div<{ active: boolean }>`
  font-size: 20px;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.055);
  }
  background-color: ${(p) =>
    p.active ? "rgba(0, 0, 0, 0.070)" : "transparent"};
`;

const LeftProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 3px groove;
`;

const LeftProfileIcon = styled.div`
  font-size: 50px;
  padding: 0.4em;
  display: flex;
  justify-content: center;
`;

const LeftProfileName = styled.div`
  font-size: 20px;
  padding: 0.5em;
  display: flex;
  justify-content: center;
`;

const MenuLink = (
  title: string,
  route: string,
  activeRoute: string,
  setRoute: React.Dispatch<React.SetStateAction<string>>
) => {
  return (
    <LeftMenuItem
      active={route === activeRoute}
      onClick={() => setRoute(route)}
    >
      {title}
      <IoCaretForward />
    </LeftMenuItem>
  );
};

const LeftMenu = (props: {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <LeftWrapper>
      <LeftMenuWrapper>
        <LeftProfileWrapper>
          <LeftProfileIcon>
            <FaUserCircle />
          </LeftProfileIcon>
          <LeftProfileName>
            <p>props.user.name</p>
          </LeftProfileName>
        </LeftProfileWrapper>
        {MenuLink("Mes informations", "/me", props.route, props.setRoute)}
        {MenuLink("Mes films", "/films", props.route, props.setRoute)}
      </LeftMenuWrapper>
    </LeftWrapper>
  );
};

export default LeftMenu;
