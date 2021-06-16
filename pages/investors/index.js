import Layout from "../../components/Layout";
import styled from "styled-components";

import Head from "next/head";

import FundCard from "../../components/FundCard";
import { getFunds } from "../../lib/airtable";

const FundsSection = styled.div``;
const TopSection = styled.div`
  p {
    line-height: 1.3rem;
    margin-bottom: 1rem;
  }
  h1,
  div {
    margin-bottom: 1rem;
  }
  margin-bottom: 6rem;
`;
const TEFunds = styled.div`
  margin-bottom: 6rem;
  h2,
  div {
    margin-bottom: 1rem;
  }
`;
const ImpactFunds = styled.div`
  margin-top: 2rem;
  h2,
  div {
    margin-bottom: 1rem;
  }
`;

const FundGrid = styled.div`
  margin-top: 2rem;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-gap: 1rem;
  width: 100%;
`;

const FundsPage = ({ funds }) => {
  // console.log(funds);
  return (
    <Layout>
      <Head>
        <title>Investors</title>
      </Head>
      <TopSection className='top-section'>
        <h1>Funds</h1>
        <p>
          Since 2014, Ascension has established itself as one of the leading UK
          Seed investors, participating in some of the most exciting UK deals
          alongside high calibre angels and VCs.
        </p>

        <p>
          As a go-to place for UK entrepreneurs seeking funding, our team gains
          a ‘first look’ at over 3,000 investment opportunities a year through
          our comprehensive and proven network.
        </p>

        <p>
          Ascension is run by business operators, fundamental when deciding
          which early-stage businesses to back, and then providing the support
          necessary to scale.
        </p>
      </TopSection>
      <FundsSection>
        <TEFunds className='tax-effecient'>
          <h2>Tax-Efficient Funds</h2>
          <p>
            Ascension is an experienced (S)EIS Fund Manager with a strong track
            record and multiple exits. Our (S)EIS and Syndicate Funds aim to
            deliver tax-free capital growth via a diversified portfolio of
            early-stage tech businesses.{" "}
          </p>
          <FundGrid>
            {funds.map((fund) => {
              if (fund.type === "Tax Efficient") {
                return <FundCard fund={fund} key={fund.id} />;
              }
            })}
          </FundGrid>
        </TEFunds>
        <ImpactFunds className='impact-funds'>
          <h2>Institutional Funds</h2>
          <FundGrid institutional>
            {funds.map((fund) => {
              if (fund.type === "Institutional") {
                return <FundCard fund={fund} key={fund.id} />;
              }
            })}
          </FundGrid>
        </ImpactFunds>
      </FundsSection>
    </Layout>
  );
};

export default FundsPage;

export async function getStaticProps() {
  const funds = await getFunds();
  return { props: { funds } };
}
