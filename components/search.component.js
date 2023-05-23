import React, { useState, useContext } from "react";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState();
  const LocationContext = useContext(LocationContext);
  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEdting={(text) => {
          searchKeyword(searchKeyword);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          console.log(text);
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
