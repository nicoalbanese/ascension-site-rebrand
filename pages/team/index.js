import Layout from "../../components/Layout";

import Link from "next/link";
import { getTeam } from "../../lib/airtable";
const index = ({ team }) => {
  return (
    <Layout>
      <h1>Team</h1>
      <div className='team-container'>
        {team.map((person) => (
            <div key={person.id}>
          <Link href={`/team/${person.slug}`}>
            <a>{person.name}</a>
          </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const team = await getTeam();
  return { props: { team } };
}
