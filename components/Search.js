import React from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components";

const SearchInput = styled(TextInput)`
  margin: 8px;
`;

export default function Search() {
  const [text, setText] = React.useState("");

  return (
    <SearchInput
      label="Search"
      mode="outlined"
      value={text}
      onChangeText={(text) => setText(text)}
    />
  );
}
