import React, { useContext } from "react";
import { AppNavigator } from "./app-navigator";

import { AuthenticationContext } from "../../services/authentication.context";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { AccountNavigator } from "./account-navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <AppNavigator /> : <AccountNavigator />} */}
      <AccountNavigator />
    </NavigationContainer>
  );
};
