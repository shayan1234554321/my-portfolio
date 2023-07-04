import React, { useState } from "react";
import { styled } from "styled-components";
import { colors, width } from "../utilities/common";
import { CustomButton } from "../elements/button";
import fonts from "../hooks/font";
import laptop from "../assets/images/laptop.png";
import arrow from "../assets/images/arrow.png";
import project1 from "../assets/images/project1.png";
import { mousemove, mouseout } from "../hooks/magnetic";
import { motion } from "framer-motion";

const Main = styled.div`
  position: relative;
  width: 100%;
  max-width: ${width.maxWidth};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
`;

const Top = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const BlackBg = styled.div`
  z-index: -1;
  background-color: ${colors.blackProject};
  width: 101vw;
  height: 50%;
  top: 0;
  left: 50%;
  transform: translateX(calc(-50%));
  position: absolute;
`;

const Bottom = styled.div`
  position: relative;
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
  ${({ changing }) => changing && "animation: opacityChange 2s ease-in-out;"}
  @media (max-width: 426px) {
    margin-top: -30px;
    width: 90%;
  }

  @keyframes opacityChange {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled(motion.h2)`
  font-size: 110px;
  font-weight: bold;
  color: white;
  margin-top: 60px;
  z-index: 3;
  text-align: center;
  ${({ changing }) => changing && "animation: fallDownTitle 2.5s ease-in-out;"}

  @keyframes fallDownTitle {
    0% {
      transform: rotateZ(0deg) translateX(-0px);
      margin-top: 60px;
    }
    50% {
      transform: rotateZ(-160deg) translateX(-300px);
      margin-top: 1500px;
    }
    100% {
      transform: rotateZ(0deg) translateX(-0px);
      margin-top: 60px;
    }
  }

  @media (max-width: 768px) {
    font-size: 80px;
    margin-top: 130px;
    @keyframes fallDownTitle {
      0% {
        transform: rotateZ(0deg) translateX(-0px);
        margin-top: 130px;
      }
      50% {
        transform: rotateZ(-160deg) translateX(-200px);
        margin-top: 1200px;
      }
      100% {
        transform: rotateZ(0deg) translateX(-0px);
        margin-top: 130px;
      }
    }
  }
  @media (max-width: 426px) {
    font-size: 40px;
    margin-top: 170px;
    @keyframes fallDownTitle {
      0% {
        transform: rotateZ(0deg) translateX(-0px);
        margin-top: 170px;
      }
      50% {
        transform: rotateZ(-160deg) translateX(-100px);
        margin-top: 1000px;
      }
      100% {
        transform: rotateZ(0deg) translateX(-0px);
        margin-top: 170px;
      }
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const Laptop = styled.img`
  position: absolute;
  mix-blend-mode: darken;
  z-index: 5;
  height: 500px;

  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 426px) {
    height: 200px;
  }
`;

const ProjectImage = styled.img`
  z-index: 5;
  position: absolute;
  width: 390px;
  margin-bottom: 10px;
  margin-right: 2px;
  ${({ changing }) => changing && "animation: brightnessChange 2s ease-in-out;"}

  @media (max-width: 768px) {
    margin-bottom: 16px;
    margin-right: 4px;
    width: 310px;
  }

  @media (max-width: 426px) {
    margin-right: 2px;
    margin-bottom: 8px;
    width: 157px;
  }

  @keyframes brightnessChange {
    0% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(0);
    }
    100% {
      filter: brightness(1);
    }
  }
`;

const Left = styled.div`
  position: absolute;
  cursor: pointer;
  left: 3%;
  top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  z-index: 2;
  ${({ disable }) => disable && "pointer-events: none;"}

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    top: -15px;
  }
`;

const Right = styled.div`
  position: absolute;
  right: 3%;
  cursor: pointer;
  top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  z-index: 2;
  ${({ disable }) => disable && "pointer-events: none;"}

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    top: -15px;
  }
`;

const Arrow = styled.img`
  pointer-events: none;
  width: 20px;
  @media (max-width: 768px) {
    width: 15px;
  }
`;

const Dot1 = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.red};
  right: 5%;
  ${({ changing }) => changing && "animation: fallDownCommon 2.3s ease-in-out;"}
`;

const Dot4 = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.red};
  left: 250px;
  top: 80%;
  ${({ changing }) => changing && "animation: fallDownCommon 2.5s ease-in-out;"}
`;

const Dot3 = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.red};
  left: 25%;
  top: 50px;
  ${({ changing }) => changing && "animation: fallDownCommon 2.7s ease-in-out;"}

  @keyframes fallDownCommon {
    0% {
      margin-top: 0px;
    }
    50% {
      margin-top: 1200px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

const Box1 = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 4px solid ${colors.blue};
  right: 20%;
  top: 30%;
  transform: rotateZ(-10deg);
  ${({ changing }) => changing && "animation: fallDownCommon 2.5s ease-in-out;"}
`;

const Box2 = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 4px solid ${colors.blue};
  left: 18%;
  top: 35%;
  transform: rotateZ(30deg);
  ${({ changing }) => changing && "animation: fallDownCommon 3s ease-in-out;"}
`;

function Projects({ projects }) {
  const { normal } = fonts();
  const [current, setCurrent] = useState(0);
  const [changing, setChanging] = useState(false);
  const myProjects = [
    {
      name: "Flame Cafe",
      image: project1,
      description:
        "A blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers.",
      code: "https://github.com/shayan1234554321/flame-cafe",
      visit: "https://shayan1234554321.github.io/flame-cafe/dist/",
    },
    {
      name: "Knowledge Hub",
      image: project1,
      description:
        "A blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers.",
      code: "https://github.com/shayan1234554321/flame-cafe",
      visit: "https://shayan1234554321.github.io/flame-cafe/dist/",
    },
  ];

  function visitCode() {
    window.open(myProjects[current].code, "_blank");
  }

  function visitLiveLink() {
    window.open(myProjects[current].visit, "_blank");
  }

  function projectLeft() {
    setChanging(true);
    setTimeout(() => {
      setChanging(false);
    }, [3000]);
    let next = current - 1;
    if (current === 0) {
      next = myProjects.length - 1;
    }
    setTimeout(() => {
      setCurrent(next);
    }, [1500]);
  }

  function projectRight() {
    setChanging(true);
    setTimeout(() => {
      setChanging(false);
    }, [3000]);
    let next = current + 1;
    if (current === myProjects.length - 1) {
      next = 0;
    }
    setTimeout(() => {
      setCurrent(next);
    }, [1500]);
  }

  return (
    <Main ref={projects}>
      <BlackBg />
      <Top>
        <Title
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          changing={changing}
        >
          {myProjects[current].name}
        </Title>
        <Dot1
          changing={changing}
          initial={{
            opacity: 0,
            transform: "translateX(-80px) translateY(10px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px) translateY(0px)",
          }}
        />
        <Dot4
          changing={changing}
          initial={{
            opacity: 0,
            transform: "translateX(80px) translateY(-10px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px) translateY(0px)",
          }}
        />
        <Dot3
          initial={{
            opacity: 0,
            transform: "translateX(40px) translateY(60px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px) translateY(0px)",
          }}
          changing={changing}
        />
        <Box1
          changing={changing}
          initial={{
            opacity: 0,
            transform: "translateX(-80px) translateY(20px) rotateZ(-10deg)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px) translateY(0px) rotateZ(-10deg)",
          }}
        />
        <Box2
          changing={changing}
          initial={{
            opacity: 0,
            transform: "translateX(80px) translateY(10px) rotateZ(30deg)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px) translateY(0px) rotateZ(30deg)",
          }}
        />
      </Top>
      <Bottom>
        <Description fontSize={normal} changing={changing}>
          {myProjects[current].description}
        </Description>
        <Buttons>
          <CustomButton onClick={visitCode} long color={colors.blue}>
            CODE
          </CustomButton>
          <CustomButton onClick={visitLiveLink} long color={colors.red}>
            VISIT
          </CustomButton>
        </Buttons>
        <Left
          disable={changing}
          onClick={projectLeft}
          onMouseMove={mousemove}
          onMouseOut={mouseout}
        >
          <Arrow style={{ transform: "rotateZ(180deg)" }} src={arrow.src} />
        </Left>
        <Right
          disable={changing}
          onClick={projectRight}
          onMouseMove={mousemove}
          onMouseOut={mouseout}
        >
          <Arrow src={arrow.src} />
        </Right>
      </Bottom>

      <Laptop src={laptop.src} />
      <ProjectImage src={myProjects[current].image.src} changing={changing} />
    </Main>
  );
}

export default Projects;
