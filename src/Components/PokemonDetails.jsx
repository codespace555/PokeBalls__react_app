import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PokemonDetails() {
  const { id } = useParams();
  const pokemon_detail_url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState(null);
  const [ability, setAbility] = useState("");
  async function pokemonDetail() {
    const response = await axios.get(pokemon_detail_url + id);
    const pokemon = response.data;
    setPokemon({
      name: pokemon.name,
      imageURL: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types[0].type.name,
      weight: pokemon.weight,
      move1: Object.values(pokemon.moves)[0].move.name,
      move2: Object.values(pokemon.moves)[1].move.name,
      move3: Object.values(pokemon.moves)[2].move.name,
      move4: Object.values(pokemon.moves)[3].move.name,
      height: pokemon.height,
    });

    const ability_url = `https://pokeapi.co/api/v2/ability/${id}`;
    const pokemon_ability = await axios.get(ability_url);
    const res_ability = pokemon_ability.data.effect_entries[1].effect;

    setAbility(res_ability);
  }
  useEffect(() => {
    pokemonDetail();
  }, []);
  return (
    <>
    <div className="bg-gray-500">
    <Link to = "/" className="font-bold text-5xl ml-5"> &#8592;</Link>
    </div>
    {pokemon && (
      <div className="flex  flex-wrap  items-center justify-between w-screen h-screen">
        {/* left */}
        <div className=" flex flex-col items-center justify-center md:w-[50%] md:h-full sm:h-50% sm:w-100%">
          <h1 className=" md:text-5xl text-3xl   font-medium text-gray-900 my-10 tracking-[50px] pl-5">
            {pokemon.name}
          </h1>
          <img
            className="  h-[700px] max-w-full border-b-2"
            src={pokemon.imageURL}
            alt="blog"
          />
        </div>

        {/* right */}
        <div className=" border-gray-200 border-opacity-60 rounded-lg  shadow-[0_20px_50px_rgba(6,_2,_143,_0.2)] border-2 p-5  flex flex-col items-center justify-center  md:w-[50%] md:h-full sm:h-50% sm:w-full ">
          <div className="tracking-widest text-5xl p-5 text-center  text-white title-font font-medium  mb-10 bg-gray-700  w-full">
            <h3 className="text-xs "> POKEMON TYPE</h3>
            <span>
            {pokemon.types.toUpperCase()}
            </span>
           
          </div>

          <p className="mb-2 mt-55 flex flex-wrap justify-around">
            <span className="font-semibold  bg-blue-400 rounded-lg px-5  py-5 text-2xl mt-10">
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
                {" "}
                {pokemon.weight / 10} Kg
              </span>
            </span>

            <span className="font-semibold bg-yellow-400 rounded-lg px-5  py-4 text-xl mt-5 ml-2">
              {" "}
              Height :
              <span className="font-semibold bg-orange-400 rounded-lg px-5  py-1 text-xl mt-5 ml-2">
                {" "}
                {(pokemon.height * 10) / 100} m
              </span>
            </span>
          </span>
          <div>
            <span className="mt-10 w-full bg-gray-800 text-white flex p-5 flex-wrap ">
              <h1>{ability}</h1>
            </span>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
