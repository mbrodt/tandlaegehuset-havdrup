import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburger from '../assets/hamburger.svg'

const Header = () => (
  <div className="flex justify-between">
    <img src={Logo} alt={'logo'} />
    <img src={Hamburger} alt={'logo'} />
  </div>
)

export default Header
