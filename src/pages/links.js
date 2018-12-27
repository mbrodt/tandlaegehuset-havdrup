import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import Sectionheading from '../components/sectionheading'

const Links = () => {
  return (
    <Layout>
      <Section>
        <Sectionheading>Links</Sectionheading>
        <div className="w-4/5 mx-auto flex flex-col">
          <p className="my-4 text-body">
            Her kan du finde links til andre sider der kan være relevante for
            dig.
          </p>
          <a
            className="text-blue my-4"
            href="https://www.tandlaegeforeningen.dk/"
          >
            Tandlægeforeningen
          </a>
          <a
            className="text-blue my-4"
            href="http://www.xn--tandlgevagten-7fb.dk/index.php/9-slideshow/7-forside-2?gclid=Cj0KCQiAgf3gBRDtARIsABgdL3lZ-030388yUF3_V9b59NE6IKVOmY-g2lWGrAODHdsUr8BjhA_pTk0aAvezEALw_wcB"
          >
            Tandlægevagten
          </a>
          <a className="text-blue my-4" href="https://odont.ku.dk/">
            Tandlægeskolen
          </a>
          <a className="text-blue my-4" href="https://memeta.dk/">
            Skriv under imod forringelsen af patienternes vilkår
          </a>
        </div>
      </Section>
    </Layout>
  )
}

export default Links
