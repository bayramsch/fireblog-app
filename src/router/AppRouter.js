import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Navbar from "../component/Navbar"
import Register from '../pages/Register'
import NewBlog from '../pages/NewBlog'
import Details from '../pages/Details'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/newblog' element={<NewBlog />} />
                <Route path='/details' element={<Details />} />
             </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter