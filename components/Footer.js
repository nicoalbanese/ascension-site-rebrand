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
    ul {
      padding-left: 0;
    }

    #logo-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1rem;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      li {
        text-align: center;
      }
      div {
        /* margin-bottom: 1rem; */
      }

      #logo-container {
        /* display: block; */
        align-items: center;
        justify-content: flex-start;
      }

      .link-container {
        margin-bottom: 0.5rem;
      }
      /* .spacer {
        display: none;
      } */
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
    font-size: 0.9rem;
    a {
      color: ${({ theme }) => theme.colors.primaryTwo};
    }
  }
`;

// initial='initial' animate='in' exit='out' variants={pageVariants} <= for footer animation

const Footer = ({ pageVariants }) => {
  const factor = 9;
  return (
    <Wrapper>
      <InnerWrapper>
        <div className="upper-section">
          <div className="spacer link-container">
            <div id="logo-container">
              <Image
                src="/images/headline_logo_light.png"
                height={238 / factor}
                width={1560 / factor}
              />
              <Image
                src="/images/subheader_logo_light.png"
                height={142 / factor}
                width={1148 / factor}
              />
            </div>
          </div>
          <div className="main-links link-container">
            <ul>
              <li>
                <Link href="/investors">
                  <a>For Investors</a>
                </Link>
              </li>
              <li>
                <Link href="/founders">
                  <a>For Founders</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a>Team</a>
                </Link>
              </li>
              <li>
                <Link href="https://ascension.mainspringfs.com/Login">
                  <a>Investor Login</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="secondary-links link-container">
            <ul>
              <li>
                <Link href="/posts">
                  <a>Recent Posts</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.notion.so/Careers-at-Ascension-Ventures-bd23e6ad5af1466984444ad80e9c1ce2">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio-jobs">
                  <a>Portfolio Jobs</a>
                </Link>
              </li>
              <li>
                <Link href="/apply-for-funding">
                  <a>Apply For Funding</a>
                </Link>
              </li>
              <li>
                <Link href="/offers">
                  <a>Offers</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="spacer link-container">
            <ul>
              <li>
                <Link href="https://twitter.com/ascensiongrp">
                  <a>Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/ascensionvc/">
                  <a>LinkedIn</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lower-section">
          <p>
            © 2010 - 2022 Ascension Ventures Limited. All Rights Reserved.{" "}
            <span>
              <Link href="/legal">
                <a>LEGAL</a>
              </Link>{" "}
              |{" "}
              <Link href="/privacy">
                <a>PRIVACY POLICY</a>
              </Link>
            </span>
          </p>

          <p>
            Ascension Ventures Ltd is authorised and regulated by the Financial
            Conduct Authority,{" "}
            <Link href="https://register.fca.org.uk/s/firm?id=0010X00004MkTGwQAN">
              <a>(FRN 833108)</a>
            </Link>
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
