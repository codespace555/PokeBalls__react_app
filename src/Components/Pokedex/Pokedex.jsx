import React from 'react'
import Search from '../Search/Search'
import Pokemonlist from '../Pokemon list/Pokemonlist'
import Topbtn from '../Topbtn'

export default function Pokedex() {
  return (
    <>
   
      <div className='flex flex-col items-center justify-center bg-[rgba(6,_2,_143,_0.2)]'>
        <h1 className='text-4xl tracking-[10px] font-serif mt-5 font-extrabold '>POKEDEX</h1>
        <Search />
        <Pokemonlist />
        <Topbtn />
      </div>
    
    </>
  )
}
