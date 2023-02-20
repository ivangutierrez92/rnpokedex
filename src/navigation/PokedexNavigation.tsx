import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

export type PokedexNavigatorParamList = {
  Pokedex: undefined;
  Pokemon: { id: number };
};

const Stack = createNativeStackNavigator<PokedexNavigatorParamList>();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} options={{ headerShown: false }} />
      <Stack.Screen name="Pokemon" component={Pokemon} options={{ title: "", headerTransparent: true }} />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
