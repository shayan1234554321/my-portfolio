import React from "react";
import { styled } from "styled-components";
import { colors, width } from "../utilities/common";
import { CustomButton, IconContainer } from "../elements/button";
import phone from "../assets/images/phone.png";
import carmed from "../assets/images/carmed.png";
import skupreme from "../assets/images/skupreme.png";
import microverse from "../assets/images/microverse.png";
import earth from "../assets/images/earth.png";
import satellite from "../assets/images/satellite.png";
import fonts from "../hooks/font";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  pointer-events: none;
`;

const BackgroundRelative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const MainText = styled.div`
  width: 50%;
  max-width: 450px;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const Red = styled.span`
  color: ${colors.red};
  font-weight: bold;
`;

const H3 = styled.h3`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: normal;
  ${({ dim }) => dim && "opacity: 0.5 ;"}
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing} ;`}
`;

const H1 = styled.h3`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: 20px;
`;

const IconContainerCarmed = styled(IconContainer)`
  position: absolute;
  transform: translateX(450px) translateY(-300px);
`;

const IconContainerSkupreme = styled(IconContainer)`
  position: absolute;
  transform: translateX(-450px) translateY(-150px);
`;

const IconContainerMicroverse = styled(IconContainer)`
  position: absolute;
  transform: translateX(400px) translateY(50px);
`;

const EarthContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(70%);
`;

const EarthImage = styled.img`
  width: 1200px;
  height: 1200px;
  filter: brightness(200%);
  animation: rotating 140s linear infinite;
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  z-index: 2;
`;

const BackLight = styled.span`
  position: absolute;
  left: -25vw;
  bottom: 340px;
  transform: translateY(-500px);
  z-index: 3;
  width: 150vw;
  height: 200px;
  background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 20% , rgba(0,0,0,0) 50%);;
`;

const Satellite = styled.img`
  position: absolute;
  left: 480px;
  width: 200px;
  z-index: 4;
  transform: translateY(-400px);
  animation: rotating2 40s linear infinite;
  @keyframes rotating2 {
    0% {
      transform: rotateZ(90deg) translateY(-600px);
    }
    100% {
      transform: rotateZ(-90deg) translateY(-600px);
    }
  }
`;

const Satellite2 = styled.img`
  position: absolute;
  left: 540px;
  width: 100px;
  z-index: 3;
  transform: translateY(-400px);
  animation: rotating3 50s linear infinite;
  @keyframes rotating3 {
    0% {
      transform: rotateZ(-90deg) translateY(-600px);
    }
    100% {
      transform: rotateZ(90deg) translateY(-600px);
    }
  }
`;

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundRelative>
        <EarthContainer>
          <span style={{position: "relative" , display: "flex" , alignItems: "center" , justifyContent: "center" , width: "1200px" , height: "1200px"}} >
            <EarthImage src={earth.src} />
            <BackLight />
            <Satellite  src={satellite.src} />
            <Satellite2  src={satellite.src} />
          </span>
        </EarthContainer>
      </BackgroundRelative>
    </BackgroundContainer>
  );
};

function Hero() {
  const { normal, xLarge } = fonts();

  return (
    <Main>
      <Background />
      <MainText>
        <H3 fontSize={normal}>HI THERE!</H3>
        <H1 fontSize={xLarge}>I AM SHAYAN</H1>
        <H3 fontSize={normal} dim={true} letterSpacing="1px">
          Leveraging <Red>Web 3.0</Red>, 3D libraries, and innovative frameworks
          to create immersive applications that deliver cutting-edge user
          experiences.
        </H3>
        <CustomButton
          color={colors.blue}
          icon={phone}
          style={{ marginTop: "20px" }}
        >
          FULL STACK DEVELOPER
        </CustomButton>
      </MainText>

      <IconContainerCarmed shadow icon={carmed} />
      <IconContainerSkupreme shadow icon={skupreme} width="20px" />
      <IconContainerMicroverse shadow icon={microverse} />
    </Main>
  );
}

export default Hero;
