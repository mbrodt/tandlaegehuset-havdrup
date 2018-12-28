import React from 'react'
import { Link } from 'gatsby'
import Cross from '../assets/cross.svg'
import './mobilenav.css'

const MobileNav = props => {
  return (
    <div
      id="mySidenav"
      className="sidenav bg-topaz flex items-center justify-center opacity-95"
    >
      <button onClick={props.toggle}>
        <img
          className="absolute pin-t pin-r mt-10 mr-6 px-4"
          src={Cross}
          alt="Close button"
        />
      </button>
      <ul
        className="flex flex-col list-reset h-48 w-4/5 justify-between items-center"
        aria-hidden="true"
      >
        <li>
          <Link className="nav-link" to="/">
            FORSIDE
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/vi_er">
            HVEM ER VI
          </Link>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
          >
            PRISER
          </a>
        </li>
        <li>
          <Link className="nav-link" to="/links">
            LINKS
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
