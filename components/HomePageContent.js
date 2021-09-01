import styled from "styled-components";

import Link from "next/link";
import { motion } from "framer-motion";

const Wrapper = styled(motion.section)`
  /* margin-top: 4rem; */
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
    font-size: 1.2rem;
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
    margin-bottom: 6rem;
  }

  #news,
  #portfolio-news {
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

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
  out: {
    opacity: 0,
  },
};

const HomePageContent = ({ portfolioSize, portfolioNews, posts }) => {
  return (
    <Wrapper initial='initial' animate='in' exit='out' variants={pageVariants}>
      {/* <section className='stat-section'>
        <Stat title='Unique Investments' stat={String(portfolioSize)} />
      </section> */}
      <section className='ascension-overview-section'>
        <p>
          Ascension is one of the most active Seed investors in the UK. Since
          2015, we have{" "}
          <Link href='/portfolio' id='we-have-backed'>
            <a>backed 125+ tech and impact startups</a>
          </Link>{" "}
          through{" "}
          <Link href='/investors'>
            <a>our (S)EIS & Institutional Funds</a>
          </Link>
          . Beyond our capital, we devote our proven operational expertise,
          platform resources, and extensive network to support founders on their
          journey to Series A and beyond.
        </p>
      </section>
      <section id='portfolio-news'>
        <h2>Portfolio News</h2>
        <div className='article-container'>
          {portfolioNews &&
            portfolioNews.map((article, i) => (
              <PortfolioNewsArticle article={article} key={i} />
            ))}
        </div>
      </section>
      {posts && (
        <section id='news'>
          <h2>Recent Posts</h2>
          <div className='article-container'>
            {posts.map((post, i) => (
              <Article post={post} key={i} />
            ))}
          </div>
        </section>
      )}
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
  padding: 0.75rem 0rem;
  display: flex;
  flex-direction: column;

  #date {
    font-weight: 300;
    font-size: 0.9rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryOne};
  }
  #headline {
    font-size: 1.2rem;
  }
  #heading {
    display: flex;
  }
  #heading > * {
    margin-right: 0.3rem;
  }

  #author-slug {
    text-decoration: none;
  }
`;

const Article = ({ post }) => {
  return (
    <ArticleWrapper>
      <div id='heading'>
        <Link href={`/team/${post.author.slug}`}>
          <a id='author-slug'>
            <p id='date'>{post.author.name}</p>
          </a>
        </Link>
        <p id='date'>on</p>
        <p id='date'>{String(new Date(post.date).toLocaleDateString("EN"))}</p>
      </div>
      <Link href={`/posts/${post.slug}`}>
        <a id='headline'>{post.headline}</a>
      </Link>
    </ArticleWrapper>
  );
};

const PortfolioNewsWrapper = styled.div`
  padding: 0.75rem 0rem;
  display: flex;
  flex-direction: column;

  #company-name {
    font-weight: 300;
    font-size: 0.9rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryOne};
  }
  #headline {
    font-size: 1.2rem;
  }
`;

const PortfolioNewsArticle = ({ article }) => {
  return (
    <PortfolioNewsWrapper>
      {article.slug !== null && <Link href={`/portfolio/${article.slug}`}>
        <a id='company-name'>{article.companyName}</a>
      </Link>}
      <Link href={article.url}>
        <a id='headline' target="_blank">{article.headline}</a>
      </Link>
    </PortfolioNewsWrapper>
  );
};
