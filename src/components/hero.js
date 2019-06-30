import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BackgroundImage from 'gatsby-background-image'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "husethero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    // <div className="relative hero w-screen h-80 md:h-screen flex justify-center items-center">
    //   <div className="">
    //     <h1
    //       className="text-2xl text-center text-white sm:text-3xl md:text-5xl xl:text-6xl xxl:text-7xl mb-12"
    //       style={{ textShadow: '1px 1px black' }}
    //     >
    //       Tandlægehuset i Havdrup
    //     </h1>
    //     <div className="flex flex-col md:flex-row justify-around max-w-md mx-auto">
    //       <Link
    //         to="/vi_er"
    //         className="shadow-lg text-center no-underline w-full md:w-2/5 border-4 border-transparent bg-brown py-2 md:py-3 lg:py-4 md:py-3 lg:px-8 md:text-xl lg:text-2xl text-white hover:bg-brown-dark text-md"
    //       >
    //         Se hvem vi er
    //       </Link>
    //       <AnchorLink
    //         offset="80"
    //         href="#contact"
    //         className="shadow-lg text-center no-underline w-full md:w-2/5 border-4 border-brown py-2 py-2 md:py-3 lg:py-4 md:py-3 lg:px-8 lg:px-8 md:text-xl lg:text-2xl  text-white hover:cursor-pointer hover:bg-brown text-md mt-2 md:mt-0"
    //       >
    //         Kontakt os
    //       </AnchorLink>
    //     </div>
    //   </div>
    //   <ScrollIndicator />
    // </div>
    <BackgroundImage
      // className="relative w-screen h-80 md:h-screen flex justify-center items-center"
      className="w-screen h-80 flex justify-center items-center hero"
      fluid={data.file.childImageSharp.fluid}
    >
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
            className="shadow-lg text-center no-underline w-full md:w-2/5 border-4 border-transparent bg-brown py-1 sm:py-2 md:py-3 lg:py-4 md:py-3 lg:px-8 md:text-xl lg:text-2xl text-white hover:bg-brown-dark text-md"
          >
            Se hvem vi er
          </Link>
          <AnchorLink
            offset="80"
            href="#contact"
            className="shadow-lg text-center no-underline w-full md:w-2/5 border-4 border-brown py-1 sm:py-2 md:py-3 lg:py-4 md:py-3 lg:px-8 lg:px-8 md:text-xl lg:text-2xl  text-white hover:cursor-pointer hover:bg-brown text-md mt-2 md:mt-0"
          >
            Kontakt os
          </AnchorLink>
        </div>
      </div>
      <ScrollIndicator />
    </BackgroundImage>
  )
}

const ScrollIndicator = () => (
  <AnchorLink
    href="#contact"
    offset="80"
    style={{
      position: 'absolute',
      bottom: '2%',
      left: '50%',
      marginLeft: '-5vw'
    }}
    className="scroll-indicator text-white text-3xl opacity-75"
  >
    <svg
      style={{ width: '10vw', height: '8vh' }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="7.5" stroke="white" />
      <path
        d="M9.35355 8.64645C9.15829 8.45118 8.84171 8.45118 8.64645 8.64645C8.45118 8.84171 8.45118 9.15829 8.64645 9.35355L9.35355 8.64645ZM12 12L11.6464 12.3536L12 12.7071L12.3536 12.3536L12 12ZM15.3536 9.35355C15.5488 9.15829 15.5488 8.84171 15.3536 8.64645C15.1583 8.45118 14.8417 8.45118 14.6464 8.64645L15.3536 9.35355ZM12.3536 12.3536L13.8536 10.8536L13.1464 10.1464L11.6464 11.6464L12.3536 12.3536ZM13.8536 10.8536L15.3536 9.35355L14.6464 8.64645L13.1464 10.1464L13.8536 10.8536ZM8.64645 9.35355L10.1464 10.8536L10.8536 10.1464L9.35355 8.64645L8.64645 9.35355ZM10.1464 10.8536L11.6464 12.3536L12.3536 11.6464L10.8536 10.1464L10.1464 10.8536Z"
        fill="white"
      />
      <path
        d="M9.35355 11.6464C9.15829 11.4512 8.84171 11.4512 8.64645 11.6464C8.45118 11.8417 8.45118 12.1583 8.64645 12.3536L9.35355 11.6464ZM12 15L11.6464 15.3536L12 15.7071L12.3536 15.3536L12 15ZM15.3536 12.3536C15.5488 12.1583 15.5488 11.8417 15.3536 11.6464C15.1583 11.4512 14.8417 11.4512 14.6464 11.6464L15.3536 12.3536ZM12.3536 15.3536L13.8536 13.8536L13.1464 13.1464L11.6464 14.6464L12.3536 15.3536ZM13.8536 13.8536L15.3536 12.3536L14.6464 11.6464L13.1464 13.1464L13.8536 13.8536ZM8.64645 12.3536L10.1464 13.8536L10.8536 13.1464L9.35355 11.6464L8.64645 12.3536ZM10.1464 13.8536L11.6464 15.3536L12.3536 14.6464L10.8536 13.1464L10.1464 13.8536Z"
        fill="white"
      />
    </svg>
  </AnchorLink>
)

export default Hero
