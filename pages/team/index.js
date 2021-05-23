import Layout from "../../components/Layout";

import Link from "next/link";
import Image from "next/image";
import { getTeam } from "../../lib/airtable";

import styled from "styled-components";

const TeamZoomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: black;
  grid-gap: 0.5rem;
  padding: 0.5rem;
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
  }
`;

const Circle = styled.div`
  height: 1rem;
  width: 1rem;
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

const index = ({ team }) => {
  return (
    <Layout>
      <h1>Team</h1>
      <ZoomStatusBar>
        <div id='window-options'>
          <Circle color='red' />
          <Circle color='orange' />
          <Circle color='green' />
        </div>
        <div id='zoom-meeting'>Ascension Team Meeting</div>
      </ZoomStatusBar>
      <TeamZoomContainer>
        {team.map((person) => (
          <PersonTile key={person.id} person={person} />
        ))}
      </TeamZoomContainer>
      {/* <div className='team-container'>
        {team.map((person) => (
          <div key={person.id}>
            <Link href={`/team/${person.slug}`}>
              <a>{person.name}</a>
            </Link>
          </div>
        ))}
      </div> */}
    </Layout>
  );
};

export default index;

const Card = styled.article`
  background: #222222;
  width: 255px;
  height: 140px;
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

const PersonTile = ({ person }) => {
  return (
    <Card>
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

export async function getStaticProps() {
  const team = await getTeam();
  return { props: { team } };
}
