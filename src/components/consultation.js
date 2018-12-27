import React from 'react'
import Phone from '../assets/phone.svg'
import Schedule from '../assets/schedule.svg'
import Huset from '../assets/huset.png'

const Consultation = ({ vacationData }) => {
  return (
    <div className="bg-grey-lightest rounded-lg shadow-lg p-4 sm:p-8 md:w-2/3 mx-auto">
      <div className="flex items-center mb-8">
        <p className="w-2/3 text-grey text-xl mr-4">
          Lene Marquardsen & Sabine Lauge Olsen
        </p>
        <img
          className="mx-auto block w-1/3"
          src={Huset}
          alt="Tandlægehuset i Havdrup"
        />
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-grey">Telefontid alle hverdage</p>
          <p className="text-grey font-bold ">07:30-12:15</p>
        </div>
        <div className="flex items-center">
          <img className="w-6 mr-4" src={Phone} alt="" />
          <p className="text-grey font-bold ">46 18 55 80</p>
        </div>
      </div>

      {/* <div className="text-red">
				<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
          <p className="leading-normal">{vacationData.ferieNavn}</p>
				</div> */}
      <div
        className="bg-brown-lightest border-l-4 border-brown text-brown-darker p-4 mt-4"
        role="alert"
      >
        <p>{vacationData.ferieNavn}</p>
      </div>
    </div>
  )
}

export default Consultation
