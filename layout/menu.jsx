import React from "react";
import logo from "../assets/images/logo.png";
import { styled } from "styled-components";
import { width } from "../utilities/common";
import fonts from '../hooks/font'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 100px;
  position: absolute;
  width: calc(100% - 200px );
  z-index: 10 ;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${width.maxWidth };
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  font-weight: bold;
  opacity: 0.7;
  letter-spacing: 1px;
  font-size: ${({normal})=> normal };
`

function Menu() {
  const { normal } = fonts()

  return (
    <Header>
      <HeaderContainer>
        <img src={logo.src} alt="logo image" />
        <MenuList normal={normal} >
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </MenuList>
      </HeaderContainer>
    </Header>
  );
}

export default Menu;
