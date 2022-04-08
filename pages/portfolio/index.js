import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";

import PortfolioDetailed from "../../components/PortfolioDetailed";
import { getPortfolio } from "../../lib/airtable";

const portfolio = ({ companies }) => {
  //   console.log(companies, moreData);
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="description">
        <h1>Portfolio</h1>
        <p>
          We manage (S)EIS and Institutional Seed funds that invest in UK
          technology and impact businesses across these key focus areas: Next
          Gen Media, New Work, Digital Health & Life Sciences, Sustainability,
          FinTech, Commerce, DeepTech. Find job opportunities within our
          portfolio{" "}
          <Link href="/portfolio-jobs">
            <a>here</a>
          </Link>
          .
        </p>
        {/* <p>Number of portfolio companies {companies.length}</p> */}
      </div>
      <div className="portfolioCards">
        {companies && <PortfolioDetailed companies={companies} />}
      </div>
    </Layout>
  );
};

export default portfolio;

export async function getStaticProps() {
  //   console.log(data);
  const structuredData = await getPortfolio();
  return {
    props: {
      companies: structuredData,
    }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
