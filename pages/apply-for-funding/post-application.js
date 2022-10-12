import Layout from "../../components/Layout";

import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head"

const Wrapper = styled.div`
  width: 100%;
  height: 48rem;
  iframe {
    width: 100%;
    height: 100%;
  }
  .image-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const ApplySection = styled.div`
  padding-top: 2rem;
  font-size: 1.25rem;
`;

const ApplyForFunding = () => {
  return (
    <Layout>
      <Head>
        <title>
          Thanks for your application!
        </title>
      </Head>
      <Wrapper>
        <h1>Thanks for your application!</h1>
        <ApplySection>
          <p>
            Thank you so much for applying for investment from Ascension. You
            should receive an email shortly confirming we have received your
            application. We look forward to reviewing your application!
          </p>
        </ApplySection>
        <div className="image-container">
          <Image
            src={"/images/bg-new-site-team.png"}
            width={2660}
            alt="ascension team picture"
            height={1200}
            quality="70"
          />
        </div>
        <ApplySection>
          <p>
            If you want to stay up to date with all things Ascension, please
            follow us on{" "}
            <Link href="https://www.linkedin.com/company/ascensionvc">
              <a target={"_blank"}>LinkedIn</a>
            </Link>{" "}
            and{" "}
            <Link href="https://twitter.com/ascensiongrp">
              <a target={"_blank"}>Twitter</a>
            </Link>.
          </p>
        </ApplySection>
      </Wrapper>
    </Layout>
  );
};

export default ApplyForFunding;
