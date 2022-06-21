import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Flex from "./Flex";
import H1 from "./H1";

const StyledSection = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Inner = styled.div`
  width: 100%;
`;

const Section = () => {
  return (
    <StyledSection>
      <Container>
        <Inner>
          <Flex fd="column">
            <H1 fz="50" fh="80" fw="900" color="rgba(255, 0, 0, 1)" hc="rgba(0, 128, 0, 1)">
              Hello, world!
            </H1>
            <Button ta="start">Start</Button>
            <Button button1 ta="center">Go!</Button>
            <Button button2 ta="end">Finish</Button>
          </Flex>
        </Inner>
      </Container>
    </StyledSection>
  );
};

export default Section;
