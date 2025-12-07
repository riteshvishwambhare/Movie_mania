import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-opacity-80 px-6 py-4 shadow-md border-b border-[#3C404C]">
      <div className="flex justify-between items-center">

        
        <h1 className="text-xl font-bold text-white">Movie_Mania</h1>

      
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

       
        <div className="hidden md:flex gap-8">
          <Link className="text-gray-200 hover:text-white" to="/">Home</Link>
          <Link className="text-gray-200 hover:text-white" to="/movies">Movies</Link>
          <Link className="text-gray-200 hover:text-white" to="/DashBoard">DashBoard</Link>
          <Link className="text-gray-200 hover:text-white" to="/profile">Profile</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#1F1F1F] p-4 rounded-xl border border-[#3C404C]">
          <Link className="text-gray-200" to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className="text-gray-200" to="/movies" onClick={() => setOpen(false)}>Movies</Link>
          <Link className="text-gray-200" to="/DashBoard" onClick={() => setOpen(false)}>DashBoard</Link>
          <Link className="text-gray-200" to="/profile" onClick={() => setOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
