import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Huset from '../assets/huset.png'
import Section from '../components/section'
import Sectionheading from '../components/sectionheading'
import Consultation from '../components/consultation'

const IndexPage = ({ data }) => {
  let vacation = data.allContentfulFerieDage.edges[0].node
  let news = data.allContentfulNyhed.edges[0].node

  return (
    <Layout>
      <Section>
        <Sectionheading>Lene Marquardsen & Sabine Lauge Olsen</Sectionheading>
        <img
          className="mx-auto block"
          src={Huset}
          alt="Tandlægehuset i Havdrup"
        />
      </Section>
      <Section>
        <Sectionheading>Konsultation efter aftale</Sectionheading>
        <Consultation vacationData={vacation} />
      </Section>
      <Section>
        <Sectionheading>{news.titel}</Sectionheading>
        <p className="text-grey leading-normal">{news.bodycopy.bodycopy}</p>
      </Section>
      <Section>
        <Sectionheading>Find os</Sectionheading>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2257.4528080840973!2d12.1142653!3d55.5418999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652f4412e547f63%3A0xd20acc8a2a10046a!2sTandl%C3%A6gehuset+I+Havdrup+I%2FS!5e0!3m2!1sda!2sdk!4v1456323785615"
          className="w-full h-64"
          frameborder="0"
          allowfullscreen=""
          title="Kort med markering af Tandlægehuset Havdrup"
        />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ContentfulQuery {
    allContentfulFerieDage(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          ferieNavn
        }
      }
    }
    allContentfulNyhed(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          titel
          bodycopy {
            bodycopy
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query VacationDaysQuery {
//     allContentfulVacationDays {
//       edges {
//         node {
//           title
//           startDay
//           endDay
//         }
//       }
//     }
//   }
// `

export default IndexPage
