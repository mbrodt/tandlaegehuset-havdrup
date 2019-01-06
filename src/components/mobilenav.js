import React from 'react'
import { Link } from 'gatsby'
import Cross from '../assets/cross.svg'
import './mobilenav.css'

const MobileNav = props => {
  return (
    <div
      id="mySidenav"
      className="sidenav bg-brown-lightest flex items-center justify-center opacity-95"
    >
      <button
        className="absolute pin-t pin-r mt-10 mr-6 px-4"
        onClick={props.toggle}
      >
        <img src={Cross} alt="Close button" />
      </button>
      <ul
        className="flex flex-col list-reset h-48 w-4/5 justify-between items-center"
        aria-hidden="true"
      >
        <li>
          <Link className="mobile-nav-link" to="/">
            FORSIDE
          </Link>
        </li>
        <li>
          <Link className="mobile-nav-link" to="/vi_er">
            HVEM ER VI
          </Link>
        </li>
        <li>
          <Link className="mobile-nav-link" to="/links">
            LINKS
          </Link>
        </li>
        <li>
          <a
            className="mobile-nav-link"
            href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
          >
            PRISER
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
