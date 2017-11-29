module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-54092536-2",
        // Setting this parameter is optional
        anonymize: true,
      },
    },
  ],
  pathPrefix: `/my`,
}
