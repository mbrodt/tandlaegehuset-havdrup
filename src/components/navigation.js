import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <ul className="list-reset ">
      <li className="my-2 no-underline">
        <Link
          activeClassName="text-brown"
          className="no-underline text-blue"
          to="/"
        >
          Forside
        </Link>
      </li>
      <li className="my-2 no-underline">
        <Link
          activeClassName="text-brown"
          className="no-underline text-blue"
          to="/vi_er"
        >
          Hvem er vi
        </Link>
      </li>
      <li className="my-2 no-underline">
        <a
          className="no-underline text-blue"
          href="https://www.sundhed.dk/borger/guides/find-behandler/?orgId=29892"
        >
          Priser
        </a>
      </li>
      <li className="my-2 ">
        <Link
          activeClassName="text-brown"
          className="no-underline text-blue"
          to="/links"
        >
          Links
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
