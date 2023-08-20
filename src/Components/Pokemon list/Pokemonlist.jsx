import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
export default function Pokemonlist() {
  const defult_url = "https://pokeapi.co/api/v2/pokemon";
const [pokemonListState, setPokemonState] = useState({

pokemonList:[],
pokedexUrl:defult_url,
nextUrl: defult_url,
preUrl: defult_url
})
  async function DataforPokemon() {
    const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defult_url);
    const pokeResult = response.data.results;
    const pokemonlist = pokeResult.map((pokemonurl) =>
      axios.get(pokemonurl.url)
    );
    const pokemonlistData = await axios.all(pokemonlist);
    const pokemonFinalList = pokemonlistData.map((pokemonData) => {
      const pokemon = pokemonData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        imageURL: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types[0].type.name,
        weight: pokemon.weight,
        move1: Object.values(pokemon.moves)[0].move.name,
        move2: Object.values(pokemon.moves)[1].move.name,
        move3: Object.values(pokemon.moves)[2].move.name,
        move4: Object.values(pokemon.moves)[3].move.name,
        height: pokemon.height,
      };
    });
    setPokemonState({...pokemonListState, pokemonList:pokemonFinalList,nextUrl: response.data.next, preUrl:response.data.previous});
  }

  useEffect(() => {
    DataforPokemon();
  }, [pokemonListState.pokedexUrl]);
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-semibold mt-5 mb-5 font-serif underline tracking-[5px]">
        Pokemon List
      </h1>
      <div className="flex items-center justify-around gap-12 mb-12 mt-12">
        <button
          className="hover:bg-purple-400 px-5 py-1 rounded-sm font-semibold bg-purple-300 disabled:opacity-25"
          onClick={() => setPokemonState({...pokemonListState,pokedexUrl:pokemonListState.preUrl})}
        >
          &#8592; Prev
        </button>
        <button
          className="hover:bg-purple-400 px-5 py-1 rounded-sm font-semibold bg-purple-300 disabled:opacity-25"
          onClick={() => setPokemonState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})}
        >
          Next &#8594;
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center ">
        {pokemonListState.pokemonList.map((pokemon) => (
          <Pokemon
            name={pokemon.name}
            key={pokemon.id}
            imageURL={pokemon.imageURL}
            types={pokemon.types}
            weight={pokemon.weight}
            move1={pokemon.move1}
            move2={pokemon.move2}
            move3={pokemon.move3}
            move4={pokemon.move4}
            height={pokemon.height}
            id = {pokemon.id}
          />
        ))}
      </div>
     
    </div>
  );
}
