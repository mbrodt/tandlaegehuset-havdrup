import React from 'react'
import { Link } from 'gatsby'

const NavItem = ({ text, to, external }) => {
  const classes =
    'no-underline text-blue text-xl border-b-2 border-transparent hover:border-brown hover:text-brown nav-link pb-0.5'
  return (
    <li className="m-2 no-underline">
      {external ? (
        <a className={classes} href={external}>
          {text}
          <svg
            className="h-3 w-3 ml-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M14 3.41l-7.3 7.3a1 1 0 0 1-1.4-1.42L12.58 2H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V3.41zM12 11a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a1 1 0 1 1 0 2H2v10h10v-3z" />
          </svg>
        </a>
      ) : (
        <Link
          activeClassName="text-brown border-b-2 pb-0.5 border-brown "
          className={classes}
          to={to}
        >
          {text}
        </Link>
      )}
    </li>
  )
}

const Navigation = () => {
  return (
    <>
      <ul className="list-reset hidden md:flex items-end ">
        <NavItem text="Forside" to="/" />
        <NavItem text="Hvem er vi" to="/vi_er" />
        <NavItem text="Links" to="/links" />
        <NavItem
          text="Priser"
          external="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
        />

        {/* <li className="m-2 no-underline">
          <Link
            activeClassName="text-brown"
            className="no-underline text-blue text-xl hover:text-blue-dark"
            to="/vi_er"
          >
            Hvem er vi
          </Link>
        </li>
        <li className="m-2 no-underline">
          <a
            className="no-underline text-blue text-xl hover:text-blue-dark"
            href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
          >
            Priser
          </a>
        </li>
        <li className="m-2 mr-0">
          <Link
            activeClassName="text-brown"
            className="no-underline text-blue text-xl hover:text-blue-dark"
            to="/links"
          >
            Links
          </Link>
        </li> */}
      </ul>
    </>
  )
}

export default Navigation
