import React from 'react'
import Logo from '../assets/logo.svg'
import Hamburgermenu from '../components/hamburgermenu'
import Navigation from '../components/navigation'
import { Link } from 'gatsby'

export default class Header extends React.Component {
  render() {
    return (
      <div className="flex justify-between mb-2 mt-4 md:pb-0 border-b-2 pb-2">
        <Link to="/">
          <img className="md:w-40 md:h-20" src={Logo} alt={'logo'} />
        </Link>
        <Navigation />
        <Hamburgermenu />
      </div>
    )
  }
}
