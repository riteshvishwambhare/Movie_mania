import React from 'react';
import Navbar from '../component/Navbar';

const DashBoard = () => {
  return (
    <div className="min-h-screen from-blue-500 to-purple-600">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Movie Dashboard
        </h1>
        <p className="text-black text-lg mb-6">
          Manage your movies, check stats, and explore new releases all in one place!
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            Add Movie
          </button>
          <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            View Movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
