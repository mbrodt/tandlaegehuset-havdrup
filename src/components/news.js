import React from 'react'
import Sectionheading from './sectionheading'

const news = ({ newsData }) => {
  return (
    <div data-aos="fade-up">
      <Sectionheading>{newsData.titel}</Sectionheading>
      <p className="text-grey leading-normal">{newsData.bodycopy.bodycopy}</p>
    </div>
  )
}

export default news
