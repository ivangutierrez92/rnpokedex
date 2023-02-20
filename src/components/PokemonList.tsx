import { FlatList, StyleSheet, ActivityIndicator, Platform, StatusBar } from "react-native";
import React, { FC } from "react";
import { PokemonDetails } from "../models/pokemon.model";
import PokemonCard from "./PokemonCard";

const PokemonList: FC<Props> = ({ pokemons, loadPokemons, isNext }) => {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={pokemon => `pokemon-${pokemon.id}`}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext ? loadMore : undefined}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext ? <ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE" /> : undefined
      }
    />
  );
};

type Props = { pokemons: PokemonDetails[]; loadPokemons: () => void; isNext: boolean };
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
