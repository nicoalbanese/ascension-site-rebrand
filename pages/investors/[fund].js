import { getFunds } from "../../lib/airtable";

import Layout from "../../components/Layout";

const Fund = ({ fund }) => {
  console.log(fund);
  return (
    <Layout>
      <h1>{fund.name}</h1>
      <p>{fund.businessCharacteristics}</p>
    </Layout>
  );
};

export default Fund;

export async function getStaticProps({ params }) {
  const funds = await getFunds();
  const [fund] = funds.filter((f) => f.slug === params.fund);
  return { props: { fund } };
}

export async function getStaticPaths() {
  const funds = await getFunds();

  const paths = funds.map((fund) => {
    return {
      params: { fund: fund.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
