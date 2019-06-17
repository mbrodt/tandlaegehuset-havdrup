import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Consultation from '../components/consultation'
import News from '../components/news'
import Hero from '../components/hero'
import FramedImage from '../components/framedImage'
import Links from '../components/links'
import AOS from 'aos'
import 'aos/dist/aos.css'

const IndexPage = ({ data }) => {
  if (typeof window !== `undefined`) {
    AOS.init()
  }
  let vacations = data.allContentfulFerieDage.edges
  let news = data.allContentfulNyhed.edges[0].node
  let galleryImages = data.allContentfulBilleder.edges[0].node.galleryImages

  return (
    <>
      <Hero />
      <Layout>
        <div className="">
          <div id="contact" className="gallery-grid mt-20">
            <Consultation vacations={vacations} />
            <News newsData={news} />
            {galleryImages.map(img => (
              <FramedImage key={img.file.url} img={img} />
            ))}
            <Links />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ContentfulQuery {
    allContentfulFerieDage(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          ferieNavn
          removeInfoDate
          addInfoDate
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
    allContentfulBilleder {
      edges {
        node {
          galleryImages {
            file {
              url
            }
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
