import Layout from "../../components/Layout";
import { getTeam, getVenturePartners } from "../../lib/airtable";

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

  #image-container {
    position: relative;
    height: 300px;
    width: 300px;
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

  .profile-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
  }

  .social-container {
    margin-top: 1rem;
    a {
      opacity: 1;

      &:hover {
        opacity: 0.6;
      }
    }
    svg {
      stroke: ${({ theme }) => theme.colors.primaryOne};
      fill: ${({ theme }) => theme.colors.primaryOne};
      &:first-of-type {
        margin-right: 1rem;
      }
    }
    display: flex;
    justify-content: center;
    &:first-child {
      margin-right: 200px;
    }
    @media (max-width: 850px) {
      /* background: red; */
      justify-content: start;
    }
  }
`;

const companyDetailed = ({ person }) => {
  // console.log(person);
  return (
    <Layout>
      <Head>
        <title>{person.name && person.name}</title>
      </Head>
      <Wrapper>
        <div id='back-button'>
          <Link href={`/team#${person.slug}`}>
            <a>Back to team</a>
          </Link>
        </div>
        <div className='profile-container'>
          <div>
            <div id='image-container'>
              <Image
                src={person.picture}
                // height={300}
                // width={300}
                layout='fill'
                objectFit='cover'
                alt={`${person.name} profile picture`}
              />
            </div>
            <div className='social-container'>
              {person.twitter && (
                <Link href={person.twitter}>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                    </svg>
                  </a>
                </Link>
              )}
              {person.linkedin && (
                <Link href={person.linkedin}>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                    </svg>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div>
            <h4>{person.position}</h4>
            <h1>{person.name}</h1>
            {person.bio.split("\n").map((para, i) => (
              <p className='para' key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default companyDetailed;

export async function getStaticPaths() {
  const team = await getTeam();

  const teamPaths = team.map((person) => {
    return {
      params: { name: person.slug },
    };
  });

  const vps = await getVenturePartners();
  const vpPaths = vps.map((vp) => {
    return {
      params: { name: vp.slug },
    };
  });
  const paths = [...teamPaths, ...vpPaths];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const team = await getTeam();
  const vps = await getVenturePartners();
  const fullTeam = [...team, ...vps];
  const [person] = fullTeam.filter((p) => p.slug === params.name);
  return { props: { person } };
}
