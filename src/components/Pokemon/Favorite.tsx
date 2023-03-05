import React, { FC, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from "../../api/favorite";

type Props = {
  id: number;
};

const Favorite: FC<Props> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [id])

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      setIsFavorite(true);
    } catch (error) {
      console.log(error)
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      setIsFavorite(false);
    } catch (error) {
      console.log(error);
    }
  }

  return <Ionicons name={isFavorite ? 'heart-sharp' : 'heart-outline'} color="#fff" size={20} onPress={isFavorite ? removeFavorite : addFavorite} />;
};

export default Favorite;
