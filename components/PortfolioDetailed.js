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

const CollectionWrapper = styled(motion.div)`
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
    { name: "Fair By Design", isSelected: false, id: 7 },
  ]);

  // useEffect(() => {
  //   console.log("new companies", companiesShown);
  // }, [companiesShown]);

  let handleFilterChange = (activeOption) => {
    console.log(activeOption);
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
      <PortfolioFilter
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
      <CollectionWrapper
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
          },
        }}
      >
        {companiesShown &&
          companiesShown.map((company, i) => {
            return <CompanyTile company={company} i={i} key={company.id} />;
          })}
      </CollectionWrapper>
    </Wrapper>
  );
};

export default PortfolioDetailed;

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
              initial='initial'
              animate='in'
              exit='out'
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
              <p id='description'>{company.descriptionCondensed}</p>
              <p id='find-out-more'>find out more...</p>
            </CompanyDetailed>
          ) : (
            <>
              {/* <Image src={company.logoUrl} height={125} width={125} /> */}
              <div className='image-container'>
                <Image
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  layout='fill'
                  objectFit='cover'
                />
                <div id='hidden-name'>{company.name}</div>
              </div>
              {/* <h5
                className={company.name.length > 20 ? "small-text" : undefined}
              >
                {company.name}
              </h5> */}
              <div className='pill-wrapper'>
                {company.category.map((cat) => (
                  <Pill key={cat.id} category={cat} />
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
