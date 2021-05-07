import React from "react";

import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const InnerWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 2rem;
  width: 70%;
`;

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <InnerWrapper class='inner'>
        <NavBar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </InnerWrapper>
      <Footer class='footer' />
    </>
  );
};

export default Layout;
