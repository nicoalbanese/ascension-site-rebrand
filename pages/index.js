import styled from "styled-components";

import Image from "next/image";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";
import TeamSummary from "../components/TeamSummary";

const AppWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryTwo};
  overflow-y: auto;
`;

const InnerWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 20px;
`;

export default function Home() {
  return (
    <AppWrapper>
      <InnerWrapper>
        <NavBar />
        <Hero />
        <PortfolioSection />
        <TeamSummary />
      </InnerWrapper>
      <Footer />
    </AppWrapper>
  );
}
