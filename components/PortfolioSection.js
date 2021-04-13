import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.section``;

const portfolioCompanies = [
  { name: "Moteefe", id: 0, url: "https://moteefe.com" },
  { name: "Wagestream", id: 1, url: "https://wagestream.com" },
  { name: "Heygo", id: 2, url: "https://heygo.com" },
  { name: "WeGift", id: 3, url: "https://wegift.com" },
  { name: "zeroheight", id: 4, url: "https://zeroheight.com" },
  { name: "Credit Kudos", id: 5, url: "https://creditkudos.com" },
  { name: "Vidsy", id: 6, url: "https://vidsy.co" },
];

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
    font-family: "Avenir";
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .companiesWrapper {
    color: ${({ theme }) => theme.colors.primaryThree};
    font-size: 2rem;
    width: 55%;
    font-family: "Avenir";
    font-weight: 500;

    a {
      color: ${({ theme }) => theme.colors.primaryThree};
      transition: 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const PortfolioSection = () => {
  return (
    <Wrapper>
      <Seperator />
      <PortfolioSnapshot>
        <h5>Portflio Includes</h5>
        <h4 className='companiesWrapper'>
          {portfolioCompanies &&
            portfolioCompanies.map((company, i) => {
              return (
                <span key={company.id}>
                  <Link href={company.url}>
                    <a>{company.name}</a>
                  </Link>
                  {", "}
                </span>
              );
            })}
          and more...
        </h4>
      </PortfolioSnapshot>
    </Wrapper>
  );
};

export default PortfolioSection;
