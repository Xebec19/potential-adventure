import React, { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("San");
  const [keyword, setKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const OnSearch = (keyword) => {
    setIsLoading(true);
    setKeyword(keyword);
    console.log({ keyword });
    locationRequest(keyword)
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
      })
      .catch((error) => {
        setError(error);
      });
  };
  useEffect(() => {
    OnSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: () => null,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
