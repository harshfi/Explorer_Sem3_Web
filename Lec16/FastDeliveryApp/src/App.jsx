import { useState } from 'react'
import { products } from './data/product'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './componets/Home'
import './style.css'
import Pizza from './componets/Pizza'
import Burger from './componets/Burger'
import Sandwich from './componets/Sandwich'
import { CartContext } from './context/cartContext'
// import Cart from './componets/Cart'
import Cart from './componets/Cart'

function App() {

  const [cart, setCart] = useState([])

  // console.log(products)
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <nav className="food-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/pizza">Pizza</NavLink>
          <NavLink to="/burger">Burgers</NavLink>
          <NavLink to="/sandwich">Sandwich</NavLink>
          <NavLink to="/cart">Cart - {cart.length}</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/sandwich' element={<Sandwich />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </CartContext.Provider >
  )
}

export default App
