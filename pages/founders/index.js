import Layout from "../../components/Layout";

import styled from "styled-components";

const Wrapper = styled.div`
  div {
    margin-top: 1rem;
  }

  h2 {
    margin-top: 4rem;
  }

  line-height: 1.3rem;

  li {
    margin-bottom: 1rem;
  }
`;

const Founders = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>For Founders</h1>
          <div>
            If you’re a UK business raising your first or second round, we would
            love to hear from you. Ascension can lead rounds or follow alongside
            other funds or angels via our SEIS & EIS Funds or our Social Impact
            Funds (the Fair By Design & Good Food Funds). We have also created
            the Ascension Syndicate Club, a group of early-stage angels that
            co-invest with Ascension alongside its Funds.
          </div>
          <div>
            Our goal is to partner with you to accelerate growth towards Series
            A and beyond.{" "}
          </div>
        </div>
        <div>
          <h2>What we're looking for</h2>
          <p>
            <div>
              Ascension runs a number of UK funds from Seed to Series A, and is
              happy to lead rounds or follow alongside other funds or angel
              investors.{" "}
            </div>
            <div>
              Please view the individual fund pages for further details, but key
              criteria of our assessment include:
            </div>
            <ul>
              <li>
                A strong, dedicated team with a deep understanding of the
                problem their product is trying to solve
              </li>
              <li>Robustness of IP / tech development </li>
              <li>
                A clear route to market and a compelling business model capable
                of rolling out globally{" "}
              </li>
              <li>
                Strong leveraged marketing / distribution strategies built into
                the proposition{" "}
              </li>
              <li>At least 12-18 months runway, assuming no revenue growth </li>
              <li>
                An opportunity for Ascension to add value in supporting your
                access to revenue and funding
              </li>
            </ul>{" "}
          </p>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Founders;
