import React from "react";
import styled from "styled-components";

import { WithGlobalStyles } from "./global";
import { H1 } from "./Heading";
import { Nav } from "./Nav";

const Main = styled.main`
  background: rgba(250, 245, 245, 0.8);
  box-sizing: border-box;
  height: 100%;
  margin: auto;
  max-width: 920px;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: auto;
`;

const PageBound = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  width: 100%;
`;

// markup
export const PageLayout = ({ children }) => {
  return (
    <WithGlobalStyles>
      <PageBound>
        <Nav />
        <Main>
          <title>Home Page</title>
          <H1>Bytes on Blades</H1>
          {children}
        </Main>
      </PageBound>
    </WithGlobalStyles>
  );
};
