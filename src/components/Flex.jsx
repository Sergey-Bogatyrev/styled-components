import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  align-items: ${(props) => props.ai || "center"};
  justify-content: ${(props) => props.jc || "center"};
  flex-wrap: ${(props) => props.fw || "wrap"};
  column-gap: ${(props) => props.cg || "10px"};
  row-gap: ${(props) => props.rg || "10px"};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
