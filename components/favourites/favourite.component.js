import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-radius: 50px;
  border-color: #20232a;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 64px;
  z-index: 9;
`;

export const Favourite = ({ restaurants }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurants)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign name="heart" size={23} />
    </FavouriteButton>
  );
};
