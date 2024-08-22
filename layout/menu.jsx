import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import list from "../assets/images/list.png";
import styled from "styled-components";
import { width } from "../utilities/common";
import fonts from '../hooks/font';
import { colors } from "../utilities/common";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 100px;
  background-color: ${ colors.background };
  width: calc(100% - 200px );
  z-index: 10 ;
  @media (max-width: 769px) {
    width: calc(100% - 40px );
    padding: 20px 20px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${width.maxWidth };
`;

const MenuList = styled.ul`
  cursor: pointer;
  display: flex;
  list-style: none;
  gap: 20px;
  font-weight: bold;
  opacity: 0.7;
  letter-spacing: 1px;
  z-index: 14;
  font-size: ${({normal})=> normal };
  transition: 0.3s ease-in-out;
  @media (max-width: 769px) {
    display: none;
  }
  li:hover {
    transform: scale(1.05);
  }
  li:active {
    transform: scale(0.8);
  }
`

const MenuListMobile = styled.ul`
  list-style: none;
  padding: 40px;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: ${({normal})=> normal };
  transition: 0.3s ease-in-out;
  li {
    margin: 10px 0;
  }
  li:nth-child(1) {
    width: min-content;
    height: min-content;
    font-size: 40px;
    transform: rotateZ(45deg);
  }
  li:hover {
    transform: scale(1.1);
  }
`

const MobileMenu = styled.img`
  display: none;
  @media (max-width: 769px) {
    display: block;
  }
`

const MobileMenuList = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(6px);
`

const SocialLink = styled.div`
  margin-left: 210px;
  display: flex;
  gap: 20px;

  a:active {
    transform: scale(0.8);
  }

  @media (max-width: 769px) {
    margin-left: 0;
  }
`

function Menu({ about , projects , contact }) {
  const { normal } = fonts()
  const [ showMenu , setShowMenu ] = useState(false)

  function visitProjects(){
    setShowMenu(false)
    projects.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  function visitAbout(){
    setShowMenu(false)
    about.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  function visitContact(){
    setShowMenu(false)
    contact.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <Header>
      <HeaderContainer>
        <img src={logo.src} alt="logo image" />
        <SocialLink>
          <a href="https://github.com/shayan1234554321" target="_blank" >
            <img src={github.src} />
          </a>
          <a href="https://www.linkedin.com/in/shayan-khan20/" target="_blank" >
            <img src={linkedin.src} />
          </a>
        </SocialLink>
        <MenuList normal={normal} >
          <li onClick={visitProjects} >COMPANIES</li>
          <li onClick={visitAbout} >ABOUT</li>
          <li onClick={visitContact} >CONTACT</li>
        </MenuList>
        <MobileMenu src={list.src} onClick={()=>setShowMenu(true)} />
      </HeaderContainer>
      <MobileMenuList style={{display: showMenu? "block": "none"}} >
        <MenuListMobile normal={normal} >
          <li onClick={()=>setShowMenu(false)} >+</li>
          <li onClick={visitProjects} >COMPANIES</li>
          <li onClick={visitAbout} >ABOUT</li>
          <li onClick={visitContact} >CONTACT</li>
        </MenuListMobile>
      </MobileMenuList>
    </Header>
  );
}

export default Menu;
