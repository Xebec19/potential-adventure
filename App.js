import React, { useState } from "react";
import { LocationContextProvider } from "./services/location/location.context";
import { RestaurantsContextProvider } from "./services/restaurants/restaurants.context";
import { Navigation } from "./infrastructure/navigation";

export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </>
  );
}
