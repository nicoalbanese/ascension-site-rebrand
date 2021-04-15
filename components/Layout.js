import React from "react";

import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const InnerWrapper = styled.div`
  max-width: 1024px;
  margin: auto; 
  padding: 2rem;
`;

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <InnerWrapper>
        <NavBar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </InnerWrapper>
      <Footer />
    </>
  );
};

export default Layout;
