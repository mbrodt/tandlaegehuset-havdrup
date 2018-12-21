import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import Cross from '../assets/cross.svg'
import './mobilenav.css'

const MobileNav = props => {
  return ReactDOM.createPortal(
    <div
      id="mobile-nav"
      className={
        'w-screen h-screen bg-orange-dark absolute pin-t flex items-center justify-center ' +
        (props.isOpen ? '' : 'closed')
      }
    >
      <img
        className="absolute pin-t pin-r mt-10 mr-6"
        src={Cross}
        onClick={props.toggle}
        alt="Close button"
      />
      <ul className="flex flex-col list-reset h-48 w-4/5 justify-between items-center">
        <Link className="link" to="/">
          FORSIDE
        </Link>
        <Link className="link" to="/vi_er">
          HVEM ER VI
        </Link>
        <a
          className="link"
          href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
        >
          PRISER
        </a>
        <Link className="link" to="/links">
          LINKS
        </Link>
      </ul>
    </div>,
    document.body
  )
}

export default MobileNav
