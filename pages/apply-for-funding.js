import Layout from "../components/Layout";

import styled from 'styled-components';

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
          {/* <h3>Apply for funding</h3> */}
          <iframe
            src='https://ascensionventures.typeform.com/to/aP9iNtyk'
            frameborder='0'
          ></iframe>
      </Wrapper>
    </Layout>
  );
};

export default ApplyForFunding;
