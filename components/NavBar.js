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
    font-family: "Montserrat";
  }

  li:not(:last-of-type) {
    margin-right: 1.3rem;
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
      padding: 10px 20px;
      border: none;
      background-color: ${({ theme }) => theme.colors.primaryThree};
      color: white;
      text-transform: uppercase;
      font-size: 1.1rem;
      cursor: pointer;
      border: solid 1px transparent;
      transition: 0.3s;
      &:hover {
        background-color: white;
        border: solid 1px;
        border-color: ${({ theme }) => theme.colors.primaryThree};
        color: ${({ theme }) => theme.colors.primaryThree};
      }
    }
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <div>
        <Image src={"/images/a solo.png"} width='35' height='35' />
      </div>
      <div className='nav-right'>
        <div className='full-width'>
          <ul>
            <li>
              <Link href='/'>
                <a>Investors</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Founders</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Team</a>
              </Link>
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
