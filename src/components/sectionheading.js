import React from 'react'

const Sectionheading = ({ children }) => {
  return (
    <h4 className="text-center text-black my-4 md:my-6 lg:my-8 font-semibold text-lg md:text-xl lg:text-2xl">
      {children}
    </h4>
  )
}

export default Sectionheading
