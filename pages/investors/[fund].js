import { getFunds } from "../../lib/airtable";

import Layout from "../../components/Layout";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Wrapper = styled.div`
  #page-info {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 2fr 3fr;
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

    &.disabled {
      cursor: not-allowed;
      opacity: 0.2;
      pointer-events: none;
      /* background-color: red; */
    }

    padding: 0.75rem 1rem;
    text-align: center;
    display: block;
    background-color: ${({ theme }) => theme.colors.primaryOne};
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

  #accolade-section {
    h3 {
      margin-bottom: 0.5rem;
    }
  }
`;

const Fund = ({ fund }) => {
  // console.log(fund);
  return (
    <Layout>
      <Head>
        <title>{fund.name}</title>
      </Head>
      <Wrapper>
        <Link href='/investors'>
          <a id='back-button'>Back to funds</a>
        </Link>
        <h1>{fund.name}</h1>
        <div id='page-info'>
          <div id='col-left'>
            {/* {fund.coverImage != null ? (
              <Image src={fund.coverImage} height={490} width={350} />
            ) : (
              <div id='fund-no-cover'>{fund.name}</div>
            )} */}
            <FundStats fund={fund} />
          </div>
          <div id='col-middle'>
            {/* <h1>{fund.name}</h1> */}
            <ReactMarkdown>{fund.detailedSummary}</ReactMarkdown>
            {/* {console.log(fund.taxBenefits)} */}
            {fund.taxBenefits !== "Not applicable" && (
              <ReactMarkdown>{fund.taxBenefits}</ReactMarkdown>
            )}
          </div>
          {fund.type === "Tax Efficient" && (
            <div id='col-right'>
              <div id='inner-container-col-right'>
                <h3>Next Closing Date</h3>
                <p>{fund.nextClose}</p>
                <div id='register-interest-button'>
                  <Link href={fund.registerInterestURL}>
                    <a className='button' id='register-interest'>
                      {fund.status === "Open For Subscription"
                        ? "Request Brochure"
                        : "Register Interest For Next Close"}
                    </a>
                  </Link>
                </div>
                {fund.applicationLink !== null && (
                  <div>
                    <Link href={fund.applicationLink}>
                      <a
                        className={`button ${
                          fund.status === "Closed" && "disabled"
                        }`}
                        id='apply-button'
                      >
                        Apply Online
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          {fund.accolades !== null && (
            <div id='accolade-section'>
              <h3>Accolades</h3>
              <ReactMarkdown>{fund.accolades}</ReactMarkdown>
            </div>
          )}
          {/* {fund.trustmark !== null && (
            <div>
              <Image
                src={fund.trustmark}
                height={280 * 0.75}
                width={650 * 0.75}
                alt={`${fund.name} trustmark`}
              />
            </div>
          )} */}
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

const Card = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryOne};
  color: ${({ theme }) => theme.colors.primaryTwo};
  padding: 1rem;
  border-radius: 5px;
  flex-direction: column;
  h3 {
    text-align: left;
  }
  .main-content {
    flex: 1;
  }

  .button-container {
    display: flex;
    width: 100%;
  }

  .stat-container {
    :first-of-type {
      margin-top: 0;
    }
    margin-top: 1.5rem;

    .title {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 800;
      /* color: ${({ theme }) => theme.colors.primaryThree}; */
      opacity: 0.6;
      margin-bottom: 0.3rem;
    }

    .content {
      font-weight: 300;
    }
  }
`;

const FundStats = ({ fund }) => {
  const {
    stage,
    ticketSize,
    roundRange,
    businessCharacteristics,
    leadingPreference,
  } = fund;
  // console.log(fund);
  return (
    <Card>
      <div className='stat-container'>
        <div className='title'>Stage</div>
        <div className='content'>{stage}</div>
      </div>
      <div className='stat-container'>
        <div className='title'>Ticket Size</div>
        <div className='content'>{ticketSize}</div>
      </div>
      <div className='stat-container'>
        <div className='title'>Round Size</div>
        <div className='content'>{roundRange}</div>
      </div>
      <div className='stat-container'>
        <div className='title'>Business Characteristics</div>
        <div className='content'>{businessCharacteristics}</div>
      </div>
      <div className='stat-container'>
        <div className='title'>Leads?</div>
        <div className='content'>{leadingPreference}</div>
      </div>
    </Card>
  );
};
