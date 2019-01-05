import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SeasonalImage = () => (
  <StaticQuery query={SEASONAL_IMAGES_QUERY}>
    {({ allFile: { edges } }) => {
      const seasonlImage = getSeasonalImage(edges)
      return <Img fluid={seasonlImage.node.childImageSharp.fluid} />
    }}
  </StaticQuery>
)

export default SeasonalImage

// helpers
const getSeasonalImage = images => {
  const month = new Date().getMonth()
  const img = images.filter(image => {
    const seasonName = getSeason(month)
    return image.node.relativePath === `${seasonName}.jpg`
  })
  const [seasonalImage] = img
  return seasonalImage
}

const getSeason = month => {
  if (month >= 2 && month <= 4) {
    return 'spring'
  }

  if (month >= 5 && month <= 7) {
    return 'summer'
  }

  if (month >= 8 && month <= 10) {
    return 'fall'
  }

  return 'winter'
}

const SEASONAL_IMAGES_QUERY = graphql`
  query SeasonalImagesQuery {
    allFile(filter: { sourceInstanceName: { eq: "seasons" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
