import React from 'react'
import SampleImage from '../assets/Sample_Profile.jpg'

const Dentist = ({ info }) => {
  console.log('info', info)
  return (
    <div>
      <h1>{info.titelOgNavn}</h1>
      <img
        src={info.billede ? info.billede.file.url : SampleImage}
        alt={info.titelOgNavn}
      />
      <p>{info.beskrivelse.beskrivelse}</p>
    </div>
  )
}

export default Dentist
