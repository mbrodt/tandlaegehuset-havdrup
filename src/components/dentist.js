import React from 'react'
import SampleImage from '../assets/Sample_Profile.jpg'

const Dentist = ({ info }) => {
  console.log('info', info)
  return (
    <div className="mb-12">
      <img
        className="mb-4 block mx-auto w-4/5"
        src={info.billede ? info.billede.file.url : SampleImage}
        alt={info.titelOgNavn}
      />
      <div className=" mx-auto w-4/5">
        <h4 className="text-blue-dark mb-1">{info.titelOgNavn}</h4>
        <p className="text-body">{info.beskrivelse.beskrivelse}</p>
      </div>
    </div>
  )
}

export default Dentist
