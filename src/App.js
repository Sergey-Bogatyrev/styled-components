import React from "react";
import styled from "styled-components";
import Section from "./components/Section";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 100%;
  flex: 1 1 100%;
`;

function App() {
  return (
    <Wrapper>
      <Main>
        <Section />
      </Main>
    </Wrapper>
  );
}

export default App;
