import React from 'react'
import SampleImage from '../assets/Sample_Profile.jpg'

const Dentist = ({ info }) => {
  return (
    <div className="mb-12 flex flex-col sm:flex-row md:w-4/5 mx-auto">
      <div className="mb-4 mx-auto w-4/5 sm:w-1/3 sm:mr-4 lg:mr-0">
        <img
          className="block"
          src={info.billede ? info.billede.file.url : SampleImage}
          alt={info.titelOgNavn}
        />
      </div>
      <div className="mx-auto w-4/5 sm:w-2/3">
        <h4 className="text-blue-dark mb-1">{info.titelOgNavn}</h4>
        <p className="text-body">{info.beskrivelse.beskrivelse}</p>
      </div>
    </div>
  )
}

export default Dentist
