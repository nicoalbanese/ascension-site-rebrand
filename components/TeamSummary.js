import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Wrapper = styled(motion.section)`
  margin-top: 8rem;
  /* margin-bottom: 6rem; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 2.5rem;
    text-align: left;
    /* background-color: black; */
    width: 100%;
    margin-bottom: 1rem;
  }

  .image-wrapper {
    margin-top: 0;
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
      delay: 0.3,
    },
  },
  out: {
    opacity: 0,
  },
};
const TeamSummary = ({ portfolioSize }) => {
  return (
    <Wrapper initial='initial' animate='in' exit='out' variants={pageVariants}>
      <h2>Our Team</h2>
      <div className='image-wrapper'>
        <Link href='/team'>
          <a>
            <Image
              src={"/images/ascension-team-zoom.png"}
              width={1249}
              alt='ascension team picture'
              height={523}
            />
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default TeamSummary;
