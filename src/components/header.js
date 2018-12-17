import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'

const Header = () => (
  <div className="flex justify-between">
    <img src={Logo} alt={'logo'} />
    <Hamburgermenu />
  </div>
)

export default Header
