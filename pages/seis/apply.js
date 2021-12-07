import Layout from "../../components/Layout"

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 48rem;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Apply = () => {
    return (
        <Layout>
            <Wrapper>
                <iframe
                    src='https://ascensionventures.typeform.com/to/W0r80xvx'
                    frameborder='0'
                    title='Ascension Funding - Application Form'
                ></iframe>
            </Wrapper>
        </Layout>
    )
}

export default Apply
