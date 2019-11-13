module.exports = {
  siteMetadata: {
    title: `Uniplaces Accommodation`,
    description: `Uniplaces Cities, Countries, and Dynamic pages.`,
    author: `@uniplaces`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
        ignore: [`**\.md`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/assets/markdown-pages/`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 900
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `uniplaces-accommodation-pages`,
        short_name: `uniplaces`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/uniplaces-favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/accommodation`],
      },
    },
  ],
}
