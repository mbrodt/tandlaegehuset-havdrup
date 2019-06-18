import React from 'react'
import Phone from '../assets/phone.svg'
import Logo from '../assets/logo.svg'

const Consultation = ({ vacations }) => {
  console.log('vacations', vacations)
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-lg shadow-lg p-4 sm:p-8  mx-auto xl:mb-0"
    >
      <div className="flex justify-between items-center mb-6 ">
        <p className="sm:w-2/3 text-grey text-md sm:text-lg md:text-xl font-bold text-left ml-0">
          {/* sm:text-center */}
          Lene Marquardsen & Sabine Lauge Olsen
        </p>
        <div>
          <img
            className="mx-auto w-32"
            src={Logo}
            alt="Tandlægehuset i Havdrup"
          />
        </div>
      </div>
      <div>
        <p className="text-grey leading-normal mb-8">
          Vi tjekker naturligvis vores mail dagligt, men har du behov for en
          akut tid eller lignende, beder vi dig benytte telefonen.{' '}
        </p>
        <div className="flex justify-between">
          <div>
            <p className="uppercase text-sm text-grey leading-normal tracking-wide mb-2">
              ring til os
            </p>
            <div className="flex items-center">
              <img className="w-5 mr-4 hidden sm:block" src={Phone} alt="" />
              <p className="text-grey leading-normal font-bold text-xl ">
                46 18 55 80
              </p>
            </div>
          </div>
          <div className="">
            <p className="uppercase text-sm text-grey leading-normal tracking-wide mb-2  ">
              Alle hverdage
            </p>
            <p className=" text-grey leading-normal font-bold text-xl ">
              07:30-12:15
            </p>
          </div>
        </div>
      </div>
      {vacations.map(vacation => (
        <VacationInfo vacation={vacation.node} key={vacation.node.ferieNavn} />
      ))}
    </div>
  )
}

const VacationInfo = ({
  vacation: { ferieNavn, addInfoDate, removeInfoDate }
}) => {
  const displayInfo = displayVacationInfo(addInfoDate, removeInfoDate)
  return displayInfo ? (
    <div
      className="bg-brown-lightest border-l-4 border-brown text-brown-darkest p-4 rounded-r-lg mb-4 mt-8"
      role="alert"
    >
      <p>{ferieNavn}</p>
    </div>
  ) : null
}

const displayVacationInfo = (addDate, removeDate) => {
  // always display the vacation info if the remove or add date is not set
  if (removeDate === null || addDate === null) return true
  const dateToRemove = new Date(removeDate)
  const dateToAdd = new Date(addDate)
  const today = new Date()
  const isActive = dateToAdd < today && today < dateToRemove
  return isActive
}

export default Consultation
