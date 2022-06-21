import React from "react";
import styled from "styled-components";

let rem = (px) => {
  return px / 16;
};

const StyledH1 = styled.h1`
  font-size: ${(props) => rem(props.fz) + "rem" || "1rem"};
  line-height: ${(props) => rem(props.fh) + "rem" || "1rem"};
  font-weight: ${(props) => props.fw || "400"};
  color: ${(props) => props.color || "rgba(0, 0, 0, 1)"};
  text-align: ${(props) => props.ta || "start"};
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.hc || "rgba(0, 0, 0, 1)"};
  }
  @media ${(props) => props.theme.media.laptop} {
    font-size: 40px;
    color: brown;
  }
  @media ${(props) => props.theme.media.tablet} {
    font-size: 30px;
    color: red;
  }
`;

const H1 = (props) => {
  return <StyledH1 {...props} />;
};

export default H1;
