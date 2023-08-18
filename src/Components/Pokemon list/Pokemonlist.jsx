import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon'
import Topbtn from '../Topbtn'

export default function Pokemonlist() {
const [pokemonList , setpokemonList] = useState([])
const Pokedex_url = "https://pokeapi.co/api/v2/pokemon"

async function DataforPokemon() {
    const response = await axios.get(Pokedex_url)
    const pokeResult = response.data.results
   const pokemonlist = pokeResult.map((pokemonurl) => axios.get(pokemonurl.url))
   const pokemonlistData = await axios.all(pokemonlist)
   const pokemonFinalList = pokemonlistData.map(pokemonData => {
    const pokemon = pokemonData.data
    return{
        id: pokemon.id ,
        name :  pokemon.name,
        imageURL : pokemon.sprites.other.dream_world.front_default,
        types:pokemon.types[0].type.name,
        weight:pokemon.weight,
        move1:Object.values(pokemon.moves)[0].move.name,
        move2:Object.values(pokemon.moves)[1].move.name,
        move3:Object.values(pokemon.moves)[2].move.name,
        move4:Object.values(pokemon.moves)[3].move.name,
        height:pokemon.height

    }
  
   })
setpokemonList(pokemonFinalList)
}

useEffect(()=> {
DataforPokemon()
},[])
  return (
    <div className='text-center '>
      <h1 className='text-3xl font-semibold mt-5 mb-5 font-serif underline tracking-[5px]'>Pokemon List</h1>
      <div className='flex items-center justify-around gap-12 mb-12 mt-12'>
        <button className='hover:bg-purple-400 px-5 py-1 rounded-sm font-semibold bg-purple-300'>&#8592; Prev</button>
        <button  className='hover:bg-purple-400 px-5 py-1 rounded-sm font-semibold bg-purple-300'>Next &#8594;</button>
      </div>
      <div className='flex flex-wrap items-center justify-center '>
      {pokemonList.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.id} imageURL={pokemon.imageURL} types={pokemon.types} weight={pokemon.weight}  move1={pokemon.move1} move2={pokemon.move2} move3={pokemon.move3} move4={pokemon.move4} height = {pokemon.height}
      />)}
    
      </div>
    </div>
  )
}
