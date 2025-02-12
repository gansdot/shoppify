import React from 'react'

const About = () => {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 text-3xl border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Kavin Fireworks Factory</span>
            </h2>
            <p className="text-gray-700">
              The saga of India's largest fireworks manufacturer began in 1999. The company traces its origin to a modest 'bio-farming' around Sivakasi.

              During its nascent years, the impetus to storm into the big league of pyrotechnic giants was sensed early by our Founder Shri.M.K.P.M.Ganesan.Mariappan, later our first entrant Shri M.K.P.M.Samuthirakani, Shri M.K.P.M.Paramasivam and Shri.M.K.P.M.Ganesan Mariappan toiled to enter into crackers manufactoring a dream come true.

              Undaunted by the early days of struggle, rigid legislations and fierce competition, the FireWerks brands fought valiantly to gain the market foothold, and years later signified the emergence of an Indian pyrotechnics giant. 
              
              
            </p>
          </div>
          <div className="text">
            
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl "><span className="text-indigo-600">Our Vision</span>
            </h2>
            <p className="text-gray-700">
             
              
              The company's zeal to manufacture high quality products and create brand leaders, soon paid rich dividends when the brands gained market prominence.

              The Management has now  embarked on a scheme of modernization of production line to achieve Global Standards.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About