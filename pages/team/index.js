import Layout from "../../components/Layout";

import Link from "next/link";
import Image from "next/image";
import { getTeam } from "../../lib/airtable";

import { motion } from "framer-motion";

import styled from "styled-components";

const TeamZoomContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  background: black;
  grid-gap: 0.5rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const ZoomStatusBar = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: #e6e7e7;
  height: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  border-radius: 5px 5px 0px 0px;
  align-items: center;
  #zoom-meeting {
    text-align: center;
    font-weight: 700;
  }

  #window-options {
    display: flex;
    margin-left: 4px;
  }
`;

const Circle = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 100%;
  margin-right: 4px;
  margin-left: 2px;
  background-color: ${({ color }) => {
    switch (color) {
      case `red`:
        return "#FB5E56";
      case `orange`:
        return "#febc2e";
      case `green`:
        return "#29cb41";
      default:
        return "blue";
    }
  }};
`;

const TeamBackground = styled.div`
  margin-top: 1rem;
  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const index = ({ team }) => {
  return (
    <Layout>
      <h1>Team</h1>
      {/* <ZoomStyle team={team} /> */}
      <TeamBackground id='team-background'>
        <p>
          Run by an experienced and diverse team of successful entrepreneurs, we
          have been relentlessly dedicated to finding the UK’s best Seed-stage
          tech startups since 2013.{" "}
        </p>
        <p>
          Ascension benefits from the active industry connections essential for
          the sourcing and development of deal-flow and due diligence. The team
          has co-invested with the UK’s leading angels and VCs, key to securing
          follow-on funding as the portfolio businesses move to their next stage
          of growth.{" "}
        </p>
        <p>
          We believe in building an inclusive, community driven brand that can
          benefit the wider UK tech ecosystem and strive to work with
          conviction, integrity, humour, and humility.{" "}
        </p>
      </TeamBackground>
      <NormalStyle team={team} />
    </Layout>
  );
};

export default index;

// NORMAL DESIGN BELOW START
const NormalStyle = ({ team }) => {
  return (
    <>
      {" "}
      <NormalCardContainer className='team-container'>
        {team.map((person) => (
          <NormalCard key={person.id}>
            <Link href={`/team/${person.slug}`}>
              <a>
                <div className='image-container'>
                  <Image
                    src={person.picture}
                    layout='fill'
                    objectFit='contain'
                  />
                  <div id='person-name'>
                    <h3>{person.name}</h3>
                    <h5>{person.position}</h5>
                  </div>
                </div>
              </a>
            </Link>
          </NormalCard>
        ))}
      </NormalCardContainer>
    </>
  );
};

const NormalCardContainer = styled.section`
  /* display: flex;
  flex-wrap: wrap; */
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  justify-content: center;

  .image-container {
    position: relative;
    /* display: block; */
    height: 250px;
    width: 250px;

    @media (min-width: 1375px ) {
      height: 300px;
      width: 300px;
    }

    @media (max-width: 650px) {
      height: 350px;
      width: 350px;
      font-size: 1.5rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const NormalCard = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* padding: 2rem; */
  /* width: 200px; */
  /* height: 150px; */
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  /* background: ${({ theme }) => theme.colors.primaryOne}; */
  /* color: white; */
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  #person-name {
    /* margin-top: 1rem; */
    opacity: 0;
    /* color: ${({ theme }) => theme.colors.primaryOne}; */
    color: black;
    text-align: center;
    z-index: 1;
    background: ${({ theme }) => theme.colors.primaryTwo};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
`;

// NORMAL DESIGN BELOW START

// ZOOM DESIGN BELOW START
const ZoomStyle = ({ team }) => {
  return (
    <>
      <ZoomStatusBar>
        <div id='window-options'>
          <Circle color='red' />
          <Circle color='orange' />
          <Circle color='green' />
        </div>
        <div id='zoom-meeting'>Ascension Team Meeting</div>
      </ZoomStatusBar>
      <TeamZoomContainer>
        {team.map((person, i) => (
          <PersonTile key={person.id} person={person} i={i} />
        ))}
      </TeamZoomContainer>
    </>
  );
};

const Card = styled(motion.div)`
  background: #222222;
  width: 255px;
  height: 140px;
  margin: 0 auto;
  .image-container {
    position: relative;
    height: 70%;
    width: 100%;
  }

  .name-container {
    /* margin-top: 8px; */
    font-size: 0.8rem;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.4rem;

    .name-container,
    a {
      text-decoration: none;
      color: white;
    }
  }

  #a-container {
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }

  h5 {
    font-weight: regular;
  }
`;

const PersonTile = ({ person, i }) => {
  return (
    <Card
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: i * 0.2,
          },
        },
      }}
    >
      <Link href={`/team/${person.slug}`}>
        <a id='a-container'>
          <div className='image-container'>
            <Image src={person.picture} layout='fill' objectFit='contain' />
          </div>
          <div className='name-container'>
            <Link id='name' href={`/team/${person.slug}`}>
              <a>
                <h4>{person.name}</h4>
                <p>{person.position}</p>
              </a>
            </Link>
          </div>
        </a>
      </Link>
    </Card>
  );
};
// ZOOM DESIGN BELOW END

// PULLING IN TEAM FROM AT
export async function getStaticProps() {
  const team = await getTeam();
  return { props: { team } };
}
