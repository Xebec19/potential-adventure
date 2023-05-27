import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import Item from "../components/Item";
import { Search } from "../components/search.component";
import SearchContext from "../store/search-context";

const Wrapper = styled(ScrollView)`
  flex: 1;
  overflow: scroll;
`;

export default function HomeScreen() {
  const ctx = useContext(SearchContext);

  return (
    <Wrapper>
      <Search />
      {/* <Text>{ctx.searchText}</Text> */}
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
}
