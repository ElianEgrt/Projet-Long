import React from "react";

import styled from "styled-components";
import { MessageType } from "../containers/Chatbox";

const Container = styled.div<{ user: boolean }>`
  background: ${(p) => (p.user ? "lightcoral" : "coral")};
  margin: 0px;
  width: 70%;
  height: auto;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  text-align: center;
  align-self: ${(p) => (p.user ? "flex-end" : "flex-start")};
`;

const MessageText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
`;

interface Props {
  message: MessageType;
}

class Message extends React.Component<Props, {}> {
  render() {
    return (
      <Container user={this.props.message.userSent}>
        <MessageText>{this.props.message.message}</MessageText>
      </Container>
    );
  }
}

export default Message;
