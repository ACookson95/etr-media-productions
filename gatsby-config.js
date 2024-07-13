module.exports = {
  siteMetadata: {
    title: `3TR Media`,
    description: `We are 3TR Media. We cunsult and create various media for businesses and individuals.`,
    siteUrl: `https://3trmedia.com`,
    image: `src/content/images/etrLogo.png`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pageData`,
        path: `${__dirname}/static/content/pageData`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/static/video`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "3TR Media",
        short_name: "3TR",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "static/images/etrLogo.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-GHN2EKJX00", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
