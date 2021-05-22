import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

const Wrapper = styled.nav`
  margin: 0;
  margin-top: 40px;
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
    text-transform: uppercase;
    font-family: "Montserrat-Regular";
  }

  li:not(:last-of-type) {
    margin-right: 1.3rem;
  }

  #logo {
    opacity: 1;
  }

  a {
    text-decoration: none;
    color: inherit;
    opacity: 0.4;

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

    button {
      padding: 7.5px 15px;
      border: none;
      background-color: ${({ theme }) => theme.colors.primaryThree};
      color: white;
      text-transform: uppercase;
      font-size: 1.1rem;
      cursor: pointer;
      border: solid 1px transparent;
      transition: 0.3s;
      border-radius: 5px;
      &:hover {
        background-color: white;
        border: solid 1px;
        border-color: ${({ theme }) => theme.colors.primaryThree};
        color: ${({ theme }) => theme.colors.primaryThree};
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
  &:hover {
    opacity: 1;
    .accent {
      opacity: 1;
    }
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

const CoolLink = ({ text, url }) => {
  return (
    <LinkWrapper>
      <Link href={url}>
        <a>
          {text}
          <Accentuator className='accent' />
        </a>
      </Link>
    </LinkWrapper>
  );
};

const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <Link href='/'>
          <a id='logo'>
            <Image src={"/images/a solo.png"} width='35' height='35' />
          </a>
        </Link>
      </div>
      <div className='nav-right'>
        <div className='full-width'>
          <ul>
            <li>
              <CoolLink text={"Investors"} url='/investors' />
            </li>
            <li>
              <CoolLink text={"Founders"} url='/founders' />
            </li>
            <li>
              <CoolLink text={"Portfolio"} url='/portfolio' />
            </li>
            <li>
              <CoolLink text={"Team"} url='/team' />
            </li>
          </ul>
          <button>log in</button>
        </div>
        <div className='limited'>Menu</div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
