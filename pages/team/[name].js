import Layout from "../../components/Layout";
import { getTeam } from "../../lib/airtable";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Pill from "../../components/Pill";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .para {
    margin-top: 1.5rem;
    line-height: 1.3rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
  }

  .main-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 2fr;

    @media (max-width: 600px) {
      /* background: green; */
      grid-template-columns: 1fr;
    }
  }

  #back-button {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryOne};
    opacity: 0.6;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  .pill-wrapper {
    margin-top: 1.3rem;
    * {
      background: ${({ theme }) => theme.colors.primaryOne};
      color: white;
      margin-right: 0.5rem;
      font-size: 0.7rem;
      padding: 8px 16px;
    }
  }
`;

const companyDetailed = ({ person }) => {
  return (
    <Layout>
      <Head>
        <title>{person.name && person.name}</title>
      </Head>
      <Wrapper>
        <div id='back-button'>
          <Link href='/team'>
            <a>Back to team</a>
          </Link>
        </div>
        <h1>{person.name}</h1>
        {person.bio.split("\n").map((para, i) => (
          <div className='para' key={i}>
            {para}
          </div>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default companyDetailed;

export async function getStaticPaths() {
  const team = await getTeam();

  const paths = team.map((person) => {
    return {
      params: { name: person.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const team = await getTeam();
  const [person] = team.filter((p) => p.slug === params.name);
  return { props: { person } };
}
