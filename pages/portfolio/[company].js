import Layout from "../../components/Layout";
import { getPortfolio } from "../../lib/airtable";

import Image from "next/image";
import styled from "styled-components";

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
  }
`;

const companyDetailed = ({ company }) => {
  return (
    <Layout>
      <Wrapper>
        <Link href="/portfolio"><a>Back to portfolio</a></Link>
        {company && (
          <div className='main-container'>
            <Image src={company.logoUrl} height={300} width={300} />
            <div>
              <h1>{company.name}</h1>
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
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const companies = await getPortfolio();
  const [company] = companies.filter((c) => c.slug === params.company);
  return { props: { company } };
}
