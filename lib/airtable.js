export async function getPortfolio() {
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
      slug: company.fields["[website] slug"]
        ? company.fields["[website] slug"]
        : "/",
      description: company.fields.Description,
      descriptionCondensed: company.fields["Description condensed"],
      logoUrl: company.fields.Logo[0].url,
      id: company.id,
      category: company.fields.Category,
      founders: company.fields["Founders"]
        ? company.fields["Founders"].split(",").map((item) => item.trim())
        : null,
      founderLinkedins: company.fields["Founder Linkedins"]
        ? company.fields["Founder Linkedins"]
            .split(",")
            .map((item) => item.trim())
        : null,
      founderPhotos: company.fields["Founder Photos [for website]"]
        ? company.fields["Founder Photos [for website]"].map(
            (founderPhoto) => founderPhoto.url
          )
        : null,
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
        slug: company.fields["[website] slug"]
          ? company.fields["[website] slug"]
          : "/",
        description: company.fields.Description,
        descriptionCondensed: company.fields["Description condensed"],
        logoUrl: company.fields.Logo[0].url,
        id: company.id,
        category: company.fields.Category,
        founders: company.fields["Founders"]
          ? company.fields["Founders"].split(",").map((item) => item.trim())
          : null,
        founderLinkedins: company.fields["Founder Linkedins"]
          ? company.fields["Founder Linkedins"]
              .split(",")
              .map((item) => item.trim())
          : null,
        founderPhotos: company.fields["Founder Photos [for website]"]
          ? company.fields["Founder Photos [for website]"].map(
              (founderPhoto) => founderPhoto.url
            )
          : null,
      };
    });
  }
  structuredData = [...structuredData, ...moreData];
  return structuredData;
}
export async function getTeam() {
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
    "https://api.airtable.com/v0/appm10v13QJCjL2PL/Ascension%20Active%20Team?maxRecords=50&view=ActiveTeamAPI";
  const res = await fetch(AIRTABLE_URL, requestOptions);
  const data = await res.json();

  let structuredData = data.records.map((person) => {
    return {
      name: person.fields.Name,
      position: person.fields.Position,
      slug: person.fields["[website] slug"],
      bio: person.fields.Bio,
      twitter: person.fields.Twitter,
      linkedin: person.fields.LinkedIn,
      picture: person.fields.Picture[0].url,
      id: person.id,
      // maybe add team here as well / focus
    };
  });

  // console.log(structuredData);

  return structuredData;
}
export async function getFunds() {
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
    "https://api.airtable.com/v0/appm10v13QJCjL2PL/Funds%20Overview?maxRecords=20&view=Grid%20view";
  const res = await fetch(AIRTABLE_URL, requestOptions);
  const data = await res.json();

  let structuredData = data.records.map((fund) => {
    return {
      name: fund.fields.Name,
      type: fund.fields["Fund Type"],
      slug: fund.fields["[website] slug"],
      ticketSize: fund.fields["Ticket Size"],
      roundRange: fund.fields["Raising Range"],
      stage: fund.fields.Stage,
      businessCharacteristics: fund.fields["Business Characteristics"],
      id: fund.id,
      summary: fund.fields["Fund Summary"],
      nextClose: fund.fields["Next Closing Date"]
        ? fund.fields["Next Closing Date"]
        : null,
      detailedSummary: fund.fields["Detailed Information"]
        ? fund.fields["Detailed Information"]
        : null,
      applicationLink: fund.fields["Application Link"]
        ? fund.fields["Application Link"]
        : null,
      status: fund.fields["Fund Status"] ? fund.fields["Fund Status"] : null,
      registerInterestURL: fund.fields["Register Interest Form"]
        ? fund.fields["Register Interest Form"]
        : null,
      trustmark: fund.fields["Trustmark"]
        ? fund.fields["Trustmark"][0].url
        : null,
      coverImage: fund.fields["Cover Image"]
        ? fund.fields["Cover Image"][0].url
        : null,

      // maybe add team here as well / focus
    };
  });

  // console.log(structuredData);

  return structuredData;
}

export async function getPortfolioNewsCompact() {
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
    "https://api.airtable.com/v0/appm10v13QJCjL2PL/Portfolio%20News?maxRecords=3&view=Approved%20Articles";
  const res = await fetch(AIRTABLE_URL, requestOptions);
  const data = await res.json();

  let structuredData = data.records.map((article) => {
    return {
      headline: article.fields["Article Name"],
      url: article.fields["Article URL"],
      slug: article.fields["Company Slug"],
      companyName: article.fields["Company Name"],
    };
  });

  // console.log(structuredData);

  return structuredData;
}

export async function getPortfolioNewsFull(companyName) {
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

  const AIRTABLE_URL = `https://api.airtable.com/v0/appm10v13QJCjL2PL/Portfolio%20News?filterByFormula={Company Name}="${companyName}"&maxRecords=10&view=Approved%20Articles`;
  const res = await fetch(AIRTABLE_URL, requestOptions);
  const data = await res.json();

  let structuredData = data.records.map((article) => {
    return {
      headline: article.fields["Article Name"],
      url: article.fields["Article URL"],
      slug: article.fields["Company Slug"],
      companyName: article.fields["Company Name"],
    };
  });

  // console.log(structuredData);

  return structuredData;
}
