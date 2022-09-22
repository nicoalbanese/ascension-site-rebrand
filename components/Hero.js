import React from "react";

import styled from "styled-components";

import Image from "next/image";

import { motion } from "framer-motion";

const Wrapper = styled(motion.section)`
  min-height: 400px;
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
    padding-bottom: 5rem;

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
    p:first-child {
      margin-bottom: 1rem;
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
    <Wrapper initial="initial" animate="in" exit="out" variants={pageVariants}>
      <div id="upper">
        <div id="top-image">
          <Image
            src={"/images/full_logo_dark-img.png"}
            width={3253 / factor}
            height={355 / factor}
            id="top"
            alt="Ascension logo big"
          />
        </div>
        <Image
          src={"/images/sub_logo_dark-img.png"}
          width={3061 / (factor * 1.2)}
          height={295 / (factor * 1.2)}
          alt="Ascension sub logo"
        />
      </div>
      <div id="lower">
        <p>
          <span>Ascension</span> is an early-stage VC built by exited
          entrepreneurs to back the next generation of tech and impact founders
        </p>
        <p>
          We were voted {" "}
          <a
            href="https://ukbaa.org.uk/awards/seed-vc-of-the-year/"
            target="_blank"
          >
            Seed VC of the Year
          </a>{" "}
          in 2022 (UK Business Angels Association) and have been the{" "}
          <a
            href="https://www.beauhurst.com/blog/most-active-venture-capital-firms-in-london"
            target="_blank"
          >
            most active investor
          </a>{" "}
          in London over the past decade (Beauhurst)
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
