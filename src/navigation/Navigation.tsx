import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Favorite from "../screens/Favorite";
import Account from "../screens/Account";
import { Image } from "react-native";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" color={color} size={size} />,
          title: "Favoritos",
        }}
      />
      <Tab.Screen
        name="PokedexNav"
        component={PokedexNavigation}
        options={{ tabBarLabel: "", tabBarIcon: renderPokeball, headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
          title: "Mi Cuenta",
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeball() {
  return <Image source={require("../assets/pokeball.png")} style={{ width: 75, height: 75, top: -15 }} />;
}

export default Navigation;
