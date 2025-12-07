import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const Addmovie = () => {
    const navigate = useNavigate();

  const [ formData , setFormData] = useState({
    id: Date.now(),
    title:"",
    description:"",
    year:"",
    rating:"",
    image:"",
    genre: "",
  })


  const handleChange = (e) =>{
    setFormData({ 
        ...formData, 
        [e.target.name]:e.target.value,
         });
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Movie added:", formData);

            let movies = JSON.parse(localStorage.getItem('movies')) || [];
            movies.push(formData);
            localStorage.setItem('movies', JSON.stringify(movies));
            console.log(movies);
            alert('Movie added successfully!');

            setFormData({
                title:"",
                description:"",
                year:"",
                rating:"",
                image:"",
                genre: [],
            });

            navigate('/movies')
        }



  return (
     <div className="min-h-screen ">
      <Navbar />
      <div className="max-w-xl mx-auto border border-[#3C404C] p-6 mt-10 rounded-lg shadow-lg">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Add New Movie
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder='Movies Title'
            value={formData.title}
            onChange={handleChange}
            className="p-2 rounded border border-[#3C404C] text-white"
            required
          />

          <textarea
            name="description"
            placeholder="Movie Description" 
            value={formData.description}
            onChange={handleChange}
            className="p-2 rounded border border-[#3C404C] text-white"
            rows="4"
          ></textarea>

          <input
            type="number"
            name="year"
            placeholder="Release Year"
            value={formData.year}
            onChange={handleChange}
            className="p-2 rounded border border-[#3C404C] text-white"
            required
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating (1-10)"
            value={formData.rating}
            onChange={handleChange}
            className="p-2 rounded border border-[#3C404C] text-white"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Poster Image URL"
            value={formData.image}
            onChange={handleChange}
            className="p-2 rounded border border-[#3C404C] text-white"
          />

          <input
            type="text"
            name="genre"
            placeholder="eg - Action, Drama..."
            value={formData.genre}
            onChange={handleChange}
            className="p-2 rounded border border-[#3C404C] text-white"
            required
          />


          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
  
}
export default Addmovie;
