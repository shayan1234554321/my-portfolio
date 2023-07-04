import React from "react";
import { styled } from "styled-components";
import arrow from "../assets/images/arrowWhite.png";
import { colors } from "../utilities/common";
import { mousemove, mouseout } from "../hooks/magnetic";

const DotNavigationContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 5;
`;
const Dot = styled.div`
  width: 15px;
  height: 15px;
  margin-top: 20px;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
`;

const DotNavigation = () => {
  return (
    <DotNavigationContainer>
      <Dot></Dot>
      <Dot></Dot>
      <Dot></Dot>
    </DotNavigationContainer>
  );
};

const GoToTopContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: ${colors.blue};
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  z-index: 5;
  cursor: pointer;

  @media (max-width: 769px) {
    height: 20px;
    width: 20px;
    padding: 10px;
    right: 10px;
  }

  animation: hoverOut 0.4s ease-in-out;

  &:active {
    transform: scale(0.9);
  }

`;

const GoToTop = ({hero}) => {

  function visitHero(){
    hero.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <GoToTopContainer onMouseMove={mousemove} onMouseOut={mouseout} onClick={visitHero} >
      <img style={{pointerEvents: "none"}} src={arrow.src} />
    </GoToTopContainer>
  );
};

function Navigation({ hero }) {
  return (
    <>
      {/* <DotNavigation /> */}
      <GoToTop hero={hero} />
    </>
  );
}

export default Navigation;
