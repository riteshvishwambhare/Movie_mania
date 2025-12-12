import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import movieData from '../lib/movie-data'
import axios from 'axios'
const Movies = () => {

const [ movie , setMovie] = useState([])

useEffect(() => {
const fetchMovies = async () => {
   const userMovies = JSON.parse(localStorage.getItem('movies')) || [];
 
  //const combinedMovies = [...response.data, ...userMovies];

  setMovie(userMovies);
  localStorage.setItem('movies', JSON.stringify(response.data));
}
const fetchMovie = async () => {

const options = {
  method: 'GET',
  url: 'https://imdb-top-30-movies.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': '19458f3139msh34818f48e982faap1ce8bcjsne743a36408e2',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};


try {
  const response = await axios.request(options);
  

  const userMovies = JSON.parse(localStorage.getItem('movies')) || [];

  const combinedMovies = [...response.data, ...userMovies];

  setMovie(combinedMovies);
  localStorage.setItem('movies', JSON.stringify(response.data));
  console.log(response.data);
  console.log(userMovies);
  
} catch (error) {
  console.error(error);
}
}

fetchMovies()
}, [])

const deleteMovie = (id) => {
  const store = JSON.parse(localStorage.getItem('movies')) || [];
  const updatedMovies = store.filter((movie) => movie.id !== id);
  setMovie(updatedMovies);
  localStorage.setItem('movies', JSON.stringify(updatedMovies));

  //remove delete item from ui list
  const newUiList = movie.filter((movie) => movie.id !== id);
  setMovie(newUiList);
}

//console.log(movie);



  return (
    <div>
      <Navbar/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-6 maz-w-7xl mt-8 text-white ">
        {movie?.map((movie) => (
          <div key={movie.id} className="h-full shadow-md p-4 rounded border border-[#3C404C] shadow-xl hover:shadow-xl ">
            
            <img 
             src={movie?.image}
              alt={movie?.Title}
              className="w-full h-80 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-3">Title : {movie.title}</h2>
            <p className="text-gray-600 mt-2 text-sm"> <strong className='text-blue-400'>Description :</strong>  {movie.description?.substring(0, 120)}...</p>
            <p className="font-semibold mt-2">Rating : 10| {movie.rating}</p>
            {/*<p className="text-sm text-gray-500">{movie?.genre?.join(", ")}</p>*/}
            <p className="text-gray-400 text-sm mt-1">
              {movie.year}
            </p>

            {/* <button
            onClick={()=> window.open(`https://www.imdb.com/title/tt27706593/${movie.id}/', "_blank"`)}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
            View on IMDB
            </button> */}
            
            <button
              onClick={() => deleteMovie(movie.id)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded 
                         hover:bg-red-700 transition"
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Movies
