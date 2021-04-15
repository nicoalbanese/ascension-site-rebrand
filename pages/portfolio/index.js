import Layout from "../../components/Layout";
import head from "next/head";

import PortfolioDetailed from "../../components/PortfolioDetailed";

const portfolio = ({ companies }) => {
  //   console.log(companies, moreData);
  return (
    <Layout>
      <head>
        <title>Portfolio</title>
      </head>
      <div className='description'>
        <h1>Portfolio</h1>
        <p>
          We manage (S)EIS and Institutional Seed funds that invest in UK
          technology and impact businesses across these key focus areas: Next
          Gen Media, New Work, Health, Sustainability, FinTech, Commerce,
          DeepTech.{" "}
        </p>
        <p>Number of portfolio companies {companies.length}</p>
      </div>
      <div className='portfolioCards'>
        {companies && <PortfolioDetailed companies={companies} />}
      </div>
    </Layout>
  );
};

export default portfolio;

export async function getStaticProps() {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
  );
  myHeaders.append("Cookie", "brw=brwy1TrDiZyNAsU5u");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const AIRTABLE_URL =
    "https://api.airtable.com/v0/appm10v13QJCjL2PL/Website%20Portfolio?view=PortfolioAPI";
  const res = await fetch(AIRTABLE_URL, requestOptions);
  const data = await res.json();

  let structuredData = data.records.map((company) => {
    return {
      name: company.fields.Name,
      url: company.fields.Website,
      slug: company.fields["[website] slug"],
      description: company.fields.Description,
      logoUrl: company.fields.Logo[0].url,
      id: company.id,
      category: company.fields.Category,
    };
  });

  let moreData;
  if (data.offset) {
    const secondRes = await fetch(
      `${AIRTABLE_URL}&offset=${data.offset}`,
      requestOptions
    );
    const secondData = await secondRes.json();
    moreData = secondData.records.map((company) => {
      return {
        name: company.fields.Name,
        url: company.fields.Website,
        slug: company.fields["[website] slug"],
        description: company.fields.Description,
        logoUrl: company.fields.Logo[0].url,
        id: company.id,
        category: company.fields.Category,
      };
    });
  }
  structuredData = [...structuredData, ...moreData];

  //   console.log(data);

  return {
    props: {
      companies: structuredData,
    }, // will be passed to the page component as props
  };
}
