import React, { useContext } from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components";
import SearchContext from "../store/search-context";

const SearchInput = styled(TextInput)`
  margin: 8px;
`;

export default function SearchTextField() {
  const ctx = useContext(SearchContext);

  return (
    <SearchInput
      label="Search"
      mode="outlined"
      value={ctx.searchText}
      onChangeText={(text) => ctx.setSearch(text)}
    />
  );
}
