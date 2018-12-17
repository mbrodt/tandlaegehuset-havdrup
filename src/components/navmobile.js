import React from 'react'
import './navmobile.css'
import { Link } from 'gatsby'

const NavMobile = () => {
  return (
    <div id="myNav" className="overlay">
      <a
        href="javascript:void(0)"
        className="closebtn"
        onClick={() => (document.getElementById('myNav').style.width = '0')}
      >
        X
      </a>
      <div className="overlay-content">
        <Link to="/">FORSIDE</Link>
        <Link to="/vi_er">HVEM ER VI</Link>
        <a href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892">
          PRISER
        </a>
        <Link to="/links">LINKS</Link>
      </div>
    </div>
  )
}

export default NavMobile
