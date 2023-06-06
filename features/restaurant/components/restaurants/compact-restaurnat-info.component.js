import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export default function CompactRestaurantInfo({ restaurants }) {
  return (
    <Item>
      <CompactImage isMap source={{ uri: restaurants.photos[0] }} />
      <Text></Text>
    </Item>
  );
}
