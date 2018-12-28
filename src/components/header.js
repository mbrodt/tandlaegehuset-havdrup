import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'
import Navigation from '../components/navigation'

export default class Header extends React.Component {
  render() {
    return (
      <div className="flex justify-between m-6">
        <img src={Logo} alt={'logo'} />
        <Navigation />
        <Hamburgermenu />
      </div>
    )
  }
}
