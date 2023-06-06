import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "./restaurants/compact-restaurnat-info.component";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
