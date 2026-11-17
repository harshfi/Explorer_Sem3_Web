import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './compents/Home'
import About from './compents/About'
import Contact from './compents/Contact'
import User from './compents/User'
import './style.css'


function App() {

  const navLinkStyles = ({ isActive }) => ({
    // console.log(isActive)
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
  });


  return (
    <BrowserRouter>

      <nav>
        {/* <img src="" alt="" /> */}
        <NavLink className='link' to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink className='link' to='/about' style={navLinkStyles}>About us</NavLink>
        <NavLink className='link' to='/contact' style={navLinkStyles}>Contact us</NavLink>
      </nav>


      <Routes className='element'>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />} ></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
