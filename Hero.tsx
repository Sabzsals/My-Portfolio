import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/img.bg.png)] bg-left lg:bg-[18%] bg-cover'
    style={{backgroundSize:"25%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="fade-up-left">I am</p>
            <p data-aos="fade-up-left">Saba</p>
            <p data-aos="fade-up-left">Saleem</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
