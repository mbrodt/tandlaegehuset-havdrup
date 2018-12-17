import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Dentist from '../components/dentist'
import Section from '../components/section'
import Sectionheading from '../components/sectionheading'

const AboutUs = ({
  data: {
    allContentfulMedarbejdere: { edges },
  },
}) => {
  console.log('edges', edges)
  return (
    <Layout>
      <Section>
        <Sectionheading>Hvem er vi?</Sectionheading>
        {edges.map(ele => {
          return <Dentist info={ele.node} />
        })}
      </Section>
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
