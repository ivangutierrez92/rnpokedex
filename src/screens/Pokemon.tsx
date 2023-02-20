import { Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PokedexNavigatorParamList } from "../navigation/PokedexNavigation";
import { getPokemonById } from "../api/pokemon";
import { PokemonDetails } from "../models/pokemon.model";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

type Props = NativeStackScreenProps<PokedexNavigatorParamList, "Pokemon">;

export default function Pokemon({ navigation, route }: Props) {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const { params } = route;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          color="#fff"
          size={24}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    getPokemon(route.params.id);
  }, [params]);

  const getPokemon = async (id: number) => {
    try {
      const response = await getPokemonById(id);
      setPokemon(response);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else if (typeof error === "string") {
        setMessage(error);
      } else {
        setMessage("Sucedió un error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" />
      ) : pokemon ? (
        <>
          <Header
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.other["official-artwork"].front_default}
            type={pokemon.types[0].type.name}
          />
          <Type types={pokemon.types} />
          <Stats stats={pokemon.stats} />
        </>
      ) : (
        <Text>{message}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
