import React from "react";
import styled from "styled-components";
import { colors } from "../utilities/common";
import logo from "../assets/images/logoWhite.png";
import fonts from '../hooks/font'

const FooterComp = styled.footer`
  width: calc(100% - 20px);
  padding: 10px;
  background-color: ${colors.blackProject};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const FooterContainer = styled.footer`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  font-size: ${({fontSize})=> fontSize};
  a {
    text-decoration: none;  
    color: white;
  }
`;

function Footer() {

  const { normal } = fonts()

  return (
    <FooterComp>
      <FooterContainer>
        <img src={logo.src} alt="" />
        <Ul fontSize={normal} >
          <li>
            <a href="https://drive.google.com/file/d/1ZIyfFOkMusKeHF4vUuMOyRD0WCInPN17/view?usp=sharing" target="_blank" >
              RESUME
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shayan-khan20/" target="_blank" >
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://github.com/shayan1234554321" target="_blank" >
              GITHUB
            </a>
          </li>
        </Ul>
      </FooterContainer>
    </FooterComp>
  );
}

export default Footer;
