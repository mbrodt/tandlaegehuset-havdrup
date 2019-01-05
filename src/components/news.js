import React from 'react'
import Sectionheading from './sectionheading'

const news = ({ newsData }) => {
  return (
    <div className="xl:ml-16 lg:w-2/3 lg:mx-auto">
      <Sectionheading>{newsData.titel}</Sectionheading>
      <p className="text-grey leading-normal">{newsData.bodycopy.bodycopy}</p>
    </div>
  )
}

export default news
