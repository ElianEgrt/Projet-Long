import styled from "styled-components";

const Spinner = styled.div<{ size: string; border: string }>`
  .lds-dual-ring {
    display: flex;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: ${(p) => p.size};
    height: ${(p) => p.size};
    border-radius: 50%;
    border: ${(p) => p.border} solid #000000;
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

const LoadingSpinner = (props: { size: string; border: string }) => (
  <Spinner size={props.size} border={props.border}>
    <div className="lds-dual-ring"></div>
  </Spinner>
);

export default LoadingSpinner;
