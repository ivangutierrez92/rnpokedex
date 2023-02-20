import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React, { FC } from "react";
import { capitalize } from "lodash";
import { PokemonDetails } from "../models/pokemon.model";
import { POKEMON_TYPE_COLORS } from "../utils/constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PokedexNavigatorParamList } from "../navigation/PokedexNavigation";
import { useNavigation } from "@react-navigation/native";

type PokedexScreenNavigationProp = NativeStackNavigationProp<PokedexNavigatorParamList>;

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const bgStyles = { backgroundColor: POKEMON_TYPE_COLORS[pokemon.types[0].type.name], ...styles.bgStyles };
  const navigation = useNavigation<PokedexScreenNavigationProp>();

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, "0")}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.sprites.other["official-artwork"].front_default }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

type Props = {
  pokemon: PokemonDetails;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 10,
  },
});

export default PokemonCard;
