import React from "react";

const SearchContext = React.createContext({
  searchText: "",
  setSearch: () => {},
});

export default SearchContext;
