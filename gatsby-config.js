const dotenv = require('dotenv')

// if (process.env.NODE_ENV !== 'production') {
dotenv.config()
// }

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: 'Tandlægehuset Havdrup'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tandlægehuset i Havdrup',
        short_name: 'Tandlægehuset i Havdrup',
        start_url: '/',
        background_color: '#C4A060',
        theme_color: '#C4A060',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.svg' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'seasons',
        path: `${__dirname}/src/assets`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
  ]
}
