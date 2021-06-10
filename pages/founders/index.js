import Layout from "../../components/Layout";

import styled from "styled-components";
import Link from "next/link";

import Head from "next/head";

const PlatformCards = [
  {
    header: "Mentor Network",
    content:
      "Over the years, we've been fortunate to partner with people who have defined what success in tech looks like. If we can't directly help with something, we probably know someone who can,.",
    link: "/mentors",
    linkText: "Meet our Mentors",
    id: 0,
  },
  {
    header: "Events",
    content:
      "Across our physical and virtual investor showcases, workshops, social events, and our annual summit, we facilitate knowledge sharing and new connections, through our community driven approach to portfolio management",
    link: "/events",
    linkText: "View Upcoming Events",
    id: 1,
  },
  {
    header: "Perks & Suppliers",
    content:
      "We structure the best deals you can get and vet suppliers across all business functions to power your startup",
    link: "https://airtable.com/shrcsDiHLWFGksW0S/tblvPHMmuB7FP3Jap",
    linkText: "View our Dealbook",
    id: 2,
  },
];

const Wrapper = styled.div`
  div {
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
  }

  h2 {
    margin-top: 4rem;
  }

  line-height: 1.3rem;

  li {
    margin-bottom: 1rem;
  }

  #founders-section {
    margin-bottom: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
  }

  #our-platform-section {
    margin-bottom: 8rem;
    margin-top: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
  }

  #card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 0.5rem;
  }
`;

const Founders = () => {
  return (
    <Layout>
      <Head>
        <title>Founders</title>
      </Head>
      <Wrapper>
        <div id='founders-section'>
          <h1>For Founders</h1>
          <p>
            If you’re a UK business raising your first or second round, we would
            love to hear from you. Ascension can lead rounds or follow alongside
            other funds or angels via our SEIS & EIS Funds or our Social Impact
            Funds (the Fair By Design, Good Food, Conduit and Life Sciences
            Funds). We've also built the Ascension Syndicate Club, a group
            of early-stage angels that co-invest with Ascension alongside its
            Funds.
          </p>
          <p>
            Our goal is to partner with you to accelerate growth towards Series
            A and beyond.{" "}
          </p>
        </div>
        <div>
          <h2>What we're looking for</h2>
          <div>
            <p>
              Ascension runs a number of UK funds from Seed to Series A, and is
              happy to lead rounds or follow alongside other funds or angel
              investors.{" "}
            </p>
            <p>
              Please view the individual fund pages for further details, but key
              criteria of our assessment include:
            </p>
            <ul>
              <li>
                Strong, dedicated Founder(s) with a deep understanding of the
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
          </div>
        </div>
        <div id='our-platform-section'>
          <h2>Our Platform</h2>
          <p>
            Our Platform We provide crucial post-investment support for
            early-stage founders, offering the tools and relationships needed to
            scale their businesses.
          </p>
          <p>
            Our community gathers frequently online and off to share learnings,
            inspire new ideas, and tap into the collective mindshare of the
            Ascension network.{" "}
          </p>
          <div id='card-container'>
            {PlatformCards.map((card) => (
              <PlatformCard
                header={card.header}
                content={card.content}
                link={card.link}
                linkText={card.linkText}
                key={card.id}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Founders;

const CardWrapper = styled.div`
  padding: 2rem;
  background: white;
  p {
    margin-bottom: 1rem;
  }
`;

const PlatformCard = ({ header, content, link, linkText }) => {
  return (
    <CardWrapper>
      {" "}
      <h3>{header}</h3>
      <p>{content}</p>{" "}
      <Link href={link}>
        <a>{linkText}</a>
      </Link>
    </CardWrapper>
  );
};
