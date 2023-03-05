import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonsFavoriteApi } from '../api/favorite'
import useAuth from '../context/useAuth';
import { getPokemonById } from '../api/pokemon';
import { PokemonDetails } from '../models/pokemon.model';

const Favorite = () => {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray: PokemonDetails[] = []
          for (let id of response) {
            const pokemonDetails = await getPokemonById(id);
            pokemonsArray.push(pokemonDetails);
          }
          setPokemons(value => [...value, ...pokemonsArray]);
        } catch (error) {
          console.log(error);
        }
      })()
    }
  }, [auth])

  return (
    <SafeAreaView>
      {!auth ? <Text>Usuario no logueado</Text> : <Text>Lista de favoritos</Text>}
    </SafeAreaView>
  )
}

export default Favorite