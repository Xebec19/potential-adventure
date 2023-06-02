import React from "react";
import { Text } from "react-native-paper";

export default function RestaurantDetailScreen({ route, navigation }) {
  const { id } = route.params;
  return <Text>{id}</Text>;
}
