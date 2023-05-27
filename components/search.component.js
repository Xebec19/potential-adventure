import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import SearchInput from "./Search";

const SearchContainer = styled.View`
  padding: 8px;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <SearchInput />
    </SearchContainer>
  );
};
