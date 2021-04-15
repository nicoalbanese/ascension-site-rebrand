import { useState } from "react";
import styled from "styled-components";

import Image from "next/image";

const Wrapper = styled.div`
  width: 100%;
`;

const CollectionWrapper = styled.div`
  /* background: wh/ite; */
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;
  transition: 0.3s;
`;

const Company = styled.div`
  background: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PortfolioDetailed = ({ companies }) => {
  const COMPANIES = companies;
  const [companiesShown, setCompaniesShown] = useState(COMPANIES);

  let handleFilterChange = (activeOption) => {
    console.log(activeOption);
    if (activeOption) {
      setCompaniesShown(
        COMPANIES.filter((company) => company.category.includes(activeOption))
      );
    } else {
      setCompaniesShown(COMPANIES);
    }
  };

  return (
    <Wrapper>
      <PortfolioFilter handleFilterChange={handleFilterChange} />
      <CollectionWrapper>
        {companiesShown.map((company) => {
          return (
            <Company key={company.id}>
              <Image src={company.logoUrl} height={100} width={100} />
              <h5>{company.name}</h5>
            </Company>
          );
        })}
      </CollectionWrapper>
    </Wrapper>
  );
};

export default PortfolioDetailed;

// PORTFOLIO FILTER BELOW

const filterOptions = [
  { name: "FinTech", isSelected: false },
  { name: "Commerce", isSelected: false },
  { name: "Sustainability", isSelected: false },
  { name: "New Work", isSelected: false },
  { name: "Next Gen Media", isSelected: false },
  { name: "Health", isSelected: false },
  { name: "DeepTech", isSelected: false },
];

let activeSelection = [];

const FilterWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
`;

const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  color: ${({ isSelected, theme }) =>
    !isSelected ? theme.colors.primaryOne : "white"};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primaryOne : "white"};
`;

const PortfolioFilter = ({ handleFilterChange }) => {
  return (
    <FilterWrapper>
      {filterOptions.map((option) => (
        <Button
          key={option.name}
          isSelected={option.isSelected}
          onClick={() => {
            option.isSelected
              ? handleFilterChange()
              : handleFilterChange(option.name);
            option.isSelected = !option.isSelected;
          }}
        >
          {option.name}
        </Button>
      ))}
    </FilterWrapper>
  );
};
