import React from 'react'
import HeroSectionImg from '../assets/HeroSectionImg.png';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 
                    mx-6 md:mx-40 
                    mt-8 px-4 md:px-8 
                    items-center gap-10 mb-20">

      
      <div className="flex flex-col justify-center gap-4 
                      text-center md:text-left"> 

        <h1 className="text-3xl md:text-5xl text-white font-bold">
          This is Movie Mania Application
        </h1>

        <p className="text-lg md:text-2xl mt-2 text-white">
          Welcome to ultimate movie experience
        </p>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img 
          className="w-full max-w-sm md:max-w-lg object-contain rounded-3xl" 
          src={HeroSectionImg} 
          alt="Hero Section"
        />
      </div>

    </div>
  )
}

export default HeroSection
