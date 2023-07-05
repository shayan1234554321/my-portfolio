import styled from "styled-components";
import fonts from "../hooks/font";
import { colors, radius } from "../utilities/common";
import { useEffect, useState } from "react";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ fontSize }) => fontSize};
`;

const Title = styled.h4`
  text-transform: uppercase;
  opacity: 0.7;
  transition: 0.1s ease-in-out;
  width: max-content;
  ${({ focus, x }) =>
    focus
      ? `transform: translateX(calc(${x}px - 5px)) translateY(0px) scale(0.7) ;`
      : `transform: translateX(0px) translateX(0px) scale(1) ;`}
`;

const Input = styled.input`
  padding: 10px;
  background-color: ${colors.background};
  border: 2px solid white;
  border-radius: ${radius.boxRadius};
  outline: none;
  width: 200px;
  transition: 0.3s ease-in-out;
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;

const Hint = styled.span`
  position: absolute;
  bottom: -12px;
  left: 10px;
  font-size: 10px;
  color: red;
  z-index: 5;
`;

const TextArea = styled.textarea`
  padding: 10px;
  transition: 0.3s ease-in-out;
  background-color: ${colors.background};
  border: 2px solid white;
  border-radius: ${radius.boxRadius};
  height: 100px;
  resize: none;
  outline: none;
  border: 2px solid white;
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;

export const CustomInput = ({hint , value, title, ...rest }) => {
  const { normal } = fonts();
  const [isFocus, setIsFocus] = useState(false);
  const [x, setX] = useState(0);

  useEffect(() => {
    if (value.length > 15) {
      setX(15 * 4);
    } else {
      setX(value.length * 4);
    }
  }, [value]);

  return (
    <InputContainer fontSize={normal}>
      <Title focus={isFocus} x={x}>
        {title}
      </Title>
      <Input
        onFocus={() => setIsFocus(true)}
        value={value}
        onBlur={() => setIsFocus(false)}
        {...rest}
      />
      {hint && <Hint>{hint}</Hint>}
    </InputContainer>
  );
};

export const CustomTextArea = ({hint,  value, title, ...rest }) => {
  const { normal } = fonts();
  const [isFocus, setIsFocus] = useState(false);
  const [x, setX] = useState(0);
  useEffect(() => {
    if (value.length > 15) {
      setX(15 * 4);
    } else {
      setX(value.length * 4);
    }
  }, [value]);

  return (
    <InputContainer fontSize={normal}>
      <Title focus={isFocus} x={x}>
        {title}
      </Title>
      <TextArea
        onFocus={() => setIsFocus(true)}
        value={value}
        onBlur={() => setIsFocus(false)}
        {...rest}
      />
      {hint && <Hint>{hint}</Hint>}
    </InputContainer>
  );
};
