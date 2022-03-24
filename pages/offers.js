import Layout from "../components/Layout";

import Head from "next/head";

import styled from "styled-components";
const OfferWrapper = styled.div`
  p {
    margin: 2rem 0;
  }
`;

const Offers = () => {
  return (
    <Layout>
      <Head>
        <title>Advisor Offer</title>
      </Head>
      <OfferWrapper>
        <h1>Advisor Offer</h1>
        <h2>Ascension Blended S/EIS combined with Ascension EIS Fund</h2>
        <p>
          Ascension is offering advisors who have clients which invest £250,000
          in Ascension’s generalist EIS Fund a limited time incentive to be able
          to invest in Ascension Blended S/EIS Fund on pure SEIS basis of up to
          £100,000.
        </p>{" "}
        <p></p>
        This offer is open to all advisors who meet the above criteria.{" "}
        <p>
          For more information,{" "}
          <a href="https://airtable.com/shrSScRpGi03oBGWH" target="_blank">
            click here
          </a>
        </p>
      </OfferWrapper>
    </Layout>
  );
};

export default Offers;
