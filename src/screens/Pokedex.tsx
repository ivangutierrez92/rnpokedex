import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsByUrlApi, getPokemonsApi } from "../api/pokemon";
import { PokemonDetails } from "../models/pokemon.model";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [nextPage, setNextPage] = useState<string | null>("");

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextPage ? nextPage : undefined);
      setNextPage(response.next);

      const pokemonsArray: PokemonDetails[] = [];

      for (let pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push(pokemonDetails);
      }
      setPokemons(value => [...value, ...pokemonsArray]);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={!!nextPage} />
    </SafeAreaView>
  );
};

export default Pokedex;
