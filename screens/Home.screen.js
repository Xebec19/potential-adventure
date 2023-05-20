import * as React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled(View)`
  flex: 1;
`;

export default function HomeScreen() {
  return (
    <Wrapper>
      <Text>Home!</Text>
    </Wrapper>
  );
}
