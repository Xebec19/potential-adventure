import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import Search from "../components/Search";
import Item from "../components/Item";

const Wrapper = styled(ScrollView)`
  flex: 1;
  overflow: scroll;
`;

export default function HomeScreen() {
  return (
    <Wrapper>
      <Search />
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  );
}
