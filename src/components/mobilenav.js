import React from 'react'
import { Link } from 'gatsby'
import Cross from '../assets/cross.svg'
import './mobilenav.css'

const MobileNav = props => {
  return (
    <div
      id="mySidenav"
      className="sidenav bg-topaz flex items-center justify-center opacity-95"
      // className="w-screen h-screen bg-topaz absolute pin-l pin-t flex items-center justify-center opacity-95"
      //   (props.isOpen ? '' : ' closed')
      // }
    >
      <img
        className="absolute pin-t pin-r mt-10 mr-6"
        src={Cross}
        onClick={props.toggle}
        alt="Close button"
      />
      <ul className="flex flex-col list-reset h-48 w-4/5 justify-between items-center">
        <Link className="nav-link" to="/">
          FORSIDE
        </Link>
        <Link className="nav-link" to="/vi_er">
          HVEM ER VI
        </Link>
        <a
          className="nav-link"
          href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
        >
          PRISER
        </a>
        <Link className="nav-link" to="/links">
          LINKS
        </Link>
      </ul>
    </div>
  )
}

export default MobileNav
