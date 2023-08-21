


import  { useEffect, useState } from "react";
import DataforPokemon from "../../utils/DataforPokemon";
export default function usePokemonList(defult_url) {
    const [pokemonListState, setPokemonState] = useState({
    
    pokemonList:[],
    pokedexUrl:defult_url,
    nextUrl: defult_url,
    preUrl: defult_url
    })
 
    
      useEffect(() => {
        DataforPokemon(pokemonListState, setPokemonState,defult_url);
      }, [pokemonListState.pokedexUrl]);

return [pokemonListState, setPokemonState]


}
