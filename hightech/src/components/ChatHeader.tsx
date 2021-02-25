import React from "react";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { SiProbot } from "react-icons/si";
import { RiCloseFill } from "react-icons/ri";

const Header = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  height: ${(props) => props.theme.metrics.extraLargeSize};
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1em;
  color: white;
`;

const MinimizeButton = styled.div`
  position: absolute;
  right: 1em;
  cursor: pointer;
  &:hover {
    font-size: 1.05em;
  }
  transition: ease font-size 250ms;
`;

interface Props {
  minimizeFunc: () => void;
}
const ChatHeader = (props: Props) => {
  return (
    <Header>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <div>
          <SiProbot />
        </div>
      </IconContext.Provider>
      ChatBot
      <MinimizeButton
        onClick={() => {
          props.minimizeFunc();
        }}
      >
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div>
            <RiCloseFill />
          </div>
        </IconContext.Provider>
      </MinimizeButton>
    </Header>
  );
};

export default ChatHeader;
