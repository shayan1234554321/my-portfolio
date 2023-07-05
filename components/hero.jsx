import React, { useRef } from "react";
import styled from "styled-components";
import { colors, width } from "../utilities/common";
import { CustomButton, IconContainer } from "../elements/button";
import phone from "../assets/images/phone.png";
import carmed from "../assets/images/carmed.png";
import skupreme from "../assets/images/skupreme.png";
import microverse from "../assets/images/microverse.png";
import earth from "../assets/images/earth.png";
import satellite from "../assets/images/satellite.png";
import fonts from "../hooks/font";
import { mousemove, mouseout } from "../hooks/magnetic";
import { motion } from "framer-motion";

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
  max-width: ${width.maxWidth};
  position: relative;
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

  @media (max-width: 426px) {
    width: 300px;
    margin-bottom: 250px;
  }
`;

const Red = styled.span`
  color: ${colors.red};
  font-weight: bold;
`;

const H3 = styled(motion.h3)`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: normal;
  ${({ dim }) => dim && "opacity: 0.5 ;"}
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing} ;`}
`;

const H1 = styled(motion.h3)`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: 20px;
`;

const IconContainerCarmed = styled(IconContainer)`
  position: absolute;
  top: 100px;
  right: 20%;
  transition: 0.05s ease-in-out;
  @media (max-width: 769px) {
    right: 10%;
    width: 20px;
    height: 20px;
  }
`;

const IconContainerSkupreme = styled(IconContainer)`
  position: absolute;
  left: 20%;
  top: 30%;
  @media (max-width: 769px) {
    top: 55%;
    left: 10%;
    width: 20px;
    height: 20px;
  }
`;

const IconContainerMicroverse = styled(IconContainer)`
  position: absolute;
  right: 15%;
  bottom: 40%;
  @media (max-width: 769px) {
    bottom: 30%;
    right: 5%;
    width: 20px;
    height: 20px;
  }
`;

const EarthContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(75%);
  @media (max-width: 426px) {
    transform: translateX(-50%) translateY(60%);
  }
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
  @media (max-width: 426px) {
    width: 700px;
    height: 700px;
  }
`;

const Satellite = styled.img`
  position: absolute;
  left: 480px;
  width: 200px;
  z-index: 4;
  transform: translateY(-600px);
  animation: rotating2 40s linear infinite;
  @keyframes rotating2 {
    0% {
      transform: rotateZ(90deg) translateY(-600px);
    }
    100% {
      transform: rotateZ(-90deg) translateY(-600px);
    }
  }

  @media (max-width: 426px) {
    left: 550px;
    width: 110px;
    transform: translateY(-350px);
    animation: rotating2 20s linear infinite;
    @keyframes rotating2 {
      0% {
        transform: rotateZ(90deg) translateY(-350px);
      }
      100% {
        transform: rotateZ(-90deg) translateY(-350px);
      }
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

  @media (max-width: 426px) {
    width: 70px;
    left: 560px;
    transform: translateY(-350px);
    animation: rotating3 30s linear infinite;
    @keyframes rotating3 {
      0% {
        transform: rotateZ(-90deg) translateY(-350px);
      }
      100% {
        transform: rotateZ(90deg) translateY(-350px);
      }
    }
  }
`;

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundRelative>
        <EarthContainer>
          <span
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1200px",
              height: "1200px",
            }}
          >
            <EarthImage src={earth.src} />
            <Satellite src={satellite.src} />
            <Satellite2 src={satellite.src} />
          </span>
        </EarthContainer>
      </BackgroundRelative>
    </BackgroundContainer>
  );
};

function Hero({ hero, contact }) {
  const { normal, xLarge } = fonts();

  function visitContact() {
    contact.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Main ref={hero}>
      <Background />
      <MainText>
        <H3
          fontSize={normal}
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" ,transition: { duration: 0.1 } }}
        >
          HI THERE!
        </H3>
        <H1
          fontSize={xLarge}
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" ,transition: { duration: 0.3 } }}
        >
          I AM SHAYAN
        </H1>
        <H3
          fontSize={normal}
          dim={true}
          letterSpacing="1px"
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)",transition: { duration: 0.6 }  }}
        >
          Leveraging <Red>Web 3.0</Red>, 3D libraries, and innovative frameworks
          to create immersive applications that deliver cutting-edge user
          experiences.
        </H3>
        <CustomButton
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)",transition: { duration: 1 }  }}
          color={colors.blue}
          icon={phone}
          style={{ marginTop: "20px" }}
          onClick={visitContact}
        >
          FULL STACK DEVELOPER
        </CustomButton>
      </MainText>

      <IconContainerCarmed
        initial={{ opacity: 0, marginTop: "30px" }}
        whileInView={{ opacity: 1, marginTop: "0px" ,transition: { duration: 1 } }}
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        shadow
        icon={carmed}
        description="Worked As Full-Stack Developer At Carmed"
        width="25px"
      />
      <IconContainerSkupreme
        initial={{ opacity: 0, marginTop: "30px" }}
        whileInView={{ opacity: 1, marginTop: "0px",transition: { duration: 1 } }}
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        shadow
        icon={skupreme}
        description="Worked As Frontend Developer At Skupreme"
        width="20px"
      />
      <IconContainerMicroverse
        initial={{ opacity: 0, marginBottom: "-30px" }}
        whileInView={{ opacity: 1, marginBottom: "0px" ,transition: { duration: 1 }}}
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        shadow
        icon={microverse}
        description="Worked As Code Reviewer At Microverse"
      />
    </Main>
  );
}

export default Hero;
