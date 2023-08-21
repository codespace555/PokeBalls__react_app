import AOS from 'aos'
import 'aos/dist/aos.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../hokes/usePokemonList";
import { useEffect } from 'react';
export default function Pokemonlist() {
  useEffect(() => {
    AOS.init();
  }, [])
  const defult_url = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonListState, setPokemonState] = usePokemonList(defult_url)
 
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-semibold mt-5 mb-5 font-serif underline tracking-[5px] bg-[rgba(6,_2,_143,_0.2)]'">
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
      <div className="flex flex-wrap items-center justify-center " data-aos="fade-left" data-aos-duration = "1200">
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
