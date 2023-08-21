import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import usePokemonDetails from "./hokes/usePokemonDetails";
import { useEffect } from 'react';
import Pokemon from './Pokemon/Pokemon';
import Topbtn from './Topbtn';

export default function PokemonDetails({PokemonNAme}) {
  useEffect(() => {
    AOS.init();
  }, [])
 
  // custom hook
  const [pokemon, ability,pokemonListState] = usePokemonDetails(PokemonNAme);
  return (
    <>
      <div className="bg-gray-500">
        <Link to="/" className="font-bold text-5xl ml-5">
          {" "}
          &#8592;
        </Link>
      </div>
      {pokemon && (
       <div className='w-auto h-sauto'>
        <div className="flex  flex-wrap  items-center justify-between px-5" >
          {/* left */}
          <div className=" flex flex-col items-center justify-center md:w-">
            <h1 className=" sm:text-3xl md:text-3xl   font-medium text-gray-900 my-10 md:tracking-[50px] pl-5 tracking-[10px] md:w-[50%]" >
              {pokemon.name}
            </h1>
            <img
              className="  md:h-[500px] h-[300px] border-b-2
              " 
              data-aos="fade-left" data-aos-duration = "1500"
             
              src={pokemon.imageURL}
              alt="blog"
            />
          </div>

          {/* right */}
          <div className=" border-gray-200 border-opacity-60 rounded-lg  shadow-[0_20px_50px_rgba(6,_2,_143,_0.2)] border-2 p-5  flex flex-col items-center justify-center md:w-[50%]" >
            <div className="tracking-widest text-5xl p-5 text-center  text-white title-font font-medium  mb-10 bg-gray-700  w-full" data-aos="fade-right" data-aos-duration = "300">
              <h3 className="text-xs "data-aos="fade-left" data-aos-duration = "1900"> POKEMON TYPE</h3>
              <span>{pokemon.types.toUpperCase()}</span>
            </div>

            <p className="mb-2  flex flex-wrap justify-around md:w-full w-auto ">
              <span className="font-semibold  bg-blue-400 rounded-lg md:px-5  py-5 text-2xl mt-10 p-5" data-aos="fade-left" data-aos-duration = "1900">
                {" "}
                Moves
                <span className="font-semibold bg-purple-400 rounded-lg px-5 ml-2 py-1 text-xl mt-5">
                  {pokemon.move1}
                </span>
                <span className="font-semibold bg-red-400 rounded-lg px-5  py-1 text-xl mt-5 ml-2">
                  {pokemon.move2}
                </span>
                <span className="font-semibold bg-gray-400 rounded-lg px-5  py-1 text-xl mt-5 ml-2">
                  {pokemon.move3}
                </span>
                <span className="font-semibold bg-green-400 rounded-lg px-5  py-1 text-xl mt-5 ml-2">
                  {pokemon.move4}
                </span>
              </span>
            </p>
            <span className="mt-10 flex flex-wrap">
              <span className="font-semibold bg-red-400 rounded-lg px-5  py-4 text-xl mt-5 ml-2">
                Weight :
                <span className="font-semibold bg-green-400 rounded-lg px-5  py-1 text-xl mt-5 ml-2">
                  {pokemon.weight / 10} Kg
                </span>
              </span>

              <span className="font-semibold bg-yellow-400 rounded-lg px-5  py-4 text-xl mt-5 ml-2">
                Height :
                <span className="font-semibold bg-orange-400 rounded-lg px-5  py-1 text-xl mt-5 ml-2">
                  {(pokemon.height * 10) / 100} m
                </span>
              </span>
            </span>
            <div>
              <span className="mt-5 w-full bg-gray-800 text-white flex p-5 flex-wrap " data-aos="fade-left" data-aos-duration = "300">
                <h1>{ability}</h1>
              </span>
            </div>
          </div>
          
        </div>
        <h1 className='text-center block w-full border-2 h-55 p-5 my-5 font-bold text-3xl tracking-[10px] bg-gray-500'>{pokemon.types.toUpperCase()} Type Pokemons </h1>
        </div>
      )}
<div className='flex w-full flex-wrap items-center justify-center text-center' data-aos="fade-top" data-aos-duration = "1900">

  {pokemonListState.pokemonList.length > 0 && 
  pokemonListState.pokemonList.map((pokemon)=> <Pokemon
  name={pokemon.name}
  key={pokemon.id}
  imageURL={pokemon.imageURL}
  types={pokemon.types}
  weight={pokemon.weight}
  height={pokemon.height}
  id = {pokemon.id}
  
/>

  )
  
  }
</div>
<Topbtn />
    </>
  );
}
