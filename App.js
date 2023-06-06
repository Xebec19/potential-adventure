import React, { useState, useEffect } from "react";
import { LocationContextProvider } from "./services/location/location.context";
import { RestaurantsContextProvider } from "./services/restaurants/restaurants.context";
import { Navigation } from "./infrastructure/navigation";
import {
  FavouritesContext,
  FavouritesContextProvider,
} from "./services/favourites/favourites.context";
import * as firebase from "firebase/app";
import { AuthenticationContextProvider } from "./services/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCKtUOmKuNp-ysVWjxoVo_ZPGjX_kB6zwU",
  authDomain: "food-delivery-2bc07.firebaseapp.com",
  projectId: "food-delivery-2bc07",
  storageBucket: "food-delivery-2bc07.appspot.com",
  messagingSenderId: "1033566203614",
  appId: "1:1033566203614:web:db344edfac965cbfd89c4f",
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const { isAuthenticated, setIsAuthenticated } = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("email", "password")
      .then((user) => {})
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </>
  );
}
