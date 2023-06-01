import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import Item from "../components/Item";
import { Search } from "../components/search.component";

const Wrapper = styled(ScrollView)`
  flex: 1;
  overflow: scroll;
`;

export default function RestaurantScreen({ navigation }) {
  return (
    <Wrapper>
      <Search />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Item />
      </TouchableOpacity>
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
}
