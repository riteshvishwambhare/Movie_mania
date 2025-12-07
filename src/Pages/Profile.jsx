import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
export const Profile = () => {
  return (
    
    <div>  
  
           <Navbar/>
            <div className='mt-6 border border-[#3C404C] rounded-3xl max-w-4xl mx-auto p-4 hover:shadow' >
      <h1 className=" flex justify-center text-4xl font-bold text-black mt-6">
        <i class="fa-solid fa-circle-user"></i>
      </h1>
      <p className='flex justify-center text-black '>
        profile
      </p>
      <h3 className='flex justify-center font-bold text-blue-400'> ID : Ritesh </h3>
      <p className='flex justify-center font-bold text-black '>4 public playlists - 23 follower - 37 following</p>
            </div>


            <div  className='mt-6 border border-[#3C404C] rounded-3xl max-w-4xl mx-auto p-4 hover:shadow' >
      <h2 className='flex justify-center text-2xl font-bold text-black mt-6'>Your Playlists</h2>
      <p className='flex justify-center text-black '>You have no playlists yet. Create your first playlist to start adding movies!</p>  
            </div>

            <div  className='mt-6 border border-[#3C404C] rounded-3xl max-w-4xl mx-auto p-4 hover:shadow' >
            <h2 className='flex justify-center text-2xl font-bold text-black mt-6'>Favourite Movie</h2>
            <h2 className='flex justify-center text-black'> You didnt add any movie </h2>
            </div>

          
    </div>
  
  )
  
}
