import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Wrapper = styled.section``;

const change = "hello";
// const portfolioCompanies = [
//   { name: "Wagestream", id: 0, url: "https://wagestream.com" },
//   { name: "Lick", id: 1, url: "https://lickhome.com" },
//   { name: "Heygo", id: 2, url: "https://heygo.com" },
//   { name: "WeGift", id: 3, url: "https://wegift.com" },
//   { name: "zeroheight", id: 4, url: "https://zeroheight.com" },
//   { name: "Organise", id: 5, url: "https://organise.network/" },
//   { name: "Moteefe", id: 6, url: "https://moteefe.com" },
// ];

const Seperator = styled.div`
  background: ${({ theme }) => theme.colors.primaryThree};
  width: 5rem;
  height: 0.2rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const PortfolioSnapshot = styled.div`
  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primaryOne};
    font-size: 1rem;
    font-family: Avenir;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .companiesWrapper {
    color: ${({ theme }) => theme.colors.primaryThree};
    font-size: 2rem;
    width: 55%;
    font-family: Avenir;
    font-weight: 500;

    @media (max-width: 768px) {
      width: 90%;
    }

    a {
      color: ${({ theme }) => theme.colors.primaryThree};
      transition: 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const PortfolioSection = ({ portfolioCompanies }) => {
  return (
    <Wrapper>
      <Seperator />
      <PortfolioSnapshot>
        <h5>Portfolio Includes</h5>
        <h4 className='companiesWrapper'>
          {portfolioCompanies &&
            portfolioCompanies.map((company, i) => {
              return (
                <motion.span
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.2 * i,
                      },
                    },
                  }}
                  key={company.id}
                >
                  <Link href={company.url}>
                    <a>{company.name}</a>
                  </Link>
                  {", "}
                </motion.span>
              );
            })}
          <motion.span
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2 * 8,
                },
              },
            }}
          >
            and{" "}
            <Link href='/portfolio'>
              <a>more...</a>
            </Link>
          </motion.span>
        </h4>
      </PortfolioSnapshot>
    </Wrapper>
  );
};

export default PortfolioSection;
