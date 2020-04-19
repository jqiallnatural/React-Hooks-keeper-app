import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`

const FooterText = styled.p`
   color: #ccc;
`

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>Copyright @ {currentYear}</FooterText>
    </FooterContainer>
  );
}

export default Footer;
