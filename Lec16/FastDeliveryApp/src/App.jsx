import { useState } from 'react'
import { products } from './data/product'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './componets/Home'
import './style.css'
import Pizza from './componets/Pizza'
import Burger from './componets/Burger'
import Sandwich from './componets/Sandwich'

function App() {
  const [count, setCount] = useState(0)

  console.log(products)
  return (
    <BrowserRouter>
      <nav className="food-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/pizza">Pizza</NavLink>
        <NavLink to="/burger">Burgers</NavLink>
        <NavLink to="/sandwich">Sandwich</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Pizza />} />
        <Route path='/burger' element={<Burger />} />
        <Route path='/sandwich' element={<Sandwich />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
