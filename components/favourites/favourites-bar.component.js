import React from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components";
import CompactRestaurantInfo from "../../features/restaurant/components/restaurants/compact-restaurnat-info.component";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../../screens/";

const FavouriteWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ favourites }) => {
  return (
    <FavouriteWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <CompactRestaurantInfo restaurants={restaurant} />
            </View>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
