import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import axios from 'axios'

const Movies = () => {
  const [movies, setMovies] = useState([])

  // Load movies from localStorage
  const loadFromLocalStorage = () => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || []
    setMovies(storedMovies)
  }

  // Fetch movie from API
  const fetchMovieFromAPI = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://movies-ratings2.p.rapidapi.com/ratings?id=tt0111161',
        headers: {
          'x-rapidapi-key': '19458f3139msh34818f48e982faap1ce8bcjsne743a36408e2',
          'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com'
        }
      }

      const response = await axios.request(options)

      // API returns single object → convert to array
      const apiMovie = Array.isArray(response.data)
        ? response.data
        : [response.data]

      const storedMovies = JSON.parse(localStorage.getItem('movies')) || []

      // Avoid duplicates
      const combinedMovies = [...apiMovie, ...storedMovies].filter(
        (movie, index, self) =>
          index === self.findIndex((m) => m.id === movie.id)
      )

      setMovies(combinedMovies)
      localStorage.setItem('movies', JSON.stringify(combinedMovies))
    } catch (error) {
      console.error('API Error:', error)
    }
  }

  useEffect(() => {
    loadFromLocalStorage()
    fetchMovieFromAPI()
  }, [])

  // Delete movie
  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id)
    setMovies(updatedMovies)
    localStorage.setItem('movies', JSON.stringify(updatedMovies))
  }

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto mt-8 text-white">
        {movies.length === 0 && (
          <p className="text-center col-span-full text-gray-400">
            No movies available
          </p>
        )}

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="h-full p-4 rounded border border-[#3C404C] shadow-xl hover:shadow-2xl transition"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-80 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-3">
              Title : {movie.title}
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              <strong className="text-blue-400">Description :</strong>{' '}
              {movie.description?.substring(0, 120)}...
            </p>

            <p className="font-semibold mt-2">
              Rating : {movie.rating}
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Year : {movie.year}
            </p>

            <button
              onClick={() => deleteMovie(movie.id)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
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
