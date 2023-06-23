import React from "react";
import { CustomButton } from "../elements/button";
import { colors, radius, width } from "../utilities/common";
import { styled } from "styled-components";
import fonts from "../hooks/font";
import { CustomInput, CustomTextArea } from "../elements/input";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  max-width: ${width.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
`;

const TitleSecondary = styled.h4`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: 40px;
  letter-spacing: 3px;
  opacity: 0.5;
  font-weight: 500;
`;

const Form = styled.form`
  padding: 30px 40px;
  border-radius: ${radius.boxRadius};
  position: relative;
  z-index: 2;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateZ(-7deg);
    background-color: ${colors.red};
    opacity: 0.5;
    z-index: -1;
    border-radius: ${radius.boxRadius};
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: -1;
    border-radius: ${radius.boxRadius};
  }
`;

const FlexRow = styled.div`
  display: flex;
  gap: 40px;
`;

const BlueLine1 = styled.div`
  width: 100px;
  height: 500px;
  filter: blur(40px);
  background-color: ${colors.blue};
  transform: rotateZ(45deg);
  position: absolute;
  left: 0;
  margin-left: 100px;
  opacity: 0.5;
`
const BlueLine2 = styled.div`
  width: 60px;
  height: 300px;
  filter: blur(40px);
  background-color: ${colors.blue};
  transform: rotateZ(45deg);
  position: absolute;
  right: 0;
  margin-right: 100px;
  margin-bottom: 500px;
  opacity: 0.5;
`
const RedLine = styled.div`
  width: 100px;
  height: 500px;
  filter: blur(40px);
  background-color: ${colors.red};
  transform: rotateZ(45deg);
  position: absolute;
  right: 0;
  margin-right: 200px;
  margin-top: 500px;
  opacity: 0.5;
`

function Contact() {
  const { xLarge, small } = fonts();

  return (
    <Main>
      <Title fontSize={xLarge}>CONTACT</Title>
      <TitleSecondary fontSize={small}>
        I WOULD BE GLAD TO HEAR FROM YOU
      </TitleSecondary>

      <Form>
        <FlexRow>
          <CustomInput title="Full Name" />
          <CustomInput title="Email" />
        </FlexRow>
        <CustomTextArea style={{ margin: "20px 0" }} title="Message" />
        <CustomButton color={colors.blue}>SUBMIT</CustomButton>
      </Form>

      <BlueLine1 />
      {/* <BlueLine2 /> */}
      <RedLine />
    </Main>
  );
}

export default Contact;
