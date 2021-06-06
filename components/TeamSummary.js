import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
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

const TeamSummary = ({ portfolioSize }) => {
  return (
    <Wrapper>
      <h2>Our Team</h2>
      <div className='image-wrapper'>
        <Link href='/team'>
          <a>
            <Image
              src={"/images/ascension-team-zoom.png"}
              width={1249}
              height={523}
            />
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default TeamSummary;
