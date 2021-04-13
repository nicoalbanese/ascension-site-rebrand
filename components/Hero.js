import React from "react";

import styled from "styled-components";

import Image from "next/image";

const Wrapper = styled.section`
  height: 500px;
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

const Hero = () => {
  const factor = 5;
  return (
    <Wrapper>
      <div id='upper'>
        <div id='top-image'>
          <Image
            src={"/images/headline_logo.png"}
            width={2514 / factor}
            height={364 / factor}
            id='top'
          />
        </div>
        <Image
          src={"/images/subheader_logo.png"}
          width={1830 / factor}
          height={156 / factor}
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
