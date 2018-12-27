import React from 'react'
import Phone from '../assets/phone.svg'
import Schedule from '../assets/schedule.svg'

const Consultation = ({ vacationData }) => {
  console.log('vacationData', vacationData)
  return (
    <div className="bg-grey-lightest rounded-lg shadow-lg p-4 sm:p-8 lg:w-2/3 lg: mx-auto">
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
        {/* <img className="w-2/3 sm:w-1/3 mx-auto block" src={Schedule} alt="" /> */}
      </div>
    </div>
  )
}

export default Consultation
