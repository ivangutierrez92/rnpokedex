import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  id: number;
};

const Favorite: FC<Props> = ({id}) => {
  const addFavorite = () => {
    console.log("Añadir a favoritos", id);
  };

  return <Ionicons name="heart-outline" color="#fff" size={20} onPress={addFavorite} />;
};

export default Favorite;
