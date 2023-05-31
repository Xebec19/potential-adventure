import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <ReataurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
    </ReataurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
