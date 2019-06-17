import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Dentist from '../components/dentist'
import Section from '../components/section'
import Sectionheading from '../components/sectionheading'
import Header from '../components/header'
import AOS from 'aos'

const AboutUs = ({
  data: {
    allContentfulMedarbejdere: { edges }
  }
}) => {
  if (typeof window !== `undefined`) {
    AOS.init()
  }
  console.log(edges)
  return (
    <>
      <Layout>
        <Header />
        <Section>
          <Sectionheading>Hvem er vi?</Sectionheading>
          {edges.map(ele => {
            return <Dentist info={ele.node} key={ele.node.titelOgNavn} />
          })}
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query MedarbejdereQuery {
    allContentfulMedarbejdere(sort: { fields: [createdAt] }) {
      edges {
        node {
          titelOgNavn
          billede {
            fixed(width: 160, height: 160, quality: 90) {
              ...GatsbyContentfulFixed
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
