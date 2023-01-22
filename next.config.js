module.exports = {
  images: {
    domains: ["dl.airtable.com", "v5.airtableusercontent.com"],
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://apps.mainspringfs.com/forms/ascension/",
        permanent: true,
      },
      {
        source: "/careers",
        destination:
          "https://ascension-vc.notion.site/Careers-at-Ascension-bd23e6ad5af1466984444ad80e9c1ce2",
        permanent: true,
      },
      {
        source: "/apply-for-funding",
        destination: "https://airtable.com/shriviOtroIyf78wi",
        permanent: true,
      },
    ];
  },
};
