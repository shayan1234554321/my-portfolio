import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors, width, testimonials } from "../utilities/common";
import fonts from "../hooks/font";
import { IconContainer } from "../elements/button";
import {
  microverse,
  meta,
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
  rails,
  reactImage,
  redux,
  ruby,
  google,
  aws,
  cloudinary,
  sanity,
  stripe,
  three,
  brain,
  circuit,
  fire,
  framermotion,
  socketIo,
  puppeteer
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
      <IconContainer
        noLink
        icon={express}
        shadow
        description="Node.js / Express"
      />
      <IconContainer
        noLink
        icon={figma}
        width="15px"
        shadow
        description="Figma"
      />
      <IconContainer
        noLink
        icon={github}
        width="25px"
        shadow
        description="Github"
      />
      <IconContainer
        noLink
        icon={framermotion}
        width="25px"
        shadow
        description="Framer Motion"
      />
      <IconContainer
        noLink
        icon={html}
        width="20px"
        shadow
        description="HTML / CSS"
      />
      <IconContainer
        noLink
        icon={js}
        width="20px"
        shadow
        description="Javascript"
      />
      <IconContainer
        noLink
        icon={materialUI}
        width="25px"
        shadow
        description="Material UI"
      />
      <IconContainer noLink icon={mongoDB} shadow description="MongoDB" />
      <IconContainer
        noLink
        icon={next}
        width="25px"
        shadow
        description="Next.js"
      />
      <IconContainer
        noLink
        icon={fire}
        width="15px"
        shadow
        description="Fast Learner"
      />
      <IconContainer
        noLink
        icon={socketIo}
        shadow
        description="Socket IO"
      />
      <IconContainer
        noLink
        icon={reactImage}
        width="25px"
        shadow
        description="React / React Native"
      />
      <IconContainer
        noLink
        icon={brain}
        width="20px"
        shadow
        description="Project Manager"
      />
      <IconContainer
        noLink
        icon={puppeteer}
        width="25px"
        shadow
        description="Puppeteer"
      />
      <IconContainer
        noLink
        icon={firebase}
        width="20px"
        shadow
        description="Firebase"
      />
      <IconContainer
        noLink
        icon={jest}
        width="20px"
        shadow
        description="Jest"
      />
      <IconContainer
        noLink
        icon={sanity}
        width="35px"
        shadow
        description="Sanity"
      />
      <IconContainer
        noLink
        icon={circuit}
        width="15px"
        shadow
        description="Effective Communicator"
      />
      <IconContainer
        noLink
        icon={stripe}
        width="30px"
        shadow
        description="Stripe"
      />
      <IconContainer noLink icon={aws} shadow description="AWS" />
      <IconContainer noLink icon={cloudinary} shadow description="Cloudinary" />
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

const TechnologiesPc = styled(motion.div)`
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
  transition: 0.1s;
  @media (max-width: 769px) {
    display: block;
  }
`;

const Google = styled(motion.div)`
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

const Meta = styled(motion.div)`
  position: absolute;
  left: 15%;
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
  transition: 0.1s;
  display: flex;
  gap: 40px;
`;

function About({ about }) {
  const { normal, xLarge } = fonts();
  const { scrollYProgress } = useScroll();
  const [scrollYPosition, setScrollYPosition] = useState();
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

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setScrollYPosition(v * 1600);
    });
  }, [scrollYProgress]);

  return (
    <Main ref={about}>
      <AboutMe>
        <Title
          fontSize={xLarge}
          variants={onScreenAnimation}
          initial="initial"
          whileInView="whileInView"
        >
          ABOUT ME
        </Title>
        <Description
          fontSize={normal}
          variants={onScreenAnimation}
          initial="initial"
          whileInView="whileInView"
        >
          I am a full-stack web developer with over{" "}
          <Red>Three years of experience</Red> , proficient in both frontend and
          backend development. Specializing in{" "}
          <Red>React, Next.js, Express, MongoDB and Node.js</Red> , I create
          responsive designs, integrate third-party tools, and optimize for SEO.
          My expertise extends to building robust backend architectures, and
          design with Figma.
        </Description>
      </AboutMe>
      <motion.h5
        style={{ marginTop: "20px", fontSize: "20px" }}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        <Red>MY SKILL SET</Red>
      </motion.h5>
      <TechnologiesPc
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
      >
        <Expertise />
      </TechnologiesPc>
      <TechnologiesMobile
        style={{
          transform: `translateX(calc(${scrollYPosition}px - 900px )) `,
        }}
      >
        <Expertise />
      </TechnologiesMobile>
      <Testimonials>
        <Title style={{ marginBottom: "100px" }} fontSize={xLarge}>
          DON'T TAKE MY WORDS
          <Highlighted style={{ marginLeft: "15px" }}>ONLY</Highlighted>
        </Title>
        <TestimonialsContainer
          style={{
            transform: `translateX(calc(-${scrollYPosition}px + 1300px )) `,
          }}
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

      <Google
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
        onClick={() =>
          window.open(
            "https://coursera.org/share/26db931519a929fa09fe1ac52dc9bc3e",
            "_blank"
          )
        }
      >
        <IconContainer
          shadow
          icon={google}
          tick
          description="Certified From Google"
        />
      </Google>
      <Meta
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
        onClick={() =>
          window.open(
            "https://coursera.org/share/dd640e24dc605bdad260dbc3eb67956a",
            "_blank"
          )
        }
      >
        <IconContainer
          shadow
          icon={meta}
          tick
          description="Certified From META"
        />
      </Meta>
      <Microverse
        onMouseMove={mousemove}
        onMouseOut={mouseout}
        variants={onScreenAnimation}
        initial="initial"
        whileInView="whileInView"
        onClick={() =>
          window.open(
            "https://www.credential.net/1bb697e9-2cfb-4828-a556-04eae77efc21",
            "_blank"
          )
        }
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
