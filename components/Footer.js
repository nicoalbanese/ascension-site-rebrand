import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled(motion.footer)`
  margin-top: auto;
  height: auto;
  background: ${({ theme }) => theme.colors.primaryOne};
  width: 100%;
  font-size: .8rem;
  /* height: 300px; */
`;

const InnerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  color: white;
  padding: 4rem 20px;
  /* margin-top: 6rem; */
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

// initial='initial' animate='in' exit='out' variants={pageVariants} <= for footer animation

const Footer = ({ pageVariants }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>
          <p>© 2010 - 2021 Ascension Ventures Limited. All Rights Reserved. </p>
          <p>LEGAL | PRIVACY POLICY</p>

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
