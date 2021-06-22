import Layout from "../../components/Layout";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { getTeam, getVenturePartners } from "../../lib/airtable";

import { motion, useAnimation } from "framer-motion";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

const VenturePartnerSection = styled.section`
  margin-top: 8rem;
`;

const index = ({ team, vps }) => {
  return (
    <Layout>
      <Head>
        <title>Team</title>
      </Head>
      <h1>Operating Team</h1>
      {/* <ZoomStyle team={team} /> */}
      <TeamBackground id='team-background'>
        <p>
          Run by an experienced and diverse team of successful entrepreneurs, we
          have been relentlessly dedicated to finding the UK’s best Seed-stage
          startups since 2014.{" "}
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
      <NormalStyle team={team} type='operating-team' />
      <VenturePartnerSection id='venture-partners'>
        <h1>Venture Partners</h1>
        <TeamBackground>
          <p>
            Venture Partners are successful entrepreneurs, active investors, and
            shareholders in Ascension Ventures, with multiple $100m+ and $1bn
            exits from their own businesses and personal investments. They
            introduce deal-flow, bring corporate development initiatives, assess
            investment opportunities as part of our due diligence, and mentor
            relevant portfolio businesses.
          </p>
        </TeamBackground>
        <NormalStyle team={vps} type='venture-partners' />
      </VenturePartnerSection>
    </Layout>
  );
};

export default index;

// NORMAL DESIGN BELOW START
const NormalStyle = ({ team, type }) => {
  return (
    <>
      {" "}
      <NormalCardContainer className='team-container'>
        {team.map((person, i) => (
          <TeamMember person={person} key={person.id} type={type} />
        ))}
      </NormalCardContainer>
    </>
  );
};

const PositionContainer = styled.div`
  #top {
    margin-top: 1rem;
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  #bottom {
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
`;

const TeamMember = ({ person, type }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <NormalCard
      ref={ref}
      animate={controls}
      variants={boxVariants}
      id={person.slug}
    >
      <Link href={`/team/${person.slug}`}>
        <a>
          <div className='image-container'>
            <Image
              src={person.picture}
              layout='fill'
              objectFit='contain'
              alt={`${person.name} profile photo`}
            />
            <div id='person-name'>
              <h3>{person.name}</h3>
              {type === "operating-team" && <h5>{person.position}</h5>}
              {type === "venture-partners" && (
                <PositionContainer>
                  <h6 id='top'>{person.headline}</h6>
                  <h6 id='bottom'>{person.position}</h6>
                </PositionContainer>
              )}
            </div>
          </div>
        </a>
      </Link>
    </NormalCard>
  );
};

const NormalCardContainer = styled.section`
  /* display: flex;
  flex-wrap: wrap; */
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  img {
    filter: grayscale(100%);
  }
  @media (min-width: 1375px) {
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  }

  .image-container {
    position: relative;
    /* display: block; */
    height: 225px;
    width: 225px;

    @media (min-width: 1375px) {
      height: 225px;
      width: 225px;
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

const NormalCard = styled(motion.div)`
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
            <Image
              src={person.picture}
              layout='fill'
              objectFit='contain'
              alt={`${person.name} profile photo`}
            />
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
  const vps = await getVenturePartners();
  return { props: { team, vps } };
}
