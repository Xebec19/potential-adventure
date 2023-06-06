import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import SearchInput from "./Search";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: 8px;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
