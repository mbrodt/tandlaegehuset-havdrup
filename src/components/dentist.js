import React from 'react'
import SampleImage from '../assets/Sample_Profile.jpg'

const Dentist = ({ info }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row mx-auto items-center bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-lg">
      {/* <div className=""> */}
      <img
        className="block rounded-full mb-4 md:mb-0 md:mr-8 min-h-40"
        src={info.billede ? info.billede.file.url : SampleImage}
        alt={info.titelOgNavn}
      />
      {/* </div> */}
      <div className="">
        <h4 className="text-blue-dark mb-1 text-center md:text-left mb-2 md:mb-0">
          {info.titelOgNavn}
        </h4>
        <p className="text-body">{info.beskrivelse.beskrivelse}</p>
      </div>
    </div>
  )
}

export default Dentist
