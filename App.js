import * as React from "react";
import BottomNav from "./navigation/BottomNav";
import { LocationContextProvider } from "./helpers/location/location.context";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <BottomNav />
      </LocationContextProvider>
    </>
  );
}
