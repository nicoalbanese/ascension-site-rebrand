// TOOD: FIX ALGINMENT ON MOBILE FOR FILTERS - change to column
// Try and fix formatting for when less than 5 results

import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import Link from "next/link";

import Pill from "../components/Pill";

const Wrapper = styled.div`
  width: 100%;
`;

const Badge = styled.div`
  background-color: #16a34a;
  color: white;
  padding: 0.5rem 1rem;
  /* font-family: sans-serif; */
  font-size: 0.7rem;
  font-weight: 900;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  text-transform: uppercase;
  border-radius: 5px;
`;

const CollectionWrapper = styled(motion.div)`
  /* background: wh/ite; */
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-columns: repeat(5, 1fr); */
  grid-gap: 1rem;
  transition: 0.3s;

  .companyTile {
    max-width: 340px;
  }
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
  height: 14rem;

  .small-text {
    font-size: 0.75rem;
  }

  &:hover {
    /* transform: translateY(-0.2rem) translateZ(1rem); */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 0.9;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    position: relative;
    /* width: 300px; */
    height: 160px;
    img {
      z-index: 3;
    }
    /* flex: 2; */

    #hidden-name {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      position: absolute;
      opacity: 0.5;
      text-align: center;
      /* inset: 0; */
      /* opacity: 0; */
    }
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

const NoResults = styled.div`
  text-align: center;
`;

const PortfolioDetailed = ({ companies }) => {
  const COMPANIES = companies;
  const [companiesShown, setCompaniesShown] = useState(COMPANIES);
  // console.log(COMPANIES);

  const [filter, setFilter] = useState([
    { name: "FinTech", isSelected: false, id: 0 },
    { name: "Commerce", isSelected: false, id: 1 },
    { name: "Sustainability", isSelected: false, id: 2 },
    { name: "New Work", isSelected: false, id: 3 },
    { name: "Next Gen Media", isSelected: false, id: 4 },
    { name: "Health", isSelected: false, id: 5 },
    { name: "DeepTech", isSelected: false, id: 6 },
    { name: "Fair By Design", isSelected: false, id: 7 },
  ]);

  const [activeCompanies, setActiveCompanies] = useState({
    sector: "all",
    status: "all",
    fund: "all",
  });

  const updateActiveCompanies = (type, value) => {
    // console.log(type, value);
    setActiveCompanies({ ...activeCompanies, [type]: value });
    // console.log(activeCompanies);
  };

  // useEffect(() => {
  //   console.log("new companies", companiesShown);
  // }, [companiesShown]);

  useEffect(() => {
    // console.log("new params", activeCompanies);

    // if (activeCompanies.sector == "all" && activeCompanies.fund == "all" && activeCompanies.status == "all") {
    //   setCompaniesShown
    // }

    // if (activeCompanies.sector == "all") {
    //   let newCompaniesShown = COMPANIES.filter((company) =>
    //     company.fundSimplified.includes(activeCompanies.fund)
    //   );
    //   setCompaniesShown(newCompaniesShown);
    // }

    // first filter by sector
    let filteredBySector = COMPANIES.filter((company) => {
      if (activeCompanies.sector != "all") {
        return company.category.includes(activeCompanies.sector);
      } else {
        return true;
      }
    });

    // then filter by status

    let filteredByStatus = filteredBySector.filter((company) => {
      if (activeCompanies.status != "all") {
        return company.simplifiedStatus == activeCompanies.status;
      } else {
        return true;
      }
    });

    // then filter by fund

    let filteredByFund = filteredByStatus.filter((company) => {
      if (activeCompanies.fund != "all") {
        // console.log(company.name, company.simplifiedFund, activeCompanies.fund)

        return company.simplifiedFund.includes(activeCompanies.fund);
        return true;
      } else {
        return true;
      }
    });

    setCompaniesShown(filteredByFund);
  }, [activeCompanies]);

  let handleFilterChange = (activeOption) => {
    // console.log(activeOption);
    if (activeOption) {
      let newCompanies = COMPANIES.filter((company) =>
        company.category.includes(activeOption)
      );
      setCompaniesShown(newCompanies);
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
      {/* <PortfolioFilter
        handleFilterChange={handleFilterChange}
        filter={filter}
      /> */}
      <PortfolioFilterDropDown updateActiveCompanies={updateActiveCompanies} />
      <CollectionWrapper
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
      >
        {/* {companiesShown &&
          companiesShown.map((company, i) => {
            return <CompanyTile company={company} i={i} key={company.id} />;
          })} */}
        {companiesShown && <PortfolioContainer companies={companiesShown} />}
        {companiesShown.length == 0 && (
          <NoResults>no companies fit the search critera</NoResults>
        )}
      </CollectionWrapper>
    </Wrapper>
  );
};

export default PortfolioDetailed;

export const PortfolioContainer = ({ companies }) => {
  return (
    <>
      {companies.map((company, i) => {
        return <CompanyTile company={company} i={i} key={company.id} />;
      })}
    </>
  );
};

const CompanyDetailed = styled(motion.div)`
  height: 12rem;
  overflow-y: scroll;
  transition: 0.3s;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
  #description {
    flex: 3;
  }
  #find-out-more {
    color: ${({ theme }) => theme.colors.primaryThree};
    opacity: 0.8;

    &:hover {
      opacity: 0.4;
    }
  }
`;

const CompanyTile = ({ company, i }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      custom={i}
      ref={ref}
      animate={controls}
      variants={boxVariants}
      className="companyTile"
      id={company.slug}
    >
      <Link href={`/portfolio/${company.slug}`}>
        <Company
          // key={company.id}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          hovering={isHovering}
        >
          {isHovering ? (
            <CompanyDetailed
              initial="initial"
              animate="in"
              exit="out"
              variants={{
                initial: {
                  opacity: 0,
                },
                in: {
                  opacity: 1,
                  transition: { duration: 0.05 },
                },
                out: {
                  opacity: 0,
                },
              }}
            >
              <h5>{company.name}</h5>
              <p id="description">{company.description}</p>
              <p id="find-out-more">find out more...</p>
            </CompanyDetailed>
          ) : (
            <>
              {/* <Image src={company.logoUrl} height={125} width={125} /> */}
              {company.status !== "Live" && <Badge>{company.status}</Badge>}
              <div className="image-container">
                <Image
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  layout="fill"
                  objectFit="cover"
                />
                <div id="hidden-name">{company.name}</div>
              </div>
              {/* <h5
                className={company.name.length > 20 ? "small-text" : undefined}
              >
                {company.name}
              </h5> */}
              <div className="pill-wrapper">
                {company.category.map((cat, i) => (
                  <Pill key={i} category={cat} />
                ))}
              </div>
            </>
          )}
        </Company>
      </Link>
    </motion.div>
  );
};

// PORTFOLIO FILTER BELOW

const FilterWrapper = styled.div`
  margin-top: 2rem;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 0.5rem 0.5rem;
`;

const Button = styled.button`
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 0.6rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 10px;
  color: ${({ isSelected, theme }) =>
    !isSelected ? theme.colors.primaryOne : "white"};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primaryOne : theme.colors.primaryTwo};
  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.primaryOne};
  transition: 0.3s;
  width: max-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryOne};
    opacity: 0.7;
    color: white;
  }
`;

const PortfolioFilter = ({ handleFilterChange, filter }) => {
  return (
    <FilterWrapper>
      {filter.map((option, i) => (
        <Button
          key={i}
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

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  select {
    /* -webkit-appearance:none; */
    background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 95% 50%;
    background-color: white;
	-moz-appearance: none; 
	-webkit-appearance: none; 
	appearance: none;
    padding: 0.5rem;
    font-size: 1rem;
    /* margin-right: 1rem; */
  }

  @media (max-width: 670px) {
    margin-bottom: 1rem;
  }

`;

const FilterOuterWrapper = styled.div`
  margin-top: 1rem;
  display: grid;

  @media (min-width: 671px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  @media (max-width: 670px) {
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const PortfolioFilterDropDown = ({ updateActiveCompanies }) => {
  const handleChange = (e) => {
    updateActiveCompanies(e.target.name, e.target.value);
    // console.log("after", activeCompanies);
    // console.log(e.target.name, e.target.value);
  };

  return (
    <FilterOuterWrapper>
      <SelectWrapper>
        <label htmlFor="category">Sector</label>
        <select name="sector" id="sector" onChange={handleChange}>
          <option value="all">All</option>
          <option value="FinTech">FinTech</option>
          <option value="Commerce">Commerce</option>
          <option value="Sustainability">Sustainability</option>
          <option value="New Work">New Work</option>
          <option value="Next Gen Media">Next Gen Media</option>
          <option value="Health">Health</option>
          <option value="DeepTech">DeepTech</option>
        </select>
      </SelectWrapper>
      <SelectWrapper>
        <label htmlFor="status">Status</label>
        <select name="status" id="status" onChange={handleChange}>
          <option value="all">All</option>
          <option value="Active">Active</option>
          <option value="Exited / Acquired">Exited / Acquired</option>
        </select>
      </SelectWrapper>
      <SelectWrapper>
        <label htmlFor="fund">Fund</label>
        <select name="fund" id="fund" onChange={handleChange}>
          <option value="all">All</option>
          <option value="Pre-Seed (SEIS) Fund">Pre-Seed (SEIS) Fund</option>
          <option value="Seed (EIS) Fund">Seed (EIS) Fund</option>
          <option value="Fair By Design Fund">Fair By Design Fund</option>
          <option value="Good Food Fund">Good Food Fund</option>
          <option value="Conduit EIS Fund">Conduit EIS Fund</option>
          <option value="Ascension Life Fund">Ascension Life Fund</option>
        </select>
      </SelectWrapper>
    </FilterOuterWrapper>
  );
};
