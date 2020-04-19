import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #363636;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const TitleH1 = styled.h1`
  color: #fff;
  font-weight: 200;
`;
function Header() {
  return (
    <HeaderContainer>
      <TitleH1>What's the plan?</TitleH1>
    </HeaderContainer>
  );
}

export default Header;
