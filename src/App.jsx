import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import DashBoard from './Pages/DashBoard'
import PageNotFound from './Pages/PageNotFound'
import { Profile } from './Pages/Profile'
import Footer from './component/Footer'
import Addmovie from './component/Addmovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/movies' element={<Movies/>}/>
              <Route path='/profile' element={<Profile />} />
               <Route path="/dashboard" element={<DashBoard/>} >
              
                
        {/* <Route path='settings' element={<Settings />} /> */}
        </Route>
                <Route path='*' element={<PageNotFound/>}/>
                 <Route path='/addMovie' element={<Addmovie/>}/>
                 <Route path='/ViewMovie' element={<Movies/>}/>
          </Routes>
          </BrowserRouter>

      </div>
    </>
  )
}

export default App
