module.exports = {
  siteMetadata: {
    title: `ETR Media Productions`,
    description: `We are ETR Media. We cunsult and create various media for businesses and individuals.`,
    siteUrl: `https://www.etrmediaproductions.com`,
    image: `src/images/etrLogo.png`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ETR Media Productions",
        short_name: "ETR",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/etrLogo.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
