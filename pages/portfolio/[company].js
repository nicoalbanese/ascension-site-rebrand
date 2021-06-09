import Layout from "../../components/Layout";
import { getPortfolio } from "../../lib/airtable";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Pill from "../../components/Pill";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

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

  /* a {
    color: ${({ theme }) => theme.colors.primaryOne};
    opacity: 0.6;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  } */

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

const companyDetailed = ({ company }) => {
  if (company.name === undefined) {
    console.log("this is undefined", company);
  }

  return (
    <Layout>
      <Head>
        <title>{company.name && company.name}</title>
      </Head>
      <Wrapper>
        <div id='back-button'>
          <Link href='/portfolio'>
            <a>Back to portfolio</a>
          </Link>
        </div>
        {company && (
          <div className='main-container'>
            <div className='image-container'>
              <Image src={company.logoUrl} height={300} width={300} />
            </div>
            <div>
              <h1>{company.name && company.name}</h1>
              <a href={company.url}>{company.url}</a>
              <div className='pill-wrapper'>
                {company.category.map((cat, idx) => (
                  <Pill key={idx} category={cat} />
                ))}
              </div>
              <p>{company.description}</p>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default companyDetailed;

export async function getStaticPaths() {
  const companies = await getPortfolio();

  const paths = companies.map((company) => {
    return {
      params: { company: company.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const companies = await getPortfolio();
  const [company] = companies.filter((c) => c.slug === params.company);
  return { props: { company } };
}
