import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Factory Address</h3>
            <span className="break-normal text-gray-600">
              <address>
                Kavin Fireworks Factory, <br/>
                S.No 62/1, Kalankaperi,<br/>
                Pattampudur Panchayat,<br/>
                Virudhunagar Union and Taluk,<br/>
                Tamil Nadu 626003, India<br/>
              </address>
            </span>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9942639240</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
            <p className="text-gray-600">gansdot@yahoo.com</p>
          </div>

          <div className="relative w-full h-96">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.3638250268646!2d77.94509897599166!3d9.477049090603309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0133976c483f6d%3A0xe36643cda0e5c909!2sKavin%20Fireworks%20Factory!5e0!3m2!1sen!2sde!4v1738238004865!5m2!1sen!2sde">
            </iframe>
          </div>


        </div>
      </section>
    </>
  )
}

export default Contact