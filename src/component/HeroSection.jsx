import React from 'react'
import HeroSectionImg from '../assets/HeroSectionImg.png';
const HeroSection = () => {
  return (
    <div className='grid grid-cols-2 mx-40 mt-8 px-8 item-center gap-8 mb-20 '>
      <div className=' flex flex-col justify-center gap-4 text-center'> 
        <h1 className='text-5xl text-white '>This is Movie Mania Apllication</h1>
        <p className='text-2xl mt-4 text-white'> Welcome to ultimate movie experience</p>
      </div>

      <div className=' h-full '>
        <img className='w-full object-contain rounded-3xl bg-transparent' src={HeroSectionImg} alt="" />
      </div>
    </div>
  )
}

export default HeroSection
