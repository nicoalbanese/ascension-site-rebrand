import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import Pill from "../components/Pill";

const Wrapper = styled.div`
  width: 100%;
`;

const CollectionWrapper = styled.div`
  /* background: wh/ite; */
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  transition: 0.3s;
`;

const Company = styled.div`
  background: white;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 2px 1px lightgray;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .pill-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;
    align-items: center;
    /* width: 130%; */
    * {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const PortfolioDetailed = ({ companies }) => {
  const COMPANIES = companies;
  const [companiesShown, setCompaniesShown] = useState(COMPANIES);

  const [filter, setFilter] = useState([
    { name: "FinTech", isSelected: false, id: 0 },
    { name: "Commerce", isSelected: false, id: 1 },
    { name: "Sustainability", isSelected: false, id: 2 },
    { name: "New Work", isSelected: false, id: 3 },
    { name: "Next Gen Media", isSelected: false, id: 4 },
    { name: "Health", isSelected: false, id: 5 },
    { name: "DeepTech", isSelected: false, id: 6 },
  ]);

  let handleFilterChange = (activeOption) => {
    console.log(activeOption);
    if (activeOption) {
      setCompaniesShown(
        COMPANIES.filter((company) => company.category.includes(activeOption))
      );
      const newFilterSet = filter.map((option) => {
        if (option.name === activeOption) {
          return { name: option.name, isSelected: true };
        }
        return { name: option.name, isSelected: false };
      });
      setFilter(newFilterSet);
    } else {
      setCompaniesShown(COMPANIES);
    }
  };

  return (
    <Wrapper>
      <PortfolioFilter
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
      <CollectionWrapper>
        {companiesShown.map((company, i) => {
          return (
            <motion.div
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
                    delay: 0.1 * i,
                  },
                },
              }}
              key={company.id}
            >
              <Link href={`/portfolio/${company.slug}`}>
                <Company key={company.id}>
                  <Image src={company.logoUrl} height={125} width={125} />
                  <h5>{company.name}</h5>
                  <div className='pill-wrapper'>
                    {company.category.map((cat) => (
                      <Pill key={cat.id} category={cat} />
                    ))}
                  </div>
                </Company>
              </Link>
            </motion.div>
          );
        })}
      </CollectionWrapper>
    </Wrapper>
  );
};

export default PortfolioDetailed;

// PORTFOLIO FILTER BELOW

const FilterWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 1rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 10px;
  color: ${({ isSelected, theme }) =>
    !isSelected ? theme.colors.primaryOne : "white"};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primaryOne : theme.colors.primaryTwo};
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.primaryOne};
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryOne};
    opacity: 0.7;
    color: white;
  }
`;

const PortfolioFilter = ({ handleFilterChange, filter }) => {
  return (
    <FilterWrapper>
      {filter.map((option) => (
        <Button
          key={option.id}
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
