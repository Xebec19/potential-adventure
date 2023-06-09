import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import SearchInput from "./Search";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: 8px;
`;

export const Search = ({ isFavouriteToggled, onFavouritesToggled }) => {
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
