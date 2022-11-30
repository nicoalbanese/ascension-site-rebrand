import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

import Link from "next/link";

import Cookies from "js-cookie";

// import CookieBanner from "react-cookie-banner";

const InnerWrapper = styled(motion.div)`
  width: 85%;
  max-width: 1124px;
  margin: auto;
  flex-grow: 1;
  padding: 1rem;

  @media (max-width: 968px) {
    padding: 1rem;
    /* width: 85%; */
  }

  @media (max-width: 550px) {
    width: 95%;
  }
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const OuterWrapper = styled.div`
  /* height: 100vh; // removed so that sticky banner can work... */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  margin-top: 3rem;
`;

const Layout = ({ children }) => {
  const [cookiePreference, setUserCookiePreference] = useState();

  useEffect(() => {
    // console.log(Cookies.get("user_accepts_cookies"));
    if (Cookies.get("user_accepts_cookies")) {
      setUserCookiePreference(Cookies.get("user_accepts_cookies"));
    }
  }, []);
  return (
    <OuterWrapper>
      <Disclaimer />
      <InnerWrapper
        className="inner"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <NavBar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </InnerWrapper>
      <Footer className="footer" pageVariants={pageVariants} />
      {cookiePreference == null && (
        <CookieBanner setUserCookiePreference={setUserCookiePreference} />
      )}
    </OuterWrapper>
  );
};

export default Layout;

const CookieBannerWrapper = styled(motion.div)`
  z-index: 10;
  background: ${({ theme }) => theme.colors.primaryOne};
  width: 18rem;
  position: fixed;
  bottom: 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primaryTwo};
  right: 2rem;
  padding: 1rem;
  font-size: 0.8rem;
  box-shadow: 0px 1px 1px ${({ theme }) => theme.colors.primaryOne};

  @media (max-width: 500px) {
    width: 90%;
    font-size: 0.7rem;
    left: 5%;
    /* padding: 1rem; */
    display: flex;
    align-items: center;
    margin: 0;
    padding: 1rem;
    .main-content {
      flex: 3;
      margin: 0;
      p {
        margin: 0.3rem 0 0 0;
      }
    }
    .button-container {
      flex: 1;
      height: 100%;
    }
  }

  p {
    margin: 0.5rem 0;
    a {
      color: ${({ theme }) => theme.colors.primaryTwo};
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.primaryTwo};
    color: ${({ theme }) => theme.colors.primaryOne};
    padding: 0.25rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    &:hover {
      opacity: 0.6;
    }
    @media (max-width: 500px) {
      padding: 0.3rem;
    }
  }
  .button-container {
    display: flex;
    flex-direction: column;
  }
`;

const CookieBanner = ({ setUserCookiePreference }) => {
  const setCookiePreference = (preference) => {
    if (preference === "on") {
      Cookies.set("user_accepts_cookies", "true", { expires: 31 });
      setUserCookiePreference("on");
    } else {
      Cookies.set("user_accepts_cookies", "false", { expires: 31 });
      setUserCookiePreference("off");
    }
  };
  return (
    <CookieBannerWrapper
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="main-content">
        <h3>Cookie Consent</h3>
        <p>
          We use cookies to understand and improve your experience. View our{" "}
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>{" "}
        </p>
      </div>
      <div className="button-container">
        <button onClick={() => setCookiePreference("on")}>Ok</button>
        {/* <button onClick={() => setCookiePreference("off")}>
          No, please don't track.
        </button> */}
      </div>
    </CookieBannerWrapper>
  );
};

const DisclaimerWrapper = styled.div`
  /* background-color: #fff; */
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100; 
  background: ${({ theme }) => theme.colors.primaryTwo};
  border-bottom: solid 1px lightgrey;
  /* box-shadow: 0 1px 1px -10px gray; */
`;

const InnerDisclaimerWrapper = styled(InnerWrapper)`
  /* background: #000 !important; */
  
  font-size: .92rem;
  font-weight: 600;
  padding: .75rem 0 !important;
  color: ${({ theme }) => theme.colors.primaryOne};
  padding: .75rem;
  border-radius: 10px;
  /* margin-top: .2rem; */
  text-align: center;



  @media (max-width: 500px) {
    font-size: .8rem;
  }

`;

const Disclaimer = () => {
  return (
    <DisclaimerWrapper>
      <InnerDisclaimerWrapper>
        <p>Don't invest unless you're prepared to lose all the money you invest. This is a high-risk investment, and you are unlikely to be protected if something goes wrong.</p>
        <p><Link href="/fca-disclaimer" ><a target="_blank">Take two minutes to learn more.</a></Link></p>
      </InnerDisclaimerWrapper>
    </DisclaimerWrapper>
  );
};
