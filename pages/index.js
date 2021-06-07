import styled from "styled-components";

// import Image from "next/image";
// import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PortfolioSection from "../components/PortfolioSection";
// import Footer from "../components/Footer";
import TeamSummary from "../components/TeamSummary";
import Layout from "../components/Layout";

import { getPortfolio } from "../lib/airtable";
import HomePageContent from "../components/HomePageContent";

const AppWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryTwo};
  overflow-y: auto;
`;

export default function Home({ companyData, portfolio }) {
  return (
    <AppWrapper>
      <Layout>
        <Hero />
        <PortfolioSection portfolioCompanies={companyData} />
        <TeamSummary />
        <HomePageContent portfolioSize={portfolio.length} />
      </Layout>
    </AppWrapper>
  );
}

export async function getStaticProps() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer keyLUXLM28pTbdyTx");
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
      url: company.fields["Website"],
      id: company.fields["[website] Highlight Rank"],
    };
  });

  const portfolio = await getPortfolio();

  return {
    props: {
      companyData: dataStructured,
      portfolio,
    }, // will be passed to the page component as props
  };
}
