import React from 'react'
import Sectionheading from './sectionheading'

const Links = () => {
  return (
    <div data-aos="fade-up" className="w-4/5 mx-auto flex flex-col">
      <Sectionheading>Links</Sectionheading>

      <p className="my-4 text-body">
        Her kan du finde links til andre sider der kan være relevante for dig,
        samt vores priser.
      </p>
      <a
        className="text-blue my-4"
        href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
      >
        Priser
      </a>
      <a className="text-blue my-4" href="https://www.tandlaegeforeningen.dk/">
        Tandlægeforeningen
      </a>
      <a
        className="text-blue my-4"
        href="https://www.regionsjaelland.dk/Sundhed/akut-hjaelp/tandpinevagten-og-giftlinjen/Sider/Om-Tandpinevagten.aspx?fbclid=IwAR2LjWmqfLjEVh8Sfkhl7IV7C5TCeauCfKzrbDKIk_td0gOlrAw4SOXF2l4"
      >
        Tandpinevagten
      </a>
      <a className="text-blue my-4" href="https://odont.ku.dk/">
        Tandlægeskolen
      </a>
    </div>
  )
}

export default Links
