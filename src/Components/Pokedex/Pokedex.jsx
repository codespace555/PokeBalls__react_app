import React, { useState } from 'react'
import Search from '../Search/Search'
import Pokemonlist from '../Pokemon list/Pokemonlist'
import Topbtn from '../Topbtn'
import PokemonDetails from '../PokemonDetails'

export default function Pokedex() {

  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
   
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-4xl tracking-[10px] font-serif mt-5 font-extrabold '>POKEDEX</h1>
        <Search updateSearchTerm = {setSearchTerm}  />
        {searchTerm ? <PokemonDetails PokemonNAme={{searchTerm}} /> :  <Pokemonlist />}
       
        <Topbtn />
       
      </div>
    
    </>
  )
}
