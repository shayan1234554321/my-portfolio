import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { colors, width, testimonials } from "../utilities/common";
import fonts from "../hooks/font";
import { IconContainer } from "../elements/button";
import {
  microverse,
  hackerRank,
  axios,
  bootstrap,
  css,
  express,
  figma,
  firebase,
  github,
  html,
  jest,
  js,
  materialUI,
  mongoDB,
  next,
  postgreSQL,
  rails,
  reactImage,
  redux,
  ruby,
  tailwind,
  freeCodeCamp,
} from "../utilities/imports";
import { TestimonialCard, Highlighted } from "../elements/common";
import { mousemove, mouseout } from "../hooks/magnetic";
import { motion, useScroll } from "framer-motion";

const ExpertiseContainer = styled.div`
  position: absolute;
  width: 65%;
  min-width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  row-gap: 30px;
  transform: translateX(-50%);
`;

const Expertise = () => {
  return (
    <ExpertiseContainer>
      <IconContainer icon={express} shadow description="Express" />
      <IconContainer icon={figma} width="15px" shadow description="Figma" />
      <IconContainer icon={github} width="25px" shadow description="Github" />
      <IconContainer icon={html} width="20px" shadow description="HTML" />
      <IconContainer icon={js} width="20px" shadow description="Javascript" />
      <IconContainer
        icon={materialUI}
        width="25px"
        shadow
        description="Material UI"
      />
      <IconContainer icon={mongoDB} shadow description="MongoDB" />
      <IconContainer icon={next} width="25px" shadow description="Next.js" />
      <IconContainer
        icon={reactImage}
        width="25px"
        shadow
        description="React.js"
      />
      <IconContainer icon={tailwind} shadow description="Tailwind" />
      <IconContainer
        icon={postgreSQL}
        width="20px"
        shadow
        description="PostgreSQL"
      />
      <IconContainer icon={axios} width="15px" shadow description="Axios" />
      <IconContainer icon={bootstrap} shadow description="Bootstrap" />
      <IconContainer icon={css} width="20px" shadow description="CSS" />
      <IconContainer icon={redux} width="25px" shadow description="Redux" />
      <IconContainer
        icon={firebase}
        width="20px"
        shadow
        description="Firebase"
      />
      <IconContainer icon={ruby} width="20px" shadow description="Ruby" />
      <IconContainer icon={rails} shadow description="Ruby On Rails" />
      <IconContainer icon={jest} width="20px" shadow description="Jest" />
    </ExpertiseContainer>
  );
};

const Main = styled.div`
  background-color: ${colors.background};
  width: 100%;
  max-width: ${width.maxWidth};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

const AboutMe = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  margin-top: 100px;

  @media (max-width: 769px) {
    margin-bottom: 50px;
  }

  @media (max-width: 426px) {
    margin-bottom: 70px;
  }
`;

const Title = styled(motion.h2)`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 426px) {
    width: 300px;
  }
`;

const Description = styled(motion.p)`
  width: 650px;
  opacity: 0.7;
  letter-spacing: 0.5px;
  font-size: ${({ fontSize }) => fontSize};

  @media (max-width: 769px) {
    width: 80%;
  }
`;

const Red = styled.span`
  color: ${colors.red};
  font-weight: bold;
`;

const TechnologiesPc = styled.div`
  margin: 50px 0;
  padding-bottom: 150px;
  z-index: 3;
  position: relative;
  @media (max-width: 769px) {
    display: none;
  }
`;
const TechnologiesMobile = styled.div`
  display: none;
  margin: 50px 0;
  padding-bottom: 150px;
  z-index: 3;
  position: relative;
  transition: 0.1s ; 
  @media (max-width: 769px) {
    display: block ;
  }
`;

const FreeCodeCamp = styled(motion.div)`
  position: absolute;
  right: 5%;
  z-index: 2;
  top: 20%;
  @media (max-width: 769px) {
    top: 25%;
  }

  @media (max-width: 426px) {
    top: 34%;
  }
`;

const HackerRank = styled(motion.div)`
  position: absolute;
  left: 5%;
  z-index: 2;
  @media (max-width: 769px) {
    margin-top: 20px;
  }

  @media (max-width: 426px) {
    margin-top: 200px;
  }
`;

const Microverse = styled(motion.div)`
  position: absolute;
  right: 8%;
  z-index: 2;
  margin-top: 25%;
  @media (max-width: 769px) {
    margin-top: 30%;
  }
  @media (max-width: 426px) {
    margin-top: 100%;
  }
`;

const Box = styled(motion.div)`
  position: absolute;
  left: 10%;
  margin-bottom: 500px;
  width: 30px;
  height: 30px;
  border: 4px solid ${colors.blue};
  transform: rotateZ(10deg);
  opacity: 0.5;

  @media (max-width: 426px) {
    margin-bottom: 350px;
  }
`;

const Plus1 = styled(motion.div)`
  position: absolute;
  left: 20%;
  top: 10%;
  transform: rotateZ(-20deg);
  opacity: 0.5;
  color: ${colors.red};
  font-size: 30px;
  z-index: 2;

  @media (max-width: 769px) {
    top: 5%;
  }
`;

const Plus2 = styled(motion.div)`
  position: absolute;
  right: 15%;
  z-index: 2;
  margin-bottom: 100px;
  transform: rotateZ(-20deg);
  opacity: 0.5;
  color: ${colors.red};
  font-size: 30px;
  @media (max-width: 769px) {
    margin-bottom: 0px;
  }
  @media (max-width: 426px) {
    margin-top: 200px;
  }
`;

const BlueBackgroundBox = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  transform: rotateZ(-15deg) translateX(-50%);
  opacity: 0.2;
  background-image: linear-gradient(
    to left,
    rgba(39, 203, 255, 1),
    rgba(39, 203, 255, 0)
  );
  height: 60vh;
  aspect-ratio: 1/1;
  filter: blur(20px);
  border-radius: 40px;

  @media (max-width: 769px) {
    height: 50vh;
  }

  @media (max-width: 426px) {
    height: 30vh;
  }
`;

const RedBackgroundBox = styled.div`
  position: absolute;
  right: 0;
  top: 300px;
  transform: rotateZ(15deg) translateX(50%);
  opacity: 0.2;
  background-image: linear-gradient(
    to right,
    rgba(255, 39, 39, 1),
    rgba(255, 39, 39, 0)
  );
  height: 60vh;
  aspect-ratio: 1/1;
  filter: blur(20px);
  border-radius: 40px;

  @media (max-width: 769px) {
    height: 50vh;
  }

  @media (max-width: 426px) {
    height: 30vh;
  }
`;

const Testimonials = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const TestimonialsContainer = styled.div`
  transition: 0.1s ;
  display: flex;
  gap: 40px;
`;

function About({ about }) {
  const { normal, xLarge } = fonts();
  const { scrollYProgress   } = useScroll();
  const [ scrollYPosition , setScrollYPosition ] = useState()
  const onScreenAnimation = {
    initial: { opacity: 0, transform: "translateY(30px)" },
    whileInView: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: { duration: 1 },
    },
  };

  const onScreenAnimationPlus = {
    initial: { opacity: 0, transform: "translateY(30px) rotateZ(-20deg)" },
    whileInView: {
      opacity: 1,
      transform: "translateY(0px) rotateZ(-20deg)",
      transition: { duration: 1 },
    },
  };
  
  useEffect(()=>{
    scrollYProgress.onChange(v=> {
      setScrollYPosition(v * 1600)
    })
  },[scrollYProgress ])

  return (
    <Main ref={about}>
      <AboutMe>
        <Title fontSize={xLarge} variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView" >ABOUT ME</Title>
        <Description fontSize={normal} variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView" >
          A highly skilled full-stack developer with expertise in{" "}
          <Red>React, React Native, Node.js, </Red> and{" "}
          <Red>Ruby on Rails.</Red> I have developed real-world projects such as
          working with supply chain management systems or car maintenance
          bidding systems etc. With over 3 years of working in this field, I
          have honed my abilities to thrive in a fast-paced environment,
          continuously learning and adapting to new technologies.
        </Description>
      </AboutMe>
      <TechnologiesPc>
        <Expertise />
      </TechnologiesPc>
      <TechnologiesMobile style={{transform: `translateX(calc(${scrollYPosition}px - 900px )) `}} >
        <Expertise />
      </TechnologiesMobile>
      <Testimonials>
        <Title style={{ marginBottom: "100px" }} fontSize={xLarge}>
          DONT TAKE MY WORDS <Highlighted>ONLY</Highlighted>
        </Title>
        <TestimonialsContainer
          style={{transform: `translateX(calc(-${scrollYPosition}px + 1300px )) `}}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              description={testimonial.description}
              imageSrc={testimonial.image}
              name={testimonial.name}
              relation={testimonial.relation}
            />
          ))}
        </TestimonialsContainer>
      </Testimonials>

      <FreeCodeCamp
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        <IconContainer
          shadow
          icon={freeCodeCamp}
          tick
          description="Certified From Free Code Camp"
        />
      </FreeCodeCamp>
      <HackerRank
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        <IconContainer
          shadow
          icon={hackerRank}
          tick
          description="Certified From Hacker Rank"
        />
      </HackerRank>
      <Microverse
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        <IconContainer
          shadow
          icon={microverse}
          description="Completed Microverse Bootcamp"
        />
      </Microverse>
      <Box
        variants={onScreenAnimationPlus}
        initial="initial"
        whileInView="whileInView"
      />
      <Plus1
        variants={onScreenAnimationPlus}
        initial="initial"
        whileInView="whileInView"
      >
        +
      </Plus1>
      <Plus2
        variants={onScreenAnimationPlus}
        initial="initial"
        whileInView="whileInView"
      >
        +
      </Plus2>
      <BlueBackgroundBox />
      <RedBackgroundBox />
    </Main>
  );
}

export default About;
