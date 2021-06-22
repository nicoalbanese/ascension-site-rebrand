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
  height: 100vh;
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
    console.log(Cookies.get("user_accepts_cookies"));
    if (Cookies.get("user_accepts_cookies")) {
      setUserCookiePreference(Cookies.get("user_accepts_cookies"));
    }
  }, []);
  return (
    <OuterWrapper>
      <InnerWrapper
        className='inner'
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
      >
        <NavBar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </InnerWrapper>
      <Footer className='footer' pageVariants={pageVariants} />
      {cookiePreference == null && (
        <CookieBanner setUserCookiePreference={setUserCookiePreference} />
      )}
    </OuterWrapper>
  );
};

export default Layout;

const CookieBannerWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primaryOne};
  width: 18rem;
  position: fixed;
  bottom: 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primaryTwo};
  right: 2rem;
  padding: 1.5rem;
  font-size: 0.85rem;
  box-shadow: 0px 1px 1px ${({ theme }) => theme.colors.primaryOne};

  p {
    margin: 1rem 0;
    a {
      color: ${({ theme }) => theme.colors.primaryTwo};
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.primaryTwo};
    color: ${({ theme }) => theme.colors.primaryOne};
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    &:hover {
      opacity: 0.6;
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
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
    >
      <h3>Cookie Consent</h3>
      <p>
        We use cookies to understand and improve you're experience. View our{" "}
        <Link href='/privacy'>
          <a>Privacy Policy</a>
        </Link>{" "}
      </p>
      <div className='button-container'>
        <button onClick={() => setCookiePreference("on")}>Ok</button>
        {/* <button onClick={() => setCookiePreference("off")}>
          No, please don't track.
        </button> */}
      </div>
    </CookieBannerWrapper>
  );
};
