import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <>
      {/* <p className="flex items-end my-2 text-xl">
        Lene Marquardsen & Sabine Lauge Olsen
      </p> */}
      <ul className="list-reset hidden md:flex items-end ">
        <li className="m-2 no-underline">
          <Link
            activeClassName="text-brown"
            className="no-underline text-blue text-xl"
            to="/"
          >
            Forside
          </Link>
        </li>
        <li className="m-2 no-underline">
          <Link
            activeClassName="text-brown"
            className="no-underline text-blue text-xl"
            to="/vi_er"
          >
            Hvem er vi
          </Link>
        </li>
        <li className="m-2 no-underline">
          <a
            className="no-underline text-blue text-xl"
            href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
          >
            Priser
          </a>
        </li>
        <li className="m-2 ">
          <Link
            activeClassName="text-brown"
            className="no-underline text-blue text-xl"
            to="/links"
          >
            Links
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Navigation
