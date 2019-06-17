import React from 'react'
import Img from 'gatsby-image'

const FramedImage = ({ img }) => {
  return (
    <div data-aos="fade-up" className="bg-white p-4 shadow-lg rounded-lg ">
      <img className="rounded-lg" src={img.file.url}></img>
      {/* <Img fixed={img.file.url} /> */}
    </div>
  )
}

export default FramedImage
