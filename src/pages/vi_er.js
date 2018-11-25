import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Dentist from '../components/dentist'

const AboutUs = ({
  data: {
    allContentfulMedarbejdere: { edges },
  },
}) => {
  console.log('edges', edges)
  return (
    <Layout>
      <h1>Hey fra 'Vi er'!</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      {edges.map(ele => {
        return <Dentist info={ele.node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query MedarbejdereQuery {
    allContentfulMedarbejdere(sort: { fields: [createdAt] }) {
      edges {
        node {
          titelOgNavn
          billede {
            file {
              url
            }
          }
          beskrivelse {
            beskrivelse
          }
        }
      }
    }
  }
`

export default AboutUs
