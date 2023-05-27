import React, { useState } from "react";
import BottomNav from "./navigation/BottomNav";
import SearchContext from "./store/search-context";

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchContext.Provider
        value={{ searchText: searchText, setSearch: setSearchText }}
      >
        <BottomNav />
      </SearchContext.Provider>
    </>
  );
}
