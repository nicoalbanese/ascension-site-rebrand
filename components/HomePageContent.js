import styled from "styled-components";

import Link from "next/link";

const Wrapper = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  #we-have-backed {
    color: ${({ theme }) => theme.colors.primaryThree};
    text-decoration: underline;
    /* font-weight: 900; */
  }

  .ascension-overview-section {
    margin-top: 1.2rem;
    font-size: 1.4rem;
    /* background-color: ${({ theme }) => theme.colors.primaryOne}; */
    /* color: ${({ theme }) => theme.colors.primaryTwo}; */
    /* padding: 2rem 0rem; */
    /* p:not(:last-of-type) {
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: solid .5px;
      border-color: ${({ theme }) => theme.colors.primaryOne};
    } */
  }

  section {
    margin-bottom: 4rem;
  }

  #news {
    margin-top: 2rem;
    width: 100%;
    h2 {
      font-size: 2.5rem;
      /* text-align: center; */
      margin-bottom: 1rem;
    }
  }

  .article-container {
    width: 100%;
  }
`;

const HomePageContent = ({ portfolioSize }) => {
  return (
    <Wrapper>
      {/* <section className='stat-section'>
        <Stat title='Unique Investments' stat={String(portfolioSize)} />
      </section> */}
      <section className='ascension-overview-section'>
        <p>
          Ascension is one of the most active Seed investors in the UK.
          <Link href='/portfolio' id='we-have-backed'>
            <a>
              We have backed {portfolioSize} tech and impact startups to date
              through our (S)EIS & Institutional Funds
            </a>
          </Link>
          . Beyond our capital, we devote our proven operational expertise,
          platform resources, and extensive network to support founders on their
          journey.
        </p>
      </section>
      <section id='news'>
        <h2>News</h2>
        <div className='article-container'>
          <Article />
          <Article />
          <Article />
        </div>
      </section>
    </Wrapper>
  );
};

export default HomePageContent;

const StatWrapper = styled.div`
  /* background-color: ${({ theme }) => theme.colors.primaryThree}; */
  /* color: ${({ theme }) => theme.colors.primaryTwo}; */
  /* padding: 2rem 1.5rem; */
  /* width: 20rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    font-weight: bold;
    text-transform: uppercase;
  }

  .stat {
    font-size: 5rem;
  }
`;

const Stat = ({ title, stat }) => {
  return (
    <StatWrapper>
      <h3 className='title'>{title}</h3>
      <h1 className='stat'>{stat}</h1>
    </StatWrapper>
  );
};

const ArticleWrapper = styled.article`
  margin-bottom: 1.2rem;
`;

const Article = () => {
  return (
    <ArticleWrapper>
      <h3>Ascesnion Launches Conduit EIS Fund</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit.
        Ipsam blanditiis quod itaque expedita inventore nesciunt accusantium
        rerum et...
      </p>
      <Link href='/'>
        <a>read more...</a>
      </Link>
    </ArticleWrapper>
  );
};
