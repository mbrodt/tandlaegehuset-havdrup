import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allContentfulFerieDage: { edges },
  },
}) => {
  console.log(edges)
  const newest = edges[edges.length - 1]
  console.log('newest', newest)
  return (
    <Layout>
      <h1>Hi people</h1>

      <p>{newest.node.ferieNavn}</p>
      <p>{newest.node.startDag}</p>
      <p>{newest.node.slutDag}</p>

      <Link to="/vi_er/">Gå til 'Vi er'!</Link>
    </Layout>
  )
}

export const query = graphql`
  query FerieDageQuery {
    allContentfulFerieDage(sort: { fields: [createdAt] }) {
      edges {
        node {
          ferieNavn
          startDag
          slutDag
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
