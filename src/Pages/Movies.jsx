import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import movieData from '../lib/movie-data'
import axios from 'axios'
const Movies = () => {

const [ movie , setMovie] = useState([])

useEffect(() => {
const fetchMovie = async () => {

const options = {
  method: 'GET',
  url: 'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles',
  headers: {
    'x-rapidapi-key': '19458f3139msh34818f48e982faap1ce8bcjsne743a36408e2',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    setMovie(response.data)
} catch (error) {
    console.error(error);
}


};

fetchMovie()
}, [])
console.log(movie);

  return (
    <div>
      <Navbar/>
      
      <div className="grid grid-cols-3 gap-6 p-6 mx-40 mt-8 text-white ">
        {movie?.map((movie) => (
          <div key={movie.id} className="shadow-md p-4 rounded border border-[#3C404C] shadow-xl hover:shadow-xl">
            
            <img 
             src={movie?.primaryImage}
              alt={movie?.primaryTitle}
              className="w-full h-80 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-3">Title : {movie.primaryTitle}</h2>
            <p className="text-gray-600 mt-2 text-sm"> <strong className='text-blue-400'>Description :</strong>  {movie.description?.substring(0, 120)}...</p>
            <p className="font-semibold mt-2">Rating : 10| {movie.averageRating}</p>
            {/* <p className="text-sm text-gray-500">{movie.genre?.join(", ")}</p> */}
            <p className="text-gray-400 text-sm mt-1">
              {movie.releaseDate}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Movies
