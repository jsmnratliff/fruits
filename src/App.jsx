import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CreateFruits from './pages/CreateFruits'
import Fruits from './pages/Fruits'
import CreateVeggies from './Pages/CreateVeggies'
import Veggies from './pages/Veggies'

function App() {


  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        <Link to="/veggies">
          <button>Veggies</button>
        </Link>
        <Link to="/veggies/create">
          <button>Create New Veggie</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />}></Route>
        <Route path="/create" element={<CreateFruits />}></Route>
        <Route path="/veggies" element={<Veggies />}></Route>
        <Route path="/veggies/create" element={<CreateVeggies />}></Route>
      </Routes>
    </div>
  )
}

export default App