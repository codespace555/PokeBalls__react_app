import axios from "axios";
import  { useEffect, useState } from "react";
import DataforPokemon from "../../utils/DataforPokemon";
import { useParams } from "react-router-dom";

export default function usePokemonDetails(PokemonNAme) {
  const { id } = useParams();
    const pokemon_detail_url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState(null);
    const [ability, setAbility] = useState("");
    const [pokemonListState, setPokemonState] = useState({
    
      pokemonList:[],
      pokedexUrl:"",
      nextUrl: "",
      preUrl: ""
      })
    async function pokemonDetail(id) {
      const response = await axios.get(pokemon_detail_url + (PokemonNAme) ? PokemonNAme :id);
      const pokemon = response.data;
      setPokemon({
        name: pokemon.name,
        imageURL: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types[0].type.name,
        weight: pokemon.weight,
        // move1: Object.values(pokemon.moves)[0].move.name,
        // move2: Object.values(pokemon.moves)[1].move.name,
        // move3: Object.values(pokemon.moves)[2].move.name,
        // move4: Object.values(pokemon.moves)[3].move.name,
        height: pokemon.height,
      });
  
      const ability_url = `https://pokeapi.co/api/v2/ability/${id}`;
      const pokemon_ability = await axios.get(ability_url);
      const res_ability = pokemon_ability.data.effect_entries[1].effect;
  
      setAbility(res_ability);
       const typeUrl = response.data.types[0].type.name
       return typeUrl
    }

async function downloadRelatedPokemon(id){
  const type = await  pokemonDetail(id);
  console.log(type)
  console.log(`https://pokeapi.co/api/v2/type/${type}`)
 await DataforPokemon(pokemonListState, setPokemonState,`https://pokeapi.co/api/v2/type/${type}`)

}



    useEffect(() => {
      downloadRelatedPokemon(id)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
    }, [id ,PokemonNAme]);
  return[pokemon,ability,pokemonListState]
}
