import React from 'react'

const Home = () => {
  return (
    <>
      <div className="hero bg-base-200 h-400">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/homepage/home2.png"
            //src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-64 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">FirewerKs (Kavin Fireworks Factory) News!</h1>
            <p className="py-6">
            "Welcome to Kavin FirewerKs Factory, where our passion for fireworks lights up your celebrations!" Then you can share your mission and commitment to quality and safety. 
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home