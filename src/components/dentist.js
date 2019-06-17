import React from 'react'
import SampleImage from '../assets/Sample_Profile.jpg'
import Img from 'gatsby-image'

const Dentist = ({ info }) => {
  // If image does not exist, set the src to SampleImage
  const fixed = info.billede ? info.billede.fixed : { src: SampleImage }
  return (
    <div
      data-aos="fade-up"
      className="mb-12 flex flex-col md:flex-row mx-auto items-center bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-lg"
    >
      {/* <div className=""> */}
      <Img
        fixed={fixed}
        className="block rounded-full mb-4 md:mb-0 md:mr-8 min-w-40  min-h-40"
        // src={info.billede ? info.billede.file.url : SampleImage}
        alt={info.titelOgNavn}
      />
      {/* </div> */}
      <div className="">
        <h4 className="text-blue-dark mb-1 text-center md:text-left ">
          {info.titelOgNavn}
        </h4>
        <p className="text-grey leading-normal">
          {info.beskrivelse.beskrivelse}
        </p>
      </div>
    </div>
  )
}

export default Dentist
