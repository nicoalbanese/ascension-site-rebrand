import Layout from "../components/Layout";
import { getPortfolioJobs } from "../lib/airtable";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PortfolioJobs = ({ companies, initJobCount }) => {
//   console.log(initJobCount);

  const COMPANIES = companies;
  const [jobsShown, setJobsShown] = useState(COMPANIES);

  const [jobCount, setJobCount] = useState(initJobCount);

  const [filter, setFilter] = useState([
    { name: "Marketing", isSelected: false, id: 0 },
    { name: "Engineering", isSelected: false, id: 1 },
    { name: "Sales", isSelected: false, id: 2 },
    { name: "Product", isSelected: false, id: 3 },
    { name: "Operations", isSelected: false, id: 4 },
    { name: "Business Development", isSelected: false, id: 5 },
    { name: "People", isSelected: false, id: 6 },
    { name: "Customer Success", isSelected: false, id: 7 },
  ]);

  // useEffect(() => {
  //   console.log("new companies", companiesShown);
  // }, [companiesShown]);

  let handleFilterChange = (activeOption) => {
    // console.log(activeOption);
    if (activeOption) {
      let newJobCount = 0;
      let newCompanies = COMPANIES.map((company) => {
        return {
          ...company,
          jobs: company.jobs.filter((job) => job.type === activeOption),
        };
      });
      //   console.log(newCompanies);
      newCompanies.forEach((company) =>
        company.jobs.forEach((job) => newJobCount++)
      );
      setJobCount(newJobCount);
      setJobsShown(newCompanies);
      const newFilterSet = filter.map((option) => {
        if (option.name === activeOption) {
          return { name: option.name, isSelected: true };
        }
        return { name: option.name, isSelected: false };
      });
      setFilter(newFilterSet);
    } else {
      setJobsShown(COMPANIES);
      setJobCount(initJobCount);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Portfolio Jobs</title>
      </Head>
      <h1>Portfolio Jobs</h1>
      <p style={{ marginTop: ".5rem" }}>
        Check out the open roles in our 130+ portfolio companies and join us in
        the mission to change the world for good.
      </p>
      <PortfolioFilter
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
      <p style={{textAlign: "center", paddingTop: "1rem", opacity: ".5"}}>Showing {jobCount} {jobCount == 1 ? "job" : "jobs"}</p>
      {jobsShown.map(
        (company, i) =>
          company.jobs.length > 0 && <Company company={company} key={i} />
      )}
    </Layout>
  );
};

const FilterWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
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

const CompanyWrapper = styled(motion.div)`
  /* background: red; */
  padding: 2rem 0rem;

  .company {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }

  #logo {
    padding-right: 0.5rem;
  }

  @media (max-width: 700px) {
    /* background: red; */
    .company {
      display: block;
    }
    #logo {
      display: none;
    }
  }

  #company-website {
    /* font-size: 0.9rem; */
    /* margin-bottom: 0.3rem; */
    /* display: block; */
    color: ${({ theme }) => theme.colors.primaryOne};
    text-decoration: none;
    &:hover {
      h2 {
        opacity: 0.5;
        transition: 0.3s;
      }
    }
  }

  .company-description {
    * {
      margin-bottom: 0.5rem;
    }
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Company = ({ company }) => {
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <CompanyWrapper animate={controls} variants={boxVariants} ref={ref}>
      <div className="company">
        <div id="logo">
          <Image src={company.company.logo} width={125} height={125} />
        </div>
        <div>
          <div className="company-description">
            <Link href={company.company.website}>
              <a id="company-website">
                <h2>{company.company.name}</h2>
              </a>
            </Link>
            <p>{company.company.description}</p>
          </div>
          <div className="job">
            {company.jobs.map((job, i) => (
              <Job job={job} key={i} />
            ))}
          </div>
        </div>
      </div>
    </CompanyWrapper>
  );
};

const JobWrapper = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Job = ({ job }) => {
  return (
    <JobWrapper>
      <Link href={job.link}>
        <a>{job.name}</a>
      </Link>
    </JobWrapper>
  );
};

export default PortfolioJobs;

export async function getStaticProps() {
  let jobs = await getPortfolioJobs();
  const possCompanies = jobs.map((job) => job.company.name);
  const uniqueCompanyNames = [...new Set(possCompanies)].sort();

  let companies;

  companies = uniqueCompanyNames.map((company) => {
    const filteredJobs = jobs.filter((job) => job.company.name == company);
    return {
      company: { ...filteredJobs[0].company },
      jobs: filteredJobs,
    };
  });

  return {
    props: {
      companies,
      initJobCount: jobs.length,
    }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
