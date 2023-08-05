module.exports = {
  siteMetadata: {
    title: `ETR Media Productions`,
    description: `We are ETR Media. We cunsult and create various media for businesses and individuals.`,
    siteUrl: `https://www.etrmediaproductions.com`,
    image: `src/content/images/etrLogo.png`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pageData`,
        path: `${__dirname}/src/content/pageData`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/content/video`,
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
        name: "ETR Media Productions",
        short_name: "ETR",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/content/images/etrLogo.png",
        crossOrigin: `use-credentials`,
      },
    }
  ],
};
