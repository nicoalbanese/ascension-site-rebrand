import React from "react";

import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const InnerWrapper = styled.div`
  width: 70%;
  max-width: 1024px;
  margin: auto;
  padding: 2rem;
`;

const OuterWrapper = styled.div`
  width: 100%;
`;

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <InnerWrapper className='inner'>
        <NavBar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </InnerWrapper>
      <Footer className='footer' />
    </>
  );
};

export default Layout;
