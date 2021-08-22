module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "franklin",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "10",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
