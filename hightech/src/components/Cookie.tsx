import React from "react";
import CookieBanner from "react-cookie-banner";
import styled from "styled-components";

const styles = {
  banner: {
    height: 57,
    background: "rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat",
    backgroundSize: "30px 30px",
    backgroundColor: "",
    fontSize: "15px",
    fontWeight: 600,
  },
  button: {
    border: "1px solid white",
    borderRadius: 4,
    width: 66,
    height: 32,
    lineHeight: "32px",
    background: "transparent",
    color: "white",
    fontSize: "14px",
    fontWeight: 600,
    opacity: 1,
    right: 20,
    marginTop: -18,
  },
  message: {
    display: "block",
    padding: "9px 67px",
    lineHeight: 1.3,
    textAlign: "left",
    marginRight: 150,
    color: "white",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0px;
`;
const message =
  "Allo7né utilise les cookies pour garantir aux utilisateurs une utilisation optimale de ses fonctionnalités pour une expérience de streaming optimale. En continuant de naviguer sur le site vous acceptez l'utilisation des cookies.";

const Cookie = (props: {}) => {
  return (
    <Wrapper>
      <CookieBanner
        styles={styles}
        message={message}
        link={<a href="http://nocookielaw.com/">Plus d'informations.</a>}
        buttonMessage="Close"
        dismissOnScrollThreshold={100}
      />
    </Wrapper>
  );
};

export default Cookie;
