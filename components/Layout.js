import React from "react";

import { motion } from "framer-motion";

import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

const InnerWrapper = styled(motion.div)`
  width: 70%;
  max-width: 1024px;
  margin: auto;
  padding: 2rem;
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

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  return (
    <>
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
      <Footer className='footer' />
    </>
  );
};

export default Layout;
