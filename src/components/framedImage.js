import React from 'react'
import Img from 'gatsby-image'

const FramedImage = ({ img }) => {
  return (
    <div data-aos="fade-up" className="bg-white p-4 shadow-lg rounded-lg ">
      <img
        className="rounded-lg min-h-full"
        style={{ objectFit: 'cover' }} // for some reason tailwind doesnt generate the object-cover class
        src={img.file.url}
      ></img>
    </div>
  )
}

export default FramedImage
