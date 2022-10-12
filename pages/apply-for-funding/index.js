import Layout from "../../components/Layout";

import styled from "styled-components";

import Link from "next/link"

const Wrapper = styled.div`
  width: 100%;
  height: 48rem;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const ApplySection = styled.div`
  padding-top: 1rem;
`;

const ApplyForFunding = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Apply For Funding</h1>
        {/* <iframe
          src='https://ascensionventures.typeform.com/to/zn6ksFHn'
          frameborder='0'
          title='Ascension Funding - Application Form'
        ></iframe> */}
        {/* <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shriviOtroIyf78wi?backgroundColor=blueLight" frameborder="0" onmousewheel="" width="100%" height="4736.005682" style={{background: "transparent", border: "1px solid #ccc"}}></iframe> */}
        <ApplySection>
          To apply for funding, please{" "}
          <Link href="https://airtable.com/shriviOtroIyf78wi">
            <a target={"_blank"}>
              fill out this form
            </a>
          </Link>
          .
        </ApplySection>
      </Wrapper>
    </Layout>
  );
};

export default ApplyForFunding;
