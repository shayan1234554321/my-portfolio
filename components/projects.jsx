import React from "react";
import { styled } from "styled-components";
import { colors, width } from "../utilities/common";
import { CustomButton } from "../elements/button";
import fonts from "../hooks/font";
import laptop from "../assets/images/laptop.png";
import arrow from "../assets/images/arrow.png";
import project1 from "../assets/images/project1.png";

const Main = styled.div`
  width: 100%;
  max-width: ${width.maxWidth};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // position: relative;
`;

const Top = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const BlackBg = styled.div`
  z-index: 1;
  background-color: ${colors.blackProject};
  width: 100%;
  height: 50%;
  top: 100vh;
  left: 0;
  position: absolute;
`;

const Bottom = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.background};
`;

const Description = styled.p`
  text-align: center;
  font-size: ${({ normal }) => normal};
  width: 700px;
  margin-top: 50px;
  margin-bottom: 20px;
  opacity: 0.7;
`;

const Title = styled.h2`
  font-size: 128px;
  font-weight: bold;
  color: white;
  margin-top: 60px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Laptop = styled.img`
  position: absolute;
  mix-blend-mode: darken;
  z-index: 2;
`;

const ProjectImage = styled.img`
  z-index: 2;
  position: absolute;
  width: 515px;
  transform: translateY(-10px) translateX(-2px);
`;

const Left = styled.div`
  position: absolute;
  left: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  transform: rotateZ(180deg);
  z-index: 2;
`;

const Right = styled.div`
  position: absolute;
  right: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  z-index: 2;
`;

const Arrow = styled.img`
  width: 20px;
`;

const Dot1 = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.red};
  right: 250px;
`;

const Dot2 = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.red};
  left: 250px;
  bottom: 100px;
`;

const Dot3 = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.red};
  left: 450px;
  top: 50px;
`;

const Box1 = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 4px solid ${colors.blue};
  right: 450px;
  top: 50px;
  transform: rotateZ(-10deg);
`;

const Box2 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 4px solid ${colors.blue};
  left: 350px;
  top: 200px;
  transform: rotateZ(45deg);
`;

function Projects() {
  const { normal } = fonts();

  return (
    <Main>
      <BlackBg />
      <Top>
        <Title>FLAME CAFE</Title>
        <Dot1 />
        <Dot2 />
        <Dot3 />
        <Box1 />
        <Box2 />
      </Top>
      <Bottom>
        <Description fontSize={normal}>
          A blockchain is a decentralized, distributed and public digital ledger
          that is used to record transactions across many computers.
        </Description>
        <Buttons>
          <CustomButton long color={colors.blue}>
            CODE
          </CustomButton>
          <CustomButton long color={colors.red}>
            VISIT
          </CustomButton>
        </Buttons>
      </Bottom>

      <Laptop src={laptop.src} />
      <Left>
        <Arrow src={arrow.src} />
      </Left>
      <Right>
        <Arrow src={arrow.src} />
      </Right>
      <ProjectImage src={project1.src} />
    </Main>
  );
}

export default Projects;
