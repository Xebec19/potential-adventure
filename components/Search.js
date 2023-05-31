import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../services/location/location.context";

const SearchInput = styled(TextInput)`
  margin: 8px;
`;

export default function SearchTextField() {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchText] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchInput
      label="Search"
      mode="outlined"
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchText(text);
      }}
    />
  );
}
