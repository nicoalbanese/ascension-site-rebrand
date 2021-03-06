import Layout from "../components/Layout";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 48rem;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const ApplyForFunding = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Apply For Funding</h1>
        <iframe
          src='https://ascensionventures.typeform.com/to/zn6ksFHn'
          frameborder='0'
          title='Ascension Funding - Application Form'
        ></iframe>
      </Wrapper>
    </Layout>
  );
};

export default ApplyForFunding;
