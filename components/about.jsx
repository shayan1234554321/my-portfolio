import React from "react";
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
import { TestimonialCard , Highlighted } from "../elements/common";

const Expertise = () => {
  return (
    <>
      <IconContainer icon={express} shadow />
      <IconContainer icon={figma} width="15px" shadow />
      <IconContainer icon={github} width="25px" shadow />
      <IconContainer icon={html} width="20px" shadow />
      <IconContainer icon={js} width="20px" shadow />
      <IconContainer icon={materialUI} width="25px" shadow />
      <IconContainer icon={mongoDB} shadow />
      <IconContainer icon={next} width="25px" shadow />
      <IconContainer icon={reactImage} width="25px" shadow />
      <IconContainer icon={tailwind} shadow />
      <IconContainer icon={postgreSQL} width="20px" shadow />
      <IconContainer icon={axios} width="15px" shadow />
      <IconContainer icon={bootstrap} shadow />
      <IconContainer icon={css} width="20px" shadow />
      <IconContainer icon={redux} width="25px" shadow />
      <IconContainer icon={firebase} width="20px" shadow />
      <IconContainer icon={ruby} width="20px" shadow />
      <IconContainer icon={rails} shadow />
      <IconContainer icon={jest} width="20px" shadow />
    </>
  );
};

const Main = styled.div`
  width: 100%;
  max-width: ${width.maxWidth};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const AboutMe = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-top: 100px;
`;

const Title = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: 20px;
`;

const Description = styled.p`
  width: 650px;
  opacity: 0.5;
  letter-spacing: 0.5px;
`;

const Red = styled.span`
  color: ${colors.red};
  font-weight: bold;
`;

const Technologies = styled.div`
  margin-top: 40px;
  width: 65%;
  min-width: 800px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  row-gap: 30px;
`;

const FreeCodeCamp = styled.div`
  position: absolute;
  right: 0;
  margin-right: 10px;
`;

const HackerRank = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 10px;
`;

const Microverse = styled.div`
  position: absolute;
  right: 50px;
  bottom: -200px;
  margin-right: 10px;
`;

const Box = styled.div`
  position: absolute;
  left: 10%;
  margin-bottom: 200px;
  width: 30px;
  height: 30px;
  border: 4px solid ${colors.blue};
  transform: rotateZ(10deg);
  opacity: 0.5;
`;

const Plus1 = styled.div`
  position: absolute;
  left: 20%;
  margin-bottom: 400px;
  transform: rotateZ(-20deg);
  opacity: 0.5;
  color: ${colors.red};
  font-size: 20px;
`;

const Plus2 = styled.div`
  position: absolute;
  right: 15%;
  margin-top: 400px;
  transform: rotateZ(-20deg);
  opacity: 0.5;
  color: ${colors.red};
  font-size: 30px;
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
`;

const Testimonials = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

const TestimonialsContainer = styled.div`
    display: flex;
    gap: 40px;
`;

function About() {
  const { large } = fonts();

  return (
    <Main>
      <AboutMe>
        <Title fontSize={large}>ABOUT ME</Title>
        <Description>
          A highly skilled full-stack developer with expertise in{" "}
          <Red>React, React Native, Node.js, </Red> and{" "}
          <Red>Ruby on Rails.</Red> I have developed real-world projects such as
          working with supply chain management systems or car maintenance
          bidding systems etc. With over 3 years of working in this field, I
          have honed my abilities to thrive in a fast-paced environment,
          continuously learning and adapting to new technologies.
        </Description>
        <Technologies>
          <Expertise />
        </Technologies>
        <FreeCodeCamp>
          <IconContainer icon={freeCodeCamp} tick />
        </FreeCodeCamp>
        <HackerRank>
          <IconContainer icon={hackerRank} tick />
        </HackerRank>
        <Microverse>
          <IconContainer icon={microverse} />
        </Microverse>
        <Box />
        <Plus1>+</Plus1>
        <Plus2>+</Plus2>
      </AboutMe>
      <Testimonials>
        <Title style={{marginBottom: "100px"}} fontSize={large}>DONT TAKE MY WORDS <Highlighted>ONLY</Highlighted></Title>
        <TestimonialsContainer>
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
      <BlueBackgroundBox />
      <RedBackgroundBox />
    </Main>
  );
}

export default About;
