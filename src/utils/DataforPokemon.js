import axios from "axios";

export default async function DataforPokemon(
  pokemonListState,
  setPokemonState,
  defult_url,limit="20"
) {
  const response = await axios.get(
    pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defult_url
  );
  let pokeResult = response.data.results ? response.data.results:response.data.pokemon;
  pokeResult = pokeResult.slice(0,limit)
  const pokemonlist = pokeResult.map((p) => {
    if (p.url) {
      return axios.get(p.url);
    } else if (p.pokemon.url) {
      return axios.get(p.pokemon.url);
    }
  });
  const pokemonlistData = await axios.all(pokemonlist);
  console.log(pokemonlistData )
  const pokemonFinalList = pokemonlistData.map((pokemonData) => {
    const pokemon = pokemonData.data;
    return {
      id: pokemon.id,
      name: pokemon.name,
      imageURL: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types[0].type.name,
      weight: pokemon.weight,
      
      // move1: Object.values(!pokemon.moves ? (pokemon.move)[0].move.name : pokemon.name),
      // move2: Object.values(!pokemon.moves ? (pokemon.move)[1].move.name : pokemon.name),
      // move3: Object.values(!pokemon.moves ? (pokemon.move)[2].move.name : pokemon.name),
      // move4: Object.values(!pokemon.moves ? (pokemon.move)[3].move.name : pokemon.name),
      height: pokemon.height,
    };
  });
  setPokemonState({
    ...pokemonListState,
    pokemonList: pokemonFinalList,
    nextUrl: response.data.next,
    preUrl: response.data.previous,
  });
}
