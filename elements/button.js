import React, { useState } from "react";
import styled from "styled-components";
import fonts from "../hooks/font";
import { colors, radius } from "../utilities/common";
import tickImage from "../assets/images/tick.png";
import { motion } from "framer-motion"

const CustomButtonStyled = styled(motion.button)`
  padding: 10px ${({ long }) => (long ? "50px" : "15px")};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ color }) => color};
  border-radius: ${radius.boxRadius};
  position: relative;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  animation: hoverOut 0.4s ease-in-out;
  ${({ loading }) => (loading &&  "pointer-events: none;")}
  &:hover {
    animation: hoverIn 0.4s ease-in-out;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.9);
  }

  @keyframes hoverIn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.05);
    }
  }

  @keyframes hoverOut {
    0% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Icon = styled.img`
  height: ${({ height }) => height};
  margin-left: 10px;
`;

const Loading = styled.div`
  display: block;
  position: relative;
  left: calc(50% - 12.5px);
  top: 50%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: white;
  animation: spin 0.6s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: white;
    animation: spin 3s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function CustomButton({
  children,
  loading,
  color,
  long = false,
  icon,
  ...rest
}) {
  const { normal } = fonts();

  return (
    <CustomButtonStyled loading={loading} long={long} fontSize={normal} color={color} {...rest}>
      {loading ? <Loading></Loading> : children}
      {icon && <Icon height="20px" normal={normal} src={icon.src} />}
    </CustomButtonStyled>
  );
}

const IconTemp = styled.img`
  pointer-events: none;
  width: ${({ width }) => width};
`;

const Tick = styled.img`
  pointer-events: none;
  width: 25px;
  position: absolute;
  top: -12px;
  right: -3px;
`;

const IconContainerStyled = styled(motion.div)`
  position: relative;
  cursor: ${ ({noLink})=> noLink? "default": "pointer"};
  padding: 10px;
  width: 30px;
  height: 30px;
  border-radius: ${radius.boxRadius};
  background-color: white;
  display: flex;
  z-index: 9;
  align-items: center;
  justify-content: center;
  ${({ shadow }) => shadow && "box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);"}

  div {
    animation: iconHoverOut 0.2s ease-in-out;
    position: absolute;
    pointer-events: none;
    top: -40px;
    font-size: 12px;
    background-color: white;
    padding: 5px 10px;
    width: max-content;
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba(1, 1, 1, 0.2);
    transform: scale(0.5) translateY(20px);
    opacity: 0;
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: calc(50% - 10px);
      width: 15px;
      height: 15px;
      transform: rotateZ(45deg);
      background-color: white;
      border-radius: 3px;
      z-index: -1;
    }
  }

  &:hover div {
    opacity: 1;
    animation: iconHoverIn 0.2s ease-in-out;
    transform: scale(1) translateY(0px);
  }

  @keyframes iconHoverIn {
    0% {
      opacity: 0;
      transform: scale(0.5) translateY(20px);
    }
    50% {
      transform: scale(1.05) translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }

  @keyframes iconHoverOut {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
    50% {
      transform: scale(0.4) translateY(25px);
    }
    100% {
      opacity: 0;
      transform: scale(0.5) translateY(20px);
    }
  }
`;

function IconContainer({
  tick = false,
  shadow = false,
  icon,
  width = "30px",
  description = "",
  noLink = false ,
  ...rest
}) {
  return (
    <IconContainerStyled noLink={noLink} shadow={shadow} {...rest}>
      <div style={{ pointerEvents: "none" }}>{description}</div>
      <IconTemp src={icon.src} width={width} />
      {tick && <Tick src={tickImage.src} />}
    </IconContainerStyled>
  );
}

export { CustomButton, IconContainer };
