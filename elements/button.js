import React from "react";
import { styled } from "styled-components";
import fonts from "../hooks/font";
import { radius } from "../utilities/common";
import tickImage from '../assets/images/tick.png'

const CustomButtonStyled = styled.button`
  padding: 10px ${({ long }) => (long ? "50px" : "15px")};
  cursor: pointer;
  font-size: ${({ normal }) => normal};
  background-color: ${({ color }) => color};
  border-radius: ${radius.boxRadius};
  position: relative;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5)
    );
    top: 0;
    left: 0;
  }
`;

const Icon = styled.img`
  height: ${({ height }) => height};
  margin-left: 10px;
`;

function CustomButton({ children, color, long = false, icon, ...rest }) {
  const { normal } = fonts();

  return (
    <CustomButtonStyled long={long} color={color} {...rest}>
      {children}
      {icon && <Icon height="20px" normal={normal} src={icon.src} />}
    </CustomButtonStyled>
  );
}

const IconTemp = styled.img`
  width: ${({ width }) => width};
`;

const Tick = styled.img`
  width: 25px;
  position: absolute;
  top: -12px;
  right: -3px;
`;

const IconContainerStyled = styled.div`
  position: relative;
  padding: 10px;
  width: 30px;
  height: 30px;
  border-radius: ${radius.boxRadius};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({shadow})=> shadow && "box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);"}
`;

function IconContainer({ tick=false ,shadow=false, icon, width = "30px", ...rest }) {

  return (
    <IconContainerStyled shadow={shadow} {...rest}>
      <IconTemp src={icon.src} width={width} />
      { tick && <Tick src={tickImage.src} />}
    </IconContainerStyled>
  );
}

export { CustomButton, IconContainer };
