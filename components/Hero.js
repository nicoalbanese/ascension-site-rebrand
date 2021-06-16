import React from "react";

import styled from "styled-components";

import Image from "next/image";

import { motion } from "framer-motion";

const Wrapper = styled(motion.section)`
  height: 400px;
  /* background: white; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  #upper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 5rem;

    #top-image {
      margin-bottom: 0.5rem;
    }
  }

  #lower {
    width: 50%;
    font-size: 1.3rem;
    @media (max-width: 768px) {
      width: 85%;
    }

    span {
      font-weight: 800;
    }
  }
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
  },
};

const Hero = () => {
  const factor = 7;
  return (
    <Wrapper initial='initial' animate='in' exit='out' variants={pageVariants}>
      <div id='upper'>
        <div id='top-image'>
          <Image
            src={"/images/full_logo_dark-img.png"}
            width={3253 / factor}
            height={355 / factor}
            id='top'
            alt='Ascension logo big'
          />
        </div>
        <Image
          src={"/images/sub_logo_dark-img.png"}
          width={3061 / (factor * 1.2)}
          height={295 / (factor * 1.2)}
          alt='Ascension sub logo'
        />
      </div>
      <div id='lower'>
        <p>
          <span>Ascension</span> is an early-stage VC built by exited
          entrepreneurs to back the next generation of tech and impact founders
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
