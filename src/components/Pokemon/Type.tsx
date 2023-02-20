import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { PokemonType } from "../../models/pokemon.model";
import { POKEMON_TYPE_COLORS } from "../../utils/constants";

type Props = { types: PokemonType[] };

const Type: FC<Props> = ({ types }) => {
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View style={{ ...styles.pill, backgroundColor: POKEMON_TYPE_COLORS[item.type.name] }}>
          <Text style={styles.pillText} key={`${index}`}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  pillText: {
    color: '#fff'
  }
});

export default Type;
