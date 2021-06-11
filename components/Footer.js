import styled from "styled-components";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const Wrapper = styled(motion.footer)`
  margin-top: 4rem;
  height: auto;
  background: ${({ theme }) => theme.colors.primaryOne};
  width: 100%;

  /* height: 300px; */
`;

const InnerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primaryTwo};
  padding: 4rem 20px;
  /* margin-top: 6rem; */
  text-align: center;

  p {
    margin-bottom: 1rem;
  }

  .upper-section {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 650px) {
      grid-template-columns: 1fr 1fr;
      .spacer {
        display: none;
      }
    }
    ul {
      /* margin: 0; */
      list-style: none;
      text-align: left;
    }
    a {
      color: ${({ theme }) => theme.colors.primaryTwo};
      /* text-decoration: none; */
      font-size: 0.9rem;
    }
  }

  .lower-section {
    font-size: 0.6rem;
  }
`;

// initial='initial' animate='in' exit='out' variants={pageVariants} <= for footer animation

const Footer = ({ pageVariants }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div className='upper-section'>
          <div className='spacer'>
            {/* <Image src='/images/headline_logo.png' height={30} width={150} /> */}
          </div>
          <div className='main-links'>
            <ul>
              <li>
                <Link href='/investors'>
                  <a>For Investors</a>
                </Link>
              </li>
              <li>
                <Link href='/founders'>
                  <a>For Founders</a>
                </Link>
              </li>
              <li>
                <Link href='/portfolio'>
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href='/team'>
                  <a>Team</a>
                </Link>
              </li>
              <li>
                <Link href='https://ascension.mainspringfs.com/Login'>
                  <a>Investor Login</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='secondary-links'>
            <ul>
              <li>
                <Link href='/posts'>
                  <a>Recent Posts</a>
                </Link>
              </li>
              <li>
                <Link href='https://www.notion.so/Careers-at-Ascension-Ventures-bd23e6ad5af1466984444ad80e9c1ce2'>
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href='https://www.notion.so/Careers-at-Ascension-Ventures-bd23e6ad5af1466984444ad80e9c1ce2'>
                  <a>Apply for funding</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='spacer'></div>
        </div>
        <div className='lower-section'>
          <p>
            © 2010 - 2021 Ascension Ventures Limited. All Rights Reserved.{" "}
            <span>LEGAL | PRIVACY POLICY</span>
          </p>

          <p>
            Ascension Ventures Ltd is authorised and regulated by the Financial
            Conduct Authority, (FRN 833108)
          </p>

          <p>
            Risk warning: Your capital is at risk. Investing in early stage
            companies involves risks including loss of capital, illiquidity,
            lack of dividends and dilution. Past performance is not a predictor
            of future performance. Ascension Ventures does not give tax or
            investment advice. The availability of tax relief depends on
            individual investors’ circumstances, and on investee companies’
            qualifying status, both of which may be subject to change. If you
            are in doubt about eligibility for tax reliefs or the tax treatment
            of your investment, you should seek independent tax advice.
          </p>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
