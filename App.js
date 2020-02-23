// React Native imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Custom imports
import colors from "./constants/colors";
import LandingScreen from "./screens/LandingScreen";
import AuthenticateScreen from "./screens/AuthenticateScreen";
import MenuSelectionScreen from "./screens/MenuSelectionScreen";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="LandingScreen"
      >
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="AuthenticateScreen" component={AuthenticateScreen} />
        <Stack.Screen name="MenuSelectionScreen" component={MenuSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
