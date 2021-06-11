import React from "react";

import { motion } from "framer-motion";

import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const InnerWrapper = styled(motion.div)`
  width: 85%;
  max-width: 1124px;
  margin: auto;
  flex-grow: 1;
  padding: 1rem; 

  @media (max-width: 968px) {
    padding: 1rem;
    /* width: 85%; */
  }

  @media (max-width: 550px) {
    width: 95%;
  }
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const OuterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <OuterWrapper>
      <InnerWrapper
        className='inner'
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      >
        <NavBar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </InnerWrapper>
      <Footer className='footer' pageVariants={pageVariants} />
    </OuterWrapper>
  );
};

export default Layout;
