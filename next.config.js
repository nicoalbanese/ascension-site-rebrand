module.exports = {
  images: {
    domains: ["dl.airtable.com"],
  },
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://apps.mainspringfs.com/forms/ascension/",
        permanent: true,
      },
    ];
  },
};
