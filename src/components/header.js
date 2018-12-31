import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'
import Navigation from '../components/navigation'
import SeasonalImage from '../components/seasonalimage'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="flex justify-between mb-2 mt-4 md:pb-0 border-b-2 pb-2">
          <img className="md:w-48 md:h-24" src={Logo} alt={'logo'} />
          <Navigation />
          <Hamburgermenu />
        </div>
        <SeasonalImage />
      </div>
    )
  }
}
