import React from 'react'
import Phone from '../assets/phone.svg'
import Huset from '../assets/huset.png'

const Consultation = ({ vacationData }) => {
  return (
    <div className="bg-grey-lightest rounded-lg shadow-lg p-4 sm:p-8 md:w-2/3 mx-auto">
      <div className="flex items-center mb-8">
        <p className="w-2/3 text-grey text-xl mr-4">
          Lene Marquardsen & Sabine Lauge Olsen
        </p>
        <img
          className="mx-auto block w-1/3 rounded-lg"
          src={Huset}
          alt="Tandlægehuset i Havdrup"
        />
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <p className="text-grey mr-4">Telefontid alle hverdage</p>
          <p className="text-grey font-bold ">07:30-12:15</p>
        </div>
        <div className="flex items-center">
          <img className="w-6 mr-4" src={Phone} alt="" />
          <p className="text-grey font-bold ">46 18 55 80</p>
        </div>
      </div>
      <div
        className="bg-brown-lightest border-l-4 border-brown text-brown-darker p-4 mt-4 rounded-lg"
        role="alert"
      >
        <p>{vacationData.ferieNavn}</p>
      </div>
    </div>
  )
}

export default Consultation
