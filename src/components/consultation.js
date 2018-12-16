import React from 'react'
import Phone from '../assets/phone.svg'

const Consultation = ({ vacationData }) => {
  console.log('vacationData', vacationData)
  return (
    <div className="bg-grey-lightest rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-grey">Telefontid alle hverdage</p>
        <p className="text-grey font-bold ">07:30-12:15</p>
      </div>
      <div className="flex items-center mb-4">
        <img className="w-6 mr-4" src={Phone} alt="" />
        <p className="text-grey font-bold ">46 18 55 80</p>
      </div>
      <div>
        <div className="text-red">
          <p className="leading-normal">{vacationData.ferieNavn}</p>
        </div>
      </div>
    </div>
  )
}

export default Consultation
