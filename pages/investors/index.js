import Layout from "../../components/Layout";
import styled from "styled-components";

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
`;
const TEFunds = styled.div`
  margin-top: 2rem;
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
  display: flex;
  flex-wrap: wrap;
  grid-gap: 0rem 1.2rem;
  width: 100%;
`;

const FundsPage = ({ funds }) => {
  console.log(funds);
  return (
    <Layout>
      <TopSection className='top-section'>
        <h1>Funds</h1>
        <p>
          Since 2013, Ascension has established itself as one of the leading UK
          Seed investors, participating in some of the most exciting deals
          alongside high calibre angels and VCs.
        </p>

        <p>
          As a go-to place for UK entrepreneurs seeking funding, our team gains
          a ‘first look’ at over 2,000 investment opportunities a year through
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
            deliver tax-free capital growth via a portfolio of early-stage tech
            businesses.{" "}
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
          <FundGrid>
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
