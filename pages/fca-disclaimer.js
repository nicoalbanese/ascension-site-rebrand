import styled from "styled-components";
import Layout from "../components/Layout";

const Wrapper = styled.div`
  #key-risk-header {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .risk-section {
    margin-bottom: 2.5rem;
    p {
      margin-bottom: 1rem;
      font-size: .95rem;
    }
  }

  h5 {
    margin-bottom: 0.25rem;
  }
  #est-time {
    margin: 0.5rem 0;
  }
`;

const FCADisclaimer = () => {
  return (
    <Layout>
      <Wrapper>
        <h2>
          Risk summary for non-readily realisable securities which are shares:
        </h2>
        <h5 style={{ fontStyle: "italic" }} id="est-time">
          Estimated reading time: 2 min
        </h5>
        <p>
          Due to the potential for losses, the Financial Conduct Authority (FCA)
          considers this investment to be high risk.
        </p>
        <h3 id="key-risk-header">What are the key risks?</h3>
        <div className="risk-section">
          <h5>1. You could lose all the money you invest</h5>
          <p>
            If the business you invest in fails, you are likely to lose 100% of
            the money you invested. Most start-up businesses fail.
          </p>
        </div>
        <div className="risk-section">
          <h5>2. You are unlikely to be protected if something goes wrong</h5>
          <p>
            Protection from the Financial Services Compensation Scheme (FSCS),
            in relation to claims against failed regulated firms, does not cover
            poor investment performance. Try the FSCS investment protection
            checker{" "}
            <a href="https://www.fscs.org.uk/check/investment-protection-checker/">
              here
            </a>
            .
          </p>
          <p>
            Protection from the Financial Ombudsman Service (FOS) does not cover
            poor investment performance. If you have a complaint against an
            FCA-regulated firm, FOS may be able to consider it. Learn more about
            FOS protection{" "}
            <a href="https://www.financial-ombudsman.org.uk/consumers">here</a>.
          </p>
        </div>
        <div className="risk-section">
          <h5>3. You won’t get your money back quickly</h5>
          <p>
            Even if the business you invest in is successful, it may take
            several years to get your money back. You are unlikely to be able to
            sell your investment early.
          </p>
          <p>
            The most likely way to get your money back is if the business is
            bought by another business or lists its shares on an exchange such
            as the London Stock Exchange. These events are not common.
          </p>
          <p>
            If you are investing in a start-up business, you should not expect
            to get your money back through dividends. Start-up businesses rarely
            pay these.
          </p>
        </div>
        <div className="risk-section">
          <h5>4. Don’t put all your eggs in one basket</h5>
          <p>
            Putting all your money into a single business or type of investment
            for example, is risky. Spreading your money across different
            investments makes you less dependent on any one to do well.
          </p>
          <p>
            A good rule of thumb is not to invest more than 10% of your money in
            high-risk investments. Read more about it{" "}
            <a href="https://www.fca.org.uk/investsmart/5-questions-ask-you-invest">
              here
            </a>
            .
          </p>
        </div>
        <div className="risk-section">
          <h5>5. The value of your investment can be reduced</h5>
          <p>
            The percentage of the business that you own will decrease if the
            business issues more shares. This could mean that the value of your
            investment reduces, depending on how much the business grows. Most
            start-up businesses issue multiple rounds of shares.
          </p>
          <p>
            These new shares could have additional rights that your shares don’t
            have, such as the right to receive a fixed dividend, which could
            further reduce your chances of getting a return on your investment.
          </p>
        </div>
        <p>
          <strong>
            If you are interested in learning more about how to protect
            yourself, visit the FCA’s website{" "}
            <a href="https://www.fca.org.uk/investsmart">here</a>.
          </strong>
        </p>
      </Wrapper>
    </Layout>
  );
};

export default FCADisclaimer;
