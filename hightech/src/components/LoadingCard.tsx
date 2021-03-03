import React from "react";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.metrics.extraSmallSize};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25em;
  height: 17em;
  margin: 1em;
`;

const Spinner = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000000;
    border-color: #000000 transparent #000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading = () => (
  <Card>
    <LoadingSpinner size="64px" border="6px" />
  </Card>
);
