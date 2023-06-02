import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
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
      <TouchableOpacity
        onPress={() => navigation.navigate("Home", { id: 123 })}
      >
        <Item />
      </TouchableOpacity>
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
}
