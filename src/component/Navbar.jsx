import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
    <div className='bg-transparent flex justify-center gap-8 border border-[#3C404C] shadow-xl p-4 mx-80 rounded-3xl mt-8 '>
     <button className='text-gray-100'>
         <Link to='/'>Home</Link>
     </button>

     <button className='text-gray-100'>
        <Link to='/movies'>Movie</Link>
        </button>

        <button className='text-gray-100'>
          <Link to='/dashboard'>DashBoard</Link>
          </button>

          <button className='text-gray-100'>
            <Link to='/profile'>Profile</Link>
            </button>
    </div>
    </nav>
   </div> 
  )
}

export default Navbar
