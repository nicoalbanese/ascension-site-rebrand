import styled from "styled-components";

import Image from "next/image";

const Wrapper = styled.section`
  margin-top: 6rem;
  /* background: white; */
  width: 100%;
  height: 100%;
`;

const TeamSummary = () => {
  return (
    <Wrapper>
      {/* <h3>Our Team</h3> */}
      <Image
        src={"/images/ascension-team-zoom.png"}
        width={1680}
        height={989}
      />
    </Wrapper>
  );
};

export default TeamSummary;
