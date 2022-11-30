import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

import styled from "styled-components";

const Wrapper = styled.nav`
  svg {
    stroke: ${({ theme }) => theme.colors.primaryOne};
  }

  /* @media (min-width: 850px) {
    margin: 0;
  } */

  margin: 0;
  /* margin-top: 40px; removed for sticky disclaimer banner */
  margin-top: 5px;
  padding: 0;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  /* background-color: white; */

  ul {
    display: flex;
    padding: 0;
    list-style: none;
    margin-top: 0;
    /* background-color: white; */
    height: 100%;
    align-items: center;
    margin-bottom: 0;
    margin-right: 1.8rem;
  }
  li {
    margin: none;
    text-transform: capitalize;
    font-family: "Montserrat-Regular";
  }

  li:not(:last-of-type) {
    margin-right: 1.3rem;
  }

  #logo {
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    opacity: 0.4;
    font-weight: bold;

    #active {
      opacity: 1;
    }

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .nav-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: white; */

    .full-width {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 768px) {
        display: none;
      }
    }

    .limited {
      display: none;
      font-size: 1.5rem;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }

      @media (max-width: 768px) {
        display: block;
      }
    }

    #login-button {
      opacity: 1;
    }
    button {
      padding: 7.5px 15px;
      border: none;
      background-color: ${({ theme }) => theme.colors.primaryThree};
      color: white;
      text-transform: uppercase;
      font-size: 0.9rem;
      cursor: pointer;
      border: solid 1px transparent;
      transition: 0.3s;
      border-radius: 5px;
      a {
        color: white;
        opacity: 1;
      }
      &:hover {
        opacity: 0.4;
      }
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin-top: 0.5rem;
  align-items: center;
  transition: 0.3s;
  opacity: 1;
  &:hover {
    opacity: 1;
    .accent {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }

  .apply-link {
    /* font-size: 1.05rem; */
    color: ${({ theme }) => theme.colors.primaryThree};
    opacity: 1;
  }
`;

const Accentuator = styled.div`
  transition: 0.3s;
  opacity: 0;
  height: 0.1rem;
  width: 100%;
  margin-top: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primaryThree};
`;

const CoolLink = ({
  text,
  url,
  isActive,
  isApplyLink = false,
  targetblank = false,
}) => {
  return (
    <LinkWrapper isActive={isActive}>
      <Link href={url}>
        <a
          className={`${isActive && "active"} ${isApplyLink && "apply-link"}`}
          target={targetblank ? "_blank" :undefined}
        >
          {text}
          <Accentuator className={`accent ${isActive && "active"}`} />
        </a>
      </Link>
    </LinkWrapper>
  );
};

const NavBar = () => {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  const router = useRouter();
  return (
    <Wrapper>
      {showOverlayMenu && (
        <AnimatePresence>
          <OverlayMenu setShowOverlayMenu={setShowOverlayMenu} />
        </AnimatePresence>
      )}
      <div>
        <Link href="/">
          <a id="logo">
            <Image
              src={"/images/a logo dark.png"}
              alt="ascension a logo"
              width="35"
              height="35"
            />
          </a>
        </Link>
      </div>
      <div className="nav-right">
        <div className="full-width">
          <ul>
            <li>
              <CoolLink
                text={"For Investors"}
                isActive={router.pathname === "/investors"}
                url="/investors"
              />
            </li>
            <li>
              <CoolLink
                text={"For Founders"}
                url="/founders"
                isActive={router.pathname === "/founders"}
              />
            </li>
            <li>
              <CoolLink
                text={"Portfolio"}
                url="/portfolio"
                isActive={router.pathname === "/portfolio"}
              />
            </li>
            <li>
              <CoolLink
                text={"Team"}
                url="/team"
                isActive={router.pathname === "/team"}
              />
            </li>
            <li>
              <CoolLink
                text={"Apply for funding"}
                url="https://airtable.com/shriviOtroIyf78wi"
                isActive={router.pathname === "/apply-for-funding"}
                isApplyLink
                targetblank
              />
            </li>
          </ul>
          {/* <Link href='/apply-for-funding'>
            <a id='login-button'>
              <button>apply</button>
            </a>
          </Link> */}
          {/* <Link href='https://ascension.mainspringfs.com/Login'>
            <a id='login-button'>
              <button>log in</button>
            </a>
          </Link> */}
        </div>
        <div className="limited" onClick={() => setShowOverlayMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;

const OverlayWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;

  @media (min-width: 776px) {
    display: none;
  }
`;

const InnerContainer = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;

  h2 {
    margin-top: 0.7rem;
  }
`;

const UpperContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  #close {
    cursor: pointer;
    opacity: 0.6;
    font-weight: 300;
    &:hover {
      opacity: 1;
    }
  }
`;

const ContainerWrapper = styled.div`
  height: 30rem;
  background: ${({ theme }) => theme.colors.primaryOne};
  color: ${({ theme }) => theme.colors.primaryTwo};
`;
const OverlayMenu = ({ setShowOverlayMenu }) => {
  return (
    <OverlayWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContainerWrapper>
        <UpperContainer>
          <Image
            src={"/images/a logo light.png"}
            width="35"
            height="35"
            alt="ascension a logo light"
          />
          <h1 id="close" onClick={() => setShowOverlayMenu(false)}>
            X
          </h1>
        </UpperContainer>
        <InnerContainer>
          <h2>
            <Link href="/">
              <a>Home</a>
            </Link>
          </h2>
          <h2>
            <Link href="/investors">
              <a>For Investors</a>
            </Link>
          </h2>
          <h2>
            <Link href="/founders">
              <a>For Founders</a>
            </Link>
          </h2>
          <h2>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </h2>
          <h2>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </h2>
          <h2>
            <Link href="https://airtable.com/shriviOtroIyf78wi">
              <a target={"_blank"}>Apply For Funding</a>
            </Link>
          </h2>
        </InnerContainer>
      </ContainerWrapper>
    </OverlayWrapper>
  );
};
