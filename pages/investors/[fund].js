import { getFunds } from "../../lib/airtable";

import Layout from "../../components/Layout";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Wrapper = styled.div`
  #page-info {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
  }
  li {
    margin-bottom: 0.3rem;
  }

  .button {
    margin-top: 1rem;

    &#apply-button {
      margin-top: 0.5rem;
    }

    padding: 0.75rem 1rem;
    text-align: center;
    display: block;
    background-color: ${({ theme }) => theme.colors.primaryThree};
    text-decoration: none;
    /* margin-bottom: .rem; */
    border-radius: 10px;

    color: ${({ theme }) => theme.colors.primaryTwo};
  }

  #col-middle {
    p {
      margin-bottom: 2rem;
      :nth-of-type(2) {
        margin-bottom: 1rem;
      }
    }
  }

  #back-button {
    margin-bottom: 1rem;
    display: block;
  }
`;

const Fund = ({ fund }) => {
  console.log(fund);
  return (
    <Layout>
      <Wrapper>
        <Link href="/investors"><a id="back-button">Back to funds</a></Link>
        <h1>{fund.name}</h1>
        <div id='page-info'>
          <div id='col-left'>
            {fund.coverImage != null ? (
              <Image src={fund.coverImage} height={490} width={350} />
            ) : (
              <div id='fund-no-cover'>{fund.name}</div>
            )}
          </div>
          <div id='col-middle'>
            {/* <h1>{fund.name}</h1> */}
            <ReactMarkdown>{fund.detailedSummary}</ReactMarkdown>
          </div>
          <div id='col-right'>
            <div id='inner-container-col-right'>
              <h3>Next Closing Date</h3>
              <p>{fund.nextClose}</p>
              <div id='register-interest-button'>
                <Link href={fund.registerInterestURL}>
                  <a className='button' id='register-interest'>
                    Request Brochure
                  </a>
                </Link>
              </div>
              <div>
                <Link href={fund.applicationLink}>
                  <a className='button' id='apply-button'>
                    Apply Online
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Fund;

export async function getStaticProps({ params }) {
  const funds = await getFunds();
  const [fund] = funds.filter((f) => f.slug === params.fund);
  return { props: { fund } };
}

export async function getStaticPaths() {
  const funds = await getFunds();

  const paths = funds.map((fund) => {
    return {
      params: { fund: fund.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
