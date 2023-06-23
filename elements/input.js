import { styled } from "styled-components";
import fonts from "../hooks/font";
import { colors, radius } from "../utilities/common";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ fontSize }) => fontSize};
`;

const Title = styled.h4`
  text-transform: uppercase;
  opacity: 0.7;
`;

const Input = styled.input`
  padding: 10px;
  background-color: ${colors.background};
  border: 2px solid white;
  width: 200px;
  border-radius: ${radius.boxRadius};
  outline: none;
  transition: 0.3s ease-in-out;
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  transition: 0.3s ease-in-out;
  background-color: ${colors.background};
  border: 2px solid white;
  border-radius: ${radius.boxRadius};
  width: 300px;
  height: 100px;
  resize: none;
  outline: none;
  border: 2px solid white;
  &:focus {
    border: 2px solid ${colors.blue};
  }
`;

export const CustomInput = ({ title , ...rest}) => {
  const { normal } = fonts();

  return (
    <InputContainer fontSize={normal} {...rest} >
      <Title>{title}</Title>
      <Input />
    </InputContainer>
  );
};

export const CustomTextArea = ({ title, ...rest }) => {
  const { normal } = fonts();

  return (
    <InputContainer fontSize={normal} {...rest} >
      <Title>{title}</Title>
      <TextArea />
    </InputContainer>
  );
};
