import React from "react";
import styled, { keyframes } from "styled-components";

let rem = (px) => {
  return px / 16;
};

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}

`;

const StyledButton = styled.button.attrs((props) => ({ type: "button" }))`
  font-size: ${(props) => rem(props.fz) + "rem" || "1rem"};
  line-height: ${(props) => rem(props.fh) + "rem" || "1rem"};
  font-weight: ${(props) => props.fw || "400"};
  color: ${(props) => props.color || "rgba(0, 0, 0, 1)"};
  text-align: ${(props) => props.ta || "start"};
  width: 100px;
  height: 30px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 255, 1);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.hc || "rgba(0, 0, 0, 1)"};
    background-color: rgb(70, 130, 180);
    animation: ${rotateAnimation} 1s infinite linear;
  }

  ${(props) =>
    props.button1 &&
    `
width: 150px;
height: 40px;
color: rgba(255, 255, 255, 1);
background-color: rgba(0, 0, 0, 1);
border: 1px solid rgba(255, 0, 0, 1);
border-radius: 15px;
`}

  ${(props) =>
    props.button2 &&
    `
width: 250px;
height: 60px;
color: rgba(255, 255, 255, 1);
background-color: rgba(0, 0, 0, 1);
border: 1px solid rgba(255, 0, 0, 1);
border-radius: 15px;
`}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
