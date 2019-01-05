import React from 'react'
import Phone from '../assets/phone.svg'
import Huset from '../assets/huset.png'

const Consultation = ({ vacationData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 max-w-sm mx-auto mb-12 xl:mb-0">
      <div className="flex flex-col sm:flex-row-reverse items-center mb-6 ">
        <img
          className="mx-auto block w-24 rounded-full mb-6 sm:mb-0"
          src={Huset}
          alt="Tandlægehuset i Havdrup"
        />
        <p className="sm:w-2/3 text-grey text-md sm:text-lg md:text-xl font-bold text-left ml-0">
          {/* sm:text-center */}
          Lene Marquardsen & Sabine Lauge Olsen
        </p>
      </div>
      <div>
        <p className="text-body mb-8">
          Vi tjekker naturligvis vores mail dagligt, men har du behov for en
          akut tid eller lignende, beder vi dig benytte telefonen.{' '}
        </p>
        <div className="flex justify-between">
          <div>
            <p className="uppercase text-sm text-body tracking-wide mb-2">
              ring til os
            </p>
            <div className="flex items-center">
              <img className="w-5 mr-4 hidden sm:block" src={Phone} alt="" />
              <p className="text-body font-bold text-xl ">46 18 55 80</p>
            </div>
          </div>
          <div className="">
            <p className="uppercase text-sm text-body tracking-wide mb-2 ">
              Alle hverdage
            </p>
            <p className="text-body font-bold text-xl ">07:30-12:15</p>
          </div>
        </div>
      </div>
      <VacationInfo vacationData={vacationData} />
    </div>
  )
}

const VacationInfo = ({ vacationData: { ferieNavn, removeInfoDate } }) => {
  const displayInfo = displayVacationInfo(removeInfoDate)
  return displayInfo ? (
    <div
      className="bg-brown-lightest border-l-4 border-brown text-brown-darkest p-4 rounded-r-lg mb-4 mt-8"
      role="alert"
    >
      <p>{ferieNavn}</p>
    </div>
  ) : null
}

const displayVacationInfo = removeDate => {
  // always display the vacation info if the removal date is not set
  if (removeDate === null) return true
  const dateToRemove = new Date(removeDate)
  const today = new Date()
  return dateToRemove > today
}

export default Consultation
