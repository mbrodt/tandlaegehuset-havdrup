import React from 'react'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <div className="hero w-screen h-80 md:h-screen flex justify-center items-center">
      <div className="">
        <h1
          className="text-2xl text-center text-white sm:text-3xl md:text-5xl xl:text-6xl xxl:text-7xl mb-12"
          style={{ textShadow: '1px 1px black' }}
        >
          Tandlægehuset i Havdrup
        </h1>
        <div className="flex flex-col md:flex-row justify-around max-w-md mx-auto">
          <Link
            to="/vi_er"
            className="shadow-lg text-center no-underline w-full md:w-2/5 border-4 border-transparent bg-brown py-2 md:py-3 lg:py-4 md:py-3 lg:px-8 md:text-xl lg:text-2xl text-white hover:bg-brown-dark text-md"
          >
            Se hvem vi er
          </Link>
          <a
            href="#contact"
            className="shadow-lg text-center no-underline w-full md:w-2/5 border-4 border-brown py-2 py-2 md:py-3 lg:py-4 md:py-3 lg:px-8 lg:px-8 md:text-xl lg:text-2xl  text-white hover:cursor-pointer hover:bg-brown text-md mt-2 md:mt-0"
          >
            Kontakt os
          </a>
        </div>
      </div>
    </div>
    // <img
    //   classNameName="w-screen h-screen object-cover"
    //   src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/64672607_875055336184154_2616655820896600064_n.jpg?_nc_cat=101&_nc_oc=AQlM-WRItymZx3nVLTDOd8tAxkDAxuZWdBxu29vFqI3m-BktOZzSUOWozde43z31Jmc&_nc_ht=scontent-amt2-1.xx&oh=64641d26975253825f837633c2e83d1c&oe=5D854BEE"
    //   alt=""
    // />
  )
}

export default Hero
