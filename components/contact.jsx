import React, { useState } from "react";
import { CustomButton } from "../elements/button";
import { colors, radius, width } from "../utilities/common";
import styled from "styled-components";
import fonts from "../hooks/font";
import { CustomInput, CustomTextArea } from "../elements/input";
import emailjs from "@emailjs/browser";
import { LoginSchema } from "../utilities/validationSchema";
import { motion } from "framer-motion";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  max-width: ${width.maxWidth};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: ${colors.background};
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
  width: 90%;
  text-align: center;
`;

const Form = styled.form`
  padding: 60px 80px;
  border-radius: ${radius.boxRadius};
  position: relative;
  z-index: 2;
  width: max-width;
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

  @media (max-width: 769px) {
    width: 70%;
    padding: 30px 40px;
  }

  @media (max-width: 426px) {
    width: 65%;
    &:before {
      transform: rotateZ(-4deg);
    }
  }
`;

const FlexRow = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  @media (max-width: 426px) {
    gap: 10px;
  }
`;

const BlueLine = styled(motion.div)`
  width: 100px;
  height: 500px;
  filter: blur(40px);
  background-color: ${colors.blue};
  transform: rotateZ(45deg);
  position: absolute;
  left: 0;
  margin-left: 100px;
  opacity: 0.5;
  @media (min-width: 1440px) {
    left: 100px;
  }

  @media (max-width: 769px) {
    top: 0;
  }
`;
const RedLine = styled(motion.div)`
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
`;

function Contact({ contact }) {
  const { xLarge, small } = fonts();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    setErrors({});
    e.preventDefault();
    console.log("true");

    LoginSchema.validate(mail, { abortEarly: false })
      .then(async () => {
        setLoading(true);

        emailjs
          .send(
            "shayan_12902",
            "job_shayan",
            {
              name: mail.name,
              email: mail.email,
              message: mail.message,
            },
            "user_JJWJdHtLayDNb7KXtDkMZ"
          )
          .then(
            (result) => {
              setLoading(false);
            },
            (error) => {
              setLoading(false);
            }
          );
        setMail({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((validationErrors) => {
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      });
  }

  return (
    <Main ref={contact}>
      <Title fontSize={xLarge}>CONTACT</Title>
      <TitleSecondary fontSize={small}>
        I WOULD BE GLAD TO HEAR FROM YOU
      </TitleSecondary>

      <Form>
        <FlexRow style={{ marginBottom: "15px" }}>
          <CustomInput
            hint={errors.name}
            value={mail.name}
            onChange={(e) =>
              setMail((prev) => ({ ...prev, name: e.target.value }))
            }
            title="Full Name"
          />
          <CustomInput
            hint={errors.email}
            value={mail.email}
            onChange={(e) =>
              setMail((prev) => ({ ...prev, email: e.target.value }))
            }
            title="Email"
          />
        </FlexRow>
        <CustomTextArea
          hint={errors.message}
          value={mail.message}
          onChange={(e) =>
            setMail((prev) => ({ ...prev, message: e.target.value }))
          }
          style={{ margin: "20px 0" }}
          title="Message"
        />
        <CustomButton
          loading={loading}
          style={{ marginTop: "15px" }}
          type="submit"
          onClick={handleSubmit}
          long
          color={colors.blue}
        >
          SUBMIT
        </CustomButton>
      </Form>

      <BlueLine />
      <RedLine />
    </Main>
  );
}

export default Contact;
