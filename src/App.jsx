import { useState } from 'react'

import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetails from './Components/PokemonDetails'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default App
