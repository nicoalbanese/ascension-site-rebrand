import styled from "styled-components";

// import Image from "next/image";
// import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PortfolioSection from "../components/PortfolioSection";
// import Footer from "../components/Footer";
import TeamSummary from "../components/TeamSummary";
import Layout from "../components/Layout";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";

import {
  getBlogPosts,
  getPortfolio,
  getPortfolioNewsCompact,
} from "../lib/airtable";
import HomePageContent from "../components/HomePageContent";

const AppWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryTwo};
  overflow-y: auto;
`;

export default function Home({
  companyData,
  portfolio,
  portfolioNews,
  posts,
  teamImageProps,
}) {
  return (
    <AppWrapper>
      <Head>
        <title>Ascension</title>
      </Head>
      <Layout>
        <Hero />
        <PortfolioSection portfolioCompanies={companyData} />
        <TeamSummary imageProps={teamImageProps} />
        <HomePageContent
          portfolioSize={portfolio.length}
          portfolioNews={portfolioNews}
          posts={posts}
        />
      </Layout>
    </AppWrapper>
  );
}

export async function getStaticProps() {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
  );
  myHeaders.append("Cookie", "brw=brwy1TrDiZyNAsU5u");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const AIRTABLE_URL =
    "https://api.airtable.com/v0/appm10v13QJCjL2PL/Website%20Highlight?maxRecords=9&view=PortfolioHighlightAPI";

  const res = await fetch(AIRTABLE_URL, requestOptions);
  const data = await res.json();
  // console.log(res);

  const dataStructured = data.records.map((company) => {
    return {
      name: company.fields["Known As"],
      url: `/portfolio/${company.fields["[website] slug"]}`,
      id: company.fields["[website] Highlight Rank"],
    };
  });

  const portfolio = await getPortfolio();
  const portfolioNews = await getPortfolioNewsCompact();
  const posts = await getBlogPosts();

  const { base64, img } = await getPlaiceholder(
    "/images/ascension-team-zoom.png"
  );

  return {
    props: {
      companyData: dataStructured,
      portfolio,
      portfolioNews,
      posts,
      teamImageProps: {
        blurDataURL: base64,
        ...img,
      },
    }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
