import styled from "styled-components";

import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* width: 16rem; */
  background: white;
  padding: 2rem 2rem 1rem 2rem;
  border-radius: 5px;

  h3 {
    text-align: left;
  }
  .main-content {
    flex: 1;
  }

  .button-container {
    display: flex;
    width: 100%;
  }

  .stat-container {
    margin-top: 1.5rem;

    .title {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 800;
      /* color: ${({ theme }) => theme.colors.primaryThree}; */
      opacity: 0.6;
      margin-bottom: 0.3rem;
    }

    .content {
      font-weight: 300;
    }
  }
`;

const Button = styled.a`
  text-align: center;
  cursor: pointer;
  display: block;
  padding: 0.6rem 0.4rem;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primaryOne};
  color: ${({ theme }) => theme.colors.primaryTwo};
  font-size: 0.9rem;
  border-radius: 10px;
  border: none;
  font-weight: 600;

  &:hover {
    opacity: 0.5;
  }
`;

const FundHeader = styled.div`
  display: inline-block;
  min-width: max-content;
  border-radius: 8px;
  font-size: 0.9rem;
  padding: .3rem .8rem;
  color: #287aa9;
  width: max-content;
  /* text-transform: uppercase; */
  margin: 0;
  font-weight: 300;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* height: 100%; */
`;

const FundCard = ({ fund }) => {
  const {
    name,
    type,
    slug,
    ticketSize,
    roundRange,
    stage,
    businessCharacteristics,
  } = fund;
  return (
    <CardContainer>
      {fund.headerText ? (
        <FundHeader style={{ color: fund.headerTextColor, backgroundColor: fund.headerBGColor }}>
          {fund.headerText}
        </FundHeader>
      ) : null}
      <Card>
        <div className="main-content">
          <h3>{name}</h3>
          <ReactMarkdown className="stat-container">
            {fund.summary}
          </ReactMarkdown>
          {/* <div className='stat-container'>
          <div className='title'>Stage</div>
          <div className='content'>{stage}</div>
        </div>
        <div className='stat-container'>
          <div className='title'>Ticket Size</div>
          <div className='content'>{ticketSize}</div>
        </div>
        <div className='stat-container'>
          <div className='title'>Stage</div>
          <div className='content'>Pre-Seed</div>
        </div> */}
        </div>
        <div className="button-container">
          <Link href={`/investors/${slug}`}>
            <Button>Find out more</Button>
          </Link>
        </div>
      </Card>
    </CardContainer>
  );
};

export default FundCard;
