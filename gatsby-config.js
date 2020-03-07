module.exports = {
  siteMetadata: {
    title: `Discover Quality Hemp Extract`,
    description: `Chances are you know at least one person claiming to experience significant benefits using hemp based products. If you’ve been trying to learn about what hemp is, how hemp extract products work, and what they could do for you, we are her to help. `,
    author: `CBDistillery`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Discover Quality Hemp Extract`,
        short_name: `CBDistillery`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#308946`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["gilroy"],
          urls: ["/fonts/fonts.css"]
        }
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/404/`]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
