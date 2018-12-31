import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Family from '../assets/family.svg'
import Sectionheading from '../components/sectionheading'
import Consultation from '../components/consultation'

const IndexPage = ({ data }) => {
  let vacation = data.allContentfulFerieDage.edges[0].node
  let news = data.allContentfulNyhed.edges[0].node

  return (
    <Layout>
      <div className="lg:flex lg:mb-20">
        <div className="mb-12 sm:mb-0 mx-auto">
          <Sectionheading>Konsultation efter aftale</Sectionheading>
          <Consultation vacationData={vacation} />
        </div>
      </div>
      <div className="lg:flex mb-12 lg:mb-20 lg:items-center">
        <div className="mb-12 lg:w-2/3 lg:pr-24">
          <Sectionheading>{news.titel}</Sectionheading>
          <p className="text-grey leading-normal">{news.bodycopy.bodycopy}</p>
        </div>
        <div className="lg:w-1/3 max-w-xs mx-auto">
          <img className="" src={Family} alt="" />
        </div>
      </div>
      <div>
        <div className="mb-12">
          <Sectionheading>Find os</Sectionheading>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2257.4528080840973!2d12.1142653!3d55.5418999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652f4412e547f63%3A0xd20acc8a2a10046a!2sTandl%C3%A6gehuset+I+Havdrup+I%2FS!5e0!3m2!1sda!2sdk!4v1456323785615"
              className="w-full mx-auto sm:w-80 h-64 block lg:w-1/3"
              title="Kort med markering af Tandlægehuset Havdrup"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContentfulQuery {
    allContentfulFerieDage(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          ferieNavn
          removeInfoDate
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
