import React from "react";

import styled from "styled-components";
import { MessageType } from "../containers/Chatbox";

const Container = styled.div<{ user: boolean }>`
  background: ${(p) => (p.user ? p.theme.colors.backgroundColor : "#777")};
  max-width: 70%;
  height: auto;
  padding: ${(props) => props.theme.metrics.extraSmallSize};
  text-align: center;
  align-self: ${(p) => (p.user ? "flex-end" : "flex-start")};
  margin-top: ${(props) => props.theme.metrics.extraSmallSize};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
`;

const MessageText = styled.p`
  color: #fff;
  margin: 0;
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
